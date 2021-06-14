import React, { useState } from 'react'
import styled from "styled-components";
import {
    ContactPageContainer,
    InputContainer,
    ContactPageSubContainer,
    ContactTitle,
    ContactUsPage,
    FormContainer,
    FormFirstName,
    FormLastName,
    FormName,
    FormTitle,
    SubContainerLeft,
    SubContainerRight,
    FormNumber,
    InputNumberContainer,
    Button
}
    from './ContactusStyles'

const FormDropDown = styled.select`
   width:90%;
    height:30px;
    outline-width:none;
    border:none;
    outline-style:none;
    border-bottom:1px solid black;

  option  {
    color: black;
    height: 30px;
    padding:10px;
    border-bottom:1px solid gray;
    background-color:white;
    font-weight:500;
    font-size:16px;
  }
  }`;
function ContactUs() {

    const [State, setState] = useState("Brand")

    const handleUserTypeChange = (event) => {
        setState(event.target.value);
        console.log(State)
    };

    return (
        <ContactUsPage>
            <ContactPageContainer>
                <ContactPageSubContainer>
                    {/* Responsive Left Container */}
                    <SubContainerLeft>
                        <ContactTitle>
                            Contact Us
                        </ContactTitle>
                    </SubContainerLeft>

                    {/* Responsive Right Container */}
                    <SubContainerRight>
                        <FormContainer>
                            <FormTitle>
                                First, We Need A little Information...
                            </FormTitle>

                            <FormDropDown onChange={handleUserTypeChange}>
                                <option value="" hidden>
                                    I would discribe my self as
                                </option>
                                <option value="Influencer">Influencer</option>
                                <option value="Brand">Brand</option>
                            </FormDropDown>

                            {/* Brand Selection */}
                            {
                                State === 'Brand' &&
                                <>
                                    <FormName>
                                        <InputContainer>
                                            <FormFirstName placeholder={"First Name"} />
                                        </InputContainer>
                                        <InputContainer>
                                            <FormLastName placeholder={"Last Name"} />
                                        </InputContainer>
                                    </FormName>
                                    <InputNumberContainer >
                                        <FormNumber placeholder={"Phone Number"} />
                                    </InputNumberContainer>

                                    <InputNumberContainer>
                                        <FormNumber placeholder={"Email"} />
                                    </InputNumberContainer>

                                    <InputNumberContainer>
                                        <FormNumber placeholder={"Website"} />
                                    </InputNumberContainer>


                                    <InputNumberContainer>
                                        <FormNumber placeholder={"Company name"} />
                                    </InputNumberContainer>


                                    <InputNumberContainer>
                                        <FormNumber placeholder={"How can we help you"} />
                                    </InputNumberContainer>

                                </>
                            }

                            {/* Influencer Selection */}
                            {
                                State === 'Influencer' &&
                                <>
                                    <FormName>

                                        <InputContainer>
                                            <FormFirstName placeholder={"First Name"} />
                                        </InputContainer>
                                        <InputContainer>
                                            <FormLastName placeholder={"Last Name"} />
                                        </InputContainer>
                                    </FormName>
                                    <InputNumberContainer >
                                        <FormNumber placeholder={"Phone Number"} />
                                    </InputNumberContainer>

                                    <InputNumberContainer>
                                        <FormNumber placeholder={"Email"} />
                                    </InputNumberContainer>
                                </>
                            }
                            <Button>Submit</Button>
                        </FormContainer>
                    </SubContainerRight>
                </ContactPageSubContainer>
            </ContactPageContainer>
        </ContactUsPage>
    )
}

export default ContactUs
