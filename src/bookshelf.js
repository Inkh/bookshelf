import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class BookShelf extends Component {

    render(){
      let lilter;
      lilter = this.props.books.filter((book) => book.shelf === 'currentlyReading')
      console.log(lilter)
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
          <div>
          <Link
          to='/create'
          // onClick={this.props.onNavigate}
          // className = 'add-contact'
          >Search Books</Link>
          </div>
        </div>
      )
    }
}

export default BookShelf;
