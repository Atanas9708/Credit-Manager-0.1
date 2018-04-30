
export const creditValidator = function (payload: object): object {
  let validator = {
    isValid: true,
    errors: {}
  };

  for (let obj in payload['borrower']) {
    if (payload['borrower'][obj] === undefined) {
      validator.errors['borrower'] = 'Please fill all the input fields';
      validator.isValid = false;
      return validator;
    }
  }

  if (!payload['borrower']) {
    validator.errors['missing'] = "Please fill all the information for the borrower";
    validator.isValid = false;
    return validator;
  }

  // if (!payload['borrower']['firstName'] || payload['borrower']['lastName'] ||
  //   !payload['borrower']['PIN'] || !payload['borrower']['phone'] || !payload['borrower']['email'] ||
  //   !payload['borrower']['history']) {
  //   validator.errors['missing'] = "Please fill all the information for the borrower";
  //   validator.isValid = false;
  //   return validator;
  // }

  if (payload['borrower']['firstName'].length < 2) {
    validator.errors['firstName'] = "Borrower's frist name must be at least 2 characters";
    validator.isValid = false;
    return validator;
  }

  if (payload['borrower']['lastName'].length < 2) {
    validator.errors['lastName'] = "Borrower's last name must be at least 2 characters";
    validator.isValid = false;
    return validator;
  }

  if (typeof payload['borrower']['PIN'] !== 'number') {
    validator.errors['PIN'] = 'PIN must be exactly 10 digits';
    validator.isValid = false;
    return validator;;
  }

  if (payload['borrower']['PIN'].toString().length !== 10) {
    validator.errors['PIN'] = 'PIN must be exactly 10 digits';
    validator.isValid = false;
    return validator;;
  }

  if (payload['borrower']['email'].length < 6) {
    validator.errors['email'] = "Borrower's email must be at least 6 characters";
    validator.isValid = false;
    return validator;
  }

  if (payload['borrower']['history'].length === 0 || payload['borrower']['history'].length > 400) {
    validator.errors['history'] = "Borrower's history must be between 1 and 400 characters";
    validator.isValid = false;
    return validator;
  }

  if (typeof payload['amount'] !== 'number') {
    validator.errors['amount'] = "Amount must be number between 1 and 5000";
    validator.isValid = false;
    return validator;
  }

  if (payload['amount'] === 0 || payload['amount'] > 5000) {
    validator.errors['amount'] = "Amount must be number between 1 and 5000";
    validator.isValid = false;
    return validator;
  }

  if (!payload['repaymentPeriod'] || !payload['repaymentPeriod'].getMonth()) {
    validator.errors['repaymentPeriod'] = "Repayment period must be a date";
    validator.isValid = false;
    return validator;
  }

  if (!payload['firstMaturityDate'] || !payload['firstMaturityDate'].getMonth()) {
    validator.errors['firstMaturityDate'] = "First maturity date must be a date";
    validator.isValid = false;
    return validator;
  }

  if (typeof payload['interestRate'] !== 'number') {
    validator.errors['interestRate'] = "Interest rate must be a number between 1 and 100";
    validator.isValid = false;
    return validator;
  }

  if (payload['interestRate'] < 0 || payload['interestRate'] > 100) {
    validator.errors['interestRate'] = "Interest rate must be a number between 1 and 100";
    validator.isValid = false;
    return validator;
  }

  if (typeof payload['duration'] !== 'number') {
    validator.errors['duration'] = "Duration must be a number between 1 and 100";
    validator.isValid = false;
    return validator;
  }

  if (payload['duration'] < 0 || payload['duration'] > 100) {
    validator.errors['duration'] = "Duration must be a number between 1 and 100";
    validator.isValid = false;
    return validator;
  }

  return validator;
}

