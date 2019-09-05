import React from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
//import PropTypes from "prop-types";

export default class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            birthdate: new Date()
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeSurname = this.handleChangeSurname.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleBirthdate = this.handleBirthdate.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleChangeName(event) {
        this.setState({name: event.target.value})
    }

    handleChangeSurname(event) {
        this.setState({surname: event.target.value})
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }

    handleBirthdate = date => {
        this.setState({birthdate: date});
    };

    submitForm() {
        //debugger
        // console.log(this.props)
        this.props.submit({
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            birthdate: this.state.birthdate
        });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label >Ваше имя</label>
                    <input type="text" className="form-control" placeholder="Введите ваше имя" onChange={this.handleChangeName}/>
                    <label >Ваша фамилия</label>
                    <input type="text" className="form-control" placeholder="Введите вашу фамилию" onChange={this.handleChangeSurname}/>
                    <label >Электронный адреc</label>
                    <input type="text" className="form-control" placeholder="Введите электронный адрес" onChange={this.handleChangeEmail}/>
                    <label >Дата рождения</label>
                    <DatePicker selected={this.state.birthdate} onChange={this.handleBirthdate}/>
                    <br />
                    <input type="submit" onClick={this.submitForm} value="Сохранить"/>
                </div>
            </form>
        )
    }
}