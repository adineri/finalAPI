const mongoose = require("mongoose");

const ordenSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    nombre: {
        type: String, 
        required:true
    },
    cantidad: {
        type: Number, 
        required: true
    },
    precio:{
        type: Number,
        required: true 
    },
    cliente:{
        type: String, 
        required: true,
        default: Date.now
    },
    iva:{
        type: Number,
        required: true 
    }
});

module.exports = mongoose.model("Orden", ordenSchema);