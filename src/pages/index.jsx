import React from 'react';
import { IntlProvider } from 'react-intl';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ConnectedRouter } from 'react-router-redux';
import { PrivateRoute } from '@edx/frontend-auth';
import apiClient from '../data/apiClient';
import history from '../data/history';
import Layout from '../components/Layout/Layout';
import Landing from '../components/Landing/Landing';

// Add icons to font-awesome library
library.add(fas);

const IndexPage = () => (
  <IntlProvider locale="en">
    <Layout>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <PrivateRoute
            path="/"
            component={Landing}
            authenticatedAPIClient={apiClient}
            redirect={process.env.BASE_URL}
          />
        </React.Fragment>
      </ConnectedRouter>
    </Layout>
  </IntlProvider>
);

export default IndexPage;
