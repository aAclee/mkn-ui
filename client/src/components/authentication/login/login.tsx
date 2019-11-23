import React, { ReactElement } from 'react';

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
    <div className="login-container">
      <div className="input-boxes">
        <label>
          <span>username</span>
          <input {...username} />
        </label>
        <label>
          <span>password</span>
          <input {...password} />
        </label>
      </div>

      <div className="submit-container">
        <button type="button" data-test="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
