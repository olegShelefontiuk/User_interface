import React from "react";
import '../styles/App.css'
import ImgBg3 from '../img/dom-2.png'
import styled from "styled-components";


const SellHouseContainer = styled.div`
  background-color: white;
  height: 150vh;
  background-repeat: no-repeat;
  overflow: hidden;
  //margin-bottom: 10rem;
  position: relative;  
  
`;

export const SellHouseWallpaper = styled.div`
  background-image: 
  url(${ImgBg3});
  height: 220px;
  width: 95%;
  position: absolute;
 
  top: 70%;
  left: -23%;
  `

const Container = styled.div`
  margin-top: 40px;
  justify-content: center;
  
    @media screen and (max-width: 800px) {
    margin-left: 10px;
  }
`
const SmallForm = styled.form`
  margin-right: 2rem;
  width: 18rem;
  padding: 1.2rem;
  height:22rem;
  box-shadow: 1px 1px lightblue, 0em 0 .4em lightblue;

  @media screen and (max-width: 1000px) {

    width: 13rem;
  }

  @media screen and (max-width: 700px) {
    margin-left: 0px;
    width: 11rem;
  }
`
const SellHouseButton = styled.button`
  width: 85%;
  margin-left: 7%;
  margin-bottom: 50px;
  @media screen and (max-width: 1000px) {
    font-size: .8rem;
  }
`
const SelHouseSubmitButton = styled.button`
  width: 40%;
  margin-left: 54%;
  margin-bottom: 50px;
  margin-top: 2rem;
  @media screen and (max-width: 500px) {
    font-size: .8rem;
  }
`

const SellHouseForm = styled.form`
  
  border-style: initial!important;
  /*width: 35rem!important;*/
  box-shadow: 1px 1px lightblue, 0em 0 .4em lightblue !important;
  position: page !important;

  @media screen and (max-width: 1000px) {
    font-size: .8rem;
    width: 20rem;
  }
  @media screen and (max-width: 600px) {
    width: 15rem;
  }
`
export const SellHouse = () =>{
    return(
        <SellHouseContainer>
            <SellHouseWallpaper />
        <Container className="row" >

            <SmallForm>

                <div className="mb-4 sell-house">
                    <h12 className="card-title text-center p-2">Sell Your House Instantly</h12>
                    <p className="card-text text-center p-2">Simply tell us about your house and get a
                    guaranteed cash offer within 24 hours</p>
                    <input type="password" className="form-control sell-house" id="exampleInputPassword1" placeholder="Submit your house details"/>
                </div>
                <SellHouseButton type="submit" className="btn btn-warning">Get you offer</SellHouseButton>
            </SmallForm>
            <SellHouseForm className="card-form ">
                <div className="col-md4 sell-house container">
                    <h5 className="margin">Get in touch</h5>
                    <input type="text" className="form-control sell-house" name="Name " id="exampleInputPassword2" placeholder="Your name"/>
                    <input type="text" className="form-control sell-house" name="Email" id="exampleInputPassword3" placeholder="Your email address"/>
                    <input type="text" className="form-control sell-house" name="PhoneNumber" id="exampleInputPassword4" placeholder="Your phone number"/>
                    <input type="text" className="form-control sell-house" name="Subject" id="exampleInputPassword5" placeholder="Subject"/>
                    <textarea className="form-control sell-house"
                           rows="8"
                           cols="50"
                           name="message"
                              id="exampleInput6"
                              placeholder="Leave a message"/>



                </div>
                <SelHouseSubmitButton type="submit" className="btn btn-warning ">Submit Now</SelHouseSubmitButton>
            </SellHouseForm>
        </Container>
        </SellHouseContainer>
    )
}