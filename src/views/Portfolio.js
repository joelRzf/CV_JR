import React from 'react';
import PortfolioProject from "../components/PortfolioProject";

const Portfolio = () => {

    const projects = [
        {
            name: 'Delivroom',
            screenShots: ['/images/delivroom.png'],
            url: 'https://delivroom.netlify.app/',
            stack: {
                'front': ['React JS'],
            },
            specs: ['Création de composants React', 'Gestion de panier  via le hook useState'],
            github: {
                front: 'https://github.com/Razafinjatovo-dev/Marvelous-frontend',
                back: null
            }
        },
        {
            name: 'Marvel',
            screenShots: ['/images/marvel1.png'],
            url: 'https://marvelous-heroes.netlify.app/',
            stack: {
                'front': ['React JS'],
                'back': ['API tiers']
            },
            specs: ['Requêtes API', 'Affichage de personnages', 'Affichage des détails relatifs à un personnage', 'Barre de recherche de personnage', 'Affichage de comics', 'Ajout de personnage dans la liste des favoris'],
            github: {
                front: 'https://github.com/Razafinjatovo-dev/Marvelous-frontend',
                back: null
            }
        },
        {
            name: 'Widgets',
            // screenShots: ['/images/widgets_home.png','/images/widgets_register.png','/images/widgets_crypto.png'],
            screenShots: ['/images/widgets_home.png'],
            url: 'https://dashboard-widgets.netlify.app/',
            stack: {
                'front': ['React JS'],
                'back': ['Typescript','Nest JS','MongoDB']
            },
            specs: ['User SignUp, User Login', 'Requêtes vers API tiers', 'Affichage des components (meteo, actualités)', 'Inscription des users à des widgets en particulier', 'Création d\'un serveur Nest JS', 'Base de données MongoDB', , 'Stockage des utilisateurs et leurs données', 'Création et stockage des widgets'],
            github: {
                front: 'https://github.com/CODAC-BDX-Joel/dashboard_front',
                back: 'https://github.com/CODAC-BDX-Joel/dashboard_back'
            }
        }
    ]
    return (
        <main className='portfolio_container'>
            {projects.map(project => <PortfolioProject projectData={project}/>)}
        </main>
    );
};

export default Portfolio;
