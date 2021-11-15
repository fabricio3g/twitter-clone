import {BsChatQuoteFill, BsTwitter, BsFillHouseDoorFill, BsFillQuestionCircleFill, BsHeart} from 'react-icons/bs'

import React,{ Component } from 'react'
import { Container, Button, PanelLeft, PanelRight, 
  PanelMid, TwittsContainers, ButtonContainer, TwitterIcon, 
  TopNavPanel, FormCard, TextareaForm, TextPanelLeft, UserPhotoRound, TweetCard, TweetCardText
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
          <Button userBtn>
              <UserPhotoRound>
                <img src="https://avatars.githubusercontent.com/u/48396639?v=4" alt="" srcset="" />  
              </UserPhotoRound>
              <ul style={{"listStyle": "none", "fontSize": "15px"}}>
                  <li>Fabricio</li>    
                  <li><small style={{"fontWeight": "300"}}>@fabricio3g</small></li>
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
            <TweetCard>
              <UserPhotoRound >
                <img src="https://avatars.githubusercontent.com/u/48396639?v=4" alt="" srcset="" />  
                </UserPhotoRound >
                <TweetCardText readOnly={true} >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa sed repellat provident, quia illo distinctio minima! Nemo rem, est saepe vitae eius cupiditate natus quas, placeat deleniti assumenda inventore.
                </TweetCardText>
                <BsHeart/>
            </TweetCard>
          </TwittsContainers>
        </PanelMid>
        <PanelRight>

        </PanelRight>
      </Container>
    )
  }
}


export default Main