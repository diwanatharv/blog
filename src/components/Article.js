import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/article.css";
import Date from "./Date";

export default class Article extends Component {
  render() {
    return (
      <>
        <div className="article">
          <img
            src={this.props.image}
            alt="Article"
            width={200}
            height={this.props.height} 
          />
          <div className="article-text">
           
           
            <Link to="/ReadMode">
              <div>
                <div className={this.props.articleHeading}>
                <h3>{this.props.heading}</h3>
                </div>
                <p>{this.props.about}</p>
                <p className={this.props.paragraph}>
              
                </p>
              </div>
            </Link>
            <div>
              <Date
                category={this.props.category}
                date=" / February 22, 2022"
                color="color"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}