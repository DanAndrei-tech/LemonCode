import { AddAccountVm } from "../add-account.vm";

export interface AddAccountErrors {
  type: string;
  name: string;
}

export const createEmptyAccountErrors = (): AddAccountErrors => ({
  type: "",
  name: "",
});

export const validateAddAccount = (vm: AddAccountVm) => {
  const errors: AddAccountErrors = {
    type: "",
    name: "",
  };

  if (!vm.type) {
    errors.type = "Debe seleccionar un tipo de cuenta";
  }

  if (!vm.name.trim()) {
    errors.name = "Debe introducir un alias";
  }

  return {
    succeeded: !errors.type && !errors.name,
    errors,
  };
};
