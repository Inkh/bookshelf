import React, { Component } from 'react'

class BookShelf extends Component {
    render(){
      return(
        <div className='list-books'>
          <ol className='books-grid'>
            {this.props.books.map((book) => (
              <div className='book' key={book.id}>
                <li key={book.id}>
                  <div className='book-top'>
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                    <div className='book-shelf-changer'>
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className='book-title'>
                    <p>{book.title}</p>
                  </div>
                  <div className='book-authors'>
                    {book.authors.map((author, index) => (
                        <p key={index}>{author}</p>
                    ))}
                  </div>
                </li>
              </div>
            ))}
          </ol>
        </div>
      )
    }
}

export default BookShelf;
