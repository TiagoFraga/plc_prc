const jsonfile = require('jsonfile')
const file = './Dados/dados.json'

const marcas = ['Renault']
const modelos = ['twingo']
const motores = ['D7F']
const caixas = ['MT']
const tracoes = ['2wd']
const pneus = ['14_165_65']

valores = 2

jsonfile.readFile(file)
    .then(obj =>{

        console.log("### Tracoes ###\n")
        for(var i=0;i<obj.length;i++){
            if(!tracoes.includes(obj[i].Traction)){
                var tracao = "";
                tracao += ":pn_" + obj[i].Traction.replace(/\W/g, '_') + " rdf:type owl:NamedIndividual , :Tracao; \n";
                tracao += "\t:descricao \""+"\";\n";
                tracao += "\t:nome \""+obj[i].Traction+"\";\n";
                tracao += "\t:tipo \""+"\".\n";
               
                tracoes.push(obj[i].Traction)
                console.log(tracao)
            }
        }
    })
    .catch(error => console.error(error))
