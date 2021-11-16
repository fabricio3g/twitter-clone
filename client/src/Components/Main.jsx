
import React,{ Component } from 'react'
import { Container, PanelRight } from '../Styles.jsx'

// COMPONENTS
import PanelLeftComponent from './PanelLeftComponent.jsx'
import PanelMidComponent from './PanelMidComponent.jsx'



class Main extends Component{


  taxtareaFrom (e) {
      e.target.value

  }



  render(){

    return(
      <Container>
        <PanelLeftComponent/>
        <PanelMidComponent/>
        <PanelRight>
        </PanelRight>
      </Container>
    )
  }
}


export default Main