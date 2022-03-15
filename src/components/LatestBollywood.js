import React, { Component } from "react";

import "../styles/latestbollywood.css";

import Heading from "./Heading";
import Bollywoodarticle from "./Bollywoodarticle";
import TopPost from "./TopPost";
import Advertisment from "./Advertisment";

import westArrow from "../photos/west_black_24dp.svg";
import eastArrow from "../photos/east_black_24dp.svg";

import bollywood1 from '../photos/bwood.jfif'
import bollywood5 from '../photos/bollywood5.webp'
import bollywood3 from '../photos/bollywood3.webp'
import bollywood4 from '../photos/bollywood4.webp'
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
              <Bollywoodarticle
                image={bollywood1}
                height="200"
                text={"Ayesha takia COMEBACK"}
                about={`she is about to make a major comeback after her hit wanted the film release date is yet to be announced and decided soon
                .fans are very eager for her entry`}
                articleHeading="article-heading1"
                paragraph="article-paraBig"
              />
              <div>
              <hr style={{ width: "100%" }} />
              </div>
              <Bollywoodarticle
                image={bollywood5}
                height="140"
                text={"Prabhas Recalls An Interesting Incident About Kangana Ranaut Where She Shared An Astrologer’s SHOCKING Prediction Regarding Her Future"}
                about={`Prabhas revealed, “When we were filming Ek Niranjan, Kangana told me this interesting story. She grew up in a little village with no connection to the movie industry. She had a chance encounter with an astrologer. He told her that she was going to be a heroine.`}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <hr style={{ width: "100%" }} />
              <Bollywoodarticle
                image={bollywood3}
                height="140"
                text={"The Kashmir Files' Vivek Agnihotri, Pallavi Joshi meet PM Narendra Modi, producer thanks him for 'noble words'"}
                about={"Director Vivek Ranjan Agnihotri, his actor-wife Pallavi Joshi, and producer Abhishek Agarwal met Prime Minister Narendra Modi on Saturday. Their film The Kashmir Files released in theatres on Friday. Abishek mentioned that PM Modi had appreciative words for the movie."}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <hr style={{ width: "100%" }} />
              <Bollywoodarticle
                image={bollywood4}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
                text={"Aww! Chahatt Khanna welcomes a new baby into her family"}
                about={"Chahatt Khanna has starred in shows such as Tujh Sang Preet Lagai Sajna, Bade Achhe Lagte Hain, and Qubool Hai. She was most recently seen in Mika Singh’s music video, Quarantine Love"}

              />
                 <Bollywoodarticle
                image={bollywood4}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
                text={"Most followed B-town actresses on Instagram: Priyanka Chopra tops list, see others"}
                about={"Priyanka Chopra and Shraddha Kapoor are the most followed Indian actress on InstagramBe it their style or acting, Bollywood actresses never leave a chance to make her fans fall for them. "}

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