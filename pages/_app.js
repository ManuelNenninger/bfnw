import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../src/createEmotionCache';
import "../styles/embla.css"
import "../styles/reactMasonryCss.css"
import Layout from "../src/components/templates/layoutDashboardDrawer";
import { AppWrapper } from "../src/appContext";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const {...appProps} = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Finyon</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
          <AppWrapper>
            {/*Wenn die URL Route mit einem der angegebenen matched, wird das Layout (DashboardDrawer) gerendert. Ansonsten nicht*/}
            {[`/`].includes(appProps.router.pathname) ? (
                <Component {...pageProps} />
            ):(
              <Layout>
                <Component {...pageProps} />
              </Layout>
              )
            }
          </AppWrapper>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
