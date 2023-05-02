import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
        <div>
            <div className="card" ><span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:'90%',zIndex:'1'}}>{source}</span>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className='text-muted'>
                    {`by ${author} on ${new Date(date).toGMTString()}`}
                    </small></p>
                    <Link rel="noreferrer" to={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</Link>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem
