import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useFormInput } from '@hooks/form-input.hook';

// Actions
import { login } from '@store/system/actions';

// Style
import './login.scss';

const Login: React.FC = (): ReactElement => {
  const username = useFormInput('', {
    name: 'username',
  });
  const password = useFormInput('', {
    type: 'password',
    name: 'password',
  });

  function handleSubmit(): void {
    login(username.value, password.value);
  }

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h2>login</h2>
        <div className="input-boxes">
          <label>
            <p>username</p>
            <input {...username} />
          </label>
          <label>
            <p>password</p>
            <input {...password} />
          </label>
        </div>

        <div className="submit-container">
          <Link to="/signup" className="auth-link">sign up</Link>
          <button type="button" data-test="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
