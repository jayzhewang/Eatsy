import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greet/greeting_container';

const App = ({children}) => (
  <div>
    <header>
      <div className='header-container'>
        <Link to="/" className="header-link"><h1>Eatsy</h1></Link>
        <GreetingContainer />
      </div>
    </header>
    {children}
  </div>
);

export default App;
