import React from "react";
import styled from "styled-components";
import ImgBg from "../img/Subscribe.png"


const InputGroup = styled.div`
  position: relative;
  top: 20%!important;
  left: 50%!important;
  transform: translate(-50%, -50%)!important;
  max-width: 500px!important;
  border-style: solid!important;
  border-color: darkred!important;
  border-width: 7px!important;

  @media screen and (max-width: 500px) {
    max-width: 400px!important;
  }
    
`

const SubscribeContainer = styled.div`
  position: relative;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
  url(${ImgBg});
  max-height: 100vh;
  max-width: 100%;
  justify-content: center;
  //background-position: ;
  background-size: cover;

  @media screen and (max-width: 2000px) {
    height: 153vh;

  }
  @media screen and (max-width: 1300px) {
    height: 120vh;
  }
    
  @media screen and (max-width: 1000px) {
    height: 100vh;
  }
  @media screen and (max-width: 800px) {
    height: 73vh;
  }

`;

const SubscribePageTitle = styled.div`
  position: relative;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  margin-bottom: 3rem;
  color: white;
`

export const Subscribe = () =>{
    return(
        <SubscribeContainer >

            <SubscribePageTitle className='title col-md-5'>
                <h3>Subscribe</h3>
                <p  className=''>Sign up for real estate news.</p>
            </SubscribePageTitle>

            <InputGroup className="input-group">
                <i className="fas fa-envelope-open-text" style={{marginTop:"10px"}}></i>
                <input type="text" className="form-control fas fontAwesome" placeholder="Enter your email address"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                />
                <button className="btn btn-warning " id="basic-addon2">Get you offer</button>
            </InputGroup>
        </SubscribeContainer>
    )
}