import React from "react";
import { Container } from "react-bootstrap";
import HomeProducts from "../Components/HomeProducts";
import HomeSlider from "../Components/HomeSlider";

function HomePage() {
  return (
    <>
     
      <Container>
        <HomeSlider />
        <HomeProducts/>
      </Container>
   
    </>
  );
}

export default HomePage;
