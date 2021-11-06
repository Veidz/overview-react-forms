import React, { Component } from 'react'
import Button from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import Textarea from './Textarea';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      textarea: '',
      checked: false,
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
    const { email, password, textarea, checked } = this.state;

    return (
      <form>
        <div className="form-control">
          <Input value={email} name="email" handleChange={this.handleChange} />
        </div>

        <div className="form-control">
          <Input value={password} name="password" handleChange={this.handleChange} />
        </div>

        <div className="form-control">
          <Textarea name="textarea" value={textarea} handleChange={this.handleChange} />
        </div>

        <div className="form-checkbox">
          <Checkbox name="checkbox" checked={checked} handleChange={this.handleChange} />
        </div>

        <Button checked={checked} />
      </form>
    )
  }
}
