import styled from "styled-components";
import { Container } from "../GlobalStyles";

export const FooterMain = styled.div`
    width:100%;
    background-color:black;
    height:fit-content;
    color:white;

`;
export const FooterContainer = styled(Container)`
        display:flex;
          @media screen and (max-width:768px){
            display:flex;
            flex-direction:column;
            justify-content:center;
            padding:20px;
           }
          
`;


export const FooterLeft = styled.div`
    flex:0.5;
    display:flex;
    flex-direction:column;
    margin:10px;

     @media screen and (max-width:768px){
            display:flex;
            flex-direction:column;
            justify-content:center;
            width:80%;
            margin:20px;
           }
`;

export const FooterRight = styled.div`
    flex:0.5;
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
   
`;

export const LeftContainerOne = styled.div`
    flex:0.5;
    height:100%;
    font-weight:${({ bold }) => bold ? "700" : "300"};


`;

export const LeftContainertwo = styled.div`
    flex:0.5
`;
export const FooterTop = styled.div`
    display:flex;
    margin:10px;

      @media screen and (max-width:768px){
            display:flex;
            flex-direction:column;
            justify-content:center;
            width:100%;
            margin:0 auto;
           }
`;

export const FooterBottom = styled(FooterTop)`

`;

export const FooterIcons = styled.div`
    margin:5px 10px;
    color:black;
    
`;

export const FooterRound = styled.div`
    background-color:white;
    padding:10px;
    height:20px;
    width:20px;
    border-radius:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;