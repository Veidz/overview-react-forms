import React, { Component } from 'react'

export default class Checkbox extends Component {
  render() {
    const { checked, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="signed">
            Keep Signed In
          <input 
            type="checkbox"
            name="checked"
            checked={checked} 
            onChange={handleChange}
          />
        </label>
      </div>
    )
  }
}
