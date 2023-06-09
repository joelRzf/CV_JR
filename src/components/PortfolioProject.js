import React from 'react';

const PortfolioProject = (props) => {
    const {projectData} = props;
    return (
        <div className='project_container'>
            <h2 className='project_name'>
                {projectData.name}
            </h2>
            <div className="portfolio_card">
                <div className='carroussel_container'>
                    {projectData.screenShots.map(screenShot => <img src={screenShot}/>)}
                </div>
                <div className='experience_info'>
                    <a href={projectData.url} target="_blank">
                        <h3>Url</h3>
                        <p className='project_url'>{projectData.url}</p>
                    </a>
                    <h4>Front-End</h4>
                    {projectData.stack.front.map(stackfront => <p>{stackfront}</p>)}
                    {projectData.stack.back &&
                    (
                        <>
                            <h4>Back-End</h4>
                            {projectData.stack?.back.map(stackBack => <p>{stackBack}</p>)}
                        </>
                    )}
                    <h4>Fonctionnalités</h4>
                    {projectData.specs.map(spec => <p>{spec}</p>)}
                    <h4><a href={projectData.github.front} target="_blank" className='github'>Github Front-End</a></h4>
                    {projectData.github.back &&
                    <h4><a href={projectData.github.back} target="_blank" className='github'> Github Back-End</a></h4>
                    }
                </div>
            </div>
        </div>

    );
};

export default PortfolioProject;