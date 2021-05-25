import React from 'react';
import {Box, Container, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import HeadingWithDash from "../src/components/common/HeadingWithDash";
import Image from 'next/image';
import OutLineButton from "../src/components/buttons/OutLineButton";
import {FaLinkedinIn} from "react-icons/fa";
import {motion} from "framer-motion";
import RoundedButton from "../src/components/buttons/RoundedButton";
import Link from 'next/link';

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
    mainText: {
        fontSize: '36px',
        lineHeight: '1.4',
        fontWeight: 'bold',
        marginTop: '35px',
        paddingRight: '50px',
        [theme.breakpoints.down('lg')]: {
            paddingRight: '10px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '34px',
        },
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: '24px',
        // },
        [theme.breakpoints.down('xs')]: {
            fontSize: '24px',
        }
    },
    descText: {
        fontSize: '24px',
        lineHeight: '1.8',
        marginTop: '100px',
        paddingLeft: '80px',
        paddingRight: '50px',
        [theme.breakpoints.down('lg')]: {
            paddingRight: '10px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '22px',
            paddingLeft: '40px',
            marginTop: '60px',
        }, [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
            marginTop: '40px',
        },
    },
    aboutUsNumerals: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '80px',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            marginTop: '60px',
        }, [theme.breakpoints.down('xs')]: {
            marginTop: '40px',
        },
    },
    aboutUsNumeral: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontWeight: 600,
        padding: '15px',
        [theme.breakpoints.down('md')]: {
            width: '50%',
        }, [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    numeralHeading: {
        fontWeight: 600,
        marginBottom: '15px',
        fontSize: '40px',
        lineHeight: '1.2',
        color: theme.palette.primary.main,
    },
    numeralDesc: {
        fontWeight: 600,
    },
    subtitleBigText: {
        marginTop: '30px',
        fontSize: '2.25rem',
        fontWeight: '700',
        lineHeight: '1.3',
        paddingRight: '150px',
        [theme.breakpoints.down('lg')]: {
            paddingRight: '50px',
        }, [theme.breakpoints.down('md')]: {
            paddingRight: '0',
        }, [theme.breakpoints.down('xs')]: {
            fontSize: '1.7rem',
        }
    },
    leaderShipLeaders: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        [theme.breakpoints.down('lg')]: {
            justifyContent: 'space-around',
        },
    },
    leaderShipLeader: {
        marginTop: '60px',
        [theme.breakpoints.down('lg')]: {
            marginLeft: '20px',
            marginRight: '20px',
        }
    },
    leaderShipImageContainer: {
        width: '264px',
        height: '267px',
        position: 'relative',
    },
    leaderName: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginTop: '1rem',
        marginBottom: '.2rem',
    },
    leaderRole: {
        fontSize: '.9rem',
    },
    leaderInfo: {
        width: '100%',
        position: 'absolute',
        height: '100%',
        top: 0,
        background: 'rgba(248,29,61,0.67)',
        opacity: 0,
        // transition: 'opacity 0.5s',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: '#fff',
    },
    hireUsItems: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    hireUsItem: {
        marginTop: '60px',
        paddingLeft: '60px',
        width: '47%',
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    hireUsItemLeft: {
        marginRight: '6%',
    },
    hireUsItemRight: {},
    hireUsItemHeading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '25px',
    },
    hireUsDesc: {
        fontSize: '18px',
        lineHeight: 1.8,
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px'
        }
    },
    loveWithWork: {
        display: 'flex',
        flexDirection: 'row',
        background: '#212121',
    },
    loveWorkWithContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    loveWorkWithDescription: {
        zIndex: 1,
        paddingTop: '45vh',
        top: 0,
        textAlign: 'center',
        height: '50px',
        paddingBottom: '45vh',
        position: 'sticky',
        fontWeight: 'bold',
        fontSize: '36px',
        lineHeight: '1.3',
        color: "#fff",
        maxWidth: '410px',
        [theme.breakpoints.down('md')]: {
            paddingTop: '20vh',

            paddingLeft: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '24px',
            textAlign: 'left',
        }
    },
    loveWorkWithWrapper: {
        paddingLeft: '20px',
        maxWidth: "451px",
        display: 'flex',
        flexDirection: 'column',
    },
    companyName: {
        fontWeight: 'bold',
        fontSize: '36px',
        lineHeight: '1.3',
        color: "#f81d3d",
        margin: '9px 0',
        [theme.breakpoints.down('xs')]: {
            fontSize: '24px',
        }
    },
    before: {
        content: ' ',
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        height: '45vh',
        background: 'linear-gradient(-180deg, #212121 0%, #212121 78%, rgba(33,33,33,0.898) 88%, rgba(40,40,40,0) 100%)'
    },
    after: {
        background: 'linear-gradient(360deg, #212121 0%, #212121 78%, rgba(33,33,33,0.898) 88%, rgba(40,40,40,0) 100%)',
        content: " ",
        position: 'sticky',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '45vh',
    },
    aboutBulletsItems: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    aboutUsbulletItemWithMarginRight: {
        marginTop: '60px',
        width: '30%',
        marginRight: '5%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginRight: 0,
        }
    },
    aboutUsBulletItem: {
        marginTop: '60px',
        width: '30%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginRight: 0,
        }
    },
    bulletHeading: {
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: 1.2,
        marginBottom: '15px',
    },
    bulletDesc: {
        fontSize: '18px',
        lineHeight: 1.8,
    },
    workWithUs: {
        background: '#f8f8f8',
    },
    contactUsButtonContainer: {
        display:'flex',
        justifyContent: 'flex-start',
        marginTop: '40px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        }
    }
}));

