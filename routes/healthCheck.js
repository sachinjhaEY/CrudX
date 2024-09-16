const express = require('express');

const healthController = require('./../controllers/healthCheck');

const router = express.Router();

router.get('/', healthController.getHealthCheck);

module.exports = router;