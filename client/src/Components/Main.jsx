import {BsChatQuoteFill, BsTwitter, BsFillHouseDoorFill, BsFillQuestionCircleFill} from 'react-icons/bs'

import React,{ Component } from 'react'
import { Container, Button, PanelLeft, PanelRight, 
  PanelMid, TwittsContainers, ButtonContainer, TwitterIcon, 
  TopNavPanel, FormCard, TextareaForm, TextPanelLeft
} from '../Styles.jsx'

class Main extends Component{


  taxtareaFrom (e) {
      e.target.value

  }



  render(){

    return(
      <Container>
        <PanelLeft>
           <TwitterIcon>
            <BsTwitter />
           </TwitterIcon>
          <ButtonContainer>
            <div>
              <Button><BsFillHouseDoorFill style={{"marginLeft": "10px"}}/> <TextPanelLeft> Home </TextPanelLeft> </Button>
              <Button><BsFillQuestionCircleFill style={{"marginLeft": "10px"}}/><TextPanelLeft>About</TextPanelLeft></Button>
            </div>
            <Button background textColor><i className="tweetIcon"> <BsChatQuoteFill/></i><TextPanelLeft tweet center>Twittear</TextPanelLeft></Button>
          </ButtonContainer>
          <Button>
            <TwitterIcon/>
            <ul style={{"listStyle": "none", "fontSize": "15px"}}>
                <li>Fabricio</li>    
                <li><small style={{"fontWeight": "100"}}>@fabricio3g</small></li>
            </ul>
          </Button>
        </PanelLeft>
        <PanelMid>
          
          <TwittsContainers>
          <TopNavPanel><p>Inicio</p></TopNavPanel>
            <FormCard>
              <TextareaForm onChange={this.taxtareaFrom} placeholder="What's happening?"></TextareaForm>
              <Button background textColor style={{"width": "5rem", "height": "2.3rem", "marginRight":"1rem", "textAlign": "center"}}><p style={{"margin": "0 auto"}}>Tweet</p></Button>
            </FormCard>
          </TwittsContainers>
        </PanelMid>
        <PanelRight>

        </PanelRight>
      </Container>
    )
  }
}


export default Main