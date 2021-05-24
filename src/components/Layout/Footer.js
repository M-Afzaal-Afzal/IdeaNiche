import React from 'react';
import {Box, makeStyles, TextField, Typography} from "@material-ui/core";
import OutLineButton from "../buttons/OutLineButton";
import {Controller, useForm} from "react-hook-form";
import {FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const useStyles = makeStyles(theme => ({
    footer: {
        padding: '60px 0 30px',
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
    footerBox: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    footerCol: {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },

    },
    footerColLast: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: '2rem',
        marginTop: '2rem',
    },
    footerServiceHeading: {
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '10px',
    },
    footerLink: {
        fontSize: '14px',
        margin: '3px 0',
    },
    updateText: {
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '10px',
    },
    emailInputContainer: {
        maxWidth: '380px',
        width: '100%',
    },
    footerSocial: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20px',
        maxWidth: '380px',
    },
    footerIcon: {
        transition: 'all .3s',
        '&:hover': {
            color: theme.palette.primary.main,
        }
    },
    footerCopyright: {
        flexDirection: 'row',
        alignItems: 'start',
        display: 'flex',
        fontSize: '14px',
        paddingTop: '20px',
        marginTop: '40px',
        borderTop: '1px solid #f3f3f6',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    subscribeButton: {
        cursor:"pointer",
        color: theme.palette.primary.main,
        background: 'white',
        border: '0',
        fontSize: '16px',
    }
}))

const Footer = () => {

    const classes = useStyles();

    const onSubmit = data => {
        console.log(data)
    };
    const {control, handleSubmit, formState: {errors}} = useForm();

    return (
        <Box className={classes.footer}>
            <Box className={classes.pageContainer}>
                <Box>
                    <Typography variant={'h2'}>
                        IdeaNiche
                    </Typography>

                    <Box className={classes.footerBox}>

                        <Box className={classes.footerCol}>
                            <Typography className={classes.footerServiceHeading} variant={'h4'}>
                                Services
                            </Typography>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    Android App Development
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    iOS App Development
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    Web App Development
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    Quality Assurance
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    Android App Development
                                </OutLineButton>
                            </Box>

                        </Box>

                        <Box className={classes.footerCol}>
                            <Typography className={classes.footerServiceHeading} variant={'h4'}>
                                Technologies
                            </Typography>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    Kotlin
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    Java
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    Swift
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    Symfony
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    Node.js
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    React.js
                                </OutLineButton>
                            </Box>
                        </Box>

                        <Box className={classes.footerCol}>
                            <Typography className={classes.footerServiceHeading} variant={'h4'}>
                                Contact us
                            </Typography>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    hello@orangesoft.co
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    +1-424-208-02-09
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    +375-29-733-47-08
                                </OutLineButton>
                            </Box>

                            <Box>
                                <OutLineButton size={'14px'}>
                                    +7-926-657-67-77
                                </OutLineButton>
                            </Box>

                        </Box>

                        <Box className={`${classes.footerBox} ${classes.footerColLast}`}>
                            <Typography className={classes.updateText}>
                                Don't miss our updated
                            </Typography>

                            <Box>
                                <form onSubmit={handleSubmit(onSubmit)} className={classes.emailInputContainer}>
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: {value: true, message: 'You must have to specify email'},
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: 'Please enter a valid email address',
                                            }
                                        }}
                                        render={({field}) => (
                                            <TextField
                                                // InputProps={{
                                                //     className: classes.multilineColor
                                                // }}
                                                // InputLabelProps={{
                                                //     className: classes.inputFieldLabel
                                                // }}
                                                error={!!errors.email}
                                                InputProps={{
                                                    endAdornment: <button className={classes.subscribeButton} type={'submit'} >Subscribe</button>,
                                                }}
                                                fullWidth
                                                helperText={errors.email && errors.email.message}
                                                variant={'standard'}
                                                label={'Email Address'}
                                                color={'white'}
                                                {...field}
                                            />
                                        )}
                                    />
                                </form>
                            </Box>

                            <Box className={classes.footerSocial}>
                                <Box className={classes.footerIcon}>
                                    <FaLinkedinIn size={20}/>
                                </Box>

                                <Box className={classes.footerIcon}>
                                    <FaInstagram size={20}/>
                                </Box>

                                <Box className={classes.footerIcon}>
                                    <FaFacebookF size={20}/>
                                </Box>

                                <Box className={classes.footerIcon}>
                                    <FaBehance size={20}/>
                                </Box>

                                <Box className={classes.footerIcon}>
                                    <FaDribbble size={20}/>
                                </Box>
                            </Box>

                            <Box className={classes.footerCopyright}>
                                © Copyright 2021 Orangesoft. All rights reserved.
                                <OutLineButton>
                                    privacy policy
                                </OutLineButton>
                            </Box>

                        </Box>

                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
