import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

interface SectionProps {
  title: string;
  images: Array<any>;
}

export const Jewelry = ({ images, title }: SectionProps) => {
  return (
    <section
      style={{
        backgroundColor: "#FCF3E2",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>{title}</h1>
      <Carousel
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          width: "100%",
          height: "100%", 
          overflow: "hidden",
          borderRadius: 8
        }}
      >
        {images?.map((image, index) => {
          return (
            <Carousel.Item interval={3000} key={index}>
              <Image src={image} alt="imagem-joia" style={{maxHeight: "590px", maxWidth: "inherit", width: "inherit", height: "590px", objectFit: "cover", borderRadius: 8}} quality={100}/>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};
