import React, { Component } from "react";
import {Container, SmallCard, ButtonContainer, ImgResponsive, InputField, ButtonRegister} from '../Styles.jsx'


class Singup extends Component{

    render(){
        return(
            <Container>
                    <ImgResponsive src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"/>
                    <SmallCard>
                        <ButtonContainer>
                            <InputField type="text" placeholder="username"/>
                            <InputField type="email" placeholder="correo@email.com"/>
                            <InputField type="password" placeholder="*******"/>
                            <ButtonRegister>Singup</ButtonRegister>
                        </ButtonContainer>
                    </SmallCard>
            </Container>
        )
    }

}

export default Singup