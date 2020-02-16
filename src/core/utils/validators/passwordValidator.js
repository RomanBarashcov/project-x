const validate = (password) => {
    const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)”])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)”]{8,}$/);
    if(passwordRegex.exec(password)) return true;
    return false;
};

module.exports = {
    validate
};