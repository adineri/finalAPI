const Orden = require("../models/orden");

function createOrden(req, res){
    console.log(req.body);
    let orden = new Orden({
        id: req.body.id,
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        cliente: req.body.cliente,
        iva: req.body.iva
    });
    
    orden.save((error, result) => {
        if (error){
            console.error(error);
            return res.status(500).json({
                error: true,
                message: "Server error", 
                code: 0
            })
        }
        if(!result){
            return res.status(500).json({
                error: true,
                message: "Client error", 
                code: 20
            });
        }
        return res.status(200).json({
            error: false, 
            messsage: "Success", 
            data: result, 
            code: 10
        });
    });
}


function updateOrden(req, res){
    const orden_id = req.params.id;
    const data = req.body;
    Orden.findByIdAndUpdate(orden_id, data, {new: true}, (error, result) => {
        if (error){
            console.error(error);
            return res.status(500).json({
                error: true,
                message: "Server error", 
                code: 0
            })
        }
        if(!result){
            return res.status(500).json({
                error: true,
                message: "Client error", 
                code: 20
            });
        }
        return res.status(200).json({
            error: false, 
            messsage: "Success", 
            data: result, 
            code: 10
        });
    })
}


function getAllOrdenes(req, res){
    Orden.find().exec((error, result) =>{
        if (error){
            console.error(error);
            return res.status(500).json({
                error: true,
                message: "Server error", 
                code: 0
            })
        }
        return res.status(200).json({
            error: false, 
            messsage: "Success", 
            data: result, 
            code: 10
        });
    })
}

function deleteOrden(req, res){
    const orden_id = req.params.id;
    Orden.findOneAndDelete({id:orden_id}, (error, result) =>{
        if (error){
            console.error(error);
            return res.status(500).json({
                error: true,
                message: "Server error", 
                code: 0
            })
        }
        if(!result){
            return res.status(500).json({
                error: true,
                message: "Client error", 
                code: 20
            });
        }
        return res.status(200).json({
            error: false, 
            messsage: "Success", 
            data: result, 
            code: 10
        });
    })
}

module.exports = {createOrden, updateOrden, getAllOrdenes, deleteOrden};