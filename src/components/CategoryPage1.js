import React, { Component } from "react";
import Header from "./Header";
import Heading from "./Heading";
import Article from "./Article";
import TopPost from "./TopPost";
import Advertisment from "./Advertisment";
import arrow from "../photos/south_black_24dp.svg";
import "../styles/categorypage.css";
import "../styles/latestArticles.css";


import eminem from "../photos/eminem.jpg";
import  kygo from  '../photos/kygo.jfif'
import  nik from  '../photos/nik.jpg'
import  sg from  '../photos/sg.jfif'
import Hollywood from "./Hollywood";

export default class CategoryPage1 extends Component {
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
                image={eminem}
                heading={"Eminem Becomes Most Gold And Platinum Certified Artist In RIAA History"}
                about={"Eminem makes history! Today, the Recording Industry Association of America (RIAA) announced 73.5 million new Gold & Platinum Program certifications for Eminem, making him the number one awarded musician for singles in the program’s history. He is also now one of only seven artists in any genre or era with three or more Diamond Album Awards."}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
                category={"hollywood"}
              />
              <div>
                <hr />
              </div>
              <Article
                image={sg}
                height="140"
                heading={"Selena Gomez Makes Critics Choice Awards Debut in Gorgeous Red Gown and Some Major Ear Bling"}
                about={"Selena Gomez stepped out in style at the 2022 Critics Choice Awards where she was nominated for best actress in a comedy series for her role in Hulu's hit Only Murders in the Building"}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
                category={"hollywood"}
              />
              <Article
                image={kygo}
                height="140"
                heading={`Kygo’s Dropping Remix of Let Somebody Go`}
                about={"Kygo’s remix of Coldplay’s current single with Selena Gomez, “Let Somebody Go,” was released Friday (March 11th)."}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
                category={"hollywood"}
              />
              <Article
                image={nik}
                height="140"
                heading={"19 Of The Most Extravagant Gifts Celebrities Have Given Their Significant Other"}
                about={"From private islands, to dazzling jewels, it comes as no surprise that these presents have price tags that level up with the luxury."}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
                category={"hollywood"}
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