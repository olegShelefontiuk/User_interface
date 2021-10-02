import React from "react";
import '../styles/App.css'
import ImgBg1 from '../img/img5.png'
import ImgBg2 from '../img/img6.png'
import ReactPlayer from 'react-player'

import styled from "styled-components";


const ThreeStepsContainer = styled.div`
  
  position: relative;
  margin-right: -0%;
  margin-left: 0%;
  max-height: 230vh;
  overflow: hidden;
  max-width: 100%;
  background-color: lightgrey;
  
`;

const ThreeStepsWallpaper = styled.div`
  margin-top: -200px;
  margin-left: 0%;
  max-width: 100%;
  overflow: hidden;
  justify-content: space-between;
  background-color: lightgrey;
  
`

const Media = styled.div`

  position: relative;
  //top: 30%!important;
  left: 70%!important;
  transform: translate(-50%, 10%)!important;
  font-size: 30rem;
  @media screen and (max-width: 600px) {
 
    
    left: 40%!important;
  }
`


const KeyFeaturesTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  margin-top: 30px;
  margin-bottom: 20px;
  text-decoration-color: black;
  cursor: pointer;
  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;


const Container = styled.div`
  justify-content: center;
  overflow: hidden;
  //@media screen and (max-width: 800px) {
    //margin-left: 0px;
  //}
`

const Cards = styled.div`
  border-style: initial;
  margin-right: 13px;
  width: 18rem;
  //overflow: hidden;
  background-color: white;
  box-shadow: 1px 1px lightblue, -.5em 0 .4em lightblue;
  @media screen and (max-width: 1000px) {
  //  
  margin-top: 1rem;
    width: 13rem;
    height: 13rem;
    font-size: .7rem;
  }
  
`

const CardThree = styled.div`
  border-style: initial;
  margin-right: 13px;
  width: 18rem;
  background-color: white;
  box-shadow: 1px 1px lightblue, -.5em 0 .4em lightblue;
  @media screen and (max-width: 1000px) {
    margin-top: 1rem;
    width: 13rem;
    height: 13rem;
    font-size: .7rem;
  }
  @media screen and (max-width: 700px) {
    
  display: none;
  }
  
`

const CardTitle = styled.h1`
  font-size: 2.8rem;
  @media screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
`

const CardSubTitle = styled.h5`
  font-size: 2rem;
  @media screen and (max-width: 1000px) {

    font-size: 1rem;
  }
`

const Img = styled.img`
  width: 250px;
  @media screen and (max-width: 500px) {
    width: 200px;
  }

  `
const Img2 = styled.img`
  
  width: 250px;
  @media screen and (max-width: 520px) {
    width: 200px;
  }
`



export const ThreeSteps = () =>{
    return(
        <ThreeStepsContainer >
            <KeyFeaturesTitle > Sell in 3 Easy Steps</KeyFeaturesTitle>
            <hr  />


        <Container className="row " >

            <Cards>

                    <CardTitle className="card-title text-center p-2">01</CardTitle>
                    <CardSubTitle className="card-title text-center p-2" >
                        Submit your house details
                    </CardSubTitle>
                    <p className="card-text text-center p-2">
                        Fill a quick form with details of your house
                    </p>

            </Cards>
            <Cards>
                <div className="card-body1">
                    <CardTitle className="card-title text-center p-2">02</CardTitle>
                    <CardSubTitle className="card-title text-center p-2" >Get all cash offer within 24 hours</CardSubTitle>
                    <p className="card-text text-center p-2">We review your details and submit you all cash offer
                    based on market price</p>

                </div>
            </Cards>
            <CardThree>
                <div className="card-body1">

                    <CardTitle className="card-title text-center p-2">03</CardTitle>
                    <CardSubTitle className="card-title text-center p-2" >Receive your money</CardSubTitle>
                    <p className="card-text text-center p-2">You can accept the offer, from offer to close within 3 days </p>

                </div>
            </CardThree>
        </Container>
            <ThreeStepsWallpaper >

                <Media>
                <ReactPlayer
                    controls url="https://www.youtube.com/watch?v=7sDY4m8KNLc" />
                </Media>
               <div className='row' style={{justifyContent:"space-between"}}>
                <div><Img src={ImgBg2}  alt=''/></div>

                <div> <Img2 src={ImgBg1} alt='' /></div>
               </div>
            </ThreeStepsWallpaper>
        </ThreeStepsContainer>
    )
}