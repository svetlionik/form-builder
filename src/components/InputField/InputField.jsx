import React from 'react';

import './styles.css';

function InputField(props) {
  return (
    <div className="text-field">
      <label className="text-field" htmlFor={props.id}>
        {' '}
        {props.label}{' '}
      </label>
      <input
        required={props.required}
        placeholder={props.placeholder}
        type="text"
        name={props.id}
        value={props.state[props.id].value}
        onChange={(e)=> props.handleChange(e)}
      />
    </div>
  );
}

export { InputField };
