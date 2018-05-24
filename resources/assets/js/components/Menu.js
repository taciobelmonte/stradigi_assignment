import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

class Menu extends Component {

    logout(e){
        e.preventDefault();
        axios.post('api/logout')
            .then(response=> {
                this.props.history.push('/');
            })
            .catch(error=> {
                console.log(error);
            });
    }
    render() {

        if (this.props.link) {
            return (
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/search" onClick={this.logout.bind(this)}>{this.props.link}</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/search">Search</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/gallery" activeClassName="active">Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/list-items" activeClassName="active">List Items</NavLink>
                        </li>
                    </ul>
                </nav>
            )
        }
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default  withRouter(Menu)