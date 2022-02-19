import React from "react";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "Infrastructure on AWS With Terraform",
    image: "images/blog/blog-image1.png",
    filesource: "https://piumsudhara.medium.com/infrastructure-on-aws-with-terraform-963ab882a5a",
    author: "Pium Sudhara"
  },
  {
    id: 2,
    title: "Serverless API with Firebase",
    image: "images/blog/blog-image2.jpeg",
    filesource: "https://piumsudhara.medium.com/serverless-api-with-firebase-26f8bc269643",
    author: "Pium Sudhara"
  },
  {
    id: 3,
    title: "Deploy NodeJS Application with AWS Beanstalk",
    image: "images/blog/blog-image3.png",
    filesource: "https://towardsaws.com/deploy-nodejs-application-with-aws-beanstalk-c8b8414dc3c1",
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
