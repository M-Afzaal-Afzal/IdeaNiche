import React from 'react';
import {Box, Container, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import HeadingWithDash from "../common/HeadingWithDash";
import OutLineButton from "../buttons/OutLineButton";

const useStyles = makeStyles(theme => ({
    pageContainer: {
        paddingRight: '153px',
        paddingLeft: '153px',
        paddingTop: '80px',
        paddingBottom: '80px',
        width: '100%',
        margin: 'auto',
        background: '#f8f8f8',
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
    contactsBoxContainer:{
        display:'flex',
        justifyContent: 'space-between',
        marginTop: '3.5rem',
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap',
        }
    },
    contactUsBox: {
        [theme.breakpoints.down('md')]: {
            width: '50%',
            margin: '1rem 0'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    contactUsBoxHeading: {
        fontWeight: 600,
        fontSize: '1.125rem',
        marginBottom: '1rem',
    }
}))

const GeneralContacts = () => {

    const classes = useStyles();
    const theme = useTheme();
    const isSmallerThanXs = useMediaQuery(theme.breakpoints.down('xs'));


    return (
        <Box className={classes.pageContainer}>
            <Container disableGutters maxWidth={'lg'}>
                <Box>
                    <HeadingWithDash weight={700} size={isSmallerThanXs ? '1.5rem': '2rem'}>
                        General Contacts
                    </HeadingWithDash>
                </Box>

                <Box className={classes.contactsBoxContainer}>

                    <Box className={classes.contactUsBox}>
                        <Typography variant={'h3' } className={classes.contactUsBoxHeading}>
                            Enquiries
                        </Typography>

                        <OutLineButton weight={'600'} color={theme.palette.primary.main}>
                            career@orangesoft.co
                        </OutLineButton>

                        <Typography variant={'body1'}>
                            +1-424-208-02-09
                        </Typography>

                    </Box>

                    <Box className={classes.contactUsBox}>
                        <Typography variant={'h3' } className={classes.contactUsBoxHeading}>
                            Careers
                        </Typography>

                        <OutLineButton weight={'600'} color={theme.palette.primary.main}>
                            career@orangesoft.co
                        </OutLineButton>

                        <Typography variant={'body1'}>
                            +375-29-891-14-92
                        </Typography>

                    </Box>

                    <Box className={classes.contactUsBox}>
                        <Typography variant={'h3' } className={classes.contactUsBoxHeading}>
                            Belarus
                        </Typography>

                        <Typography variant={'body1'}>
                            Moskovskaya 275A, 208
                        </Typography>

                        <Typography variant={'body1'}>
                            224023 Brest
                        </Typography>

                    </Box>

                    <Box className={classes.contactUsBox}>
                        <Typography variant={'h3' } className={classes.contactUsBoxHeading}>
                            US
                        </Typography>

                        <Typography variant={'body1'}>
                            580 Howard St.
                        </Typography>

                        <Typography variant={'body1'}>
                            94105 San Francisco, CA
                        </Typography>

                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default GeneralContacts;