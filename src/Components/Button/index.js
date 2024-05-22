import React from 'react';
import './Button.css'; 

const Button = ({ label, onClick }) => {
    return (
        <button className="calc-button" onClick={() => onClick(label)}>
            {label}
        </button>
    );
};

export default Button;