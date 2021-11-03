import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    container: {
        width: 568,
        height: 581,
        background: '#BFDCDC',
        borderRadius: '10px'
    },
    stepperControls: {
        display: 'flex',
        justifyContent: 'space-around',
        height: 80,
        width: 568,
    },
    stepperNextButton: {
        width: 168,
        height: 40,
        '& .MuiButton-root': {
            margin: '20px 32px',
            backgroundColor: '#DB3669',
        },
        '&.MuiButtonBase-root-MuiButton-root:hover': {
            background: '#E05F86'
        }
    },
    stepperBackButton: {
        width: 168,
        height: 40,
        '&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root': {
            margin: '20px 32px',
            borderColor: '#DE678B',
            color: '#DC185B',
        },
        '&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root:hover': {
            background: '#DE678B',
            opacity: 0.4,
        }
    },
    bodyContainer: {
        background: '#FFFFFF',
        opacity: 0.8,
        padding: '10px 32px'
    }
}));