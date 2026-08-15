// data.js – structure validation helper
function validateData(data) {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Data must be a non-null object');
  }
  // Example required fields – adjust as needed
  const requiredFields = ['id', 'name'];
  for (const field of requiredFields) {
    if (!(field in data)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  return true;
}
module.exports = { validateData };
