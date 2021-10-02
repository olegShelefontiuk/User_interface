import React from "react";
import '../styles/App.css'
import styled from "styled-components";


const OrangeCardContainer = styled.div`
  min-height: 80vh;
  margin-top: 50px;
  overflow: hidden;
 
  
`;

const Container = styled.div`
  justify-content: center;
  @media screen and (max-width: 800px) {
    margin-left: 0px;
  }
`

const CardsOrange = styled.div`
 width: 18rem;
  margin-right: 13px;
  border-style: initial;
  background-color: orange;
  box-shadow: 1px 1px lightblue, -.5em 0 .4em lightblue;
  
  @media screen and (max-width: 1000px) {
    margin-left: 10px;
    width: 13rem;
    margin-top: 30px;
  }
  @media screen and (max-width: 700px) {
    margin-top: 30px;
      margin-right: 5px;
      margin-bottom: 5px;
      font-size: 0.7rem;
    }
  @media screen and (max-width: 500px) {
    margin-top: 30px;
  }
  
`
const CardsOrangeTwo = styled(CardsOrange)`
  @media screen and (max-width: 1000px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 700px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 30px;
  }
`
const CardsOrangeThree = styled(CardsOrange)`
  @media screen and (max-width: 1000px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 700px) {
    margin-top: 30px;
    display: none;
  }
  
`


export const OrangeCards = () =>{
    return(
        <OrangeCardContainer>
        <Container className="row" >
            <CardsOrange  >
                        <ul className="list-group list-group-flush" >
                            <li  className="list-group-item orange2"></li>
                            <li className="list-group-item orange">How many days will it take to sell?</li>
                            <li  className="list-group-item orange3">Do I have to open house for public inspection?</li>
                            <li  className="list-group-item orange">Do I have to repair house before selling?</li>
                            <li  className="list-group-item orange">Do I have to pay selling commission?</li>
                            <li  className="list-group-item orange">Can i stay till my other house is ready?</li>
                        </ul>
            </CardsOrange>
            <CardsOrangeTwo>
                <div className="card-body-orange">
                    <ul className="list-group list-group-flush">
                        <li  className="list-group-item orange1">Housecart</li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox1" checked={true} value="" aria-label="..."/>
                                    <label htmlFor="checkbox1"> </label> <span style={{marginLeft:"10px"}}>Receive an all cash offer in 24 hours</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange3">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox2" checked={true} value="" aria-label="..."/>
                                    <label htmlFor="checkbox2"> </label> <span style={{marginLeft:"10px"}}>No showing or public inspections</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox3" checked={true} value="" aria-label="..."/>
                                    <label htmlFor="checkbox3"> </label> <span style={{marginLeft:"10px"}}>No repairs or dress for sale</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox4"checked={true} value="true" aria-label="..."/>
                                    <label htmlFor="checkbox4"> </label> <span style={{marginLeft:"10px"}}>Thousands of dollars for sale</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox5" checked={true} value="" aria-label="..."/>
                                    <label htmlFor="checkbox5"> </label> <span style={{marginLeft:"10px"}}>Stay till you move to your new house</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </CardsOrangeTwo>
            <CardsOrangeThree>
                <div className="card-body-orange">
                    <ul className="list-group list-group-flush">
                        <li  className="list-group-item orange1">Traditional Home Sales</li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox6" checked={true} value="" aria-label="..."/>
                                    <label htmlFor="checkbox6"> </label> <span style={{marginLeft:"10px"}}>House on market for over 3 month</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox7" checked={true} value="" aria-label="..."/>
                                    <label htmlFor="checkbox7"> </label> <span style={{marginLeft:"10px"}}>Spend Thousands of dollars in repair to make it ready for sale</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox8" checked={true} value="" aria-label="..."/>
                                    <label htmlFor="checkbox8"> </label> <span style={{marginLeft:"10px"}}>Pay thousands of dollars in agent fees</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox9" checked={true} value="" aria-label="..."/>
                                    <label htmlFor="checkbox9"> </label> <span style={{marginLeft:"10px"}}>Pay thousands of dollars in agent fees</span>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item orange">
                            <div className="container">
                                <div className="round">
                                    <input type="checkbox" id="checkbox10" checked={true} value="" aria-label="..."/>
                                    <label htmlFor="checkbox10"> </label> <span className="col-md-12" style={{marginLeft:"10px"}}>Make immediately nice sold may need to double mortgage </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </CardsOrangeThree>
        </Container>
        </OrangeCardContainer>
    )
}