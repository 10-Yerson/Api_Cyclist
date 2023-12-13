'use strict'

const { Router } = require('express')

const cyclismController = require('../controllers/Cyclist_type')

const router = Router()

router.get('/', cyclismController.getCyclist_types)
router.get('/:id?', cyclismController.getCyclist_type)
router.post('/Save-type', cyclismController.saveCyclist_type)
router.put('/edit-type/:id?', cyclismController.updateCyclist_type)
router.delete('/delete-type/:id?', cyclismController.deleteCyclist_type)


module.exports = router;