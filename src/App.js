import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './bookshelf'
import SearchResults from './searchresult'
// import Tester from './tester'
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

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((book) => {
      console.log(book)
    })
  }

  render() {
    return (
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>My Reads</h1>
          </div>
          <Route exact path='/' render={() => (
            <div>
              <BookShelf
                shelf='Currently Reading'
                books={this.state.books.filter((book) => book.shelf ==='currentlyReading')}
                onUpdate={this.updateShelf}
                />
              <BookShelf
                shelf='Want to Read'
                books={this.state.books.filter((book) => book.shelf ==='wantToRead')}
                onUpdate={this.updateShelf}
                />
              <BookShelf
                shelf='Read'
                books={this.state.books.filter((book) => book.shelf ==='read')}
                onUpdate={this.updateShelf}
                />
              </div>
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
