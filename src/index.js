import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './Lib/theme';
import Layout from './components/layout';
import Top from './projects/Top/index';
import Engineering from './projects/Engineering/index';
import Music from './projects/Music/index';
import Handmade from './projects/Handmade/index';

import ScrollToTop from './components/ScrollToTop';

const customizedhistory = createHashHistory({ basename: '/personal-website' });
console.log(customizedhistory)

ReactDOM.render(
  <HashRouter history={customizedhistory}>
    <ScrollToTop>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" render={() => <Layout><Top /></Layout>} />
          <Route path="/engineer" render={() => <Layout><Engineering /></Layout>} />
          <Route path="/music" render={() => <Layout><Music /></Layout>} />
          <Route path="/handmade" render={() => <Layout><Handmade /></Layout>} />
        </Switch>
      </ThemeProvider>
    </ScrollToTop>
  </HashRouter>,
  document.getElementById('root')
);
