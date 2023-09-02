const HTTPError = require("./http.error");
class NotFoundError extends HTTPError {
  constructor(message) {
    super(message, 404);
  }
}
module.exports = NotFoundError;
