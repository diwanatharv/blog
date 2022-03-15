import React, { Component } from "react";
import Header from "./Header";
import Heading from "./Heading";
import Article from "./Article";
import TopPost from "./TopPost";
import Advertisment from "./Advertisment";
import arrow from "../photos/south_black_24dp.svg";
import "../styles/categorypage.css";
import "../styles/latestArticles.css";

import gj from "../photos/gj.jfif";
import ex from "../photos/ex.jfif";

import ardio from "../photos/ardio.jfif";
import imm from "../photos/imm.jfif";

import aa from "../photos/aa.jfif";

export default class CategoryPage2 extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="content-container">
          <div className="outer-article-container">
            <div>
            <div className="article-container">
              <Heading heading={this.props.Heading} />
              <Article
              category={"fitness"}
                image={gj}
                heading={"Gujarat Titans captain Hardik Pandya checks in at NCA to appear for fitness test"}
                about={"Hardik Pandya, has reported to the National Cricket Academy (NCA) in Bengaluru for a final fitness test ahead of the IPL 2022 season, which begins on March 26."}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <div>
                <hr />
              </div>
              <Article
               category={"fitness"}
                image={ex}
                height="140"
                heading={"7 Tips to Restart Your Exercise Routine"}
                about={"Whether you're a swimmer, a pickup basketball player, a spinner, a participant in group exercise classes or a yoga enthusiast, it's likely that the COVID-19 pandemic seriously disrupted your workout routine."}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={ardio}
                category={"fitness"}
                height="140"
                heading={"HIIT vs. Cardio for Weight Loss"}
                about={`if you've been hearing a lot about HIIT, or high intensity interval training, lately, you're definitely not alone. HIIT has taken the fitness world by storm over the past decade or so, with more people discovering it as an efficient means of getting an intense workout.`}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={imm}
                category={"fitness"}
                height="140"
                heading={`How Aging Affects Your Immune System`}
                about={"Recommended vaccines such as flu, shingles and COVID-19 plus regular exercise are key to protecting your health."}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={aa}
                category={"fitness"}
                height="140"
                heading={"Guide to Boosting Your Metabolism"}
                about={"Moving more and eating well can help ensure your metabolism is running as best it can."}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
            </div>
            <div className="arrow">
              <img src={arrow} alt="arrow" /> LOAD MORE
            </div>
            </div>
            <div className="side-container">
              <TopPost />
              <Advertisment />
            </div>
          </div>
        </div>
      </>
    );
  }
}