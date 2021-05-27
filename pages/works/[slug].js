import React from 'react';
import {client} from "../../prismic-configuration";
import Prismic from "prismic-javascript";
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import Image from "next/image";
import {RichText} from "prismic-reactjs";
import Link from "next/link";
import RoundedButton from "../../src/components/buttons/RoundedButton";

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
    richText: {
        marginTop: '5rem',
        '& h1': {
            fontSize: '2rem',
            fontWeight: '300',
            lineHeight: 1.25,
            marginTop: '3rem',
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.5rem',
            }
        },
        '& h2': {
            fontSize: '2rem',
            fontWeight: '300',
            lineHeight: 1.25,
            color: theme.palette.primary.main,
            marginTop: '3rem',
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.5rem',
            }
        },
        '& a': {
            textDecoration: "none",
            color: theme.palette.primary.main,
        },
        '& p': {
            fontWeight: 400,
            fontSize: '1.125rem',
            letterSpacing: '0px',
            color: '#111314 !important',
            lineHeight: 1.5,
            wordBreak: 'break-word',
            [theme.breakpoints.down('xs')]: {
                fontSize: '1rem',
            }
        },
        '& li': {
            fontWeight: 400,
            fontSize: '1.125rem',
            letterSpacing: '0px',
            color: '#111314 !important',
            lineHeight: 1.5,
        }
    },
    heading: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontWeight: '500',
        fontSize: '2.5rem',
        lineHeight: '2.25rem',
        display: 'flex',
        alignItems: 'flex-end',
        color: '#111',
    },
    imageContainer: {
        width: '100%',
        height: "25rem",
        position: 'relative',
    },
    metaDescContainerFirst: {
        margin: "2.5rem auto",
    },
    metaDescContainer: {
        margin: "1rem auto",
    },
    metaDescText: {
        color: theme.palette.primary.main,
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    metaDescValue: {
        fontSize: '1rem',
        marginLeft: '2rem',
        marginTop: '1rem',
        letterSpacing: '1.5px',
    },
    footerButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '5rem 0 0',
    }

}))

const WorkDetailPage = ({work}) => {

    const classes = useStyles();

    console.log(work);

    return (
        <Box className={classes.pageContainer}>
            <Container maxWidth={'lg'}>
                <Typography variant={'h1'} className={classes.heading}>
                    {work.data.heading[0].text}
                </Typography>

                <Box className={classes.imageContainer}>
                    <Image priority src={work.data.featured_image?.url} objectFit={'cover'} layout={'fill'}/>
                </Box>

                <Box className={classes.metaDescContainerFirst}>
                    <Typography className={classes.metaDescText}>
                        Services
                    </Typography>

                    <Typography className={classes.metaDescValue}>
                        {work.data.services[0]?.text}
                    </Typography>

                </Box>

                <Box className={classes.metaDescContainer}>
                    <Typography className={classes.metaDescText}>
                        Industry
                    </Typography>

                    <Typography className={classes.metaDescValue}>
                        {work.data.industry[0]?.text}
                    </Typography>

                </Box>

                <Box className={classes.metaDescContainer}>
                    <Typography className={classes.metaDescText}>
                        Duration
                    </Typography>

                    <Typography className={classes.metaDescValue}>
                        {work.data.duration[0]?.text}
                    </Typography>

                </Box>

                <Box className={classes.metaDescContainer}>
                    <Typography className={classes.metaDescText}>
                        Team Size
                    </Typography>

                    <Typography className={classes.metaDescValue}>
                        {work.data.team_size[0]?.text}
                    </Typography>

                </Box>

                <Box className={classes.richText}>
                    {RichText.render(work.data.full_description)}
                </Box>

                <Box component={Link} href={'/works'}>
                    <Box className={classes.footerButtonContainer}>
                        <RoundedButton size={'25px'} borderRadius={'25px'} height={'45px'}>
                            See More Works
                        </RoundedButton>
                    </Box>
                </Box>

            </Container>
        </Box>
    );
};

export async function getStaticPaths() {

    const blogs = await client().query(
        Prismic.Predicates.at('document.type', 'work')
    )

    const paths = blogs.results.map((blog) => ({
        params: {slug: blog.uid},
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}) {
    const {slug} = params;
    const work = await client().getByUID('work', slug);

    if (!work) {
        return {
            redirect: {
                destination: '/works',
                permanent: false,
            },
        }
    }

    return {
        props: {
            work,
        },
        revalidate: 10,
    }
}

export default WorkDetailPage;