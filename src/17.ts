function getRandomCode(): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code: string = '';
    while (code.length < 20) {
        code += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return code;
}
