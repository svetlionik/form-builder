import React from 'react';

import './styles.css';

function SelectField(props) {
  // console.log(props.options.length);
  return (
    <div className="select-field">
      <label htmlFor={props.id}>{props.label}: </label>
      <select
        required={props.required}
        placeholder={props.placeholder}
        id={props.id}
        name={props.id}
        onChange={(e)=>props.handleChange(e)}
      >
        <option value={props.value}>{props.value}</option>
        {props.options.map((e, i) => {
          return (
            <option key={i} value={e.label}>
              {e.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export { SelectField };
