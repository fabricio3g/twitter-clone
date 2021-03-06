import {BsChatQuoteFill, BsTwitter, BsFillHouseDoorFill, BsFillQuestionCircleFill} from 'react-icons/bs'
import { Button, PanelLeft, ButtonContainer, TwitterIcon, TextPanelLeft, UserPhotoRound, UserInfoUl} from '../Styles.jsx'
import React,{ Component } from 'react'
import { Outlet, Link, useNavigate} from "react-router-dom";

function PanelLeftComponent (){


    const navagateTo = ( route ) =>{
      console.log('Hey this route is: ',route )
    }


    return(
      <PanelLeft>
         <TwitterIcon>
          <BsTwitter />
         </TwitterIcon>
        <ButtonContainer>
          <div>
            <Button><BsFillHouseDoorFill style={{"marginLeft": "10px"}}/> <TextPanelLeft> <Link style={{'textDecoration': 'none',  color: 'inherit'}} to="/home">Home </Link> </TextPanelLeft> </Button>
            <Button><BsFillQuestionCircleFill style={{"marginLeft": "10px"}}/><TextPanelLeft><Link style={{'textDecoration': 'none', color: 'inherit'}} to="/About"> About </Link></TextPanelLeft></Button>
          </div>
          <div>
            <Button background textColor><i className="tweetIcon"> <BsChatQuoteFill/></i><TextPanelLeft tweet center>Twittear</TextPanelLeft></Button>
            <Button userBtn>
              <UserPhotoRound>
                <img src="https://avatars.githubusercontent.com/u/48396639?v=4" alt="" srcset="" />  
              </UserPhotoRound>
                <UserInfoUl>
                    <li>Fabricio</li>    
                    <li><small style={{"fontWeight": "300"}}>@fabricio3g</small></li>
                </UserInfoUl>
            </Button>
          </div>
        </ButtonContainer>
        
      </PanelLeft> )
    

    

  }  
  
    

  export default PanelLeftComponent


