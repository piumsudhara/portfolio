import React from "react";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "Deploying a Microservice into Amazon Elastic Kubernetes Service — Part 02",
    image: "images/blog/blog-image1.png",
    filesource: "#",
    author: "Pium Sudhara"
  },
  {
    id: 2,
    title: "Deploying a Microservice into Amazon Elastic Kubernetes Service — Part 01",
    image: "images/blog/blog-image2.png",
    filesource: "https://towardsaws.com/deploying-a-microservice-into-amazon-elastic-kubernetes-service-part-01-24ab53ba3b7e",
    author: "Pium Sudhara"
  },
  {
    id: 3,
    title: "Amazon EKS and ArgoCD",
    image: "images/blog/blog-image3.png",
    filesource: "https://awstip.com/amazon-eks-and-argocd-bb954c980cef",
    author: "Pium Sudhara"
  },
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Latest Posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <a href="https://piumsudhara.medium.com" rel="noreferrer" target="_blank"  className="btn btn-default">
            Show All
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
