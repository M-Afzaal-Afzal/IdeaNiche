import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import HeadingWithDash from "../common/HeadingWithDash";

const useStyles = makeStyles(theme => ({
    howWeWorkContainer: {
        padding: '80px 0',
    },
    pageContainer: {
        paddingRight: '153px',
        paddingLeft: '153px',
        width: '100%',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            paddingRight: '120px',
            paddingLeft: '120px',
        },
        [theme.breakpoints.down('sm')]: {
            paddingRight: '50px',
            paddingLeft: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingRight: '15px',
            paddingLeft: '15px',
        }
    },
    subTitleBig: {
        marginTop: '30px',
        fontSize: '2.25rem',
        fontWeight: 600,
        lineHeight: 1.3,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.7rem',
        }
    }
}))

const HowWeWork = () => {

    const classes = useStyles();

    return (
        <Box className={classes.howWeWorkContainer}>
            <Box className={classes.pageContainer}>
                <Container disableGutters maxWidth={'lg'}>
                    <Box>
                        <HeadingWithDash>
                            How we work
                        </HeadingWithDash>
                    </Box>
                    <Typography variant={'h3'} className={classes.subTitleBig}>
                        From ideation to publishing – we have you covered all the way
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default HowWeWork;