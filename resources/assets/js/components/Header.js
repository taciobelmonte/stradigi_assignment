import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Menu from './Menu';
import logoMobile from './../../images/logo-mobile.png';
import logoDesktop from './../../images/logo-desktop.png';
import avatar from './../../images/user-profilepic.jpg';

class Header extends Component {

    state = {
        burguer: false
    };

    constructor(props){
        super(props);
    }

    toggleMenu = (event) => {
        if(this.state.burguer == false){
            this.setState({burguer: true});
        }else{
            this.setState({burguer: false});
        }
    };

    handleClick(e){
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {

        let classe;
        if(this.state.burguer == false){
            classe = '';
        }else{
            classe = 'open';
        }

        return (
            <header className={classe}>
                <div className="inner-header container">
                    <div className="logo">
                        <Link to="/">
                            <img className="desktop" src={logoDesktop} alt=""/>
                            <img className="mobile" src={logoMobile} alt=""/>
                        </Link>
                    </div>
                    <div className={classe + " burguer"} onClick={(event) => this.toggleMenu(event.target.value)}>
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                    <div className="user-avatar avatar-first">
                        <div className="notifications">0</div>
                        <div className="user-avatar-inner">
                            <img src={avatar} alt="Avatar"/>
                        </div>
                    </div>
                    <div className="menu">
                        <Menu link={this.props.link} />
                    </div>
                    <div className={classe + " mobile-menu"}>
                        <div className="mobile-menu-inner">
                            <div className="user-avatar">
                                <div className="notifications">2</div>
                                <div className="user-avatar-inner">
                                    <img src={avatar} alt="Avatar"/>
                                </div>
                            </div>
                            <Menu link={this.props.link} />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;