import React from 'react';
import { useHistory } from "react-router-dom";

export function Navigation() {
   const history = useHistory();

   return (
      <div>
         <button onClick={() => history.push('/home')}>Home</button>
         <button onClick={() => history.push('/about')}>About</button>
         <button onClick={() => history.push('/contact')}>Contact</button>
         <button onClick={() => history.push('/login')}>Logout</button>
      </div>
   );
}
