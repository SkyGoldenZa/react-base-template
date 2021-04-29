import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Signup: React.FC = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      event.preventDefault();
      alert(`Submitting email: ${email} and password: ${password}`);
      return event.target;
   };

   return (
      <form onSubmit={() => handleSubmit}>
         <h1>Sign up</h1>
         <br />
         <label htmlFor="signupEmail">
            <span>Email:</span>
            <input
               type="text"
               id="signupEmail"
               placeholder="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
         </label>
         <br />
         <br />
         <label htmlFor="signupPassword">
            <span>Password:</span>
            <input
               type="password"
               id="signupPassword"
               placeholder="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
         </label>
         <br />
         <br />
         <input type="submit" onClick={handleSubmit} value="Submit" />
         <br />
         <br />
         <Link to="/login">Log in</Link>
      </form>
   );
}
