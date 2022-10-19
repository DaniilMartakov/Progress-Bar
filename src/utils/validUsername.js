export default function validUsername(username) {
  // const digits = '0123456789';
  return username
    && username.length >= 12
    && !username.includes(' ');
}
