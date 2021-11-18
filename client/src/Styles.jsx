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
    padding: 0;
    margin: 0 auto;
    width: 100%;
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
    height: 70%;

` 





export const Button =  styled.div`
    height:  ${props => props.userBtn ? "4rem" : "3rem"};
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
    width: 20%;
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


export const UserPhotoRound = styled.div`
    height: 1rem;
    padding: .2rem;
    border-radius: 1rem;
    margin: 3px 30px auto 0;
    ${UserPhotoRound} > img{
        margin: auto 0 auto 0;
        width: 3rem;
        border-radius: 6rem;
    }
    @media (max-width: 800px) {
        margin: auto auto 2.3rem -.2rem;
        ${UserPhotoRound} > img{
        width: 2.5rem;
        border-radius: 6rem;
    }
    }

   
`

export const UserInfoUl = styled.ul`
    list-style: none;
    font-size: 15px;
    @media (max-width: 800px) {
       display: none;
       
    }


`


export const TweetCardText = styled.textarea`
    width: 70%;
    outline: none;
    border: none;
    margin: auto 0 auto 70px;
    resize: none;
    overflow: hidden;
    height: 120px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Lato', sans-serif;
    :hover{
        background-color: #e4e4e4;
    }
    
`

export const TweetCard = styled.div`
    width: 100%;
    padding: 5px;
    ${TweetCard}:hover{
        background-color: #e4e4e4;
    }
    ${TweetCard}:hover ${TweetCardText}:not(:hover) {
        background-color: #e4e4e4;
    }
    
`




export const SmallCard = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 30rem;
    height: 15rem;
    margin:10% auto;
    padding: 5px;
`

export const ButtonRegister = styled.button`
    margin:0 auto;
    height: 3rem;
    font-size:20px;
    width: 10rem;
    background:#1E9BEB;
    color:white;
    border:none;
    border-radius: 2rem;
    cursor:pointer;
    ${ButtonRegister}:hover{
        background:#41b3fa;
    }

`

export const ImgResponsive = styled.img`
    object-fit: cover;
    background:#41b3fa68;
    width: 100%;
`