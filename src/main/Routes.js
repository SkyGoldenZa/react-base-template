import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'src/routes';

const ComponentWrapper = ({ match }) => {
   const page = routes.find((route) => {
      if (route.route === match.url) {
         return route.route === match.url;
      }
      return route.route === '/page-not-found';
   });
   document.title = page.title;

   return <>
      <page.component />
   </>;
}

export function Routes() {
   return <Route exact path={[`/`, `/:id`]} component={ComponentWrapper} />;
}
