import styled from 'styled-components'


export  const TwitterIcon = styled.button`
    height: 4rem;
    width: 4rem;
    margin-right: 15px;
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
`


export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;900&display=swap');
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 1200px;
    height: 100vh;
`

export const TopNavPanel= styled.div`
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    font-weight: 800;
    cursor: pointer;
    width: 540px;
    padding: 1.5rem;
    height: 2rem;
    background-color: #fff;
    border: 1px solid #EFF3F4;
`


export const ButtonContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;

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
` 

export const PanelLeft = styled.div`
    width: 30%;
    padding: 1.5rem;

`
export const PanelMid = styled.div`
    position: relative;
    width: 45%;
`
export const PanelRight = styled.div`
    /* width: 15%; */
`



export const TwittsContainers = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #EFF3F4;
`


export const FormCard = styled.form`
    margin-top:3rem;
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

