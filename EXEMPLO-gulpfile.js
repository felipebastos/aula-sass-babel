const { parallel, series } = require('gulp');

function task1(cb){
    console.log('Olá, mundo! Agora do jeito moderno.');
    for(let i=0;i<100;i++){
        console.log('Estou na task1');
    }
    cb();
}

function task2(cb){
    console.log('Estou na task 2.');
    setInterval(print2, 1000);
    cb();
}

function print1(){
    console.log('Print 1.')
}
function print2(){
    console.log('Print 2.')
}

exports.paralelo = parallel(task1, task2);
exports.emsequencia = series(task1, task2);
exports.default = task1;

exports.composta = series(
    task1,
    task2,
    parallel(task2, task1, print1),
    series(task1, task2)
)