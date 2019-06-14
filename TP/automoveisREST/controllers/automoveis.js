const axios = require('axios');
const Carro = module.exports;

normalize = function(response) {
    return response.results.bindings.map(obj =>
        Object.entries(obj)
            .reduce((new_obj, [k,v]) => (new_obj[k] = v.value, new_obj),
                    new Object()));
};

async function execQuery (query){
    try{
        var enconded = encodeURIComponent(query)
        response = await axios.get("http://localhost:7200/repositories/automoveis" + "?query=" + enconded);
        return(normalize(response.data));
    }
    catch(error){
        return("Erro: " + error)
    }
}

//--------------------------- HOME --------------------------

Carro.contaMarcas = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select (count(?s) as ?marcas) where { 
                        ?s a :Marca.
                    }`

    var res = await execQuery(query);
    return res;
};

Carro.contaModelos = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select (count(?s) as ?modelos) where { 
                        ?s a :Modelo.
                    }`

    var res = await execQuery(query);
    return res;
};

Carro.contaVeiculos = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select (count(?s) as ?veiculos) where { 
                        ?s a :Veiculo.
                    }`

    var res = await execQuery(query);
    return res;
};

Carro.contaMotores = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select (count(?s) as ?motores) where { 
                        ?s a :Motor.
                    }`

    var res = await execQuery(query);
    return res;
};

Carro.contaPneus = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select (count(?s) as ?pneus) where { 
                        ?s a :Pneu.
                    }`

    var res = await execQuery(query);
    return res;
};

Carro.contaTracoes = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select (count(?s) as ?tracoes) where { 
                        ?s a :Tracao.
                    }`

    var res = await execQuery(query);
    return res;
};

Carro.contaCvs = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select (count(?s) as ?cvs) where { 
                        ?s a :CaixaVelocidades.
                    }`

    var res = await execQuery(query);
    return res;
};

//--------------------------- Pagina MARCAS --------------------------

Carro.todasMarcas = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?nome where { 
                        ?m a :Marca.
                        ?m :nome ?nome
                    }`

    var res = await execQuery(query);
    return res;
};



//--------------------------- Pagina Veiculos --------------------------

Carro.todosVeiculos = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?v ?nomeMarca ?nomeModelo ?nomeMotor where { 
                        ?v a :Veiculo.
                        ?v :temMarca ?m.
                        ?m :nome ?nomeMarca.
                        ?v :temModelo ?mod.
                        ?mod :nome ?nomeModelo.
                        ?v :temMotor ?mot.
                        ?mot :nome ?nomeMotor.
                    }`
    var res = await execQuery(query);
    return res;
};

//--------------------------- Pagina Motores --------------------------

Carro.todosMotores = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?mot ?nome ?cod ?comb where { 
                        ?mot a :Motor.
                        ?mot :nome ?nome.
                        ?mot :codigo ?cod.
                        ?mot :combustivel ?comb
                    }`
    var res = await execQuery(query);
    return res;
};


//--------------------------- Pagina Caixas de Velocidade --------------------------

Carro.todasCaixas = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?cvs ?nome where { 
                        ?cvs a :CaixaVelocidades.
                        ?cvs :tipo ?nome.
                    }`
    var res = await execQuery(query);
    return res;
};


//--------------------------- Pagina Tracoes --------------------------

Carro.todasTracoes = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?tr ?nome where { 
                        ?tr a :Tracao.
                        ?tr :nome ?nome.
                    }`
    var res = await execQuery(query);
    return res;
};

//--------------------------- Pagina Pesquisa --------------------------



Carro.todasJantes = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select distinct ?jante where { 
                        ?pn a :Pneu.
                        ?pn :jante ?jante
                    }`
    var res = await execQuery(query);
    return res;
};

Carro.todasLarguras = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select distinct ?largura where { 
                        ?pn a :Pneu.
                        ?pn :largura ?largura
                    }`
    var res = await execQuery(query);
    return res;
};

