import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from 'src/routes';

const ComponentWrapper = ({ match },
) => {
   const page = routes.find((route) => {
      console.log('route', route);
      if (route.route === match.url) {
         return route.route === match.url;
      }
      return route.route === '/page-not-found';
   });
   document.title = page.title;

   return <page.component />;
};

ComponentWrapper.propTypes = {
   match: PropTypes.shape().isRequired,
};

export const Routes = () => {
   return <Route exact path={['/', '/:id']} component={ComponentWrapper} />;
};
