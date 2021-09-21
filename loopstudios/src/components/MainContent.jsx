import React, { Fragment } from 'react';

const MainContent = () => {
    return(
        <Fragment>
            <section className='main_first'>
                <span className='main_first-img'></span>
                <section className='main_first-section main_first-margin'>
                    <h2 className='main_first-title '>The leader in <br/> interactive VR</h2>
                    <p className='main_first-text'>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                    </p>
                </section>
            </section>
        </Fragment>
    );
}

export default MainContent;