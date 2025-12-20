import * as apiModel from "./api/movements-api-model";
import * as viewModel from "./movements-list.vm";

export const mapMovementToVm = (
  movement: apiModel.Movement
): viewModel.MovementsVm => ({
  id: movement.id,
  description: movement.description,
  amount: movement.amount,
  balance: movement.balance,
  transaction: new Date(movement.transaction),
  realTransaction: new Date(movement.realTransaction),
  accountId: movement.accountId,
});
