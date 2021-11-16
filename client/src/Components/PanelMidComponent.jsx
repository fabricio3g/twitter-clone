import {BsHeart} from 'react-icons/bs'

import { Button, 
  PanelMid, TwittsContainers,
  TopNavPanel, FormCard, TextareaForm, UserPhotoRound, TweetCard, TweetCardText
} from '../Styles.jsx'


import React, {Component} from 'react'


class PanelMidComponent extends Component{

  render(){
    return(
      
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

    )
  }
     
  
}




export default PanelMidComponent