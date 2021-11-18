import React, { Component } from "react";
import {Container, SmallCard, ButtonContainer, ButtonRegister, ImgResponsive} from '../Styles.jsx'
import { Outlet, Link } from "react-router-dom";

class Register extends Component{

    render(){
        return(
            <Container>
                    <ImgResponsive src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"/>
                    <SmallCard>
                        <ButtonContainer>
                            <Link to="/singup"><ButtonRegister>Singup</ButtonRegister></Link>
                            <Link to="/login"><ButtonRegister>Login</ButtonRegister></Link>
                        </ButtonContainer>
                    </SmallCard>
            </Container>
        )
    }

}

export default Register