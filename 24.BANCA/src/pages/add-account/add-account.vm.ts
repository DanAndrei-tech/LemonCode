export interface AddAccountVm {
  type: string;
  name: string;
}

export const createEmptyAddAccountVm = (): AddAccountVm => ({
  type: "",
  name: "",
});
