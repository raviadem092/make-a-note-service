const validateTitle = (title) => {
    if (!title) {
        return "Title is required";
    }
    if (typeof title != "string") {
        return "Title must be a string";
    }
    if (!title.trim()) {
        return "Title cannot be empty";
    }
    if (title.length > 255) {
        return "Title exceeds maximum length";
    }
    return null;
};

module.exports = {
    validateTitle
};