Carro.todosRatios = async () => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select distinct ?ratio where { 
                        ?pn a :Pneu.
                        ?pn :ratio ?ratio
                    }`
    var res = await execQuery(query);
    return res;
};



//--------------------------- Pagina Pesquisa --------------------------



Carro.pesquisar = async (pesquisa) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
    select ?v ?nomeMarca ?nomeModelo ?nomeMotor where { 
        ?v a :Veiculo.
        ?v :temMarca ${pesquisa.marca}.
        ${pesquisa.marca} :nome ?nomeMarca.
        ?v :temModelo ${pesquisa.modelo}.
        ${pesquisa.modelo} :nome ?nomeModelo.
        ?v :temMotor ?motor.
        ?motor :nome ?nomeMotor.
        ?motor :combustivel ${pesquisa.combustivel}. 
        ?v :temTracao ${pesquisa.tracao}.
        ?v :temCaixa ${pesquisa.caixa}.
        ?motor :materialBloco ${pesquisa.mb}.
        ?motor :cilindrada ?cilindrada
        FILTER(?cilindrada >= ${pesquisa.minCilindrada})
        FILTER(?cilindrada < ${pesquisa.maxCilindrada})
        ?motor :power ?potencia
        FILTER(?potencia >= ${pesquisa.minPotencia})
        FILTER(?potencia < ${pesquisa.maxPotencia})
        ?motor :torque ?torque
        FILTER(?torque >= ${pesquisa.minTorque})
        FILTER(?torque < ${pesquisa.maxTorque})
        ?motor :consumo ?consumo
        FILTER(?consumo >= ${pesquisa.minConsumo})
        FILTER(?consumo < ${pesquisa.maxConsumo})
        ?motor :co2 ?co2
        FILTER(?co2 >= ${pesquisa.minEmissoes})
        FILTER(?co2 < ${pesquisa.maxEmissoes})
    }`
    var res = await execQuery(query);
    return res;
};





























//--------------------------- Pagina P1 -> Info Veiculo --------------------------


Carro.infoVeiculoHead = async (idVeiculo) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
    select ?nomeMarca ?nomeModelo ?motor ?nomeMotor ?codigo ?cilindrada ?combustivel ?co2 ?compressao ?consumo ?mb ?mc ?power ?prpm ?torque ?trpm ?peso3p ?peso5p ?caixa ?nomeCaixa ?tracao ?nomeTracao ?pneu ?jante ?largura ?ratio where { 
        :${idVeiculo} :temMarca ?marca.
        ?marca :nome ?nomeMarca.
        :${idVeiculo} :temModelo ?modelo.
        ?modelo :nome ?nomeModelo.
        :${idVeiculo} :temMotor ?motor.
        ?motor :nome ?nomeMotor.
        ?motor :codigo ?codigo.
        ?motor :cilindrada ?cilindrada.
        ?motor :combustivel ?combustivel.
        ?motor :co2 ?co2.
        ?motor :compressao ?compressao.
        ?motor :consumo ?consumo.
        ?motor :materialBloco ?mb.
        ?motor :materialCilindros ?mc.
        ?motor :power ?power.
        ?motor :power_rpm ?prpm.
        ?motor :torque ?torque.
        ?motor :torque_rpm ?trpm.
        :${idVeiculo} :peso3p ?peso3p.
        :${idVeiculo} :peso5p ?peso5p.
        :${idVeiculo} :temCaixa ?caixa.
        ?caixa :tipo ?nomeCaixa.
        :${idVeiculo} :temTracao ?tracao.
        ?tracao :nome ?nomeTracao.
        :${idVeiculo} :temPneu ?pneu.
        ?pneu :jante ?jante.
        ?pneu :largura ?largura.
        ?pneu :ratio ?ratio.
    }`
    var res = await execQuery(query);
    return res;
};


Carro.infoVeiculoBody = async (idVeiculo) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                        select ?vs ?nomeMarca ?nomeModelo where { 
                            :${idVeiculo} :temMotor ?motor.
                            ?motor :eMotorDe ?vs.
                            ?vs :temMarca ?marca.
                            ?vs :temModelo ?modelo.
                            ?marca :nome ?nomeMarca.
                            ?modelo :nome ?nomeModelo.
                        }`
    var res = await execQuery(query);
    return res;
};


//--------------------------- Pagina P2 -> Info Motor --------------------------

