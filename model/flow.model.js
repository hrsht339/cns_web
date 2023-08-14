const mongoose = require("mongoose")

const flowSchema = mongoose.Schema({

})

const flowModel = mongoose.model("flow",flowSchema)

module.exports = {
    flowModel
}