import React, { Component } from "react";
import Header from "./Header";
import Heading from "./Heading";
import Article from "./Article";
import TopPost from "./TopPost";
import Advertisment from "./Advertisment";
import arrow from "../photos/south_black_24dp.svg";
import "../styles/categorypage.css";
import "../styles/latestArticles.css";


import  insta from  '../photos/insta.jpg'
import  iphone from  '../photos/iphone.jpg'
import  google from  '../photos/google.jpg'
import  tweet from  '../photos/tweet.jpg'
import  gta from  '../photos/gta.jfif'
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
                image={insta}
                heading={"Great news for Instagram Creators: Moderation tool to benefit during live streams"}
                about={"The new moderation feature will help creators to report comments, remove viewers from Live and turn off comments from a specific viewer. This will particularly help to remove offending or harmful comments that can otherwise affect the creator or the audience of the live broadcast."}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <div>
                <hr />
              </div>
              <Article
                image={iphone}
                height="140"
                heading={"iPhone 14 Pro model might be only variant to receive new A16 chip"}
                about={"The upcoming iPhone 14 Pro and 14 Pro Max might be the only models in the line-up this year that will get to carry the new A16 chip."}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={google}
                height="140"
                heading={"Google’s new feature to allow parking payment using voice command"}
                about={`Once you park in a spot, say "Hey Google, pay for parking," and follow Google Assistants prompts to pay from your phone`}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={tweet}
                height="140"
                heading={`Twitter launches new ‘Dark Web’ service to protect user privacy, evade censorship`}
                about={"Twitter has entered the Dark Web and people can now access the platform via a Tor Onion service to bypass the censorship."}
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={gta}
                height="140"
                heading={"GTA 5 and GTA Online: PS5 and Xbox Series X/S prices and offers- Check out"}
                about={"The pricing of GTA5 and GTA Online news versions is now live on the Microsoft store and on the PlayStation store."}
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