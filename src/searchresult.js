import React, { Component } from 'react'


class SearchResults extends Component {
    // console.log('books')
    render(){

      return(
        <div>
          <ol>
            {this.props.books.map((book) => (
              <li key={book.id}>
                <p>{book.title}</p>
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>

              </li>
            ))}
          </ol>
        </div>
      )
    }
}

export default SearchResults;
