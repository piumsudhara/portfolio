import React from "react";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "Deploy React App to AWS Fargate — Part 02",
    image: "images/blog/blog-image1.png",
    filesource: "#",
    author: "Pium Sudhara"
  },
  {
    id: 2,
    title: "Deploy React App to AWS Fargate — Part 01",
    image: "images/blog/blog-image2.png",
    filesource: "https://piumsudhara.medium.com/deploy-react-app-to-aws-fargate-part-01-637c46bd4116",
    author: "Pium Sudhara"
  },
  {
    id: 3,
    title: "Provision AWS EKS Cluster using Terraform",
    image: "images/blog/blog-image3.png",
    filesource: "https://piumsudhara.medium.com/provision-aws-eks-cluster-using-terraform-6c9d19de26a2",
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