Carro.infoMotorHead = async (idMotor) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
    select * where { 
        :${idMotor} :nome ?nomeMotor.
        :${idMotor} :codigo ?codigo.
        :${idMotor} :cilindrada ?cilindrada.
        :${idMotor} :combustivel ?combustivel.
        :${idMotor} :co2 ?co2.
        :${idMotor} :compressao ?compressao.
        :${idMotor} :consumo ?consumo.
        :${idMotor} :materialBloco ?mb.
        :${idMotor} :materialCilindros ?mc.
        :${idMotor} :power ?power.
        :${idMotor} :power_rpm ?prpm.
        :${idMotor} :torque ?torque.
        :${idMotor} :torque_rpm ?trpm.
    }`
    var res = await execQuery(query);
    return res;
};


Carro.infoMotorBodyMarca = async (idMotor) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select distinct ?marca ?nomeMarca where { 
                        :${idMotor} :eMotorDe ?v.
                        ?v :temMarca ?marca.
                        ?marca :nome ?nomeMarca.
                    }`
    var res = await execQuery(query);
    return res;
};

Carro.infoMotorBodyVeiculos = async (idMotor) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?v ?nomeMarca ?nomeModelo where { 
                        :${idMotor} :eMotorDe ?v.
                        ?v :temMarca ?marca.
                        ?v :temModelo ?modelo.
                        ?marca :nome ?nomeMarca.
                        ?modelo :nome ?nomeModelo.
                    }`
    var res = await execQuery(query);
    return res;
};


//--------------------------- Pagina P3 -> Info Pneu --------------------------

Carro.infoPneuHead = async (idPneu) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select * where { 
                        :${idPneu} :jante ?jante.
                        :${idPneu} :largura ?largura.
                        :${idPneu} :ratio ?ratio.
                        :${idPneu} :descricao ?desc.
                    }`
    var res = await execQuery(query);
    return res;
};

Carro.infoPneuBodyMarca = async (idPneu) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select distinct ?m ?nome where { 
                        :${idPneu} :ePneuDe ?v.
                        ?v :temMarca ?m.
                        ?m :nome ?nome.
                    }`
    var res = await execQuery(query);
    return res;
};

Carro.infoPneuBodyVeiculos = async (idPneu) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?v ?nomeMarca ?nomeModelo ?nomeMotor where { 
                        :${idPneu} :ePneuDe ?v.
                        ?v :temMarca ?m.
                        ?m :nome ?nomeMarca.
                        ?v :temModelo ?modelo.
                        ?modelo :nome ?nomeModelo.
                        ?v :temMotor ?motor.
                        ?motor :nome ?nomeMotor.
                    }`
    var res = await execQuery(query);
    return res;
};


//--------------------------- Pagina P4 -> Info Caixa de Velocidades --------------------------

Carro.infoCVHead = async (idCV) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?tipo ?desc where { 
                        :${idCV} :tipo ?tipo.
                        :${idCV} :descricao ?desc.
                    }`
    var res = await execQuery(query);
    return res;
};

Carro.infoCVBodyMarca = async (idCV) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select distinct ?marca ?nomeMarca where { 
                        :${idCV} :eCaixaDe ?vs.
                        ?vs :temMarca ?marca.
                        ?marca :nome ?nomeMarca.
                    }`
    var res = await execQuery(query);
    return res;
};

Carro.infoCVBodyVeiculos = async (idCV) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?vs ?nomeMarca ?nomeModelo ?nomeMotor where { 
                        :${idCV} :eCaixaDe ?vs.
                        ?vs :temMarca ?marca.
                        ?marca :nome ?nomeMarca.
                        ?vs :temModelo ?modelo.
                        ?modelo :nome ?nomeModelo.
                        ?vs :temMotor ?motor.
                        ?motor :nome ?nomeMotor.
                    }`
    var res = await execQuery(query);
    return res;
};




//--------------------------- Pagina P5 -> Info Tracao --------------------------

Carro.infoTracaoHead = async (idTr) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?nome ?tipo ?desc where { 
                        :${idTr} :nome ?nome.
                        :${idTr} :tipo ?tipo.
                        :${idTr} :descricao ?desc.
                    }`
    var res = await execQuery(query);
    return res;
};

