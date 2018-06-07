import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./Users";
import UserDetails from "./UserDetails";
import Header from "./Header";
class App extends React.Component {
    render() {
        return (
            <div className="app-body">
                <Header />
                <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/user" component={UserDetails} />
                </Switch>
            </div>
        );
    }
}

export default App;
