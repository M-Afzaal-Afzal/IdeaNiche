import React, {useState} from 'react';
import {Box, Container, Hidden, makeStyles, Tab, Tabs, Typography, useTheme} from "@material-ui/core";
import Image from 'next/image';
import Pagination from '@material-ui/lab/Pagination';

import {client} from "../../prismic-configuration";
import Prismic from "prismic-javascript";
import OutLineButton from "../../src/components/buttons/OutLineButton";
import {motion} from "framer-motion";
import Link from 'next/link';


const imageVariants = {
    hidden: {
        scale: 1
    },
    visible: {
        scale: 1.1
    },
    hover: {
        scale: 1.1
    }
}

// function TabPanel(props) {
//     const {children, value, index, ...other} = props;
//
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    tabsContainer: {
        position: 'fixed',
        top: '60px',
        width: '100%',
        height: '50px',
        borderBottom: '1px solid #e1e1e4',
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        zIndex: 900,
        transition: 'top .3s linear',
        [theme.breakpoints.down('xs')]: {
            top: '50px',
        }
    },
    tabPanel: {
        paddingTop: '80px',
        paddingBottom: "80px",
    },
    tabsContainerInner: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    subscribeBuutton: {
        marginTop: '1rem',
    },
    blogList: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    article: {
        width: '32%',
        padding: '1.5rem 0',
        overflow: 'hidden',
        '&:nth-child(2n)': {
            [theme.breakpoints.down('sm')]: {
                marginLeft: '2%',
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '0',
            }
        },
        '&:nth-child(3n-1)': {
            margin: '0 2%',
            [theme.breakpoints.down('sm')]: {
                margin: '0',
            }
        },

        [theme.breakpoints.down('sm')]: {
            width: '49%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    },
    imageContainer: {
        width: '100%',
        height: '160px',
        position: 'relative',
        overflow: 'hidden',
        '& img:hover': {
            scale: 1.1,
        }
    },
    articleInfo: {
        color: '#000',
        opacity: 1,
        marginTop: '1rem',
        transition: 'opacity .3s',
    },
    articleInfoTitle: {
        fontWeight: '400',
        fontSize: '18px',
        marginBottom: '15px',
    },
    articleInfoDesc: {
        fontSize: "14px",
    },
    articleMeta: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
        color: '#8a9399',
        marginTop: '.75rem',
    },
    clock: {
        width: '17px',
        height: '17px',
        margin: '0 4px',
    },
    paginationContainer: {
        display: "flex",
        justifyContent: 'flex-end',
        marginTop: '1rem',
    }
}))


