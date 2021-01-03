import React from "react";
import {connect} from 'react-redux';
import { authenticate } from "../Actions";

class LoginView extends React.Component {
    render() {
        return(
            <>
                <div className="container">
                    <div className="panel mt-5">
                        <div className="panel__header">
                            <h1 className="mb-0">Zaloguj się</h1>
                        </div>
                        <div className="panel__body">
                            <form className="w-50 d-block m-auto">
                                <div className="form-group">
                                    <label htmlFor="userName">Wprowadź swój login z gry:</label>
                                    <input type="text" className="form-control" name="userName" id="userName" placeholder="Wprowadź swój login" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPassword">Wprowadź swoje hasło z gry:</label>
                                    <input type="password" className="form-control" name="userPassword" id="userPassword" placeholder="Wprowadź swoje hasło" required/>
                                </div>
                                <button type="submit" className="btn btn__dark btn-block">Zaloguj się</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    authenticate: (userName, userPassword) => dispatch(authenticate(userName, userPassword))
});

export default connect(null, mapDispatchToProps)(LoginView);
//export default LoginView;