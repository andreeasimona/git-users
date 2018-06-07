import React from "react";
import { Link } from "react-router-dom";
import "../style/UserCard.css";
import store from "../state/store";
import actionTypes from "../state/action";
class UserCard extends React.PureComponent {
    render() {
        return (
            <div className="col-lg-3">
                <div className="user-card">
                    <img className="card-img-top" src={this.props.user.avatar_url} alt="Avatar" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.user.login}</h5>
                        <Link
                            to="/user"
                            className="btn btn-primary"
                            onClick={() =>
                                store.dispatch({
                                    type: actionTypes.User,
                                    user: this.props.user
                                })
                            }>
                            More details
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;
