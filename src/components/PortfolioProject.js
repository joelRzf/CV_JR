import React from 'react';

const PortfolioProject = (props) => {
    const { projectData } = props;
    return (
        <div className='project_container'>
            <h2 className='project_name'>
                {projectData.name}
            </h2>
            <div className="portfolio_card">
                <div className='carroussel_container'>
                    {projectData.screenShots.map((screenShot, index) => <img key={index} src={screenShot} alt='delivroom' />)}
                </div>
                <div className='experience_info'>
                    <a href={projectData.url} target="_blank" rel="noreferrer">
                        <h3>Url</h3>
                        <p className='project_url'>{projectData.url}</p>
                    </a>
                    <h4>Front-End</h4>

                    {projectData.stack.front.map((stackfront, index) => <p key={index}>{stackfront}</p>)}

                    {projectData.stack.back &&
                        (
                            <>
                                <h4>Back-End</h4>
                                {projectData.stack?.back.map((stackBack, index) => <p key={index}>{stackBack}</p>)}
                            </>
                        )}

                    {projectData.stack.bdd &&
                        (<>
                            <h4>BDD</h4>
                            {projectData.stack?.bdd.map((stackBdd, index) => <p key={index}>{stackBdd}</p>)}
                        </>)}

                    {projectData.stack.tests &&
                        (<>
                            <h4>Tests</h4>
                            {projectData.stack?.tests.map((test, index) => <p key={index}>{test}</p>)}
                        </>)}

                    {projectData.stack?.tests &&
                        (<>
                            <h4>Devops</h4>
                            {projectData.stack?.devops.map((devopsElement, index) => <p key={index}>{devopsElement}</p>)}
                        </>)}

                    <h4>Fonctionnalités</h4>

                    {projectData.specs.map((spec, index) => <p key={index}>{spec}</p>)}

                    <h4>Repositories</h4>
                    {
                        projectData.repositories && projectData.repositories.map((repo, index) => {
                            const hrefValue = Object.values(repo)[0]
                            return (
                                <p key={index}>{Object.keys(repo)[0]}: <a href={hrefValue} target="_blank" rel="noreferrer" style={{color: 'blue'}}>{hrefValue}</a></p>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default PortfolioProject;