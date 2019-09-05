import React from 'react';
import ProfileForm from './ProfileForm'

export default class FormWrapper extends React.Component {
    constructor(props){
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(eventData){
        console.log(eventData)
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(eventData)
        })
    }
    render(){
        return (
            <div className="d-flex justify-content-center my-5">

                <ProfileForm submit={this.submitForm}></ProfileForm>
            </div>

        )
    }
}