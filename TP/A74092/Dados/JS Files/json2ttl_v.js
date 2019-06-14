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
            var carro = "";
            carro += ":v_" + valores + " rdf:type owl:NamedIndividual , :Veiculo; \n";
            carro += "\t:temCaixa :cv_"+ obj[i].GearBox.replace(/\W/g, '_') +" ;\n";
            carro += "\t:temMarca :m_"+ obj[i].Brand.replace(/\W/g, '_') +" ;\n";
            carro += "\t:temModelo :mo_"+ String(obj[i].Vehicle).replace(/\W/g, '_') +" ;\n";
            carro += "\t:temMotor :mot_"+ obj[i].Engine_code.replace(/\W/g, '_') +" ;\n";
            jante = String(obj[i].Jante)
            if(jante == "" | jante == "?"){jante = 0}
            largura = String(obj[i].Largura)
            if(largura == "" | largura == "?"){largura = 0}
            ratio = String(obj[i].Ratio)
            if(ratio == "" | ratio == "?"){ratio = 0}
            pneu = jante + "_" + largura + "_" + ratio
            carro += "\t:temPneu :pn_"+ pneu +" ;\n";
            carro += "\t:temTracao :tr_"+ obj[i].Traction.replace(/\W/g, '_') +" ;\n";
            carro += "\t:descricao \""+"\" ;\n";
            peso3p = obj[i].Weight3p 
            if(peso3p == ""| peso3p == "?"){peso3p = 0}
            carro += "\t:peso3p "+ peso3p +" ;\n";
            peso5p = obj[i].Weight5p
            if(peso5p == ""| peso5p == "?"){peso5p = 0}
            carro += "\t:peso5p "+ peso5p +" .\n";
            valores += 1
            console.log(carro)
        }
    })
    .catch(error => console.error(error))
