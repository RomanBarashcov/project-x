const isValid = (data) => {
    return !(data === "" || data === null || data === undefined);
};

module.exports = {
    isValid
}