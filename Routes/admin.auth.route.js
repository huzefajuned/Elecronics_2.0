const express = require('express');
const router = express.Router()

const adminAuthController = require("../Controllers/admin.auth.controller");

router.post("/admin/register", adminAuthController.adminRegister);

module.exports = router