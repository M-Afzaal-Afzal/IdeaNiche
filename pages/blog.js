import React from 'react';
import { Box, Container, makeStyles, Tab, Tabs, Typography} from "@material-ui/core";

import {client} from "../prismic-configuration";
import Prismic from "prismic-javascript";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

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
}))


const Blog = ({blogs}) => {

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log(blogs)

    return (
        <Box>
            <Box className={classes.tabsContainer}>
                <Container maxWidth={'lg'} disableGutters>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </Container>
            </Box>

            <Container maxWidth={'lg'}>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
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

export default Blog;