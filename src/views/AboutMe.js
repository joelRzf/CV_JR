import React from 'react';
import WebDevExp from "../components/WebDevExp";
import BuyerExp from "../components/BuyerExp";
import Reacteur from "../components/Reacteur";
import CodingAcademy from "../components/CodingAcademy";
import KedgeBs from "../components/KedgeBs";
import MasterUniv from "../components/MasterUniv";
import LyraExpOne from '../components/LyraExpOne';
import LyraExpTwo from '../components/LyraExpTwo';
import Wcs from '../components/Wcs';

const AboutMe = () => {
    return (
        <div className='aboutMe_container'>
            <div>
                <div className='download_resume'>
                    {/*<button>ME CONTACTER</button>*/}
                    <button><a href='/CV_Joel_RAZAFINJATOVO.pdf' download>TELECHARGER MON CV</a></button>
                </div>
                <h1>Profil</h1>
                <p className='intro'>
                    Ancien Acheteur dans l'industrie, ma passion pour le monde du numérique m'a amené à
                    entamer ma reconversion professionnelle dans le
                    Développement Web. <br/>
                    Fort de mes formations et expériences (stage & alternance) en entreprise dans le développement web, je recherche à présent un poste de Développeur Front-End ou Fullstack JS
                     <br/>Je
                    m'intéresse particulièrement aux technologies basées autour de Javascript (Typescript, React JS,
                    NodeJS, ExpressJS, Next JS, Nest JS). <br/>
                    Vous trouverez à travers ce site les informations relatives à mon parcours ainsi que les projets que
                    j'ai développés. <br/> <span> Bonne visite et à bientôt!<img src='/images/smiley.png' style={{width:'20px',marginLeft:'5px', position:'relative', top: '3px'}}/></span>
                </p>
            </div>
            <div>
                <h1>Expériences Professionnelles</h1>
                <LyraExpTwo/>
                <LyraExpOne/>
                <WebDevExp/>
                <BuyerExp/>
            </div>
            <div>
                <h1>Formation</h1>
                <Wcs/>
                <CodingAcademy/>
                <Reacteur/>
                <KedgeBs/>
                <MasterUniv/>
            </div>
        </div>
    );
};

export default AboutMe;