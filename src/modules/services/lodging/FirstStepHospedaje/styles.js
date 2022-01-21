import { makeStyles } from "@mui/styles";
import '../../../../assets/fonts/fonts.css'

export const useStyles = makeStyles(() => ({
    // 300
    dosisLigth: {
        '&.MuiTypography-root': {
            fontFamily: 'Dosis',
            fontWeight: 300,
        }
    },// 400
    dosisRegular: {
        '&.MuiTypography-root': {
            fontFamily: 'Dosis',
            fontWeight: 400,
        }
    },// 500
    dosisMedium: {
        '&.MuiTypography-root': {
            fontFamily: 'Dosis',
            fontWeight: 500,
        }
    },// 600
    dosisSemiBold: {
        '&.MuiTypography-root': {
            fontFamily: 'Dosis',
            fontWeight: 600,
        }
    },// 700
    dosisBold: {
        '&.MuiTypography-root': {
            fontFamily: 'Dosis',
            fontWeight: 700,
        }
    },// 800
    dosisExtraBold: {
        '&.MuiTypography-root': {
            fontFamily: 'Dosis',
            fontWeight: 800,
        }
    },
    container: {
        width: 568,
        height: 581,
        background: '#BFDCDC',
        borderRadius: '10px'
    },
    stepperControls: {
        display: 'flex',
        justifyContent: 'space-around',
        background: '#BFDCDC',
        borderRadius: '10px 10px',
        height: 80,
        width: 568,
    },
    stepperNextButton: {
        width: 168,
        height: 40,
        '&.MuiButton-contained': {
            margin: '20px 32px',
            backgroundColor: '#DB3669',
        },
        '&.MuiButton-contained:hover': {
            background: '#E05F86',
        }
    },
    stepperBackButton: {
        width: 168,
        height: 40,
        '&.MuiButton-outlined': {
            margin: '20px 32px',
            borderColor: '#DE678B',
            color: '#DC185B',
        },
        '&.MuiButton-outlined:hover': {
            background: '#F2C4D2',
            color: '#DC185B',
        }
    },
    bodyContainer: {
        background: '#FFFFFF',
        opacity: 0.8,
        padding: '10px 32px',

    },
    btnGrpActive: {
        width: 256,
        '&.MuiButton-contained': {
            height: 60,
            background: '#C8456A',
            border: '1px solid #54A6AF',
        },
        '&.MuiButton-contained:hover': {
            background: '#54A6AF',
        }
    },
    btnGrpDeactive: {
        width: 256,
        '&.MuiButton-root': {
            borderColor: '#54A6AF',
        },
        '&.MuiButton-outlinedPrimary': {
            height: 60,
            color: '#1C656B'
        },
        '&.MuiButton-outlinedPrimary:hover': {
            color: '#1C656B',
            background: '#54A6AF2C',
        },
    },
    txtFld: {
        '&.MuiFormControl-root': {
            marginBottom: '12px',
        },
        '&.MuiFormControl-root > .MuiFormLabel-root': {
            fontFamily: 'Dosis',
            fontWeight: 500,
            marginBlock: '-7px',
        },
        '&.MuiFormControl-root > .MuiOutlinedInput-root': {
            height: '40px',
        }
    },
    checkBox: {
        '&.MuiCheckbox-root': {
            padding: '1px',
        }
    },
    caption: {
        alignSelf: 'center',
        '&.MuiTypography-root': {
            marginInline: '12px',
        }
    },
    tooltipButton: {
        alignContent: 'center',
        '&.MuiIconButton-root': {
            color: '#FFF',
            background: '#CE3F69',
            width: '24px',
            height: '24px',
        },
        '&.MuiIconButton-root:hover': {
            color: '#CE3F69'
        }
    },
    pricing: {
        height: '216px',
        width: '504px',
        border: 'solid 1px #54A6AF',
        borderRadius: '4px',
        marginBlock: '12px',
    },
    addPets: {
        display: 'flex',
        flexDirection: 'Row',
        padding: '16px',
    },
    '': {},
    pricingHelperText: {
        display: 'flex',
        flexDirection: 'row',
        '&.MuiTypography-root': {
            fontSize: '16px',
            color: '#DB3669'
        }
    },
    percent: {
        '&.MuiTypography-root': {
            marginInline: '4px',
            fontSize: '18px',
        }
    },
    incrementButtonGroup: {
        display: 'flex',
        flexDirection: 'row',
        border: 'solid 1px #54A6AF',
        borderRadius: '4px',
        marginLeft: '24px',
        height: '40px',
        width: '148px',
    },
    counterButtons: {
        '&.MuiButton-root': {
            minWidth: '50px',
            color: '#DC185B'
        },
        '&.MuiButton-root:hover': {
            backgroundColor: '#DBEAEB'
        }
    },
    incrementText: {
        border: 'solid 1px #54A6AF',
        width: '46px',
        textAlign: 'center',
    },
    counter: {
        '&.MuiTypography-root': {
            fontSize: 'x-large',
            color: '#DC185B'
        }
    }
}));