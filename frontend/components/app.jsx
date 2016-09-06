import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greet/greeting_container';

const App = ({children}) => (
<div>
  <nav className="headerbar group">
  	<div className="navbar group">
        <Link to="/" className="header-brand">Eatsy</Link>
        <GreetingContainer />
  	</div>
  </nav>
  {children}
</div>
);

export default App;
