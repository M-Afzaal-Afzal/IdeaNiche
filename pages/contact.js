import React from 'react';
import {Box, Container, Hidden, makeStyles, TextField, useMediaQuery, useTheme} from "@material-ui/core";
import HeadingWithDash from "../src/components/common/HeadingWithDash";
import OutLineButton from "../src/components/buttons/OutLineButton";
import {Controller, useForm} from "react-hook-form";
import RoundedButton from "../src/components/buttons/RoundedButton";
import GeneralContacts from "../src/components/contactPage/GeneralContacts";

const useStyles = makeStyles(theme => ({
    pageContainer: {
        paddingRight: '153px',
        paddingLeft: '153px',
        paddingTop: '80px',
        paddingBottom: '80px',
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
    contactUsFormContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    contactUsLinks: {
        marginTop: '20px',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    seperator: {
        margin: '0 7px',
    },
    contactUsForm: {
        marginTop: '10px',
    },
    contactUsRow: {
        display: 'flex',
        marginTop: '24px',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            width: '100%',
        }
    },
    contactUsFieldLeft: {
        width: 'calc(50% - 15px)',
        marginRight: '30px',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginRight: 0,
            marginTop: '24px',
            width: '100%',
        }
    },
    contactUsFieldRight: {
        width: 'calc(50% - 15px)',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginRight: 0,
            marginTop: '24px',
            width: '100%',
        }
    },
    contactUsFieldDesc: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginRight: 0,
            marginTop: '24px',
        }
    },
    buttonContainer: {
        marginTop: '24px',
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        }
    }
}))

const Contact = () => {

    const classes = useStyles();
    const theme = useTheme();

    const isSmallerThanXs = useMediaQuery(theme.breakpoints.down('xs'));

    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <Box>
            <Container disableGutters>
                <Box className={classes.pageContainer}>

                    <Box className={classes.contactUsFormContainer}>

                        <HeadingWithDash weight={700} size={isSmallerThanXs ? '1.5rem': '2rem'}>
                            Let's talk about your project
                        </HeadingWithDash>

                        <Box className={classes.contactUsLinks}>
                            <OutLineButton weight={600} color={theme.palette.primary.main} size={isSmallerThanXs ? '1rem': '1.25rem'}>
                                hello@orangesoft.co
                            </OutLineButton>
                            <Hidden xsDown>
                            <span className={classes.seperator}>|</span>
                            </Hidden>
                            <OutLineButton weight={600} color={theme.palette.primary.main} size={isSmallerThanXs ? '1rem': '1.25rem'}>
                                +1-424-208-02-09
                            </OutLineButton>
                        </Box>

                        <form onSubmit={handleSubmit(onSubmit)} className={classes.contactUsForm}>

                            <Box className={classes.contactUsRow}>
                                <Controller
                                    name="fullName"
                                    control={control}
                                    defaultValue=""
                                    rules={{required: {value: true, message: 'You must have to specify your name'}}}

                                    render={({field}) => (
                                        <TextField
                                            className={classes.contactUsFieldLeft}
                                            variant={'standard'}
                                            // InputProps={{
                                            //     className: classes.multilineColor
                                            // }}
                                            // InputLabelProps={{
                                            //     className: classes.inputFieldLabel
                                            // }}
                                            error={!!errors.fullName}

                                            helperText={errors.fullName && errors.fullName.message}
                                            fullWidth={true}
                                            label={'Full Name'}
                                            color={'white'}
                                            {...field}
                                        />
                                    )}
                                />

                                <Controller
                                    name="company"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => (
                                        <TextField
                                            // InputProps={{
                                            //     className: classes.multilineColor
                                            // }}
                                            // InputLabelProps={{
                                            //     className: classes.inputFieldLabel
                                            // }}
                                            className={classes.contactUsFieldRight}
                                            error={!!errors.company}

                                            fullWidth
                                            variant={'standard'}
                                            label={'Company (optional)'}
                                            color={'white'}
                                            {...field}
                                        />
                                    )}
                                />

                            </Box>

                            <Box className={classes.contactUsRow}>

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
                                            className={classes.contactUsFieldLeft}
                                            error={!!errors.email}

                                            fullWidth
                                            helperText={errors.email && errors.email.message}
                                            variant={'standard'}
                                            label={'Email Address'}
                                            color={'white'}
                                            {...field}
                                        />
                                    )}
                                />

                                <Controller
                                    name="phone"
                                    control={control}
                                    defaultValue=""

                                    rules={{
                                        required: {value: true, message: 'You must have to specify your phone number'},
                                        pattern: {value: /^[0-9]\d*$/, message: 'Please enter valid phone number'}
                                    }}
                                    render={({field}) => (
                                        <TextField
                                            // InputProps={{
                                            //     className: classes.multilineColor
                                            // }}
                                            // InputLabelProps={{
                                            //     className: classes.inputFieldLabel
                                            // }}
                                            className={classes.contactUsFieldRight}

                                            fullWidth

                                            error={!!errors.phone}
                                            helperText={errors.phone && errors.phone.message}
                                            variant={'standard'}
                                            label={'Phone Number'}
                                            color={'white'}
                                            {...field}
                                        />
                                    )}
                                />

                            </Box>

                            <Box className={classes.contactUsRow}>
                                <Controller
                                    name="projDesc"
                                    control={control}
                                    rules={{
                                        required: {value: true, message: 'You must have to describe your project'},
                                        minLength: {value: 25, message: 'Your message must be of 25 characters'}
                                    }}

                                    defaultValue=""
                                    render={({field}) => (
                                        <TextField
                                            // InputProps={{
                                            //     className: classes.multilineColor
                                            // }}
                                            // InputLabelProps={{
                                            //     className: classes.inputFieldLabel
                                            // }}
                                            className={classes.contactUsFieldDesc}
                                            error={errors.projDesc}
                                            helperText={errors.projDesc && errors.projDesc.message}
                                            variant={'standard'}
                                            label={'Describe Your Project'}
                                            color={'white'}
                                            fullWidth={true}
                                            {...field}
                                        />
                                    )}
                                />
                            </Box>


                            <Box className={classes.buttonContainer}>
                                <RoundedButton onClick={handleSubmit(onSubmit)} borderRadius={'21px'} width={'172px'}
                                               height={'42px'} lineHeight={'19px'}>
                                    Send Message
                                </RoundedButton>
                            </Box>


                        </form>

                    </Box>


                </Box>
                    <GeneralContacts/>
            </Container>
        </Box>
    );
};

export default Contact;