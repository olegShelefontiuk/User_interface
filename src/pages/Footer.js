import React from 'react';

import styled from "styled-components";



 const FooterContainer = styled.footer`
  background-color: black;
`;

const FooterWrap = styled.div`
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  color: white;
  font-size: 0.7rem;
`;


export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <p>Copyright @ 2017 Real Estate Company Template - All rights Reserved.</p>
            </FooterWrap>
        </FooterContainer>
    );
};

