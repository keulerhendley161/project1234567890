const getUserInput = () => {
    const inputElement = document.getElementById('username');
    return inputElement ? inputElement.value : null;
};
