function validateFirstStep(obj) {
  if (!obj) return false;
  let errorMsg = {};

  let ans = true;
  if (!obj["name"]) {
    ans = false;
    errorMsg["name"] = "Name is required";
  }

  if (!obj["email"]) {
    ans = false;
    errorMsg["email"] = "Email is required";
  } else if (!isValidEmail(obj["email"])) {
    ans = false;
    errorMsg["email"] = "Invalid email format";
  }

  if (!obj["number"]) {
    ans = false;
    errorMsg["number"] = "Phone number is required";
  } else if (!isValidPhoneNumber(obj["number"])) {
    ans = false;
    errorMsg["number"] = "Invalid phone number format";
  }

  return [ans, errorMsg];
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  const phoneNumberRegex = /^\d{10}$/;
  return phoneNumberRegex.test(phoneNumber);
}

export default validateFirstStep;
