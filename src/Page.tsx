import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import About from './cards/About';
import Contact from './cards/Contact';
import Education from './cards/Education';
import ExperiencePage from './cards/ExperiencePage';
import Skills from './cards/Skills';
import Interests from './cards/Interests';

const Page: React.FC = () => {
    const location = useLocation();
    const [currentCard, setCurrentCard] = useState<JSX.Element>(<About />);

    const cardComponents: { [key: string]: JSX.Element } = {
        '/': <About />,
        '/education': <Education />,
        '/experience': <ExperiencePage />,
        '/skills': <Skills />,
        '/contact': <Contact />,
        '/interests': <Interests />
    };

    useEffect(() => {

        const timeout = setTimeout(() => {
            setCurrentCard(cardComponents[location.pathname] || <About />);
        }, 500);

        return () => clearTimeout(timeout);
    }, [location.pathname, cardComponents]);

    return (
        <div className="page-container">
            <div className="card-list">
                <div className={"card active"}>
                    {currentCard}
                </div>
            </div>
        </div>
    );
};

export default Page;
