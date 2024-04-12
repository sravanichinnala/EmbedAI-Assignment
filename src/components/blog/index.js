import React from "react";
import Header from "../header";
import "./index.css";
function Blog() {
  return (
    <div className="blog-main-container">
      <Header />
      <div className="blog-container">
        <div>
          <img
            src="https://blog.character.ai/content/images/size/w1140/2024/04/web-next-blog-1.png"
            alt="blog"
            className="blog-image"
          />
          <div className="blog-heading-container">
            <p className="blog-para">APR 8, 2024 / 2 MIN READ</p>
            <h2 className="blog-heading">
              Introducing Our Next-Generation Web Platform
            </h2>
            <p className="blog-para">
              Character.AI is thrilled to unveil our new website refresh, a
              significant milestone in our mission to provide personalized AI
              for every moment of the day. This launch marks the transition to
              our
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://blog.character.ai/content/images/size/w1140/2024/03/Voice-New.png"
            alt="blog"
            className="blog-image"
          />
          <div className="blog-heading-container">
            <p className="blog-para">MAR 19, 2024 / 4 MIN READ</p>
            <h2 className="blog-heading">Character Voice For Everyone</h2>
            <p className="blog-para">
              March 19, 2024 Update Hello Character.AI Community! From the
              beginning, our mission has been to make Character.AI simple to
              navigate and easy to interact with. Rooted in dialogue, the
              fundamental way
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://blog.character.ai/content/images/size/w1140/2024/01/AMA-Recap-and-FAQ-announcement.png"
            alt="blog"
            className="blog-image"
          />
          <div className="blog-heading-container">
            <p className="blog-para">JAN 23, 2024 / 4 MIN READ</p>
            <h2 className="blog-heading">AMA Recap and January 2024 FAQ</h2>
            <p className="blog-para">
              Thank you so much for tuning in to our AMA on December 15, 2023
              with CaiDev123 and MarieLovesMatcha! Here’s a recap of everything
              we discussed as well as some answers to Frequently
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://blog.character.ai/content/images/size/w1140/2023/11/Experiments-Blog.png"
            alt="blog"
            className="blog-image"
          />
          <div className="blog-heading-container">
            <p className="blog-para">NOV 23, 2023 / 5 MIN READ</p>
            <h2 className="blog-heading">
              Character.AI Experiments and New Features [FAQ]
            </h2>
            <p className="blog-para">
              Hello Character.AI Community! Thank you for your valuable feedback
              and suggestions that have been the catalyst for some awesome
              updates and new features we’re rolling out. As we are always
              working
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
