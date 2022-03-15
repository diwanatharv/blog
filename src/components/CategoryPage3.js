import React, { Component } from "react";
import Header from "./Header";
import Heading from "./Heading";
import Article from "./Article";
import TopPost from "./TopPost";
import Advertisment from "./Advertisment";
import arrow from "../photos/south_black_24dp.svg";
import "../styles/categorypage.css";
import "../styles/latestArticles.css";


import kitchen from "../photos/kitchen.webp";
import holi from "../photos/holi.webp";
import holi1 from "../photos/holi1.jpg";
import holi2 from "../photos/holi2.jpg";

export default class CategoryPage extends Component {
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
                image={kitchen}
                heading={"Kitchen essentials prices rise on high costs, geopolitical tensions"}
                about={"The new moderation feature will help creators to report comments, remove viewers from Live and turn off comments from a specific viewer. This will particularly help to remove offending or harmful comments that can otherwise affect the creator or the audience of the live broadcast."}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <div>
                <hr />
              </div>
            
              <Article
                image={holi}
                height="140"
                heading={"Holi 2022: Enjoy The Festival Of Colours With This Thandai Recipe By Chef Kunal Kapur"}
                about={`Thandai is a traditional Indian summer drink that uses milk, sugar, nuts, seeds and different kinds of spices that enhance the refreshing taste. So, here's chef Kunal Kapur's recipe for a Holi thandai.`}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={holi1}
                height="140"
                heading={`What Is The Best Time To Drink Water - Nutritionist Shares`}
                about={"Experts suggest, there are certain times in a day when drinking water affects you in the best possible way. Read on to know more."}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={holi2}
                height="140"
                heading={"3 Delicious Easy Breakfast Recipes in Hindi To Start Your Morning With "}
                about={"Easy Breakfast Recipes in Hindi: Find here list of 13 easy breakfast recipes like besan ka cheela, methi theple, bread poha, paneer besan cheela & many more with key ingredients and how to make process."}
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