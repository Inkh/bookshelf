import React, { Component } from 'react'


class Tester extends Component {


  render(){
    console.log(this.props.books)
    return(
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Currently Reading</h2>
              <div className='bookshelf-books'>
                  <ol className='books-grid'>
                    {this.props.books.filter((book) => book.shelf === 'currentlyReading').map((b, index) => (
                      <div className='book' key={b.id}>
                        <li>
                          <div className='book-top'>
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})`}}></div>
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
                            <p>{b.title}</p>
                          </div>
                          <div className='book-authors'>
                            {b.authors.map((author, index) => (
                                <p key={index}>{author}</p>
                            ))}
                          </div>
                        </li>
                      </div>
                    ))}
                  </ol>
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Want to Read</h2>
              <div className='bookshelf-books'>
                  <ol className='books-grid'>
                    {this.props.books.filter((book) => book.shelf === 'wantToRead').map((b, index) => (
                      <div className='book' key={b.id}>
                        <li>
                          <div className='book-top'>
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})`}}></div>
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
                            <p>{b.title}</p>
                          </div>
                          <div className='book-authors'>
                            {b.authors.map((author, index) => (
                                <p key={index}>{author}</p>
                            ))}
                          </div>
                        </li>
                      </div>
                    ))}
                  </ol>
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Read</h2>
              <div className='bookshelf-books'>
                  <ol className='books-grid'>
                    {this.props.books.filter((book) => book.shelf === 'read').map((b, index) => (
                      <div className='book' key={b.id}>
                        <li>
                          <div className='book-top'>
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.thumbnail})`}}></div>
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
                            <p>{b.title}</p>
                          </div>
                          <div className='book-authors'>
                            {b.authors.map((author, index) => (
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
      </div>
    )
  }
}


export default Tester
