import React from "react";
import ImgBg from "../img/container.jpg";
import styled from "styled-components";

const FirstPageContainer = styled.div`
  position: relative;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 80vh;
  justify-content: center;
  //background-position: ;
  background-size: cover;
  
`;

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

const FirstPageTitle = styled.div`
  position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  margin-bottom: 3rem;
  color: white;
`

export const FirstPage =() =>{
    return(
        <FirstPageContainer>
            <FirstPageTitle className="col-md-5">
                <h3>Sell Your House Instantly</h3>
                <p className="col-md-10">Simply tell us about your house and get
                    guarantee cash offer within 24 hours</p>
            </FirstPageTitle>

            <InputGroup className="input-group class">
                <input type="text" className="form-control" placeholder="Submit your house details"
                       aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button className="btn btn-warning " id="basic-addon2">Get you offer</button>
            </InputGroup>
        </FirstPageContainer>
    )
}

