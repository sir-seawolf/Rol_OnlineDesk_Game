const { Router } = require("express");
const router = Router();
router.get('/text', (req,res)=>{
    //res.send("Hello world, mejor hola mundo");//send envia un string
    const data = {
            "Name" : "Miguel",
            "Web" : "www.sir-seawolf.es",
            "Edad" : "45",
    };
    res.json(data);
});

module.exports = router;


