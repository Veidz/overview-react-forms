import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      textarea: '',
      signed: false,
    }
  }

  render() {
    return (
      <form>
        <div className="form-control">
          <label htmlFor="email">
            Email
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
            />
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="password">
            Password
            <input type="password" id="password" name="password" required />
          </label>
        </div>

        <div className="form-control">
          <textarea 
            name="textarea"
            value=""
          />
        </div>

        <div className="form-checkbox">
          <label htmlFor="signed">
            Keep Signed In
            <input 
              type="checkbox"
              name="signed"
            />
          </label>
        </div>

        <button className="btn">Login</button>
      </form>
    )
  }
}
