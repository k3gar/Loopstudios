import React from 'react';
import persona from '../info/images/mobile/image-interactive.jpg'

const MainContent = () => {
    return(
        <main>
            <section className='main_first'>
                <img className='main_first-img main_first-margin' src={persona} alt="A man with VR Glases" />
                <section className='main_first-section main_first-margin'>
                    <h2 className='main_first-title '>The leader in interactive VR</h2>
                    <p className='main_first-text'>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                    </p>
                </section>
            </section>
            <section className='main_second'>

            </section>
        </main>
    );
}

export default MainContent;