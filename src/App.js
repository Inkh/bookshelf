import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './bookshelf'
import SearchResults from './searchresult'
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

  // createSearch(){
  //   console.log('im here!')
  // }

  render() {
    return (
        <div>
          <Route exact path='/' render={() => (
            <BookShelf books={this.state.books} />

          )} />
          <Route path='/create' render={({ history }) => (
            <SearchResults
              onCreateSearch={() => {
                history.push('/')
              }}
            />
          )} />
        </div>
        // <Route path='/create' render={({ history }) => (
        //   <CreateContact
        //     onCreateContact={(contact) => {
        //       this.createContact(contact)
        //       history.push('/')
        //     }}
        //   />
        // )} />
    )
  }
}

export default BooksApp
