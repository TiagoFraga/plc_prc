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

        console.log("### Motores ###\n")
        for(var i=0;i<obj.length;i++){
            if(!motores.includes(obj[i].Engine_code)){
                var motor = "";
                motor += ":mot_" + String(obj[i].Engine_code).replace(/\W/g, '_') + " rdf:type owl:NamedIndividual , :Motor; \n";
                motor += "\t:cilindrada "+obj[i].Displacement+" ;\n";
                co2 = obj[i].co2
                if(co2 == "" | co2 == "?"){
                    motor += "\t:co2 "+0+" ;\n"; 
                }else{
                    motor += "\t:co2 "+obj[i].co2+" ;\n"; 
                }
                motor += "\t:codigo \""+obj[i].Engine_code+"\";\n";
                motor += "\t:combustivel \""+obj[i].Combustivel+"\";\n";
                compressao = obj[i].Compression
                if(compressao == "" | compressao == "?"){
                    motor += "\t:compressao "+0+" ;\n"; 
                }else{
                    motor += "\t:compressao "+obj[i].Compression+" ;\n";
                }
                consumo = obj[i].fuel
                if(consumo == "" | consumo == "?"){
                    motor += "\t:consumo "+0+" ;\n"; 
                }else{
                    motor += "\t:consumo "+obj[i].fuel+" ;\n";
                }
                motor += "\t:descricao \""+"\";\n";
                motor += "\t:materialBloco \""+obj[i].Block_material+"\";\n";
                motor += "\t:materialCilindros \""+obj[i].Cylinder_head+"\";\n";
                motor += "\t:power "+obj[i].Power+" ;\n";
                motor += "\t:power_rpm "+obj[i].Power_rpm+" ;\n";
                motor += "\t:torque "+obj[i].Torque+" ;\n";
                motor += "\t:torque_rpm "+obj[i].Torque_rpm+" ;\n";
                motor += "\t:nome \""+obj[i].Engine+"\".\n";
                motores.push(obj[i].Engine_code)
                console.log(motor)
            }
        }
    })
    .catch(error => console.error(error))
