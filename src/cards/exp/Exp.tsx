type ExpProps = {
    experiences: { company: string, title: string }[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
};

const Exp: React.FC<ExpProps> = ({ experiences, currentIndex, setCurrentIndex }) => {
    return (
        <div className="exp-list">
            <h4 className="subtitle">Table of Contents</h4>
            <table className="my-exp small-text">
                <tr>
                    <th className="company">Company</th>
                    <th>Position</th>
                </tr>
                {experiences.map((exp, index) => (
                    <tr
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={index === currentIndex ? 'active' : ''}
                        style={{ cursor: 'pointer', padding: '8px 0', listStyle: 'none' }}
                    >
                        <td className="company-name">{exp.company}</td>
                        <td className="job-title">{exp.title}</td>
                    </tr>
                ))}
            </table>
            <br className="psuedo-padding" />
        </div>
    );
};

export default Exp;