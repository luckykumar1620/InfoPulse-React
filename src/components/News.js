import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps={
      country:'us',
      pageSize:6,
      category:"general"
    }
    static propTypes={
      country:PropTypes.string,
      pageSize: PropTypes.number,
      category:PropTypes.string
    }

    capitalizeFirstLetter=(val)=> {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
   }
    constructor(props){
    super(props);
    this.state={
       articles: [],
       loading:false,
       page:1
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}- InfoPulse`;
  }

  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b95f2823ca0646f2b70a11b9c5aa9f08
    &page=${this.state.page} &pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })

  }

   async componentDidMount(){ 
    this.updateNews();
   }
   handlePrevClick=async()=>{
    this.setState({page:this.state.page - 1});
    this.updateNews();
  }
   handleNextClick=async()=>{ 
     this.setState({page:this.state.page + 1});
    this.updateNews();
  }

  render() {
    
    return (
      <div className="container my-3">
        <h1 className='text-center' style={{margin:'35px'}}>InfoPulse-Top {this.capitalizeFirstLetter(this.props.category)} Headlines    
           
        </h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
            {!this.state.loading&& this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} 
              imageUrl={element.urlToImage?element.urlToImage:"https://nypost.com/wp-content/uploads/sites/2/2025/08/newspress-collage-gn4d3r1u8-1755992972243.jpg?quality=75&strip=all&1755978586&w=1024"}
              newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
           </div>
            })};
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-light" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
