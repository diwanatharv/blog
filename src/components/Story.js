import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/story.css'
import Date from './Date'

export default class Story extends Component {
  render() {
    return (
      <>
      <div className='story-card'>
        <Link to="/ReadMode">
        <div className='story-heading'>
           {this.props.main}
        </div>
       <p className='story-para'>
      {this.props.about}
       </p>
        </Link>
       <Date category={this.props.category} date={this.props.date} color="color" />
      </div>
      </>
    )
  }
}