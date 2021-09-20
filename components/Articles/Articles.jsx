import React, { Component } from 'react';
import axios from 'axios';

import accordion from '../../hoc/accordion/accordion';
import Article from './Article/Article';
import Loader from '../../UI/Loader/Loader';
import SpinnerLoader from '../../UI/Loader/SpinnerLoader';
import { articles } from '../../fixtures';


class Articles extends Component {

  state = {
    articles: [],
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything?q=NCERT&from=2021-09-15&sortBy=publishedAt&apiKey=d9b9ca6a32e043dbb6a7fb5d40361ded')
      .then(response => {
        this.setState({
          articles: response.data.articles
        })
      })
      .catch(error => console.log(error))
    }

     render () {
        console.log('render', this.state.articles)
        let load;

        if (this.state.articles.length) {
          load = this.state.articles.map(article => (
            <div key={article.url}>
              <Article
                   article = {article}
                   isOpen = {article.url === this.props.openItemId}
                   toggleOpenItem = {this.props.toggleOpenItem(article.url)}
              />
            </div>))
        } else {
          load = <Loader />
          load = <SpinnerLoader />
        }

        return (
               <div>
                  {load}
               </div>
          );
     }
     
};

export default accordion(Articles);
