import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import HeadingWithDash from "../../src/components/common/HeadingWithDash";
import {motion} from "framer-motion";
import OutLineButton from "../../src/components/buttons/OutLineButton";
import {client} from "../../prismic-configuration";
import Prismic from "prismic-javascript";
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
    portfolioBlock: {
        color: 'white',
        // background: '#212121',
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
    portfolioHeadingBlock: {
        maxWidth: '630px',
        marginTop: '30px',
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.3,
    },
    portfolioBlockContent: {
        marginTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            justifyContent: 'center',
        }
    },
    portfolioItem: {

        minHeight: '600px',
        maxWidth: '462px',
        width: '48%',
        padding: '30px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            justifyContent: 'center',
        }
    },
    portfolioItemTitle: {
        fontSize: '1.5rem',
        lineHeight: 1.3,
        marginTop: '20px',
        fontWeight: 500,
        color: '#fff',
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            width: '100%',
            height: 'auto',
        }
    },
    moreProjectsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '80px',
    },
    portfolioItemCategories: {
        textTransform: 'uppercase',
        color: '#f81d3d',
        fontSize: '.9rem',
        fontWeight: '600',
        marginTop: '.4rem'
    },
    worksPageMoreWork: {
        paddingTop: '80px',
        background: "#f8f8f8",
        overflow: 'hidden',
    },
    subtitleSmall: {
        marginTop: '30px',
        fontSize: '1.6rem',
        fontWeight: 600,
        lineHeight: 1.7,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.4rem',
        }
    },
    '@keyframes moveWorkCarousel11': {
        '0%': {
            marginRight: '-813px'
        },
        '100%': {marginRight: 0}
    },
    worksPageMoreCarousel: {
        display: 'flex',
        justifyContent: "flex-end",
        willChange: 'transform',
        animation: '$moveWorkCarousel11 25s linear infinite',
        marginLeft: '-813px',
        marginTop: '4rem',
        marginBottom: '-65px',

    }
}))

const imageAnimateVariants = {
    initial: {
        scale: 1,
        transition: {
            type: 'tween',
            ease: 'easeInOut',
            duration: .5,
        }
    },
    hover: {
        scale: 1.02,
        transition: {
            type: 'linear',
            ease: 'easeInOut',
        }
    }
}

const Works = ({works}) => {

    const classes = useStyles();

    console.log(works.results[0].data)

    return (
        <Box>


            <Box className={`${classes.portfolioBlock} ${classes.pageContainer}`}>
                <Container maxWidth={'lg'}>
                    <Box>
                        <HeadingWithDash color={'#000'}>
                            Featured case studies

                        </HeadingWithDash>
                    </Box>

                    <Box className={classes.portfolioBlockContent}>

                        {
                            works.results.map(work => (
                                <Box id={work.uid} component={Link} href={`/works/${work.uid}`}>
                                    <Box  className={`${classes.portfolioItem}`}>
                                        <Box component={motion.div} initial={'initial'} variants={imageAnimateVariants}
                                             whileHover={'hover'} className={classes.imageContainer}>
                                            <img src={work.data.featured_image.url}
                                                 alt={'portfolio item'}/>
                                        </Box>
                                        <OutLineButton size={'24px'} className={classes.portfolioItemTitle}>
                                            {work.data.heading[0].text}
                                        </OutLineButton>
                                        <Typography variant={'h3'} className={classes.portfolioItemCategories}>
                                            {work.data.technologies_used[0].text}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        }

                    </Box>

                </Container>
            </Box>
            {/* more work*/}
            <Box className={`${classes.worksPageMoreWork} ${classes.pageContainer}`}>
                <Box>
                    <HeadingWithDash>
                        More work
                    </HeadingWithDash>
                </Box>
                <Box>
                    <Typography variant={'h3'} className={classes.subtitleSmall}>
                        From top-notch iOS and Android app development to elegant web development, we build products
                        that thrive at the intersection of business goals and user needs
                    </Typography>
                </Box>

                <Box className={classes.worksPageMoreCarousel}>
                    <picture>
                        <source media="(max-width: 480px)"
                                srcSet={"https://img.orangesoft.co/static/works_carousel/work_carousel.png 1x, https://img.orangesoft.co/static/works_carousel/work_carousel@2x.png 2x"}/>
                        <source media="(min-width: 481px)"
                                srcSet={"https://img.orangesoft.co/static/works_carousel/work_carousel.png 1x, https://img.orangesoft.co/static/works_carousel/work_carousel@2x.png 2x"}/>
                        <img alt={''} src="https://img.orangesoft.co/static/works_carousel/work_carousel.png"
                             className="works-page-more-work__carouse-img"/>
                    </picture>
                    <picture>
                        <source media="(max-width: 480px)"
                                srcSet={"https://img.orangesoft.co/static/works_carousel/work_carousel.png 1x, https://img.orangesoft.co/static/works_carousel/work_carousel@2x.png 2x"}/>
                        <source media="(min-width: 481px)"
                                srcSet={"https://img.orangesoft.co/static/works_carousel/work_carousel.png 1x, https://img.orangesoft.co/static/works_carousel/work_carousel@2x.png 2x"}/>
                        <img alt={''} src="https://img.orangesoft.co/static/works_carousel/work_carousel.png"
                             className="works-page-more-work__carouse-img"/>
                    </picture>
                    <picture>
                        <source media="(max-width: 480px)"
                                srcSet={"https://img.orangesoft.co/static/works_carousel/work_carousel.png 1x, https://img.orangesoft.co/static/works_carousel/work_carousel@2x.png 2x"}/>
                        <source media="(min-width: 481px)"
                                srcSet={"https://img.orangesoft.co/static/works_carousel/work_carousel.png 1x, https://img.orangesoft.co/static/works_carousel/work_carousel@2x.png 2x"}/>
                        <img alt={''} src="https://img.orangesoft.co/static/works_carousel/work_carousel.png"
                             className="works-page-more-work__carouse-img"/>
                    </picture>
                    <picture>
                        <source media="(max-width: 480px)"
                                srcSet={"https://img.orangesoft.co/static/works_carousel/work_carousel.png 1x, https://img.orangesoft.co/static/works_carousel/work_carousel@2x.png 2x"}/>
                        <source media="(min-width: 481px)"
                                srcSet={"https://img.orangesoft.co/static/works_carousel/work_carousel.png 1x, https://img.orangesoft.co/static/works_carousel/work_carousel@2x.png 2x"}/>
                        <img alt={''} src="https://img.orangesoft.co/static/works_carousel/work_carousel.png"
                             className="works-page-more-work__carouse-img"/>
                    </picture>
                    <picture>
                        <source media="(max-width: 480px)"
                                srcSet={"https://img.orangesoft.co/static/works_carousel/work_carousel.png 1x, https://img.orangesoft.co/static/works_carousel/work_carousel@2x.png 2x"}/>
                        <source media="(min-width: 481px)"
                                srcSet={"https://img.orangesoft.co/static/works_carousel/work_carousel.png 1x, https://img.orangesoft.co/static/works_carousel/work_carousel@2x.png 2x"}/>
                        <img alt={''} src="https://img.orangesoft.co/static/works_carousel/work_carousel.png"
                             className="works-page-more-work__carouse-img"/>
                    </picture>
                </Box>

            </Box>
        </Box>
    );
};

export async function getStaticProps(context) {
    const works = await client().query(
        Prismic.Predicates.at('document.type', 'work')
    )

    console.log(works);

    return {
        props: {
            works
        },
        revalidate: 10,
    }
}

export default Works;