import React from "react";
import { AddAccountVm, createEmptyAddAccountVm } from "../add-account.vm";
import {
  AddAccountErrors,
  createEmptyAccountErrors,
  validateAddAccount,
} from "../validations";
import classes from "./add.account-form.component.module.css";

interface Props {
  onSave: (account: AddAccountVm) => void;
}

export const AddAccountFormComponent: React.FC<Props> = (props) => {
  const { onSave } = props;
  const [account, setAccount] = React.useState<AddAccountVm>(
    createEmptyAddAccountVm()
  );
  const [errors, setErrors] = React.useState<AddAccountErrors>(
    createEmptyAccountErrors()
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateAddAccount(account);
    setErrors(result.errors);

    if (result.succeeded) {
      onSave(account);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.formContainer}>
        <div className={classes.row}>
          <label>Tipo de cuenta:</label>
          <select
            name="type"
            value={account.type}
            onChange={handleChange}
            className={classes.accountSelect}
          >
            <option value="">Seleccionar</option>
            <option value="1">Cuenta corriente</option>
            <option value="2">Cuenta de ahorro</option>
            <option value="3">Cuenta de Nómina</option>
          </select>
        </div>
        <p className={classes.error}>{errors.type}</p>

        <div className={classes.row}>
          <label>Alias:</label>
          <input
            name="name"
            value={account.name}
            onChange={handleChange}
            className={classes.large}
          />
        </div>
        <p className={classes.error}>{errors.name}</p>
      </div>

      <div className={classes.separator} />

      <div className={classes.center}>
        <button className={classes.button} type="submit">
          GUARDAR
        </button>
      </div>
    </form>
  );
};
