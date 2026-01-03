export const routesPrefixes = {
  accountList: "/account-list",
  addAccount: "/add-account",
  transfer: "/transfer",
  movements: "/movements",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  addAccount: routesPrefixes.addAccount,
  editAccount: "/edit-account/:id",
  movements: `${routesPrefixes.movements}/:id`,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
