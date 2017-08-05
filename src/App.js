import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './bookshelf'
import SearchResults from './searchresult'
// import Tester from './tester'
import { Route, Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books : [],
    results : []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(this.state.books);
    })
  }

  updateShelf = (book, shelf) => {
      console.log(book)
      console.log(shelf)
      console.log(this.state.books.filter(book => book))
      BooksAPI.update(book, shelf).then(
        book.shelf = shelf
      )
      this.setState(({
        books: this.state.books.filter(b => b.id !== book.id).concat([book])
      }))
  }


  searchBooks = (query) => {
    console.log(query)
    BooksAPI.search(query, 20).then((results) => {
      if(results){
        this.setState({ results })
        console.log(this.state.results)
      }
    })
  }


  render() {
    return (
        <div>
          <Route exact path='/' render={() => (
            <div className='list-books'>
              <div className='list-books-title'>
                <h1>My Reads</h1>
              </div>
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
                  <div className='open-search'>
                    <Link
                    to='/create'
                    >Search Books</Link>
                  </div>
                </div>
          )} />
          <Route path='/create' render={({ history }) => (
            <SearchResults
              onSearch={this.searchBooks}
              onUpdate={this.updateShelf}
              results={this.state.results.filter((book) => book.shelf === 'none')}
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
