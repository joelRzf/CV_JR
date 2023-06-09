import React from 'react';

const CodingAcademy = () => {
    return (
        <div className='experience_card'>
            <a href='https://www.coding-academy.fr/' target="_blank" rel="noreferrer">
                <img alt='codingAcademy_logo' src='/images/codingAcademy_logo.png'/>
            </a>
            <div className='experience_info'>
                <h3><a href='https://www.coding-academy.fr/' target="_blank" rel="noreferrer">CODING ACADEMY EPITECH (Bordeaux-33)</a></h3>
                <h5>Titre RNCP Niveau 5 bac+2 Intégrateur Développeur Web</h5>
                <p>Octobre 2021 - Février 2022</p>
                <h4>Programme:</h4>
                <p>Fondamentaux du web: HTML5, CSS3, JAVASCRIPT, PHP, SQL</p>
                <p>Frameworks: Laravel, Vue JS</p>
                <p>Front-end avancé: React JS, Next JS</p>
                <p>Back-end avancé: Node JS, Nest JS, MongoDB</p>
                <p>Découverte: Python</p>
                <p>Mobile: React Native</p>
                <h4>Outils:</h4>
                <p>WebStorm, PHPStorm, Git, Github, Postman, Trello, Figma, Teams</p>
            </div>
        </div>
    );
};

export default CodingAcademy;