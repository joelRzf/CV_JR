import React from 'react';

const ContactMe = () => {
    return (
        <div className='contactMe_container'>
            <div className='contactCard'>
                <div>Joel RAZAFINJATOVO</div>
                <p>Développeur Web Junior Javascript</p>
                <div className='contactCard_info'>
                    <img src='/images/email_icon.png'/>
                    <div><a href='mailto:joel.razafinjatovo@epitech.eu'>joel.razafinjatovo@epitech.eu</a></div>
                </div>
                <div className='contactCard_info'>
                    <img src='/images/phone_icon.png'/>
                    <div>06 68 52 85 12</div>
                </div>
                <div className='contactCard_info'>
                    <img src='/images/globe_icon.png'/>
                    <div>https://joel-razafin.netlify.app/</div>
                </div>
                <div className='contactCard_info'>
                    <img src='/images/location_icon.png'/>
                    <div> Bordeaux (33)</div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;