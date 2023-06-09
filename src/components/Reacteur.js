import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Reacteur = () => {
    return (
        <div className='experience_card'>
            <a href='https://www.lereacteur.io/' target="_blank" rel="noreferrer">
                <img alt='lereacteur_logo' src='/images/lereacteur_logo.png'/>
            </a>
            <div className='experience_info'>

                <h3><a href='https://www.lereacteur.io/' target="_blank" rel="noreferrer">LE REACTEUR - Coding Bootcamp (Paris-75)
                </a></h3>
                <p>Septembre 2020 - Février 2021 (Temps Partiel - Cours du soir) </p>
                <h4>Programme:</h4>
                <p>Site Web Responsive Html5, Css3</p>
                <p>Programmation en Javascript</p>
                <p>Interfaces Web dynamiques en React JS</p>
                <p>Serveur en Javascript: Node JS, Express JS</p>
                <p>Base de données NoSql: MongoDB</p>
                <p>Création d'API</p>
                <p>Déploiement: Netlify, Heroku</p>
                <p>Mobile: React Native</p>
                <h4>Outils:</h4>
                <p>VS Code, Git, Github, Postman, Slack</p>
            </div>
        </div>
    );
};

export default Reacteur;