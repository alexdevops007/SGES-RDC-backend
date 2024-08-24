/*
const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const { requireAdmin } = require("../middleware/roleMiddleware");
const router = express.Router();

router.use(protect);
router.route("/").get(requireAdmin, getUsers).post(requireAdmin, createUser);
router
  .route("/:id")
  .get(requireAdmin, getUser)
  .put(requireAdmin, updateUser)
  .delete(requireAdmin, deleteUser);

module.exports = router;
*/

const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
//const { protect } = require("../middleware/authMiddleware");
// const { requireAdmin } = require("../middleware/roleMiddleware");
const router = express.Router();

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
