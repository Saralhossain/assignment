// Error handler middleware function
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    // Check if the error is a known error (e.g., validation error, database error)
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ error: err.message });
    }

    // Default error response for unknown errors
    res.status(500).json({ error: 'Internal Server Error' });
};

// CustomError class for defining custom errors with specific status codes
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = {
    errorHandler,
    CustomError
};
