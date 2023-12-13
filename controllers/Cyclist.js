

let Cyclist = require('../models/Cyclist')

const controller = {
    getCyclisms: function (req, res) {
        Cyclist.find({}).exec()
            .then(cyclistList => {
                if (!cyclistList) return res.status(404).send({ message: "No data found" })
                return res.status(200).json(cyclistList)
            })
            .catch(err => res.status(500).send({ message: `Error: ${err}` }))
    },
    getCyclism: function (req, res) {
        let cyclistId = req.params.id
        if (cyclistId == null) return res.status(404).send({ message: "cyclism not found" })

        Cyclist.findById(cyclistId).exec()
            .then(data => {
                if (!data) return res.status(404).send({ message: "cyclism not found" })
                return res.status(200).json(data)
            })
            .catch(err => res.status(500).send({ message: `Internal error-> ${err}` }))
    },

    saveCyclism: function (req, res) {
        let cyclist = new Cyclist()

        const { name, birth_date, photo } = req.body

        if (name && birth_date) {
            cyclist.name = name
            cyclist.birth_date = birth_date
            cyclist.photo = photo

            cyclist.save()
                .then(storedCyclist => {
                    storedCyclist
                        ? res.status(200).json({ Cyclist: storedCyclist })
                        : res.status(404).send({ message: "Error saving the document" })
                })
                .catch(error => res.status(500).send({ message: "Error while saving the document" }))
        } else {
            return res.status(400).send({ message: "Data is not right" })
        }
    },

    updateCyclist: function (req, res) {
        let cyclistId = req.params.id
        let update = req.body

        Cyclist.findByIdAndUpdate(cyclistId, update,
            { returnDocuments: 'After' })
            .then(updatedCyclist => {
                if (!updatedCyclist) return res.status(404).send({ message: "The document does not exist" })
                return res.status(200).send({ show: updatedCyclist })
            })
            .catch(error => res.status(500).send({ message: `Error while updating ${error}` }))
    },

    deleteCyclist: function (req, res) {
        let cyclismId = req.params.id

        Cyclist.findByIdAndDelete(cyclismId)

            .then(removedCyclist => {
                if (!removedCyclist) return res.status(404).send({ message: "The  Cyclist does not exist" })
                return res.status(200).send({ show: removedCyclist })
            })
            .catch(err => res.status(500).send({ message: "Error while deleting" }))
    }
}

module.exports = controller;