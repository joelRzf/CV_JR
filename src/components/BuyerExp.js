import React from 'react';

const BuyerExp = () => {
    return (
        <div className='experience_card'>
            <div>
                <img alt='manufacturing_icon' src='/images/factory.png'/>
            </div>

            <div className='experience_info'>
                <h3>Acheteur Indirect</h3>
                <p>Juillet 2015 - Janvier 2021</p>
                <h4>Missions:</h4>
                <p>Définition des besoins en équipe multimétiers</p>
                <p>Gestion d'appels d'offres</p>
                <p>Négociation commerciale et contractuelle</p>
                <p>Gestion relation fournisseurs</p>
                <h4>Entreprises:</h4>
                <p>Industrie Automobile: <a href='https://www.gruppocln.com/en/ma' target='_blank' rel='noreferrer'><span>Magnetto Automotive</span>
                    </a>, <a href='https://www.stellantis.com/fr' rel='noreferrer'
                                       target='_blank'><span>Stellantis</span></a></p>
                <p>Industrie Aéronautique: <a href='https://www.stelia-aerospace.com/' target='_blank' rel='noreferrer'><span>Stelia Aerospace</span>
                    </a></p>
            </div>
        </div>
    );
};

export default BuyerExp;