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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, password, textarea, signed } = this.state;

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
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="password">
            Password
            <input 
              type="password" 
              id="password" 
              name="password" 
              required
              value={password} 
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="form-control">
          <textarea 
            name="textarea"
            value={textarea} 
            onChange={this.handleChange}
          />
        </div>

        <div className="form-checkbox">
          <label htmlFor="signed">
            Keep Signed In
            <input 
              type="checkbox"
              name="signed"
              value={signed} 
              onChange={this.handleChange}
            />
          </label>
        </div>

        <button disabled={!signed} className="btn">Login</button>
      </form>
    )
  }
}
