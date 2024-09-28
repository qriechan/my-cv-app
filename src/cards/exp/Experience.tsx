import { useState } from 'react';

type ExperienceProps = {
    experiences: {
        company: string;
        title: string;
        date: string;
        tasks: string[];
    }[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
};

const Experience: React.FC<ExperienceProps> = ({ experiences, currentIndex, setCurrentIndex }) => {
    const [transition, setTransition] = useState(false); 
    
    const handleNavigation = (index: number) => {
        setTransition(true); 
        setTimeout(() => {
            setCurrentIndex(index);
            setTransition(false); 
        }, 250); 
    };

    const currentExperience = experiences[currentIndex];

    return (
        <div className="experience-container">
            <h2 className="title">Experience</h2>
            <div className={`experiences ${transition ? 'fade-out' : 'fade-in'}`}>
                <h3 className="heading">
                    <span className="company">{currentExperience.company},</span> {currentExperience.title}
                </h3>
                <p className="subheading">{currentExperience.date}</p>
                <ul className="small-text">
                    {currentExperience.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>

            <div className="pagination-controls">
                <div className="pagination-wrapper">
                    <button 
                        className="pagination-button" 
                        onClick={() => handleNavigation(currentIndex - 1)}
                        disabled={currentIndex === 0}
                    >Previous</button>
                    <span className="page-number">{currentIndex + 1} / {experiences.length}</span>
                    <button 
                        className="pagination-button" 
                        onClick={() => handleNavigation(currentIndex + 1)}
                        disabled={currentIndex === experiences.length - 1}
                    >Next</button>
                </div>
            </div>
        </div>
    );
};
  
export default Experience