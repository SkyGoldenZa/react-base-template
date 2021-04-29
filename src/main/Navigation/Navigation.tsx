import React from 'react';
import { useHistory } from 'react-router-dom';

export const Navigation: React.FC = () => {
   const history = useHistory();

   return (
      <div>
         <button type="button" onClick={() => history.push('/home')}>
            Home
         </button>
         <button type="button" onClick={() => history.push('/about')}>
            About
         </button>
         <button type="button" onClick={() => history.push('/contact')}>
            Contact
         </button>
         <button type="button" onClick={() => history.push('/login')}>
            Logout
         </button>
      </div>
   );
}
