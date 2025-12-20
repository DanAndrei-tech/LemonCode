import React from "react";
import classes from "./input-form.component.module.css";

interface Props {
  id: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm: React.FC<Props> = ({
  id,
  name,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
}) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={error ? classes.inputError : ""}
      />

      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};
