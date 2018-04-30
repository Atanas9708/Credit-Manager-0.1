
export const authValidator = function(payload: object): object {
  let validator = {
    isValid: true,
    errors: {}
  };

  if (!payload['email'] || !payload['username'] || !payload['password'] || !payload['repeatPass']) {
    validator.errors['message'] = 'Please fill all the input fields';
    validator.isValid = false;
    return validator;
  }

  if (payload['email'].length < 5) {
    validator.errors['email'] = 'Email must be at least 5 characters long';
    validator.isValid = false;
    return validator;
  }

  if (payload['username'].length < 5) {
    validator.errors['username'] = 'Username must be at least 5 characters long';
    validator.isValid = false;
    return validator;
  }

  if (payload['password'].length < 4) {
    validator.errors['password'] = 'Password must be at least 4 characters long';
    validator.isValid = false;
    return validator;;
  }

  if (payload['password'] !== payload['repeatPass']) {
    validator.errors['repeatPass'] = 'Passwords must match';
    validator.isValid = false;
    return validator;
  }

  return validator;
}

