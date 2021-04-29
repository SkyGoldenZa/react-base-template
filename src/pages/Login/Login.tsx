import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Login: React.FC = () => {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      event.preventDefault();
      alert(`Submitting email: ${email} and password: ${password}`);
      return event.target;
   };

   return (
      <form onSubmit={() => handleSubmit}>
         <h1>Login</h1>
         <br />
         <label htmlFor="email">
            <span>Email:</span>
            <input
               type="text"
               id="email"
               placeholder="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
         </label>
         <br />
         <br />
         <label htmlFor="password">
            <span>Password:</span>
            <input
               type="password"
               id="password"
               placeholder="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
         </label>
         <br />
         <br />
         <input
            type="submit"
            onClick={(event) => handleSubmit(event)}
            value="Submit"
         />
         <br />
         <br />
         <Link to="/signup">Sign up</Link>
      </form>
   );
}
