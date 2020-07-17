const express = require("express");
const { user, studio } = require("../controllers");

const router = express.Router();

router.get("/posts");

router.post("/user/login", user.userLogin);
router.post("/user/logout", user.userLogout);
router.post("/user/register", user.userRegister);

router.post("/studio", studio.addStudio);
router.get("/studio/:slug", user.userAuth, studio.getSingleStudio);
router.put("/studio/:slug", studio.updateStudio);
router.delete("/studio/:slug", studio.updateStudio);

router.get("/studios", studio.getAllStudios);

module.exports = router;
