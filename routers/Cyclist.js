'use strict'

const { Router } = require('express')

const cyclismController = require('../controllers/Cyclist')

const router = Router()

router.get('/', cyclismController.getCyclisms)
router.get('/:id?', cyclismController.getCyclism)
router.post('/Save-Cyclist', cyclismController.saveCyclism)
router.put('/edit-cyclist/:id?', cyclismController.updateCyclist)
router.delete('/delete-cyclist/:id?', cyclismController.deleteCyclist)


module.exports = router;