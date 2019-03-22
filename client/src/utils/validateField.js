export default function validateField(errors, key, value, length = 1) {
  const keyWithFirstUppercase =
    key[0].toUpperCase() + key.slice(1).replace(/([a-z](?=[A-Z]))/g, "$1 ");

  if (value.length === 0) {
    errors[key] = `${keyWithFirstUppercase} is required field`;
  } else if (value.length < length) {
    errors[
      key
    ] = `${keyWithFirstUppercase} should be longer than ${length} characters`;
  }
}
