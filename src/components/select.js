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
        //console.log(props)
        const { meta: { touched, error } } = props; 
        const className = `form-group ${touched && error ? 'has-error' : ''}`;

        return(
            <div className={className}>
                <div>{props.label}</div>
                <select
                    value=''
                    className="form-control"
                    {...props.input}>
                        <option value=''>Select</option>
                        {props.options.map(option => renderSelectOptions(option))}
                        {/* {props.options.map(option => renderSelectOptions(option))} */}
                        {/* {Object.keys(props.options).map(id => renderSelectOptions(props.options[id]))} */}
                        {/* {Object.keys(props.options).map(renderSelectOptions)} */}
                </select>
                <div className="help-block"> 
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    return <div></div>
}

export default Select;