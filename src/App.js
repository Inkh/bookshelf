import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './bookshelf'
import SearchResults from './searchresult'
import Tester from './tester'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books : [],
    showSearchPage: true
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(this.state.books);
    })
  }

  render() {
    return (
        <div>
          <Route exact path='/' render={() => (
            <Tester books={this.state.books} />

          )} />
          <Route path='/create' render={({ history }) => (
            <SearchResults
              onCreateSearch={() => {
                history.push('/')
              }}
            />
          )} />
        </div>

    )
  }
}

export default BooksApp
