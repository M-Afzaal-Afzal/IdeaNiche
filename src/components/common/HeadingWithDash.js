import React from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    line: {
        content: ' ',
        height: '1px',
        width: '68px',
        position:'absolute',
        top: '50%',
        left: 0,
        background: theme.palette.primary.main,
    },
    heading: {
        fontSize: '16px',
        fontWeight: '400px',
        lineHeight: 1.25,
        paddingLeft: '80px',
        marginLeft: '-80px',
        position: 'relative',
    },

}))

const HeadingWithDash = ({children,size,color,weight,className,...props}) => {

    const classes = useStyles();

    return (
        <Typography className={`${classes.heading} ${className}`} {...props} variant={'h2'} style={{fontSize: size,color: color,fontWeight: weight,}}>
            <Box className={classes.line}/>
            {children}
        </Typography>
    );
};

export default HeadingWithDash;