const leaderInfoVariants = {
    initial: {
        opacity: 0
    },
    hover: {
        opacity: 1,
        transition: {
            type: 'tween',
            ease: 'easeInOut',
            duration: .5,
        }
    }
}

const About = () => {

    const classes = useStyles();
    const theme = useTheme();

    const isSmallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>

            <Box className={classes.pageContainer}>
                <Container disableGutters maxWidth={'lg'}>
                    <Box>
                        <HeadingWithDash>
                            About us
                        </HeadingWithDash>
                    </Box>

                    <Typography className={classes.mainText} variant={'body1'}>
                        If you’re looking for the development partner that “gets it”, has a strong technology stack and
                        a
                        few brilliant ideas up their sleeves, read on.
                    </Typography>
                    <Typography className={classes.descText} variant={'body1'}>
                        Orangesoft is a mobile app & web development company from Belarus. We started guiding companies
                        into
                        mobile and web development in 2011 and have successfully completed more than 300 projects ever
                        since. Over the years, we have become a full-cycle development company delivering highly
                        productive
                        and cost-effective applications across various domains.
                    </Typography>

                    <Box className={classes.aboutUsNumerals}>

                        <Box className={classes.aboutUsNumeral}>
                            <Typography className={classes.numeralHeading} variant={'body1'}>
                                10
                            </Typography>

                            <Typography variant={'body1'} className={classes.numeralDesc}>
                                Years of experience
                            </Typography>

                        </Box>

                        <Box className={classes.aboutUsNumeral}>
                            <Typography className={classes.numeralHeading} variant={'body1'}>
                                5.0
                            </Typography>

                            <Typography variant={'body1'} className={classes.numeralDesc}>
                                Rating on Clutch
                            </Typography>

                        </Box>

                        <Box className={classes.aboutUsNumeral}>
                            <Typography className={classes.numeralHeading} variant={'body1'}>
                                300+
                            </Typography>

                            <Typography variant={'body1'} className={classes.numeralDesc}>
                                Projects completed
                            </Typography>

                        </Box>

                        <Box className={classes.aboutUsNumeral}>
                            <Typography className={classes.numeralHeading} variant={'body1'}>
                                80+
                            </Typography>

                            <Typography variant={'body1'} className={classes.numeralDesc}>
                                In-house professionals
                            </Typography>

                        </Box>

                    </Box>

                    <Box className={classes.leaderShipLeaders}>

                    </Box>

                </Container>
            </Box>

            <Box className={classes.pageContainer}>
                <Container disableGutters maxWidth={'lg'}>
                    <Box>
                        <HeadingWithDash>
                            Our Leadership
                        </HeadingWithDash>

                        <Typography variant={'body1'} className={classes.subtitleBigText}>
                            Meet the leadership driving Orangesoft’s progress
                        </Typography>

                        <Box className={classes.leaderShipLeaders}>

                            {/*leader one*/}
                            <Box className={classes.leaderShipLeader}>
                                <Box className={classes.leaderShipImageContainer}>
                                    <Image src={'https://img.orangesoft.co/static/leadership/tatiana.jpg'}
                                           layout={'fill'} objectFit={'cover'}
                                    />
                                    <Box component={motion.div}
                                         className={classes.leaderInfo}
                                         variants={leaderInfoVariants}
                                         initial={'initial'}
                                         whileHover={'hover'}
                                    >
                                        <Box style={{display: 'flex', alignItems: 'center'}}>
                                            <OutLineButton bottomLineColor={'white'} color={'white'}>
                                                tk@orangesoft.com
                                            </OutLineButton>
                                            <span style={{margin: '0 .5rem .3rem'}}> | </span>
                                            <Box>
                                                <FaLinkedinIn color={'white'} size={20}/>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography className={classes.leaderName} variant={'body1'}>
                                    Tatsiana Kerimova
                                </Typography>
                                <Typography className={classes.leaderRole} variant={'body1'}>
                                    CO-FOUNDER, CIO
                                </Typography>
                            </Box>

                            {/*leader two*/}
                            <Box className={classes.leaderShipLeader}>
                                <Box className={classes.leaderShipImageContainer}>
                                    <Image src={'https://img.orangesoft.co/static/leadership/viktor.jpg'}
                                           layout={'fill'} objectFit={'cover'}
                                    />
                                    <Box component={motion.div}
                                         className={classes.leaderInfo}
                                         variants={leaderInfoVariants}
                                         initial={'initial'}
                                         whileHover={'hover'}
                                    >
                                        <Box style={{display: 'flex', alignItems: 'center'}}>
                                            <OutLineButton bottomLineColor={'white'} color={'white'}>
                                                victor@orangesoft.co
                                            </OutLineButton>
                                            <span style={{margin: '0 .5rem .3rem'}}> | </span>
                                            <Box>
                                                <FaLinkedinIn color={'white'} size={20}/>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography className={classes.leaderName} variant={'body1'}>
                                    Victor Lavrentyev
                                </Typography>
                                <Typography className={classes.leaderRole} variant={'body1'}>
                                    CO-FOUNDER, CIO
                                </Typography>
                            </Box>

                            {/*leader three*/}
                            <Box className={classes.leaderShipLeader}>
                                <Box className={classes.leaderShipImageContainer}>
                                    <Image src={'https://img.orangesoft.co/static/leadership/alexander.jpg'}
                                           layout={'fill'} objectFit={'cover'}
                                    />
                                    <Box component={motion.div}
                                         className={classes.leaderInfo}
                                         variants={leaderInfoVariants}
                                         initial={'initial'}
                                         whileHover={'hover'}
                                    >
                                        <Box style={{display: 'flex', alignItems: 'center'}}>
                                            <OutLineButton bottomLineColor={'white'} color={'white'}>
                                                alex@orangesoft.co
                                            </OutLineButton>
                                            <span style={{margin: '0 .5rem .3rem'}}> | </span>
                                            <Box>
                                                <FaLinkedinIn color={'white'} size={20}/>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography className={classes.leaderName} variant={'body1'}>
                                    Alex Melchenko
                                </Typography>
                                <Typography className={classes.leaderRole} variant={'body1'}>
                                    CO-FOUNDER, COO
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Container>
            </Box>

            <Box className={classes.pageContainer}>
                <Container disableGutters maxWidth={'lg'}>
                    <Box>
                        <HeadingWithDash>
                            Our values
                        </HeadingWithDash>
                    </Box>

                    <Typography variant={'h3'} className={classes.subtitleBigText}>
                        Why hire us
                    </Typography>

                    <Box className={classes.hireUsItems}>

                        {/* hire us item one*/}
                        <Box className={`${classes.hireUsItemLeft} ${classes.hireUsItem}`}>
                            <Box className={classes.hireUsItemHeading}>

                                <HeadingWithDash marginLeft={0} weight={'bold'}
                                                 size={isSmallerThanSm ? '18px' : '24px'}>
                                    Focus
                                </HeadingWithDash>
                            </Box>
                            <Typography variant={'body1'} className={classes.hireUsDesc}>
                                You get a fully dedicated team assigned directly to your project, which gives you the
                                possibility to work closely with them and successfully shape your idea into a solid,
                                meaningful digital product.
                            </Typography>
                        </Box>

                        {/*    hire us item two*/}
                        <Box className={`${classes.hireUsItem}`}>
                            <Box className={classes.hireUsItemHeading}>

                                <HeadingWithDash marginLeft={0} weight={'bold'}
                                                 size={isSmallerThanSm ? '18px' : '24px'}>
                                    Transparency
                                </HeadingWithDash>
                            </Box>
                            <Typography variant={'body1'} className={classes.hireUsDesc}>
                                Our clients have constant access to the development process from start to finish,
                                receiving a comprehensive report and a working build every 2 weeks. We also use daily
                                reports, calls, email updates, and onsite visits to address all your ideas and concerns.
                            </Typography>
                        </Box>

                        {/*    hire us item three*/}
                        <Box className={`${classes.hireUsItemLeft} ${classes.hireUsItem}`}>
                            <Box className={classes.hireUsItemHeading}>

                                <HeadingWithDash marginLeft={0} weight={'bold'}
                                                 size={isSmallerThanSm ? '18px' : '24px'}>
                                    Quick results
                                </HeadingWithDash>
                            </Box>
                            <Typography variant={'body1'} className={classes.hireUsDesc}>
                                Thanks to Agile methodology your product will be released really fast. After each
                                iteration, you’ll get another piece of your app to test it, make improvements and give
                                some feedback.
                            </Typography>
                        </Box>

                        {/*    hire us item four*/}
                        <Box className={`${classes.hireUsItem}`}>
                            <Box className={classes.hireUsItemHeading}>

                                <HeadingWithDash marginLeft={0} weight={'bold'}
                                                 size={isSmallerThanSm ? '18px' : '24px'}>
                                    Partnership
                                </HeadingWithDash>
                            </Box>
                            <Typography variant={'body1'} className={classes.hireUsDesc}>
                                We are a reliable partner, managing app development. Our experience is illustrated by
                                satisfied customers and a large portfolio of successfully delivered projects. We have
                                clients that have been working with us since the company was founded.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box className={classes.loveWithWork}>
                <Container maxWidth={'lg'} disableGutters>

                    <Box className={`${classes.pageContainer} ${classes.loveWorkWithContainer}`}>
                        <Box className={classes.loveWorkWithDescription}>
                            We love working with
                        </Box>
                        <Box className={classes.loveWorkWithWrapper}>
                            <span className={classes.before}/>
                            <span className={classes.companyName}>Adidas</span>
                            <span className={classes.companyName}>Cinemood</span>
                            <span className={classes.companyName}>CoachNow</span>
                            <span className={classes.companyName}>Europa Plus TV</span>
                            <span className={classes.companyName}>Hamleys</span>
                            <span className={classes.companyName}>IKEA</span>
                            <span className={classes.companyName}>life:)</span>
                            <span className={classes.companyName}>Mail.ru</span>
                            <span className={classes.companyName}>MealMonsters</span>
                            <span className={classes.companyName}>Mobyrix</span>
                            <span className={classes.companyName}>MTBank</span>
                            <span className={classes.companyName}>Philips</span>
                            <span className={classes.companyName}>PSN Group</span>
                            <span className={classes.companyName}>Sport.com</span>
                            <span className={classes.companyName}>Yukon Advanced Optics</span>
                            <span className={classes.after}/>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box className={classes.pageContainer}>
                <Container maxWidth={'lg'} disableGutters>
                    <Box>
                        <HeadingWithDash>
                            Our 3Q Bullets
                        </HeadingWithDash>
                    </Box>

                    <Box className={classes.aboutBulletsItems}>
                        <Box className={classes.aboutUsbulletItemWithMarginRight}>
                            <Typography variant={'h3'} className={classes.bulletHeading}>
                                Quality code
                            </Typography>

                            <Typography variant={'h3'} className={classes.bulletDesc}>
                                We write our code as clear, readable and flexible as possible. Every code line is
                                reviewed by our experienced Tech Leads to ensure a top-quality application. All code is
                                written fully by Orangesoft developers. We do not outsource.
                            </Typography>
                        </Box>

                        <Box className={classes.aboutUsbulletItemWithMarginRight}>
                            <Typography variant={'h3'} className={classes.bulletHeading}>
                                Quality service
                            </Typography>

                            <Typography variant={'h3'} className={classes.bulletDesc}>
                                Before writing the first line of an app source code, we want to be sure that we
                                completely understand client requirements and we have made everything to improve them.
                                While developing we want our clients to know everything about the progress and
                                intermediate results.
                            </Typography>
                        </Box>

                        <Box className={classes.aboutUsBulletItem}>
                            <Typography variant={'h3'} className={classes.bulletHeading}>
                                Quality applications
                            </Typography>

                            <Typography variant={'h3'} className={classes.bulletDesc}>
                                We want to be proud of our applications. We want them to be bug-free, stylish and
                                convenient. To achieve this, we work together with clients to improve UX.
                            </Typography>
                        </Box>

                    </Box>

                </Container>
            </Box>

            <Box className={`${classes.pageContainer} ${classes.workWithUs}`}>
                <Container maxWidth={'lg'}>
                    <Box>
                        <HeadingWithDash>
                            Work with us
                        </HeadingWithDash>
                    </Box>
                    <Box>
                        <Typography variant={'h3'} className={classes.subtitleBigText}>
                            We are always ready for our next outstanding project
                        </Typography>
                    </Box>

                    <Box className={classes.contactUsButtonContainer}>
                        <Box component={Link} href={'/contact'}>
                        <RoundedButton width={'172px'} height={'42px'} borderRadius={'21px'}>
                            Contact Us
                        </RoundedButton>
                        </Box>
                    </Box>

                </Container>

            </Box>

        </Box>
    );
};

export default About;
