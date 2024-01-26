import fs from 'fs';
import chalk from 'chalk';

function handleException(error) {
    //throw new Error(chalk.red(error.code, ' Error reading file'));
    console.log(chalk.red(error.code, ' Error reading file'));
}

// Metodo sincrono
function getFileSync(filePath) {
    const encoding = 'utf-8';
    fs.readFile(filePath, encoding, (errorResult, successResult) => {
        if (errorResult) {
            handleException(errorResult);
        }
        console.log(chalk.green(successResult));
    });
}

// Tratar codigo assincrono com promisses
function getFileUsingPromisse(filePath) {
    const encoding = 'utf-8';
    fs.promises.readFile(filePath, encoding)
        .then((successResult) => console.log(chalk.green(successResult)))
        .catch((errorResult) => handleException(errorResult))
}

// Tratar codigo assincrono com async e await
// Forma mais nova de utilizar assincronicidade em js
async function getFileAsync(filePath) {
    try {
        const encoding = 'utf-8';
        const successResult = await fs.promises.readFile(filePath, encoding);
        return extractLinks(successResult);
    }
    catch (errorResult) {
        handleException(errorResult);
    }
    finally {
        console.log(chalk.yellow('processing finishied'));
    }
}

function extractLinks(textToSearch) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    // ... é um operador para "expandir" um iteravel 

    const matchs = [...textToSearch.matchAll(regex)];

    // notas sobre o map
    // para que o js entenda que queremos retornar uma string {} e que {} não é a inicializacao de 
    // um objeto englobase a especificacao com parenteses.
    // engloba-se tb com colchetes para indicar que é o valor chave (key) da expressao.

    const results = matchs.map(capture => ({ [capture[1]]: capture[2] }));

    return results;
}

export default getFileAsync;