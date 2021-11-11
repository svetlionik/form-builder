import React, { Component } from 'react';
import formJSON from './formData.js';
import FormBuilder from './components/FormBuilder/FormBuilder';
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <FormBuilder items={formJSON[0].fields} />
      </div>
    );
  }
}
