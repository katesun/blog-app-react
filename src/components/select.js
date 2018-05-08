import React from 'react';

const Select = (props) => {
    const renderSelectOptions = (cat) => {
        return(
            <option
                key={`${cat.categoryID}-${cat.name}`}
                value={cat.categoryID}>
                {cat.name}
            </option>
        );
    }

    if(props && props.options) {
        return(
            <div>
                <div>{props.label}</div>
                <select
                    className="form-control"
                    {...props.input}>
                        {props.options.map(option => renderSelectOptions(option))}
                        {/* {props.options.map(option => renderSelectOptions(option))} */}
                        {/* {Object.keys(props.options).map(id => renderSelectOptions(props.options[id]))} */}
                        {/* {Object.keys(props.options).map(renderSelectOptions)} */}
                </select>
            </div>
        )
    }

    return <div></div>
}

export default Select;