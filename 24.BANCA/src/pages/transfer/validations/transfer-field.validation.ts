import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationFailedResult,
  buildValidationSuccededResult,
  isDateAfterToday,
  isPositiveNumber,
  isStringValueInformed,
  isValidEmail,
  isValidIban,
  isValueNotNullOrUndefined,
} from "@/common/validations";

import { TransferFieldMessages } from "../../../common/validations/validation.const";
import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateIbanField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  if (!isValidIban(value)) {
    return buildValidationFailedResult(TransferFieldMessages.INVALID_IBAN);
  }

  return buildValidationSuccededResult();
};

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSuccededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSuccededResult();
};

export const validateAmountField = (value: number): FieldValidationResult => {
  if (!isPositiveNumber(value)) {
    return buildValidationFailedResult(TransferFieldMessages.INVALID_AMOUNT);
  }
  return buildValidationSuccededResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSuccededResult();
};

export const validateNotesField = (_: string): FieldValidationResult =>
  buildValidationSuccededResult();

export const validateRealDateTransferField = (
  value?: Date
): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSuccededResult();
  }

  if (value && !isDateAfterToday(value)) {
    return buildValidationFailedResult(TransferFieldMessages.INVALID_DATE);
  }

  return buildValidationSuccededResult();
};

export const validateEmailField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationSuccededResult();
  }

  if (!isValidEmail(value)) {
    return buildValidationFailedResult(TransferFieldMessages.INVALID_EMAIL);
  }

  return buildValidationSuccededResult();
};
