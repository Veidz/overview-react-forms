import React, { Component } from 'react'

export default class Textarea extends Component {
  render() {
    const { textarea, handleChange} = this.props;

    return (
      <div>
        <textarea 
          name="textarea"
          value={textarea} 
          onChange={handleChange}
        />
      </div>
    )
  }
}
