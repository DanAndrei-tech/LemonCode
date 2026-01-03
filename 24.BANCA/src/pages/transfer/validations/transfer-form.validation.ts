import { FormValidationResult } from "@/common/validations/validation.model";
import { TransferError, TransferVm } from "../transfer.vm";
import {
  validateAccountIdField,
  validateAmountField,
  validateConceptField,
  validateEmailField,
  validateIbanField,
  validateNameField,
  validateNotesField,
  validateRealDateTransferField,
} from "./transfer-field.validation";

export const validateForm = (
  transfer: TransferVm
): FormValidationResult<TransferError> => {
  const FieldValidationResults = [
    validateAccountIdField(transfer.accountId),
    validateIbanField(transfer.iban),
    validateNameField(transfer.name),
    validateAmountField(transfer.amount),
    validateConceptField(transfer.concept),
    validateNotesField(transfer.notes),
    validateRealDateTransferField(transfer.realDateTransfer),
    validateEmailField(transfer.email),
  ];

  return {
    succeeded: FieldValidationResults.every((f) => f.succeeded),
    errors: {
      accountId: FieldValidationResults[0].errorMessage ?? "",
      iban: FieldValidationResults[1].errorMessage ?? "",
      name: FieldValidationResults[2].errorMessage ?? "",
      amount: FieldValidationResults[3].errorMessage ?? "",
      concept: FieldValidationResults[4].errorMessage ?? "",
      notes: FieldValidationResults[5].errorMessage ?? "",
      realDateTransfer: FieldValidationResults[6].errorMessage ?? "",
      email: FieldValidationResults[7].errorMessage ?? "",
      dateTransfer: "",
    },
  };
};
