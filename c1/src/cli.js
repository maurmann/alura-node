import fs from 'fs';
import getFileAsync from "./index.js";
import { promises } from 'stream';


const argument = process.argv;
await processFile(argument);

async function processFile(argument) {

    const path = argument[2];
    const executeValidation = argument[3] === "--valida";


    try {
        fs.lstatSync(path);
    }
    catch (error) {
        if (error.code == 'ENOENT') {
            console.log('the path must be  file or a directory');
            return;
        }
        else {
            console.log(`error unexpetecd while executiong the file system read ${error.code}`);
            return;
        }
    }


    if (fs.lstatSync(path).isFile()) {

        console.log('argument is file');

        const result = await getFileAsync(path);


        if (result && result.length === 0) {
            console.log('links not found');
            return
        }
        console.log(result);
    }
    else if (fs.lstatSync(path).isDirectory()) {

        console.log('argument is directory');

        const directoryFiles = await fs.promises.readdir(path);
        directoryFiles.forEach(async (fileName) => {

            // delimitando string com acentos agudos torna um template string.

            const fileWithPath = `${path}/${fileName}`;

            const filesList = await getFileAsync(fileWithPath);


            if (executeValidation) {
                const validatedLinks = await validate(filesList);

                console.log(validatedLinks);
            }

        });

        console.log(directoryFiles);
    }

}

async function validate(linksWithNameArray) {
    const urlList = extraiLinks(linksWithNameArray);
    const validationList = await checkHttpStatus(urlList);

    const linksWithStatusCodesList = linksWithNameArray.map((objeto, indice) => ({
        ...objeto,
        status: validationList[indice]
    }));


    console.log(linksWithStatusCodesList);
}

function extraiLinks(linksWithNameArray) {


    // Object.values extrai o valor de um objeto chave / valor


    // join torna um array de arrays em um array simples. no caso de links (strings)


    return linksWithNameArray.map((x) => Object.values(x).join());
}

async function checkHttpStatus(urlList) {
    const statusCodeList = await Promise.all(
        urlList.map(async (url) => {
            try {
                const response = await fetch(url);
                return response.status;
            }
            catch (error) {
                return "error";
            }

        })
    );
    return statusCodeList;
}