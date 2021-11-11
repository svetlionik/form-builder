import React, { Component, useState } from 'react';
import { CheckboxField } from '../CheckboxField/CheckboxField';
import { InputField } from '../InputField/InputField';
import { SelectField } from '../SelectField/SelectField';

export default class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {email:''};
    this.props.items.forEach((e) => {
      this.state[e.id] = e.type === 'text' ? '' : false;
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // console.log(event.target);
  }

  render() {
    if (this.props.items?.length) {
      return (
        <form action="" onSubmit={this.handleSubmit}>
          {this.props.items.map((e, i) => {
            if (e.type === 'select') {
              return (
                <SelectField
                  handleChange={this.handleChange}
                  state={this.state}
                  key={i}
                  {...e}
                />
              );
            }
            if (e.type === 'text') {
              return (
                <InputField
                  handleChange={this.handleChange}
                  state={this.state}
                  key={i}
                  {...e}
                />
              );
            }
            if (e.type === 'checkbox') {
              return (
                <CheckboxField
                  handleChange={this.handleChange}
                  state={this.state}
                  key={i}
                  {...e}
                />
              );
            }
          })}
          <button type="submit">Submit</button>
        </form>
      );
    }

    return <div className="no-cars">No cars</div>;
  }
}

export { FormBuilder };
