import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

class BookShelf extends Component {

    render(){
      return(
          <div className='list-books-content'>
            <div>
              <div className='bookshelf'>
                <h2 className='bookshelf-title'>{this.props.shelf}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                      {this.props.books.map((book, index) => (
                        <div className='book' key={book.id}>
                          <li>
                            <div className='book-top'>
                              {book.imageLinks && 
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                              }

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
                </div>
              </div>
            </div>
      )
    }
}

export default BookShelf;
