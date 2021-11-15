import styled from 'styled-components'


export  const TwitterIcon = styled.button`
    height: 4rem;
    width: 4rem;
    margin-left: 25px;
    border:none;
    color: #41b3fa;
    background: none;
    text-align: center;
    border-radius: 90%;
    font-size: 2rem;
    &:hover ${TwitterIcon}{
      background-color: #cee9ff;
      cursor: pointer;
    }
    ${TwitterIcon} > svg{
        margin-right: 0px;
        align-items: center;
        align-self: center;
    }
    @media (max-width: 800px) {
        ${TwitterIcon} > svg{
          font-size: 1.2rem;
          margin: 0 auto;
        }

        ${TwitterIcon}{
            height: 2rem;
            width: 0;
            margin-right: 60px ;
        }
        
    }
`


export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;900&display=swap');
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 1200px;
    height: 100vh;
    
    @media (max-width: 800px) {
        width: 100%;
    }
    
`

export const TopNavPanel= styled.div`
    top: 0;
    display: inline-block;
    width: 100%;
    
    font-weight: 800;
    cursor: pointer;
    padding: 1.5rem;
    height: 2rem;
    background-color: #fff;
    border: 1px solid #EFF3F4;
    ${TopNavPanel} > p{
          line-height: 5px;
           margin-bottom: 10px;
        }
    @media (max-width: 800px) {
        ${TopNavPanel} > p{
        }

    }
`


export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    @media (max-width: 800px) {
   
    }

` 





export const Button =  styled.div`
    height: 3rem;
    width: 80%;
    padding: .2rem;
    display: flex;
    color: ${props => props.textColor ? "#fff" : "#000;"};
    align-items: center;
    font-size: large;
    text-align: center;
    margin:.5rem auto;
    background-color: ${props => props.background ? "#1E9BEB" : "#fff;"};
    border-radius: 5rem;
    &:hover ${Button}{
      background-color: ${props => props.background ? "#41b3fa" : "#e4e4e4;"};
      cursor: pointer;
    }
    ${Button} > i{
        
        display: none;
    }

    @media (max-width: 800px) {
       width: 3rem;
       ${Button} > i{
           display: block;
           margin: auto;
    }
    }
` 

export const PanelLeft = styled.div`
    width: 30%;
    @media (max-width: 800px) {
       width: 5.3rem;
       padding: .5rem;
    }
    

`
export const PanelMid = styled.div`
    width: 45%;
    overflow: auto;
    @media (max-width: 800px) {
       width: 100%;
    }
`
export const PanelRight = styled.div`
    width: 15%; 
    @media (max-width: 800px) {
       display: none;
    }
`

export const TextPanelLeft = styled.p`
    margin-left: 10px;
    font-weight: ${props => props.tweet ? 800 : 400};
    margin: ${props => props.center ? "0 auto" : "10px"};
    @media (max-width: 800px) {
       display: none;
    }

`

export const TwittsContainers = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #EFF3F4;
    
`


export const FormCard = styled.form`
    width: 100%;
    height: 10rem;
    border: 1px solid #EFF3F4;
`

export const TextareaForm = styled.textarea`
    outline: none;
    resize: none;
    width: 100%;
    border: none;
    padding: 1rem;
    height: 6rem;
    border-bottom: 1px solid #EFF3F4;
    ::placeholder,
    ::-webkit-input-placeholder {
        font-weight: 200;
        font-size: 15px;
    }
    :-ms-input-placeholder {
        font-weight: 200;
        font-size: 15px;
    }
`

