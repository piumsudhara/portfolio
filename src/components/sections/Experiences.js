import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "BSc(hons) Software Engineering",
    years: "2019 - Present",
    content:
      "Graduated from University of Plymouth with Second Class-Upper Division honours",
  },
  {
    id: 2,
    title: "Certificate Course in Computer Science",
    years: "2017 - 2017",
    content:
      "National School of Business Management, Colombo, Sri Lanka",
  },
  {
    id: 3,
    title: "Diploma in Software Engineering",
    years: "2014 - 2016",
    content:
      "National Institute of Business Management, Colombo, Sri Lanka",
  },
  {
    id: 4,
    title: "Certificate Course in Computer Science",
    years: "2012 - 2012",
    content:
      "National Institute of Business Management, Colombo, Sri Lanka",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Cloud Operations Engineer at LSEG",
    years: "2022 - Present",
    content:
      "Leading global financial markets infrastructure and data provider.",
  },
  {
    id: 2,
    title: "Associate Site Reliability Engineer at Chakray",
    years: "2021 - 2022",
    content:
      "Design strategies and implement best of breed Integration, API, DevOps and Identity technologies",
  },
  {
    id: 3,
    title: "Full Stack Developer at Codezilla",
    years: "2017 - 2013",
    content:
      "Codezilla small startup based in Colombo. Developing web applications, and mobile applications.",
  },
  {
    id: 4,
    title: "Android Developer at Moneta",
    years: "2019 - 2019",
    content:
      "Development and maintenance of 'Moneta' the financial Android Application and their back-end services.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
