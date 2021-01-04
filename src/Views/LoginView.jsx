import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import {connect } from 'react-redux';
import {setAuthentication} from '../Actions';

class LoginView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            userPassword: '',
            isAuthenticated: false,
            isLoading: false,
            isErrored: ''
        }

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    componentWillMount() {
        this.isAlreadyAuthenticated();
    }

    isAlreadyAuthenticated = () => {
        if(this.props.playerData.personalToken) {
            console.log('Zalogowany');
        } else {
            console.log('Nie zalogowany');
            console.log(this.props.playerData);
        }
    }

    validateForm = (event) => {
        event.preventDefault();
        if(!this.state.userName && !this.state.userPassword) {
            console.log('Wypełnij wszystkie pola');
            return false;
        }
        this.authenticate();
    }

    authenticate = async () => {
        this.setState({ isLoading: true, isErrored: '' });
        try {
            //await this.sleep(2000);
            const response = await axios.post('http://localhost:8000/api/player/authenticate', {
                userName: this.state.userName,
                userPassword: this.state.userPassword
            });
            this.setState({ isLoading: false });
            this.props.dispatchAuthenticate(response.data);
        } catch (error) {
            console.log(error);
            this.setState({ isLoading: false, isErrored: 'Niepoprawny login lub hasło' });
        }
    }

    handleUserNameChange = (event) => {
        this.setState({userName: event.target.value});
    }

    handleUserPasswordChange = (event) => {
        this.setState({userPassword: event.target.value});
    }

    sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
    render() {
        return(
            <>
                <div className="container">
                    <div className="panel mt-5">
                        <div className="panel__header">
                            <h1 className="mb-0">Zaloguj się</h1>
                        </div>
                        <div className="panel__body">
                            {
                                this.state.isLoading ?
                                <div className="block__center w-100 h-100 mt-5 mb-5">
                                    <Loader type="Bars" color="#ccc" height={50} width={50} />
                                    <p className="text-small text-center text-muted m-0 mt-3">
                                    Hej, sprawdzamy czy twoje dane są poprawne<br/>Poczekaj chwilę...
                                    </p>
                                </div> : ''
                            }
                            {
                                this.state.isErrored ?
                                <div className="alert alert-danger text-center w-50 d-block m-auto mb-3" role="alert">
                                    <b>Wystąpił problem podczas próby zalogowania.</b><br/>
                                    {this.state.isErrored}
                                </div> : ''
                            }
                            <form className="w-50 d-block m-auto" onSubmit={this.validateForm}>
                                <div className="form-floating mb-3">
                                    <input type="text" htmlFor="userName" onChange={this.handleUserNameChange} value={this.state.userName} className="form-control" id="userName" placeholder="Twój login" />
                                    <label htmlFor="userName">Wprowadź swój login z gry</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" htmlFor="userPassword" onChange={this.handleUserPasswordChange} value={this.state.userPassword} className="form-control" id="userPassword" placeholder="Twoje hasło" />
                                    <label htmlFor="userPassword">Wprowadź swoje hasło z gry</label>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-lg btn__dark btn-block">Zaloguj się</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    playerData: state.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAuthenticate: (payload) => {
      dispatch(setAuthentication(payload))
    }
  }
}

LoginView = connect(
    mapStateToProps,
    mapDispatchToProps)
(LoginView);

export default LoginView;