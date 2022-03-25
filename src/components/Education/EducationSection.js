import React from "react";
import EducationView from "./EducationView";

const EducationSection = () => {
  const newStudy = (imageURL, school, years, title, link) => ({
    imageURL,
    school,
    years,
    title,
    link,
  });
  const education = [
    newStudy(
      "./ungs.png",
      "Universidad General Sarmiento",
      "2019-2023",
      "Tecnicatura universitaria en informatica",
      "https://www.ungs.edu.ar/carrera/tecnicatura-universitaria-en-informatica"
    ),
    newStudy(
      "./utn.png",
      "Universidad Tecnologica Nacional",
      "2019",
      "Experto universitario en programacion con especializacion en Java",
        "https://sceu.frba.utn.edu.ar/e-learning/detalle/experto-universitario/1745/experto-universitario-en-programacion-con-especializacion-en-un-lenguaje"
    ),
    newStudy(
      "./filo.png",
      "Universidad de Buenos Aires (UBA)",
      "2015-2018",
      "Licenciatura en Filosofia Practica",
      "http://filosofia.filo.uba.ar/"
    ),
  ];

  return <EducationView education={education} />;
};

export default EducationSection;
