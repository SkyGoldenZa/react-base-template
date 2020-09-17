import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export function Signup() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Submitting email: ${email} and password: ${password}`);
   }

   return (
      <form onSubmit={handleSubmit}>
         <h1>Sign up</h1>
         <br />
         <label>
            <span>Email:</span>
            <input
               type="text"
               placeholder="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
         </label>
         <br />
         <br />
         <label>
            <span>Password:</span>
            <input
               type="password"
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
