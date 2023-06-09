const LyraExpOne = () => {
  return (
    <div className="experience_card">
      <a href="https://www.lyra.com/fr/" target="_blank" rel="noreferrer">
        <img alt="cibler_logo" src="/images/lyra_logo.png" />
      </a>
      <div className="experience_info">
        <h3>Développeur Web Front-end | Stage</h3>
        <p>
          <a href="https://www.lyra.com/fr/" target="_blank" rel="noreferrer">
            <span>LYRA</span>
          </a>
        </p>
        <p>Mars 2022 - Août 2022 (6 mois) </p>
        <h4>Missions:</h4>
        <p>
          Compréhension des fonctionnalités du portail{" "}
          <a
            href="https://www.lyra.com/fr/guides/luma/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LUMA (Lyra Update Manager)</span>
          </a>
        </p>
        <p>
          Etude et Compréhension de l'architecture des tests end-to-end
          Nightwatch existants
        </p>
        <p>Migration des tests end-to-end de Nightwatch vers TestCafe</p>
        <p>Industrialisation via la chaîne d'intégration</p>
        <h4>Environnement technique:</h4>
        <div>
          <p>
            Technologies: React-Bootstrap, JavaScript, TypeScript, React,
            Nightwatch, TestCafé, Rest, Microservices
          </p>
          <p>IDE: VSCode</p>
          <p>Outils d’intégration continue: Jenkins 2, Docker, Sonar</p>
          <p>BDD : PostgresSQL, MariaDB Elastic</p>
        </div>

        <h4>Outils:</h4>
        <p>Git, GitLab, Jira, Rocket Chat, Teams</p>
      </div>
    </div>
  );
};

export default LyraExpOne;
