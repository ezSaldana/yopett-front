import { React, memo, useState } from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    ButtonGroup,
    Typography,
    TextField
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import '../../../../assets/fonts/fonts.css'
import { useStyles } from './styles'


const FirstStepBody = () => {
    const classes = useStyles();

    return (
        <Box className={classes.bodyContainer}>
            <Typography sx={{
                fontFamily: 'Dosis',
                fontWeight: 700,
                paddingBottom: '12px'
            }}>Selecciona el tipo de servicio que requieres:</Typography>
            <ButtonGroup sx={{
                marginBottom: '20px'
            }}>
                <Button sx={{
                    background: '#C8456A',
                    border: '1px solid #54A6AF',
                    width: 256,
                    height: 60,
                    '&:hover': {
                        background: '#54A6AF',
                        opacity: 0.8,
                    }
                }}
                    variant="contained"
                >
                    <Typography sx={{
                        fontFamily: 'Dosis',
                        fontWeight: 600,
                    }}>
                        Hospedaje
                    </Typography>
                </Button>
                <Button sx={{
                    background: '#FFFFFF',
                    color: '#1C656B',
                    border: '1px solid #54A6AF',
                    width: 256,
                    height: 60,
                    '&:hover': {
                        background: '#54A6AF',
                        opacity: 0.8,
                    }
                }}
                    variant="contained"
                >
                    <Typography sx={{
                        fontFamily: 'Dosis',
                        fontWeight: 600,
                    }}>
                        Paseo
                    </Typography>
                </Button>
            </ButtonGroup>
            <Typography sx={{
                fontFamily: 'Dosis',
                fontWeight: 700,
            }}>Selecciona la fecha de entrada y salida de tú mascota.</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <TextField label="Entrada - Salida" variant="outlined" />
                <TextField required label="Ubicación" variant="outlined" />
            </Box>
        </Box>
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
            </Box>
        </Box >
    );
}

export default memo(FirstStepHospedaje);