import React from "react";
import TrackVisibility from "react-on-screen";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Pium Sudhara",
  avatarImage: "/images/profile.png",
  content:
    "I am Pium Sudhara, Cloud Engineer from Colombo, Sri Lanka. Dedicated, adaptive, hardworking tech enthusiast seeks out new knowledge and skills. 2 years of experience development side.",
};

const progressData = [
  {
    id: 1,
    title: "Development",
    percantage: 75,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Cloud/DevOps",
    percantage: 60,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "Self Study",
    percantage: 100,
    progressColor: "#6C6CE5",
  },
];

// const counterData = [
//   {
//     id: 1,
//     title: "Projects completed",
//     count: 198,
//     icon: "icon-fire",
//   },
//   {
//     id: 2,
//     title: "Cup of coffee",
//     count: 5670,
//     icon: "icon-cup",
//   },
//   {
//     id: 3,
//     title: "Satisfied clients",
//     count: 427,
//     icon: "icon-people",
//   },
//   {
//     id: 4,
//     title: "Nominees winner",
//     count: 35,
//     icon: "icon-badge",
//   },
// ];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} width="170" height="170"/>
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="https://firebasestorage.googleapis.com/v0/b/pium95.appspot.com/o/Pium_Karunasena.pdf?alt=media&token=122a7403-c39e-4958-8c47-57b7a16cfbf0" rel="noreferrer" target="_blank" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {/* {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default About;
