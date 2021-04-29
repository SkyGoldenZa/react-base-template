import {
   About, AccountRecovery, Contact, Home, Login, PageNotFound, Signup,
} from './pages';

export const routes = [
   { route: '/', title: 'Home', requireAuth: true, component: Home },
   { route: '/home', title: 'Home', requireAuth: true, component: Home },
   { route: '/about', title: 'About', requireAuth: true, component: About },
   {
      route: '/contact',
      title: 'Contact',
      requireAuth: true,
      component: Contact,
   },
   { route: '/login', title: 'Log in', requireAuth: false, component: Login },
   {
      route: '/signup',
      title: 'Sign up',
      requireAuth: false,
      component: Signup,
   },
   {
      route: '/account-recovery',
      title: 'Account Recovery',
      requireAuth: false,
      component: AccountRecovery,
   },
   {
      route: '/page-not-found',
      title: '404 Page Not Found',
      requireAuth: false,
      component: PageNotFound,
   },
];
