import React from "react";
import { Link } from "react-router-dom";
import store from "../state/store";
import actionTypes from "../state/action";
import "../style/UserDetails.css";

class UserDetails extends React.Component {
    constructor() {
        super();
        let user = store.getState().user;
        if (user === undefined) {
            user = JSON.parse(sessionStorage.getItem("user"));
        } else {
            sessionStorage.setItem("user", JSON.stringify(user));
        }
        this.state = {
            user: user
        };
    }
    render() {
        return (
            <div className="user-details-container">
                <div className="row">
                    <div className="col-lg-3">
                        <img className="user-details-avatar" src={this.state.user.avatar_url} alt="Avatar" />
                        <h4>{this.state.user.login}</h4>
                    </div>
                    <div className="col-lg-9">
                        <p>Id {this.state.user.id}</p>
                        <p>Git reporitory {this.state.user.html_url}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <Link to="/users" className="btn btn-primary" onClick={() => store.dispatch({ type: actionTypes.Users })}>
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetails;
