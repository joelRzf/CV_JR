import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WebDevExp = () => {
    return (
        <div className='experience_card'>
            <a href='https://cibler.com/' target="_blank" rel="noreferrer">
                <img alt='cibler_logo' src='/images/cibler_logo.png'/>
            </a>
            <div className='experience_info'>
                <h3>Développeur Web Front-end React JS | Stage</h3>
                <p><a href='https://cibler.com/' target="_blank" rel="noreferrer"><span>CibleR</span></a></p>
                <p>Mars 2021 - Juillet 2021 (5 mois) </p>
                <h4>Missions:</h4>
                <p>Migration site Wordpress vers React JS</p>
                <p>Développement de composants React JS</p>
                <p>Développement de contenus front affichés sur les sites clients</p>
                <p>Maintenance mineure sur application mobile React Native</p>
                <h4>Stack technique:</h4>
                <div className='stack_container'>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'html5']} size="2x"/>
                        <p>Html5</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'css3']} size="2x"/>
                        <p>Css3</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'sass']} size="2x"/>
                        <p>Sass</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'js']} size="2x"/>
                        <p>Javascript</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'react']} size="2x"/>
                        <p>React JS</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'java']} size="2x"/>
                        <p>Java</p>
                    </div>
                </div>
                <h4>Outils:</h4>
                <p>VS Code, Git, Bitbucket, Figma, Trello, Slack</p>
            </div>
        </div>
    );
};

export default WebDevExp;