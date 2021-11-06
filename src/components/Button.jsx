import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { checked } = this.props;

    return (
      <div>
        <button 
          disabled={!checked} 
          className="btn"
        >
          Login
        </button>
      </div>
    )
  }
}
