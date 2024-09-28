import React, { useState } from 'react';
import Experience from './exp/Experience';
import Exp from './exp/Exp';
import experiencesData from './exp/ExperiencesData';

const ExperiencePage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current experience

    return (
        <div className="experience-page">
            <Experience
                experiences={experiencesData}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            <Exp
                experiences={experiencesData.map(exp => ({
                    company: exp.company,
                    title: exp.title
                }))}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </div>
    );
};

export default ExperiencePage;
