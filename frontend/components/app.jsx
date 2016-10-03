import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greet/greeting_container';
import Footer from './footer/footer';
import SearchContainer from './search/search_container';

const App = ({children}) => {
  return (
    <div>
      <nav className="headerbar">
        <div className="navbar">
          <Link to="/" className="header-brand">Eatsy</Link>
          <div className='header-right-side'>
            <SearchContainer />
            <GreetingContainer />
          </div>
        </div>
      </nav>
      {children}
      <Footer />
    </div>
  );
};

export default App;
