import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Tester extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const values = e.target.values
    console.log(values);

    // if(this.props.onCreateContact){
    //   this.props.onCreateContact(values)
    // }
  }

  render(){
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
                              <form onSubmit={this.props.onUpdate(b, )}>
                                <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                                </select>
                              </form>
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
        <div className='open-search'>
          <Link
          to='/create'
          // onClick={this.props.onNavigate}
          >Search Books</Link>
        </div>
      </div>
    )
  }
}


export default Tester
