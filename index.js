import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.green(erro.code, 'não há arquivo no diretório'));
}

//async/await

async function pegaArquivo(caminhoDoArquivo){
    try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile
    (caminhoDoArquivo, encoding)
    console.log(chalk.blue(texto));
 } catch (erro) {
    trataErro(erro)
}
}

//promises com then()

//function pegaArquivo(caminhoDoArquivo){
    //const encoding = 'utf-8';
   // fs.promises
   //  .readFile(caminhoDoArquivo, encoding)
   //  .then((texto) => console.log(chalk.blue(texto)))
   //  .catch(trataErro)
//}

//function pegaArquivo(caminhoDoArquivo) {
//    const encoding = 'utf-8';
 //   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
 //       if(erro){
 //           trataErro(erro);
 //       }
 //       console.log(chalk.red(texto));
 //   })
 //   
//}

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');


//console.log(chalk.green('Apesar de tudo que fez'), chalk.blue('a salvação ainda está a seu alcance. Você não está por aqui por acidente ou acaso, você está aqui pela graça de Deus. Você recebeu uma dádiva, agora resta saber se você aceitará ou rejeitará'));

