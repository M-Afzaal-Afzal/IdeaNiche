import React, {useState} from 'react';
import {Box, makeStyles} from "@material-ui/core";
import {AnimatePresence, motion} from "framer-motion";

const bottomLineVariants = {
    hidden: {
        x: '-120%',
    },

    visible: {
        x: '0',
        transition: {
            type: 'tween',
            easing: 'easeInOut',
            duration: .8,
        }
    },
    exit: {
        x: '-120%',
        transition: {
            type: 'tween',
            easing: 'easeInOut',
            duration: .8,
        }
    }
}

const useStyles = makeStyles(theme => ({
    outLineButton: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 400,
        textDecoration: "none",
        color: '#000',
        cursor: 'pointer',
        fontFamily: 'Montserrat, sans-serif',
        overflow: 'hidden',
        // '&:hover': {
        //     background: theme.palette.primary.main,
        //     display: 'block',
        //     content: " ",
        //     height: '1px',
        //     transition: 'width 0.3s ease-In-Out',
        //     width: '100%'
        // },
        // '&::after': {
        //     background: theme.palette.primary.main,
        //     display: 'block',
        //     content: " ",
        //     height: '1px',
        //     transition: 'width 0.3s ease-In-Out',
        //     width: '100%'
        // }
    },
    bottomLine: {
        background: theme.palette.primary.main,
        display: 'block',
        content: " ",
        height: '1px',
        transition: 'width 0.3s ease-In-Out',
        width: '100%',
        marginTop: '4px',
    }
}))

const OutLineButton = ({active, children,size,weight,color,bottomLineColor,lineHeight,...props}) => {

    const classes = useStyles();

    const [lineClassName,setLineClassName] = useState('hidden')

    const classVisibleHandler = ()=> {
        setLineClassName('visible')
    }

    const classHiddenHandler = ()=> {
        setLineClassName('hidden')
    }

    return (
        <Box style={{display: 'inline-block'}}  {...props}>
        <motion.div onMouseEnter={classVisibleHandler}
                     onMouseLeave={classHiddenHandler}
                     className={classes.outLineButton}
                     style={{fontSize: size,color: color,lineHeight: lineHeight,fontWeight: weight}}
        >
            {children}
        <AnimatePresence>
            <motion.div
                style={{background: bottomLineColor}}
                 variants={bottomLineVariants}
                 exit={'exit'}
                 animate={active ? 'visible' : lineClassName}
                 className={classes.bottomLine}
            />
        </AnimatePresence>
        </motion.div>
        </Box>
    );
};

export default OutLineButton;