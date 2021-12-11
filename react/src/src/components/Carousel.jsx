import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../page/style.css';

const Carousell = ({ carouselData, style }) => {
  return (
    <Carousel style={style}>
      {carouselData.map((data, index) => (
        <Carousel.Item key={index} style={{objectFit:'cover', height: '100vh'}}>
          {data.content}
          <Carousel.Caption>
            <h3>{data.title}</h3>
            <h1>{data.judul}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousell;