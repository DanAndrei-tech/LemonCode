import {
  validateIbanField,
  validateAccountIdField,
  validateNameField,
  validateAmountField,
  validateConceptField,
  validateRealDateTransferField,
  validateEmailField,
} from "./transfer-field.validation";
import { TransferFieldMessages } from "../../../common/validations/validation.const";

describe("transfer-field.validation specs", () => {
  describe("vaildateIBANfield", () => {
    it("should return false when iban is empty", () => {
      //Arrange
      const value = "";
      //Act
      const result = validateIbanField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(TransferFieldMessages.REQUIRED);
    });

    it("should return false when is not well formed", () => {
      //Arrange
      const value = "ES91 2100 0418 4502 0003 1333";
      //Act
      const result = validateIbanField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(TransferFieldMessages.INVALID_IBAN);
    });
  });

  describe("validateAccountIdField", () => {
    it("should return false when account id is empty", () => {
      //Arrange
      const value = "";

      //Act
      const result = validateAccountIdField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(TransferFieldMessages.REQUIRED);
    });

    it("should return true when account id is informed", () => {
      //Arrange
      const value = "2";

      //Act
      const result = validateAccountIdField(value);

      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateNameField", () => {
    it("should return false when name is empty", () => {
      //Arrange
      const value = "";
      //Act
      const result = validateNameField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(TransferFieldMessages.REQUIRED);
    });

    it("should return true when name is informed", () => {
      //Arrange
      const value = "Dan";
      //Act
      const result = validateNameField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateAmountField", () => {
    it("should return false when amount is negative", () => {
      //Arrange
      const value = -20;
      //Act
      const result = validateAmountField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(TransferFieldMessages.INVALID_AMOUNT);
    });

    it("should return true when amount is positive", () => {
      //Arrange
      const value = 200;
      //Act
      const result = validateAmountField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateConceptField", () => {
    it("should return false when concept field is empty", () => {
      //Arrange
      const value = "";
      //Act
      const result = validateConceptField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(TransferFieldMessages.REQUIRED);
    });

    it("should return true when concept field is informed", () => {
      //Arrange
      const value = "John doe";
      //Act
      const result = validateConceptField(value);

      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateRealDateTransferField", () => {
    it("should return true when date is not informed", () => {
      //Arrange
      const value = undefined;
      //Act
      const result = validateRealDateTransferField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when date is before today", () => {
      //Arrange
      const value = new Date();
      value.setDate(value.getDate() - 1);
      //Act
      const result = validateRealDateTransferField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(TransferFieldMessages.INVALID_DATE);
    });

    it("should return true when date is after today", () => {
      //Arrange
      const value = new Date();
      value.setDate(value.getDate() + 1);
      //Act
      const result = validateRealDateTransferField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateEmailField", () => {
    it("should return true when email is not informed", () => {
      //Arrange
      const value = "";
      //Act
      const result = validateEmailField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when email is not well formmated", () => {
      //Arrange
      const value = "john@gmail";
      //Act
      const result = validateEmailField(value);
      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(TransferFieldMessages.INVALID_EMAIL);
    });

    it("should return true when email is well formmated", () => {
      //Arrange
      const value = "john@gmail.es";
      //Act
      const result = validateEmailField(value);
      //Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
