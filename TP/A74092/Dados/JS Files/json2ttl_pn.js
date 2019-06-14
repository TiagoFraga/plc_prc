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

        console.log("### Pneus ###\n")
        for(var i=0;i<obj.length;i++){
            var match = String(obj[i].Jante) + "_" + String(obj[i].Largura) + "_" +String(obj[i].Ratio)
            if(!pneus.includes(match)){
                var pneu = "";
                pneu += ":pn_" + match + " rdf:type owl:NamedIndividual , :Pneu; \n";
                pneu += "\t:descricao \""+"\";\n";
                pneu += "\t:jante "+obj[i].Jante+" ;\n";
                pneu += "\t:jante "+obj[i].Largura+" ;\n";
                pneu += "\t:jante "+obj[i].Ratio+" .\n";
               
                pneus.push(match)
                console.log(pneu)
            }
        }
    })
    .catch(error => console.error(error))
