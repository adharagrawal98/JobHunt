import React from 'react'

const InputFields = ({ handleInputChange, value, title, name }) => {
    return (
        <>
            <label className="sidebar-label-container">
                <input type="radio" value={value} name={name} onChange={handleInputChange} />
                <span className="checkmark"></span>{title}
            </label>
        </>
    );
};

export default InputFields;
