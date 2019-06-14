const jsonfile = require('jsonfile')
const file = './Dados/dados.json'

const marcas = ['Renault']
const modelos = ['twingo']
const motores = ['d7f']
const caixas = ['MT']
const tracoes = ['2wd']
const pneus = ['14_165_65']

valores = 2

jsonfile.readFile(file)
    .then(obj =>{

        console.log("### Modelos ###\n")
        for(var i=0;i<obj.length;i++){
            if(!modelos.includes(obj[i].Vehicle)){
                var modelo = "";
                modelo += ":m_" + obj[i].Vehicle.replace(/\W/g, '_') + " a owl:NamedIndividual :Modelo; \n";
                modelo += "\t:descricao \""+"\";\n";
                modelo += "\t:nome \""+ obj[i].Vehicle +"\".\n";
                modelo.push(obj[i].Vehicle)
                console.log(modelo)
            }
        }
    })
    .catch(error => console.error(error))
