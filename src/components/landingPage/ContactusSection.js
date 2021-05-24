import React from 'react';
import {Box, Button, Container, makeStyles, TextField} from "@material-ui/core";
import {useForm, Controller} from "react-hook-form";

const useStyles = makeStyles(theme => ({
    contactUsContainer: {
        width: '100%',
        minHeight: '546px',
        background: '#212121',
        position: 'relative',
    },
    contactUs: {
        height: 'auto',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    contactUsTitle: {
        width: '100%',
        maxWidth: '409px',
        height: '170px',
        marginTop: '78px',
        marginLeft: '160px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

        [theme.breakpoints.down('md')]: {
            marginLeft: '0',
        }
    },
    contactUsForm: {
        marginLeft: '59px',
        marginTop: '72px',
        marginBottom: '72px',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            marginTop: '36px',
            marginLeft: '0',
            marginBottom: '36px',
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            flexDirection: 'column',
            margin: '0 0'
        }
    },
    contactusText: {
        width: 'auto',
        marginLeft: '20px',
        marginRight: '0',
        color: '#fff',
        fontSize: '68px',
        lineHeight: '81px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px',
        }
    },
    singleInput: {
        width: '231px',
        [theme.breakpoints.down('xs')]: {
            margin: '1rem 0',
            width: '100%'
        }
    },
    singleInputRight: {
        marginLeft: '3rem',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0',
        }
    },
    inputWith100Width: {
        width: '100%',
    },
    inputFieldLabel: {
        color: 'white !important'
    },
    multilineColor: {
        color: 'white'
    },
    sendmessageButton: {
        height: '42px',
        marginTop: '10px',
        width: '172px',
        border: '.5px solid #F81D3D',
        background: '#212121',
        color: '#F81D3D',
        borderRadius: '21px',
        fontSize: '16px',
        lineHeight: '19px',
        transition: 'color .4s, background-color .4s',
        cursor: "pointer",
        '&:hover': {
            color: "white",
            background: '#F81D3D',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '1.5rem auto 0',
        }
    },
    inputBoxContainer: {
        maxWidth:'30rem',
        margin: '0 auto 48px',
        [theme.breakpoints.down('xs')]: {
            margin: '0 auto 72px',
        }
    },

}))


const ContactusSection = () => {

    const { control, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    const classes = useStyles();

    return (
        <Box className={classes.contactUsContainer}>
            <Container className={classes.contactUs} maxWidth={'lg'}>
                <Box className={classes.contactUsTitle}>
                    <Box className={classes.contactusText}>
                        Contact us
                    </Box>
                </Box>
                <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
                    <Box className={classes.inputBoxContainer}>
                        <Box className={classes.contactUsForm}>
                            <Box className={classes.singleInput}>

                                <Controller
                                    name="fullName"
                                    control={control}
                                    defaultValue=""
                                    rules={{required: {value: true,message: 'You must have to specify your name'}}}

                                    render={({field}) => (
                                        <TextField
                                            variant={'standard'}
                                            InputProps={{
                                                className: classes.multilineColor
                                            }}
                                            InputLabelProps={{
                                                className: classes.inputFieldLabel
                                            }}
                                            error={!!errors.fullName}

                                            helperText={errors.fullName && errors.fullName.message}
                                            fullWidth={true}
                                            label={'Full Name'}
                                            color={'white'}
                                            {...field}
                                        />
                                    )}
                                />
                            </Box>

                            <Box className={`${classes.singleInput} ${classes.singleInputRight}`}>

                                <Controller
                                    name="company"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => (
                                        <TextField
                                            InputProps={{
                                                className: classes.multilineColor
                                            }}
                                            InputLabelProps={{
                                                className: classes.inputFieldLabel
                                            }}
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

                        </Box>

                        <Box className={classes.contactUsForm}>
                            <Box className={classes.singleInput}>

                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: {value: true,message: 'You must have to specify email'},
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Please enter a valid email address',
                                        }
                                    }}
                                    render={({field}) => (
                                        <TextField
                                            InputProps={{
                                                className: classes.multilineColor
                                            }}
                                            InputLabelProps={{
                                                className: classes.inputFieldLabel
                                            }}
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
                            </Box>

                            <Box className={`${classes.singleInput} ${classes.singleInputRight}`}>

                                <Controller
                                    name="phone"
                                    control={control}
                                    defaultValue=""

                                    rules={{
                                        required: {value: true,message: 'You must have to specify your phone number'},
                                        pattern: {value:  /^[0-9]\d*$/,message: 'Please enter valid phone number'}
                                    }}
                                    render={({field}) => (
                                        <TextField
                                            InputProps={{
                                                className: classes.multilineColor
                                            }}
                                            InputLabelProps={{
                                                className: classes.inputFieldLabel
                                            }}
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

                        </Box>

                        <Box className={classes.contactUsForm}>
                            <Box className={`${classes.singleInput} ${classes.inputWith100Width}`}>

                                <Controller
                                    name="projDesc"
                                    control={control}
                                    rules={{
                                        required: {value: true,message: 'You must have to describe your project'},
                                        minLength: {value: 25,message: 'Your message must be of 25 characters'}
                                    }}

                                    defaultValue=""
                                    render={({field}) => (
                                        <TextField
                                            InputProps={{
                                                className: classes.multilineColor
                                            }}
                                            InputLabelProps={{
                                                className: classes.inputFieldLabel
                                            }}
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

                        </Box>

                        <Box className={`${classes.contactUsButtonContainer} ${classes.contactUsForm}`}>
                            <Button className={classes.sendmessageButton} type={'submit'}>
                                Send message
                            </Button>

                        </Box>
                    </Box>
                </form>
            </Container>
        </Box>
    );
};

export default ContactusSection;