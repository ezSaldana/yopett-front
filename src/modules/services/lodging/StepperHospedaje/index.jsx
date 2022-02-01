import { React, memo, useState } from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
} from '@mui/material';
import FirstStep from './FirstStep';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { StylesProvider } from '@mui/styles';
import { useStyles } from './styles'
import './styles.css'

// TODO: añadir estilos de stepper
const StepperHospedaje = () => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);

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
                    <FirstStep />
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

export default memo(StepperHospedaje);