import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { value, name, handleChange } = this.props;

    const firstLetter = name[0].toUpperCase();
    const fullWord = `${firstLetter}${name.slice(1)}`;

    return (
      <>
        <label htmlFor={value}>
            {fullWord}
            <input 
              type={name} 
              id={name} 
              name={name} 
              required 
              value={value}
              onChange={handleChange}
            />
          </label>
      </>
    )
  }
}
