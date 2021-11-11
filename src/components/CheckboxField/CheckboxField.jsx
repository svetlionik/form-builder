import React, { useState } from 'react';

import './styles.css';

function CheckboxField(props) {
  const [state, updateState] = useState(false);
  const handleChange = (e) => {
    props.handleChange(e);

    updateState((state) => !state);
  };
  return (
    <div className="text-field">
      <label className="checkbox-field" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        required={props.required}
        placeholder={props.placeholder}
        type="checkbox"
        name={props.id}
        onChange={(e) => handleChange(e)}
      />
      {state && (
        <div>
          <label htmlFor="email">Your email: </label>
          <input
            type="text"
            name="email"
            value={props.state[props.id].value}
            onChange={(e) => props.handleChange(e)}
            required
          />
        </div>
      )}
    </div>
  );
}

export { CheckboxField };
