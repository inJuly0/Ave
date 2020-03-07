const fs = require('fs');
const path = require('path');
const lex = require('../../src/Lexer/Lexer.js');
const parse = require('../../src/Parser/Parser.js');
const compile = require('../../src/Compiler/Compiler.js');

// the files inside the testDir directory are compiled
// and the compiled JS code is logged 

const testDir = '../enum' 

fs.readdir(testDir, (err, files) => {
    files.forEach(file => {
        console.log(file);

        fs.readFile(testDir + '/' + file, {
            encoding: 'utf-8'
        }, (err, data) => {
            console.log(compile(parse(lex(data))))
        });
    });
});