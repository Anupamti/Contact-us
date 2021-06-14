import styled from "styled-components"
import { Container } from '../GlobalStyles'


export const ContactUsPage = styled.div`
    width:100%;
    height:500px;

     @media screen and (max-width:768px){
            height:700px;

    }

`;

export const ContactPageContainer = styled(Container)`
    background-image:url('/Assets/map.jpg');
    background-repeat:no-repeat;
    height:100%;

      @media screen and (max-width:768px){
            display:flex;
            justify-content:center;

    }
    
    
`;

export const ContactPageSubContainer = styled.div`
    height:400px;
    width:100%;
    display:flex;
    margin:30px;
    

     @media screen and (max-width:768px){
            display:flex;
            flex-direction:column;
            justify-content:center;
            
           
    }
  
`;



export const SubContainerLeft = styled.div`
    flex:0.4;
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;

     @media screen and (max-width:768px){
            display:flex;
            flex-direction:column;
            justify-content:center;
    }
    
`;

export const SubContainerRight = styled.div`
    flex:0.6;
    display:flex;
    justify-content:flex-end;
    align-items:center;

     @media screen and (max-width:768px){
            display:flex;
            flex-direction:column;
            justify-content:center;
    }
    
`;
export const ContactTitle = styled.h1`

    @media screen and (max-width:768px){
           margin:0 auto;
           background-color:white;
           opacity:0.9;
           /* border-radius:30px; */
           padding:10px 20px;
           
    }
    
`;

export const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:white;
    opacity:0.9;
    height:fit-content;
    width:400px;
    border-radius:20px;
    padding:10px;
    box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;
   @media screen and (max-width:768px){
     height:fit-content;
    width:fit-content;
    }

`;

export const FormTitle = styled.h4`
    font-weight:600;
`;

export const FormDropDown = styled.select`
    width:90%;  
    height:30px;
    outline-width:none;
    border:none;
    outline-style:none;
    border-bottom:1px solid black;
`;

export const FormName = styled.div`
    height:fit-content;
    display:flex;
    justify-content:center;
    margin-top:10px;

    @media screen and (max-width:768px){
     display:flex;
    justify-content:center;
    flex-direction:column;
    align-item:center;
    width:100%;
    marign:0;
    
    }

`;

export const FormFirstName = styled.input`
    margin-top:10px;
    border:none;
    outline:none;
    width:100%;

`;

export const FormLastName = styled(FormFirstName)`

`;

export const FormNumber = styled(FormFirstName)`
    display:flex;
    justify-content:flex-start;

`;
export const InputContainer = styled.div`
    display:flex;
    justify-content:center;
    border-bottom:1px solid black;
    margin:10px;
    
    
`;
export const InputNumberContainer = styled(InputContainer)`
    display:flex;
    justify-content:flex-start;
    margin:10px 20px;
    width:90%;
`;

export const Button = styled.div`
    height:20px;
    width:60px;
    border-radius:30px;
    background-color:black;
    color:white;
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
`;

