var express = require('express');
var router = express.Router();

var Carro = require('../controllers/automoveis')


//--------------------------- HOME --------------------------

router.get('/home/contaMarcas', async function(req, res, next) {
    var dados = await Carro.contaMarcas()
    res.jsonp(dados) 
});

router.get('/home/contaModelos', async function(req, res, next) {
    var dados = await Carro.contaModelos()
    res.jsonp(dados) 
});

router.get('/home/contaVeiculos', async function(req, res, next) {
    var dados = await Carro.contaVeiculos()
    res.jsonp(dados) 
});

router.get('/home/contaMotores', async function(req, res, next) {
    var dados = await Carro.contaMotores()
    res.jsonp(dados) 
});

router.get('/home/contaPneus', async function(req, res, next) {
    var dados = await Carro.contaPneus()
    res.jsonp(dados) 
});

router.get('/home/contaTracoes', async function(req, res, next) {
    var dados = await Carro.contaTracoes()
    res.jsonp(dados) 
});

router.get('/home/contaCvs', async function(req, res, next) {
    var dados = await Carro.contaCvs()
    res.jsonp(dados) 
});

//--------------------------- Pagina MARCAS --------------------------

router.get('/marcas/todasMarcas', async function(req, res, next) {
    var dados = await Carro.todasMarcas()
    res.jsonp(dados) 
});


//--------------------------- Pagina Veiculos --------------------------

router.get('/veiculos/todosVeiculos', async function(req, res, next) {
    var dados = await Carro.todosVeiculos()
    res.jsonp(dados) 
});

//--------------------------- Pagina Motores --------------------------

router.get('/motores/todosMotores', async function(req, res, next) {
    var dados = await Carro.todosMotores()
    res.jsonp(dados) 
});


//--------------------------- Todas Caixas --------------------------

router.get('/caixas/todasCaixas', async function(req, res, next) {
    var dados = await Carro.todasCaixas()
    res.jsonp(dados) 
});


//--------------------------- Pagina Tracoes --------------------------

router.get('/tracoes/todasTracoes', async function(req, res, next) {
    var dados = await Carro.todasTracoes()
    res.jsonp(dados) 
});


//--------------------------- Pagina Pneus --------------------------


router.get('/pneus/todasJantes', async function(req, res, next) {
    var dados = await Carro.todasJantes()
    res.jsonp(dados) 
});

router.get('/pneus/todasLarguras', async function(req, res, next) {
    var dados = await Carro.todasLarguras()
    res.jsonp(dados) 
});

router.get('/pneus/todosRatios', async function(req, res, next) {
    var dados = await Carro.todosRatios()
    res.jsonp(dados) 
});


//--------------------------- Pagina Pesquisa --------------------------


router.post('/pesquisar', async function(req, res, next) {
    var dados = await Carro.pesquisar(req.body)
    res.jsonp(dados) 
});



//--------------------------- Pagina P1 -> Info Veiculo --------------------------

router.get('/p1/infoVeiculoHead/:id', async function(req, res, next) {
    var dados = await Carro.infoVeiculoHead(req.params.id)
    res.jsonp(dados) 
});

router.get('/p1/infoVeiculoBody/:id', async function(req, res, next) {
    var dados = await Carro.infoVeiculoBody(req.params.id)
    res.jsonp(dados) 
});

//--------------------------- Pagina P2 -> Info Motor --------------------------


router.get('/p2/infoMotorHead/:id', async function(req, res, next) {
    var dados = await Carro.infoMotorHead(req.params.id)
    res.jsonp(dados) 
});

router.get('/p2/infoMotorBodyMarca/:id', async function(req, res, next) {
    var dados = await Carro.infoMotorBodyMarca(req.params.id)
    res.jsonp(dados) 
});

router.get('/p2/infoMotorBodyVeiculos/:id', async function(req, res, next) {
    var dados = await Carro.infoMotorBodyVeiculos(req.params.id)
    res.jsonp(dados) 
});

//--------------------------- Pagina P3 -> Info Pneu --------------------------


router.get('/p3/infoPneuHead/:id', async function(req, res, next) {
    var dados = await Carro.infoPneuHead(req.params.id)
    res.jsonp(dados) 
});

router.get('/p3/infoPneuBodyMarca/:id', async function(req, res, next) {
    var dados = await Carro.infoPneuBodyMarca(req.params.id)
    res.jsonp(dados) 
});

router.get('/p3/infoPneuBodyVeiculos/:id', async function(req, res, next) {
    var dados = await Carro.infoPneuBodyVeiculos(req.params.id)
    res.jsonp(dados) 
});

//--------------------------- Pagina P4 -> Info CV --------------------------


router.get('/p4/infoCVHead/:id', async function(req, res, next) {
    var dados = await Carro.infoCVHead(req.params.id)
    res.jsonp(dados) 
});

router.get('/p4/infoCVBodyMarca/:id', async function(req, res, next) {
    var dados = await Carro.infoCVBodyMarca(req.params.id)
    res.jsonp(dados) 
});

router.get('/p4/infoCVBodyVeiculos/:id', async function(req, res, next) {
    var dados = await Carro.infoCVBodyVeiculos(req.params.id)
    res.jsonp(dados) 
});

//--------------------------- Pagina P5 -> Info Tracao --------------------------


router.get('/p5/infoTracaoHead/:id', async function(req, res, next) {
    var dados = await Carro.infoTracaoHead(req.params.id)
    res.jsonp(dados) 
});

router.get('/p5/infoTracaoBodyMarca/:id', async function(req, res, next) {
    var dados = await Carro.infoTracaoBodyMarca(req.params.id)
    res.jsonp(dados) 
});

router.get('/p5/infoTracaoBodyVeiculos/:id', async function(req, res, next) {
    var dados = await Carro.infoTracaoBodyVeiculos(req.params.id)
    res.jsonp(dados) 
});

//--------------------------- Pagina P6 -> Info Marca --------------------------


router.get('/p6/infoMarcaHead/:id', async function(req, res, next) {
    var dados = await Carro.infoMarcaHead(req.params.id)
    res.jsonp(dados) 
});

router.get('/p6/infoMarcaBodyModelos/:id', async function(req, res, next) {
    var dados = await Carro.infoMarcaBodyModelos(req.params.id)
    res.jsonp(dados) 
});

router.get('/p6/infoMarcaBodyMotores/:id', async function(req, res, next) {
    var dados = await Carro.infoMarcaBodyMotores(req.params.id)
    res.jsonp(dados) 
});

router.get('/p6/infoMarcaMaisPotente/:id', async function(req, res, next) {
    var dados = await Carro.infoMarcaMaisPotente(req.params.id)
    res.jsonp(dados) 
});

router.get('/p6/infoMarcaMaisTorque/:id', async function(req, res, next) {
    var dados = await Carro.infoMarcaMaisTorque(req.params.id)
    res.jsonp(dados) 
});

router.get('/p6/infoMarcaMenosConsumo/:id', async function(req, res, next) {
    var dados = await Carro.infoMarcaMenosConsumo(req.params.id)
    res.jsonp(dados) 
});

router.get('/p6/infoMarcaMenosEmissoes/:id', async function(req, res, next) {
    var dados = await Carro.infoMarcaMenosEmissoes(req.params.id)
    res.jsonp(dados) 
});


module.exports = router;
