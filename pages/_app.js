import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from 'react-redux'
import store from "../src/store/store";
import Layout from "../src/components/Layout/Layout";
import theme from "../src/theme/LightTheme";
import "swiper/swiper.min.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
          <Provider store={store}>
                  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                  <CssBaseline/>
                  <Layout>
                      <Component {...pageProps} />
                  </Layout>

          </Provider>

      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
