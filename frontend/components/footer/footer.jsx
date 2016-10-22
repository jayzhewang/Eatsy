import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render(){
    return (
      <div className='footer group'>
        <div className='footer-container'>
          <div className='footer-about'>
            <p>Eatsy is a crowd sourced restaurant review app, created by me, as my full stack project at <a href='https://www.appacademy.io/'>App Academy</a></p>
            <p>Eatsy demonstrates skills I've learned on Ruby on Rails and React/Redux, amongst many others.</p>
          </div>
          <div className='footer-image-github'>
            <a href='https://github.com/jz-wang/Eatsy'>
              <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1473368331/github-transparent_shmjeq.png'
                alt='github png'
                height='35'
                width='35'
                />
            </a>
          </div>
          <div className='footer-about-fineprint'>
            <p>Eatsy is inspired by Yelp. All photos used here belong to their respected owners.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
