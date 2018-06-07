import React from "react";
import api from "../helpers/api";
import Loading from "./Loading";
import UserCard from "./UserCard";
import "../style/Users.css";

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            getUsers: false,
            showLoading: true
        };
        this.page = 0;
    }
    componentDidMount() {
        api.getUsers(this.page, this.cbSuccess, this.cbError);
    }

    cbSuccess = data => {
        this.users = this.users !== undefined ? this.users.concat(data) : data;
        this.setState({ hasUsers: true });
        this.setState({ showLoading: !this.state.showLoading });
    };

    cbError = error => {
        //Todo manage error next itinerations. For now just log the error.
        console.log(error);
    };

    loadMore = () => {
        this.setState({ showLoading: !this.state.showLoading });
        this.page = this.page + this.users.slice(-1).pop().id;
        api.getUsers(this.page, this.cbSuccess, this.cbError);
    };
    renderPage = () => {
        if (this.state.hasUsers) {
            let listItems = this.users.map((value, key) => {
                return <UserCard user={value} key={key} />;
            });
            return (
                <div>
                    <div className={`users-loading-show-${this.state.showLoading}`}>
                        <Loading />
                    </div>
                    <div className={`users-container users-container-show-${!this.state.showLoading}`}>
                        <div className="row">{listItems}</div>
                        <div className="row">
                            <button className="btn btn-info users-load-more" onClick={() => this.loadMore()}>
                                Load more users
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        if (!this.state.hasUsers) return <Loading />;
    };
    render() {
        return <div>{this.renderPage()}</div>;
    }
}

export default Users;
