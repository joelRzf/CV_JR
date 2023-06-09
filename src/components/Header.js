import React from 'react';

const Header = () => {
    return (
      <header>
              <img alt='profile_picture' src='/images/profile_picture.png'/>
              <div className='profile_infos'>
                  <p>Joel RAZAFINJATOVO</p>
                  <p>Développeur Web Junior Javascript</p>
              </div>
              <div className='buttons_wrapper'>
                  <button><a href='/CV_Joel_RAZAFINJATOVO.pdf' download>TELECHARGER MON CV</a></button>
              </div>
      </header>
    );
};

export default Header;