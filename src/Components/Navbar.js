import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo  from '../logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/Cart" className="ml-auto">
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



