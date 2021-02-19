const {Estudante} = require('estudante');
class OutroEstudante extends Estudante {
    constructor(){
        super();
        this.sobrenome = "outro";
    }
}