import React from 'react';
import PortfolioProject from "../components/PortfolioProject";

const Portfolio = () => {

    const projects = [
        {
            name: 'WildCarbon',
            screenShots: ['/images/wildcarbon.png', '/images/wildcarbon.png'],
            url: 'https://www.sera-barea.uk/',
            stack: {
                front: ['Material UI, Typescript, React, Apollo Client'],
                mobile: ['React Native'],
                back: ['Node js, Typescript, TypeORM, TypeGraphQL', 'Apollo Server, Express Js'],
                bdd: ['PostgreSQL'],
                tests: ['React Testing Library, Jest, TestCafé (e2e testing)'],
                devops: ['GitHub Actions, Docker Compose, Docker Hub,', 'Virtual Private Server (Digital Ocean)', 'Caddy, Nginx']
            },
            specs: ['CRUD Utilisateurs/Dépenses carbone/Bons plans...', "Micro-service upload d'images", 'Graphiques dépenses carbone', 'Système de follow utilisateur'],
            repositories: [
                {
                    Front: 'https://github.com/joelRzf/wildcarbon_front',
                },
                {
                    Back: 'https://github.com/joelRzf/wildcarbon_back',
                },
                {
                    Microservice: 'https://github.com/joelRzf/wildcarbon_imageservice'
                },
                {
                    Root: 'https://github.com/joelRzf/wildcarbon_root'
                },
                {
                    Mobile: 'https://github.com/joelRzf/wildcarbon_mobile'
                }
            ]
        },
        {
            name: 'Delivroom',
            screenShots: ['/images/delivroom.png'],
            url: 'https://delivroom.netlify.app/',
            stack: {
                front: ['React Js', 'hosting: netlify.com'],
                back: ['Express Js', 'hosting: app.cyclic.com'],
            },
            specs: ['Affichage des prodtuis', 'Gestion de panier'],
            repositories: [
                { Front: 'https://github.com/joelRzf/delivroom_front' },
                { Back: 'https://github.com/joelRzf/delivroom_back' }
            ]
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
            screenShots: ['/images/widgets_home.png'],
            url: 'https://dashboard-widgets.netlify.app/',
            stack: {
                'front': ['React JS'],
                'back': ['Typescript', 'Nest JS', 'MongoDB']
            },
            specs: ['User SignUp, User Login', 'Requêtes vers API tiers', 'Affichage des components (meteo, actualités)', 'Inscription des users à des widgets en particulier', 'Création d\'un serveur Nest JS', 'Base de données MongoDB', 'Stockage des utilisateurs et leurs données', 'Création et stockage des widgets'],
            github: {
                front: 'https://github.com/CODAC-BDX-Joel/dashboard_front',
                back: 'https://github.com/CODAC-BDX-Joel/dashboard_back'
            }
        }
    ]
    return (
        <main className='portfolio_container'>
            {projects.map(project => <PortfolioProject projectData={project} />)}
        </main>
    );
};

export default Portfolio;
