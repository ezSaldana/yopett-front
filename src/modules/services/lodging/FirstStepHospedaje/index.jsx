import { React, memo, useState } from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    ButtonGroup,
    Typography,
    TextField,
    Checkbox,
    Tooltip,
    IconButton,
} from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import ToolTip from '../../../../assets/icons/ToolTip';
import Add from '../../../../assets/icons/Add';
import Reduce from '../../../../assets/icons/Reduce';
import Calendar from '../../../../assets/icons/Calendar';

import { StylesProvider } from '@mui/styles';
import '../../../../assets/fonts/fonts.css'
import { useStyles } from './styles'

const FirstStepBody = () => {
    const classes = useStyles();

    const tooltipText = `
    Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
    `;

    // Para el estepper modificar .MuiSvgIcon-root-MuiStepIcon-root y MuiSvgIcon-root-MuiStepIcon-root.Mui-completed
    return (
        <StylesProvider injectFirst>
            <Box className={classes.bodyContainer}>
                <Typography className={classes.dosisBold} sx={{ paddingBottom: '12px' }}>
                    Selecciona el tipo de servicio que requieres:
                </Typography>
                <ButtonGroup sx={{ marginBottom: '20px' }}>
                    <Button className={classes.btnGrpActive} variant="contained">
                        <Typography className={classes.dosisSemiBold}>
                            Hospedaje
                        </Typography>
                    </Button>
                    <Button className={classes.btnGrpDeactive} variant="outlined">
                        <Typography className={classes.dosisSemiBold}>
                            Paseo
                        </Typography>
                    </Button>
                </ButtonGroup>
                <Typography sx={{ marginBottom: '12px' }} className={classes.dosisBold}>
                    Selecciona la fecha de entrada y salida de tú mascota.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField className={classes.txtFld} type='date' label="Entrada - Salida" variant="outlined" />
                    <TextField className={classes.txtFld} required label="Ubicación" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Checkbox size="small" className={classes.checkBox} />
                    <Typography className={[classes.dosisSemiBold, classes.caption]}>Necesitas que pasemos por tu mascota?</Typography>
                    <Tooltip title={tooltipText} placement="right" arrow>
                        <IconButton className={classes.tooltipButton}>
                            <ToolTip />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box className={classes.pricing}>
                    <Box className={classes.addPets}>
                        <Box>
                            <Typography className={classes.dosisSemiBold}>¿Cuantas mascotas quieres hospedar?</Typography>
                            <Typography className={[classes.dosisSemiBold, classes.pricingHelperText]}>
                                Recuerda que cada perro extra es <Typography className={[classes.dosisBold, classes.percent]}>50%</Typography> Off !!!
                            </Typography>
                        </Box>
                        <Box className={classes.incrementButtonGroup}>
                            <Button className={classes.counterButtons} variant="text">
                                <Reduce />
                            </Button>
                            <Box className={classes.incrementText}>
                                <Typography className={[classes.dosisBold, classes.counter]}>
                                    0
                                </Typography>
                            </Box>
                            <Button className={classes.counterButtons} variant="text">
                                <Add />
                            </Button>
                        </Box>
                        <Box >

                        </Box>
                    </Box>
                </Box>
            </Box>
        </StylesProvider>
    );
}

const FirstStepHospedaje = () => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(1);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <StylesProvider injectFirst>
            <Box className={classes.container}>
                <Stepper activeStep={activeStep}>
                    <Step>
                        <StepLabel
                            sx={{ fontFamily: 'Dosis', fontWeight: 800 }}>
                        </StepLabel>
                    </Step>
                </Stepper>
                <Box>
                    <FirstStepBody />
                </Box>
                <Box className={classes.stepperControls}>
                    <Button
                        className={classes.stepperBackButton}
                        variant="outlined"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        startIcon={<ArrowBackIosIcon />}>
                        <Typography sx={{ fontFamily: 'Dosis', fontWeight: 600 }}>
                            Atrás
                        </Typography>
                    </Button>
                    <Button
                        className={classes.stepperNextButton}
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        onClick={handleNext}>
                        <Typography sx={{ fontFamily: 'Dosis', fontWeight: 600 }}>
                            {activeStep === 3 - 1 ? 'Buscar Cuidador' : 'Continuar'}
                        </Typography>
                    </Button>
                </Box>
            </Box >
        </StylesProvider>
    );
}

export default memo(FirstStepHospedaje);