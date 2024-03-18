import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1> King's</h1>
          <p> Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder='Your Email Address' />
            <button> Join</button>
          </div>
          <p> Sign up with email to recieve updates</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
