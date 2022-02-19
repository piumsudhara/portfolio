import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-2.svg",
    title: "Cloud/DevOps",
    content:
      "Working with various cloud platforms and DevOps tools (AWS, Kubernetes, Docker, Jenkins, Terraform, etc.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
      "Have an rich experience in web development using JavaScript, React, PHP, etc.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-2.svg",
    title: "Mobile App Development",
    content:
      "Have an experience in developing native Android applications and Flutter applications",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Expertise" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;