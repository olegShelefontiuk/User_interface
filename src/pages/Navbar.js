import logo from "../img/logo.png"
import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
    @media screen and (max-width: 800px) {
    margin-left: 0px;
  }
`

export const Navbar = () => (

    <nav  className="navbar navbar-expand-lg navbar-light bg-white container">

            <Container className="navbar-brand" href="#"><img src={logo} alt="" width="200px" height="65px"/></Container>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Container className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">How it works</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </Container>

    </nav>

)