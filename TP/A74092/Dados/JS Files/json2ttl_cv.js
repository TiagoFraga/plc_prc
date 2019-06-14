const jsonfile = require('jsonfile')
const file = './Dados/dados.json'

const marcas = ['renault']
const modelos = ['twingo']
const motores = ['d7f']
const caixas = ['MT']
const tracoes = ['2wd']
const pneus = ['14_165_65']

valores = 2

jsonfile.readFile(file)
    .then(obj =>{

        console.log("### GearBoxes ###\n")
        for(var i=0;i<obj.length;i++){
            if(!caixas.includes(obj[i].GearBox)){
                var caixa = "";
                caixa += ":cv_" + obj[i].GearBox.replace(/\W/g, '_') + " rdf:type owl:NamedIndividual , :CaixaVelocidades; \n";
                caixa += "\t:descricao \""+"\";\n";
                caixa += "\t:tipo \""+ obj[i].GearBox +"\".\n";
                caixas.push(obj[i].GearBox)
                console.log(caixa)
            }
        }
    })
    .catch(error => console.error(error))
