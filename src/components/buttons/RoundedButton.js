import React from 'react';
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    roundedButton: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 400,
        textDecoration: "none",
        color: theme.palette.primary.main,
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: 'Montserrat, sans-serif',
        overflow: 'hidden',
        borderRadius: '16px',
        padding: '4px 1.15rem',
        border: `1px solid ${theme.palette.primary.main}`,
        transition: 'all .4s',
        '&:hover': {
            background: theme.palette.primary.main,
            color: 'white',
        }
    }
}))

const RoundedButton = ({children,color,size,...props}) => {

    const classes = useStyles();

    return (
        <Box  style={{display: 'inline-block'}} {...props}>
            <Box className={classes.roundedButton}  style={{color: color,fontSize: size}}>
                {children}
            </Box>
        </Box>
    );
};

export default RoundedButton;