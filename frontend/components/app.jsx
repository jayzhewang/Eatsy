import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greet/greeting_container';

const App = ({children}) => (
<div>
  <nav className="navbar navbar-inverse navbar-static-top">
  	<div className="container">

  		<div className="navbar-header">
        <div className='navbar-brand'>
          <Link to="/" className="header-link">Eatsy</Link>
        </div>
  		</div>

      <GreetingContainer />

  	</div>
  </nav>
  {children}
</div>
);

export default App;
