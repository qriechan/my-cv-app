import React, { forwardRef } from 'react';

interface CardProps {
    isActive: boolean;
    position: 'above' | 'below';
    children: React.ReactNode;
    onClick: () => void;
    title: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ isActive, position, children, onClick, title }, ref) => {
        return (
            <div
                className={`card ${isActive ? 'active' : ''} ${position}`}
                onClick={onClick}
                ref={ref}
            >
                {isActive ? (
                    <div>{children}</div>
                ) : (
                    <div>{title}</div>
                )}
            </div>
        );
    }
);

export default Card;
