import React, { useEffect, useState } from "react";
import PageFrame from "../layouts/pageFrame/PageFrame";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

const Projects = () => {
  const [images, setImages] = useState([]);
  const generateImageToSlide = (src, alt) => ({
    src,
    alt,
  });
  useEffect(() => {
    setImages([
      ...images,
      generateImageToSlide(
        "./proyectos/JardinApp/login.png",
        "login JardinApp"
      ),
      generateImageToSlide("./proyectos/Web filo/nit.png", "web filo"),
      generateImageToSlide("./proyectos/Agenda de contacto/asdas.png", "contact"),
    ]);
  }, []);

  return (
    <PageFrame>
      <div className="wrapper">
        <h2>Autoplay</h2>

        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            rewind: true,
            autoplay: true,
            width:400,
            pauseOnHover: false,
            resetProgress: true,
            arrows: "slider",
            height: "10rem",
          }}
          hasSliderWrapper
          hasAutoplayProgress
        >
          {images.map((slide) => (
            <SplideSlide key={slide.src}>
              <img src={slide.src} alt={slide.alt} style={{width:'100%', height:'30vw', objectFit:'contain'}}/>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </PageFrame>
  );
};

export default Projects;
