const express = require('express');

const openAIController = require('./../controllers/openAI');

const router = express.Router();

router.post('/generate-chat', openAIController.generateQuery);

module.exports = router;