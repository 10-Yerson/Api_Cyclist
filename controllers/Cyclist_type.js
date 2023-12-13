
let Cyclist_type = require('../models/Cyclist_type')

const controller = {
    getCyclist_types: function (req, res) {
        Cyclist_type.find({}).exec()
            .then(cyclist_typeList => {
                if (!cyclist_typeList) return res.status(404).send({ message: "No data found" })
                return res.status(200).json(cyclist_typeList)
            })
            .catch(err => res.status(500).send({ message: `Error: ${err}` }))
    },
    getCyclist_type: function (req, res) {
        let cyclist_typeId = req.params.id
        if (cyclist_typeId == null) return res.status(404).send({ message: "cyclism not found" })

        Cyclist_type.findById(cyclist_typeId).exec()
            .then(data => {
                if (!data) return res.status(404).send({ message: "cyclism not found" })
                return res.status(200).json(data)
            })
            .catch(err => res.status(500).send({ message: `Internal error-> ${err}` }))
    },

    saveCyclist_type: function (req, res) {
        let cyclist_type = new Cyclist_type()

        const {name} = req.body

        if (name && name) {
            cyclist_type.name = name
            cyclist_type.save()
                .then(storedCyclist_type => {
                    storedCyclist_type
                        ? res.status(200).json({ Cyclist: storedCyclist_type })
                        : res.status(404).send({ message: "Error saving the document" })
                })
                .catch(error => res.status(500).send({ message: "Error while saving the document" }))
        } else {
            return res.status(400).send({ message: "Data is not right" })
        }
    },

    updateCyclist_type: function (req, res) {
        let cyclist_typeId = req.params.id
        let update = req.body

        Cyclist_type.findByIdAndUpdate(cyclist_typeId, update,
            { returnDocuments: 'After' })
            .then(updatedCyclist_typeId => {
                if (!updatedCyclist_typeId) return res.status(404).send({ message: "The document does not exist" })
                return res.status(200).send({ show: updatedCyclist_typeId })
            })
            .catch(error => res.status(500).send({ message: `Error while updating ${error}` }))
    },

    deleteCyclist_type: function (req, res) {
        let cyclist_typeId = req.params.id

        Cyclist_type.findByIdAndDelete(cyclist_typeId)

            .then(removedCyclist_type => {
                if (!removedCyclist_type) return res.status(404).send({ message: "The ciclyst does not exist" })
                return res.status(200).send({ show: removedCyclist_type })
            })
            .catch(err => res.status(500).send({ message: "Error while deleting" }))
    }
}

module.exports = controller; 