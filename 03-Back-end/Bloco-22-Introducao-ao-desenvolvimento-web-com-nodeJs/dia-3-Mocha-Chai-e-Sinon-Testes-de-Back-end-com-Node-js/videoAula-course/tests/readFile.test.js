const { expect } = require('chai');
const readFile = require('../readFile');
const fs = require('fs');
const sinon = require('sinon');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('Lê um arquivo', () => {
  describe('Arquivo lido com sucesso', () => {
    before(() => {
      sinon.stub(fs, 'readFile').returns(CONTEUDO_DO_ARQUIVO)
    });

    after(() => {
      fs.readFile.restore();
    });

    describe('A saída', () => {
      it('é uma string', () => {
        const output = readFile('teste.txt');
        expect(output).to.be.a('string');
      });
      it('é igual ao conteúdo do arquivo', () => {
        const output = readFile('teste.txt');
        expect(output).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Erro na leitura do arquivo', () => {
    describe('A saída', () => {
      it('é null', () => {
        const output = readFile('teste.txt');
        expect(output).to.be.equals(null);
      })
    })
  })
 
})