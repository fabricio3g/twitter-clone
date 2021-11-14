import { BsTwitter, BsFillHouseDoorFill, BsFillQuestionCircleFill} from 'react-icons/bs'

import React,{ Component } from 'react'
import { Container, Button, PanelLeft, PanelRight, 
  PanelMid, TwittsContainers, ButtonContainer, TwitterIcon, 
  TopNavPanel, FormCard, TextareaForm
} from '../Styles.jsx'

class Main extends Component{


  taxtareaFrom (e) {
      e.target.value

  }



  render(){

    return(
      <Container>
        <PanelLeft>
           <TwitterIcon style={{"marginLeft": "25px"}}>
            <BsTwitter />
           </TwitterIcon>
          <ButtonContainer>
            <div>
              <Button><BsFillHouseDoorFill style={{"marginLeft": "10px"}}/><p style={{"marginLeft": "10px"}}>Home</p></Button>
              <Button><BsFillQuestionCircleFill style={{"marginLeft": "10px"}}/><p style={{"marginLeft": "10px"}}>About</p></Button>
            </div>
            <Button background textColor><p style={{"margin": "0 auto", "fontWeight": "900"}}>Twittear</p></Button>
          </ButtonContainer>
          <Button><TwitterIcon/>
            <ul style={{"listStyle": "none", "fontSize": "15px"}}>
                <li>Fabricio</li>    
                <li><small style={{"fontWeight": "100"}}>@fabricio3g</small></li>
            </ul>
          </Button>
        </PanelLeft>
        <PanelMid>
          <TopNavPanel>Inicio</TopNavPanel>
          <TwittsContainers>
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