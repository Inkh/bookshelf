import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './bookshelf'
import SearchResults from './searchresult'
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
      console.log(shelf)
      const b = book.book
      console.log(b)
      if(b.shelf !== shelf){
        BooksAPI.update(b, shelf).then(
          b.shelf = shelf
        )
        this.setState(({
          books: this.state.books.filter(target => target.id !== b.id).concat([b])
        }))
      }
  }


  searchBooks = (query) => {
    BooksAPI.search(query, 20).then(
      (results) => {
        if(results){
          this.setState({ results })
        } else{
          this.setState({ results: [] })
        }
        console.log(results)
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
              results={this.state.results}
              books={this.state.books}
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
