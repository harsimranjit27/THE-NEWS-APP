import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { 
            title,
            description,
            imageUrl,
            newsUrl,
            author,
            date,
            source,
            content
        } = this.props; 

        let sourceBadgeStyling = {
            border: "2px solid black",
            color: "black",
            borderRadius: "2px 2px 2px 10px",
            position: "absolute",
            top: "-1%",
            right: "-1%"
        }
        let dateStyling = {
            position: "absolute",
            top: "58%"
        }
        let authorAreaStyling = {
            position: "absolute",
            top: "62%",
            wordWrap: "break-word"
        }
        let descriptionStyling = {
            height: "6em",
            position: "absolute",
            top: "68%",
            width: "92%",
            wordWrap: "break-word",
            overflow: "hidden"
        }
        let readMoreStyling = {
            position: "absolute",
            bottom: "3%",
            left: "35%"
        }

        return (
            <div className="my-2">
                <div className="card" style={{position: "relative"}}>
                    <span className="badge bg-warning" style={sourceBadgeStyling}> {source} </span>
                    <img src={!imageUrl ? "https://image.freepik.com/free-photo/toy-bricks-table-with-word-news_144627-47478.jpg" : imageUrl} className="card-img-top" alt="image"
                    />
                    <div className="card-body">
                        <h5 className={`card-title `}>
                            {title?(title.slice(0,85)+".."):(newsUrl.slice(0,85)+"..")} 
                        </h5>
                        <p className={`card-text m-0 `} style={dateStyling}>
                            {new Date(date).toDateString() +" "+ new Date(date).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})+" IST"}
                        </p>
                        <p className="card-text" style={authorAreaStyling}>
                            By {!author ? <strong style={{color: "#DC3545"}}><i>Unknown</i></strong> :<strong style={{color: "#DC3545"}}>{(author.length>48)?author.slice(0,48):author}</strong>}
                        </p>
                        <p className={`card-text mb-2`} style={descriptionStyling}>
                            {description?((description.length<160)?((content)?content.slice(0,190)+"...":description):description.slice(0,190)+"..."):((content)?content.slice(0,190)+"...":<a href={`${newsUrl}`}>{newsUrl}</a>)}
                        </p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-danger`} style={readMoreStyling}>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem