import React from "react";

import {
  Credentials,
  CredentialsFormErrors,
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
} from "../login.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";

import { InputForm } from "./input-form.component";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );

  const [errors, setErrors] = React.useState<CredentialsFormErrors>(
    createEmptyCredentialsFormErrors()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = validateForm(credentials);
    setErrors(validationResult.errors);

    if (validationResult.succeeded) {
      onLogin(credentials);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <InputForm
        id="username"
        name="user"
        value={credentials.user}
        placeholder="Usuario"
        error={errors.user}
        onChange={handleFieldChange}
      />

      <InputForm
        id="password"
        type="password"
        name="password"
        value={credentials.password}
        placeholder="Contraseña"
        error={errors.password}
        onChange={handleFieldChange}
      />

      <button type="submit" className={classes.btnEnviar}>
        Acceder
      </button>
    </form>
  );
};