Carro.infoTracaoBodyMarca = async (idTr) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select distinct ?marca ?nomeMarca where { 
                        :${idTr} :eTracaoDe ?v.
                        ?v :temMarca ?marca.
                        ?marca :nome ?nomeMarca.
                    }`
    var res = await execQuery(query);
    return res;
};

Carro.infoTracaoBodyVeiculos = async (idTr) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?v ?nomeMarca ?nomeModelo ?nomeMotor where { 
                        :${idTr} :eTracaoDe ?v.
                        ?v :temMarca ?marca.
                        ?marca :nome ?nomeMarca.
                        ?v :temModelo ?modelo.
                        ?modelo :nome ?nomeModelo.
                        ?v :temMotor ?motor.
                        ?motor :nome ?nomeMotor.
                    }`
    var res = await execQuery(query);
    return res;
};


//--------------------------- Pagina P6 -> Info Marca --------------------------

Carro.infoMarcaHead = async (idMarca) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select * where { 
                        :${idMarca} :nome ?nome.
                        :${idMarca} :descricao ?desc.
                    }`
    var res = await execQuery(query);
    return res;
};

Carro.infoMarcaBodyModelos = async (idMarca) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?v ?modelo ?nomeModelo ?nomeMotor where { 
                        ?v :temMarca :${idMarca}.
                        ?v :temModelo ?modelo.
                        ?modelo :nome ?nomeModelo.
                        ?v :temMotor ?mot.
                        ?mot :nome ?nomeMotor.
    }`

    var res = await execQuery(query);
    return res;
};


Carro.infoMarcaBodyMotores = async (idMarca) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select distinct ?mot ?nome ?cod where { 
                        ?v a :Veiculo.
                        ?v :temMarca :${idMarca}.
                        ?v :temMotor ?mot.
                        ?mot :nome ?nome.
                        ?mot :codigo ?cod
                    }`

    var res = await execQuery(query);
    return res;
};

Carro.infoMarcaMaisPotente = async (idMarca) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?v ?nomeModelo ?nomeMotor ?potencia where { 
                        ?v :temMarca :${idMarca}.
                        ?v :temModelo ?modelo.
                        ?modelo :nome ?nomeModelo.
                        ?v :temMotor ?motor.
                        ?motor :nome ?nomeMotor.
                        ?motor :power ?potencia
                    }ORDER BY DESC(?potencia)
                    LIMIT 1`
    var res = await execQuery(query);
    return res;
};

Carro.infoMarcaMaisTorque = async (idMarca) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?v ?nomeModelo ?nomeMotor ?torque where { 
                        ?v :temMarca :${idMarca}.
                        ?v :temModelo ?modelo.
                        ?modelo :nome ?nomeModelo.
                        ?v :temMotor ?motor.
                        ?motor :nome ?nomeMotor.
                        ?motor :torque ?torque.
                    }ORDER BY DESC(?torque)
                    LIMIT 1`
    var res = await execQuery(query);
    return res;
};

Carro.infoMarcaMenosConsumo = async (idMarca) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?v ?nomeModelo ?nomeMotor ?consumo where { 
                        ?v :temMarca :${idMarca}.
                        ?v :temModelo ?modelo.
                        ?modelo :nome ?nomeModelo.
                        ?v :temMotor ?motor.
                        ?motor :nome ?nomeMotor.
                        ?motor :consumo ?consumo.
                        FILTER(?consumo > 0).
                    }ORDER BY(?consumo)
                    LIMIT 1`
    var res = await execQuery(query);
    return res;
};

Carro.infoMarcaMenosEmissoes = async (idMarca) => {
    const query = `PREFIX : <http://prc.di.uminho.pt/2019/automoveis#>
                    select ?v ?nomeModelo ?nomeMotor ?emissoes where { 
                        ?v :temMarca :${idMarca}.
                        ?v :temModelo ?modelo.
                        ?modelo :nome ?nomeModelo.
                        ?v :temMotor ?motor.
                        ?motor :nome ?nomeMotor.
                        ?motor :co2 ?emissoes.
                        FILTER(?emissoes > 0).
                    }ORDER BY(?emissoes)
                    LIMIT 1`
    var res = await execQuery(query);
    return res;
};




