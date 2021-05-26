import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import {client} from "../../prismic-configuration";
import Prismic from "prismic-javascript";
import {RichText} from 'prismic-reactjs';
import Image from 'next/image';
import Link from 'next/link'
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
        '& h1': {
            fontSize: '2rem',
            fontWeight: '300',
            lineHeight: 1.25,
            marginTop: '3rem',
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
        },
        '& li': {
            fontWeight: 400,
            fontSize: '1.125rem',
            letterSpacing: '0px',
            color: '#111314 !important',
            lineHeight: 1.5,
        }
    },
    createdInfo: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 400,
        color: '#8A9399',
        margin: '1rem auto',
    },
    companyName: {
        fontSize: '0.875rem',
        lineHeight: 1.8,
    },
    categoryInfo: {
        margin: '0 .4rem'
    },
    articleMeta: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        color: '#8a9399',
        marginTop: '.75rem',
    },
    imageContainer: {
        width: '100%',
        height: "25rem",
        position: 'relative',
    },
    heading: {
        marginTop: '1rem',
        fontWeight: '500',
        fontSize: '2.5rem',
        lineHeight: '2.25rem',
        display: 'flex',
        alignItems: 'flex-end',
        color: '#111',
    },
    footerButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '5rem 0 0',
    }
}))

const DetailBlogPage = ({blog}) => {

    const classes = useStyles();

    console.log(blog);

    return (
        <Box className={classes.pageContainer}>
            <Container maxWidth={'lg'}>

                <Typography variant={'h1'} className={classes.heading}>
                    {blog.data.title[0].text}
                </Typography>

                <Box className={classes.createdInfo}>
                    <Box className={classes.articleMeta}>
                        <span className={classes.companyName}>ideaNiche</span>
                        <span className={classes.categoryInfo}>.</span>
                        <img className={classes.clock}
                             src={'https://orangesoft.co/svg/clock.svg'} alt="time"/>
                        <span> {blog.data.readingtime[0]?.text}</span>
                        <span className={classes.categoryInfo}>.</span>
                        <span>{blog.data.createdat?.split('T')[0]} ·</span>
                    </Box>
                </Box>

                <Box className={classes.imageContainer}>
                    <Image priority src={blog.data.featuredimage?.url} objectFit={'cover'} layout={'fill'}/>
                </Box>

                <Box className={classes.richText}>
                    {RichText.render(blog.data.body)}
                </Box>

                <Box component={Link} href={'/blog'}>
                    <Box className={classes.footerButtonContainer}>
                        <RoundedButton size={'25px'} borderRadius={'25px'} height={'45px'}>
                            Read More Blogs
                        </RoundedButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export async function getStaticPaths() {

    const blogs = await client().query(
        Prismic.Predicates.at('document.type', 'blog')
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
    const blog = await client().getByUID('blog', slug);

    if (!blog) {
        return {
            redirect: {
                destination: '/blog',
                permanent: false,
            },
        }
    }

    return {
        props: {
            blog,
        },
        revalidate: 10,
    }
}

export default DetailBlogPage;