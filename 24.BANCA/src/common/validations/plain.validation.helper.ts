import { TransferFieldMessages } from "./validation.const";
import { FieldValidationResult } from "./validation.model";

export const buildValidationFailedResult = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

export const buildValidationSuccededResult = (): FieldValidationResult => ({
  succeeded: true,
});

export const buildRequiredFieldValidationFailedResponse = () =>
  buildValidationFailedResult(TransferFieldMessages.REQUIRED);