const Index = (props) => {

    const [blogs, setBlogs] = useState(props.blogs)

    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState(0);
    // const [opacity,setOpacity] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const fetchByTag = async (tag) => {

        if (tag !== 'latest') {
            const data = await client().query(
                Prismic.Predicates.at('document.tags', [tag])
            )
            setBlogs(data);
        } else {
            const data = await client().query(
                Prismic.Predicates.at('document.type', 'blog')
            )
            setBlogs(data);
        }

    }

    console.log(blogs.results)

    return (
        <Box>
            <Box className={classes.tabsContainer}>
                <Container maxWidth={'lg'} className={classes.tabsContainerInner}>
                    <Tabs color={'primary'} value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab onClick={fetchByTag.bind(this, 'latest')} label="Latest" {...a11yProps(0)} />
                        <Tab onClick={fetchByTag.bind(this, 'trending')} label="Trending" {...a11yProps(0)} />
                        <Tab onClick={fetchByTag.bind(this, 'hot')} label="Hot" {...a11yProps(0)} />
                    </Tabs>

                    <Hidden smDown>
                        <Box className={classes.subscribeBuutton}>
                            <OutLineButton color={theme.palette.primary.main}>
                                Subscribe
                            </OutLineButton>
                        </Box>
                    </Hidden>

                </Container>
            </Box>

            <Container maxWidth={'lg'}>


                <Box className={classes.tabPanel}>


                    <Box className={classes.blogList}>

                        {
                            blogs.results.map((result, index) => (
                                <Box key={result.uid} component={Link} href={`/blog/${result.uid}`}>
                                    <Box className={classes.article}
                                         component={motion.div}
                                         whileHover={{opacity: .7}}
                                    >
                                        <Box style={{overflow: 'hidden'}}>

                                            <Box variants={imageVariants}
                                                 component={motion.div}
                                                 whileHover={'hover'}
                                                 initial={'hidden'} className={classes.imageContainer}>
                                                <Image
                                                    priority
                                                    // animate={'visible'}
                                                    src={result.data.featuredimage.url}
                                                    layout={'fill'} objectFit={'cover'}/>
                                            </Box>
                                        </Box>
                                        <Box className={classes.articleInfo}>
                                            <Typography variant={'h3'} className={classes.articleInfoTitle}>
                                                {result.data.title[0].text}
                                            </Typography>

                                            <Typography variant={'body1'} className={classes.articleInfoDesc}>
                                                {result.data.description[0].text}
                                            </Typography>

                                            <Box className={classes.articleMeta}>
                                                <span>Client Guides · {result.data.createdat.split('T')[0]} ·</span>
                                                <img className={classes.clock}
                                                     src={'https://orangesoft.co/svg/clock.svg'} alt="time"/>
                                                <span> 6 min</span>
                                            </Box>

                                        </Box>


                                    </Box>
                                </Box>
                            ))
                        }


                        {/*<Box className={classes.article}*/}
                        {/*     component={motion.div}*/}
                        {/*     whileHover={{opacity: .7}}*/}
                        {/*>*/}
                        {/*    <Box style={{overflow: 'hidden'}}>*/}

                        {/*        <Box variants={imageVariants}*/}
                        {/*             component={motion.div}*/}
                        {/*             whileHover={'hover'}*/}
                        {/*             initial={'hidden'} className={classes.imageContainer}>*/}
                        {/*            <Image*/}
                        {/*                // animate={'visible'}*/}
                        {/*                src={'https://img.orangesoft.co/media/how-to-choose-the-best-app-developer-2.jpg'}*/}
                        {/*                layout={'fill'} objectFit={'cover'}/>*/}
                        {/*        </Box>*/}
                        {/*    </Box>*/}
                        {/*    <Box className={classes.articleInfo}>*/}
                        {/*        <Typography variant={'h3'} className={classes.articleInfoTitle}>*/}
                        {/*            9 Tips on How to Choose the Best App Development Company*/}
                        {/*        </Typography>*/}

                        {/*        <Typography variant={'body1'} className={classes.articleInfoDesc}>*/}
                        {/*            If you need to hire an app developer, know that there are mistakes you should*/}
                        {/*            try to avoid. Here are top 9 tips for choosing the best app development company.*/}
                        {/*        </Typography>*/}

                        {/*        <Box className={classes.articleMeta}>*/}
                        {/*            <span>Client Guides · 14 May 2021 ·</span>*/}
                        {/*            <img className={classes.clock} src={'https://orangesoft.co/svg/clock.svg'}*/}
                        {/*                 alt="time"/>*/}
                        {/*            <span> 6 min</span>*/}
                        {/*        </Box>*/}

                        {/*    </Box>*/}


                        {/*</Box>*/}
                    </Box>

                    <Box className={classes.paginationContainer}>
                        <Pagination color={'primary'} count={3}/>
                    </Box>


                </Box>


                {/*<TabPanel className={classes.tabPanel} value={value} index={1}>*/}
                {/*    Item Two*/}
                {/*</TabPanel>*/}
                {/*<TabPanel className={classes.tabPanel} value={value} index={2}>*/}
                {/*    Item Three*/}
                {/*</TabPanel>*/}


            </Container>
        </Box>
    );
};

export async function getStaticProps(context) {
    const blogs = await client().query(
        Prismic.Predicates.at('document.type', 'blog')
    )

    console.log(blogs);

    return {
        props: {
            blogs
        },
        revalidate: 10,
    }
}

export default Index;