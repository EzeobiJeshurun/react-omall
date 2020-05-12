import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo  from '../logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import { ButtonContainer } from "./Button";


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-lg-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            WeWinGlobe
                        </Link>
                    </li>
                </ul>
             <Link  to="/" className="ml-auto d-none d-sm-block"  >
             <ButtonContainer className="d-none d-sm-block" >
                 Home
             </ButtonContainer>
             </Link>
                <Link to="/Cart" >
                    <ButtonContainer>
                        <span className="mr-2">
                            <FontAwesomeIcon icon="cart-plus"/>
                        </span>my cart
                    </ButtonContainer>
                </Link>
                
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem !important;
    text-transform: capitalize !important;
}
`



