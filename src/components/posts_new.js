import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
renderField(field) {
    return(
        <div className="form-group">
            <label>{field.label}</label>
            <input 
                className="form-control"
                type="text"
                { ...field.input }
            />
        </div>
    );
}

    render() {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

function validate(values) {

}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);

/*
const rendField = (name, age, defaultVal) => {
    return <div> 
        <label>{name},{age}</label>
        <input value={defaultVal} />
    </div>
}

<custField
    component={rendField()}
/>


const rendField = (props) => {
    
    return props.component
}*/