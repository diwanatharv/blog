import React, { Component } from "react";

import "../styles/latestArticles.css";

import Heading from "./Heading";
import Article from "./Article";
import TopPost from "./TopPost";
import Advertisment from "./Advertisment";

import westArrow from "../photos/west_black_24dp.svg";
import eastArrow from "../photos/east_black_24dp.svg";

import tech2 from "../photos/tech2.webp";
import kabootar from "../photos/kabootar.webp";
import car1 from "../photos/car1.webp";
import tech1 from "../photos/tech1.webp";

import Date from "./Date";

export default class LatestArticles extends Component {
  render() {
    return (
      <>
        <div className="latestArticle-container">
          <Heading heading={"Latest Articles"} />
          <div className="outer-article-container">
            <div className="article-container">
              <div>
              <hr style={{ width: "100%" }} />
              </div>
              <Article

                image={tech2}
                height="200"
                heading={"Why pay $50 per bulb when Sylvania LED smart bulbs are $7 each?"}
                about={" still pretty difficult to believe that some smart LED light bulbs like Philips Hue color A19 bulbs retail for a whopping $50 each? Even on sale, LED smart bulb deals on Philips Hue bulbs are still quite expensive. "}
                articleHeading="article-heading1"
                paragraph="article-paraBig"
                category={"technology"}
              />
              <div>
              <hr style={{ width: "100%" }} />
              </div>
              <Article
                image={tech1}
                height="140"
                heading={"Start-up Kinetix Joins Forces With Adobe to Make AI-assisted 3D Animation More Accessible to All Content Creators"}
                about={"Kinetix, a deep tech start-up and AI-assisted 3D animation pioneer, is beefing up its library of 3D assets by joining forces with Adobe. Its unique no-code technology can be used to generate animated 3D characters automatically and instantaneously from a simple 2D video"}
                category={"technology"}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <hr style={{ width: "100%" }} />
              <Article
                image={kabootar}
                height="140"
                heading={"The New Caledonian storm petrel, a new species of bird, already endangered"}
                about={"An unknown bird of the storm petrel family had been spotted off of Nouméa, New Caledonia, as early as 2008: its streaked underside distinguished it from other birds in this group that have white bellies."}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
                category={"animal"}
              />
              <hr style={{ width: "100%" }} />
              <Article
                image={car1}
                height="140"
                heading={"Malaysia to reopen borders for fully vaxxed travellers on April 1"}
                about={"Malaysia is all set to reopen its borders for tourism on April 1. On Tuesday, the government of Malaysia made the announcement that it is now ready to welcome fully vaxxed tourists as the nation has finally reached the endemic stage of Coronavirus. "}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <div className="arrow">
                <div className="arrow-img"></div>
                LOAD MORE
              </div>
              <div className="article-gallary">
                <div className="article-gallary-title">
                  <img src={westArrow} alt="westArrow" />
                  Title of vertical Gallary
                  <img src={eastArrow} alt="eastArrow" />
                </div>
                <div className="article-gallary-date">
                  <Date category="Travel " date="/ January 22, 2022" />
                </div>
              </div>
            </div>
            <div className="arrow">
                <div className="arrow-img"></div>
                LOAD MORE
              </div>
            <div className="side-container">
              <Advertisment />
              <TopPost />
            </div>
          </div>
        </div>
      </>
    );
  }
}