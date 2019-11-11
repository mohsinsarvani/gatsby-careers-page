import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  /* background-color: #000000;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center; */

  background-color: #000000;
  min-height: 8rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  letter-spacing: 1.3;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;

  /* color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  letter-spacing: 1.3;
  background-color: #000000;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%; */
`;

// const ExternalLink = styled.a`
//   color: rgba(246, 2, 251, 0.6);
//   text-decoration: none;
// `;

const Footer = () => (
  <Container>
    <p>© 2019 frontenddeveloperjob.dk</p>
  </Container>
);

export default Footer;
