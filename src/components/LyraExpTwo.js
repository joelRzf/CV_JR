const LyraExpTwo = () => {
    return (
      <div className="experience_card">
        <a href="https://www.lyra.com/fr/" target="_blank" rel="noreferrer">
          <img alt="cibler_logo" src="/images/lyra_logo.png" />
        </a>
        <div className="experience_info">
          <h3>Développeur Web Front-end | Alternance</h3>
          <p>
            <a href="https://www.lyra.com/fr/" target="_blank" rel="noreferrer">
              <span>LYRA</span>
            </a>
          </p>
          <p>Septembre 2022 - Août 2023 (12 mois) </p>
          <h4>Missions:</h4>
          <p>
            Développement front-end de la nouvelle plateforme "POS360"
            (remplaçant du portail     <a
            href="https://www.lyra.com/fr/guides/luma/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LUMA</span>
          </a>)
          </p>
          <p>
            Maintenance du portail{" "} 
            <a
            href="https://www.lyra.com/fr/guides/luma/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LUMA (Lyra Update Manager)</span>
          </a>
          </p>
          <h4>Environnement technique:</h4>
          <div>
            <p>
              Technologies: Material-UI, JavaScript, TypeScript, React, React-Hook-Form, Recoil
              
            </p>
            <p>Tests: Jest, React-Testing-Library, TestCafé</p>
            <p>Api: Rest, Microservices</p>
            <p>IDE: VSCode</p>
            <p>Outils d’intégration continue: Jenkins 2, Docker, Sonar</p>
            <p>BDD : PostgresSQL, MariaDB, Elastic</p>
          </div>
  
          <h4>Outils:</h4>
          <p>Git, GitLab, Jira, Rocket Chat, Teams</p>
        </div>
      </div>
    );
  };
  
  export default LyraExpTwo;
  