import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { fetchCategories } from '../actions'
import Select from '../components/select';

class PostsNew extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-error' : ''}`;
        
        return(
            
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    { ...field.input }
                />
                
                <div className="help-block"> 
                    {touched ? error : ''}
                </div>            
            </div>
        );
    }

    onSubmit(values) {   
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                
                <Field
                    label="Category"
                    name="categoryID"
                    component={Select}
                    options={this.props.categories}
                />

                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = "Enter a title";
    }

    if(!values.categoryID) {
        errors.category = "Select a category";
    }
    
    if(!values.content) {
        errors.content = "Enter some content";
    }

    return errors;
}

function mapStateToProps(state) {
    return { categories: state.categories };
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(mapStateToProps, {createPost, fetchCategories})(PostsNew)
);


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
