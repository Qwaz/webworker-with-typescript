export function validLanguage(str: string) {
    return str.match(/^[A-Za-z0-9 ]+$/);
}

export let badWords = ['fuck', 'bitch', 'shit'];
