
import React,{ Component } from 'react'
import { Container, PanelRight } from '../Styles.jsx'
import {Routes, Route} from 'react-router-dom'
// COMPONENTS
import PanelLeftComponent from '../Components/PanelLeftComponent.jsx'
import PanelMidComponent from '../Components/PanelMidComponent.jsx'



class Main extends Component{


  

  render(){

    return(
      <Container>
        <PanelLeftComponent/>
        <Routes basename="/">
            <Route path="/home" element={<PanelMidComponent/>}/>
            <Route path="/about" element={<div> About </div>}/>
       </Routes>
      <PanelRight>
      </PanelRight>
      </Container>
    )
  }
}


export default Main