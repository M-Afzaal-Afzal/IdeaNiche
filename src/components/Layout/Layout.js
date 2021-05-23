import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {makeStyles} from "@material-ui/core";
// import darkTheme from "../../theme/DarkTheme";

// import {useSelector} from "react-redux";
// import {selectIsDarkMode} from "../../store/darkMode/darkModeSlice";

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    }
}))

const Layout = ({children}) => {

    const classes = useStyles();

    return (
        <>

                <Header/>
                <div className={classes.toolbarMargin} />

                    {children}
                <Footer/>
                {/* in future if we may have footer we will use that */}

                {/*<Footer/>*/}


        </>
    );
};

export default Layout;
