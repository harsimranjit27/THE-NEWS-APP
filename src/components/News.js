import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general',
        page: 1,
        mode: 'danger'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        page: PropTypes.number,
        mode: PropTypes.string
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `THE NEWS | ${(this.props.category==='general')?"Top Headlines":this.capitalizeFirstLetter(this.props.category)+" Headlines"}`;
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false, 
        })
        this.props.setProgress(100);

    }
    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {  
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
      };

    render(props) {
        return (
            <>
                <h1 id="heading" className={`text-center`} style={{ margin: '35px 0px' }}>THE NEWS APP | Top {(this.props.category==='general')?"":this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">     
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem 
                                newsUrl={element.url}
                                title={element.title ? element.title : ""}
                                description={element.description ? element.description : ""} imageUrl={element.urlToImage}
                                author={element.author}
                                date={element.publishedAt}
                                source={element.source.name}
                                content={element.content}
                                />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>

            </>
        )
    }
}

export default News