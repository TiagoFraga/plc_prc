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

        console.log("### Marcas ###\n")
        for(var i=0;i<obj.length;i++){
            if(!marcas.includes(obj[i].Brand)){
                var marca = "";
                marca += ":m_" + obj[i].Brand.replace(/\W/g, '_') + " rdf:type owl:NamedIndividual , :Marca; \n";
                marca += "\t:descricao \""+"\";\n";
                marca += "\t:nome \""+ obj[i].Brand +"\".\n";
                marcas.push(obj[i].Brand)
                console.log(marca)
            }
        }
    })
    .catch(error => console.error(error))
