import React, { createContext } from "react";
import { Navbar, Container, Nav, NavDropdown, Carousel} from 'react-bootstrap';
import './NavBar.css'
import Anime from "./Anime";

const Content = createContext();

const NavBar = () => {
  const item5 = [{Name: ["Anime"], contents: ["Demon-Slayer", "Fruits_Basket", "Kaguya", "OnePiece", "TokyoRevengers", "More", "Kaguya", "OnePiece", "TokyoRevengers", "More"]}, 
  {Name: ["Manga"], contents: ["SpyxFamily", "Nana", "MaisonIkkokku", "LoveHina", "Nisekoi", "TokyoGhoul", "KimiNoTodke", "BoysOverFlowers", "TokyoRevengers", "AOT"]}, 
  {Name: ["LightNovel"], contents: ["SilentVoice", "EatYourPancreas"]},
  {Name: ["VisualNovel"], contents: ["SteinGate"]}
]
  
    return(
      <>
      <div className="bg-dark">
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="/Images/Project.jpg" width="100" height="100" className="d-inline-block align-top"
        alt="Anime World logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <NavDropdown title="Hey" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#"></NavDropdown.Item>
              </NavDropdown>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

      <div className="Main">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Images/1.jpg"
      alt="First slide"
      width="100px"
      height="400px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

{item5.map((item5) => { 
  return <Content.Provider value={{item5}}>
    <Anime/>
    </Content.Provider>
    })}
      </div>
      </>
    )
}

export default NavBar;
export {Content};