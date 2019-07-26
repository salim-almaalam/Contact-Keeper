const express = require("express");
const router = express.Router();

// @route  GET api/contacts
// @desc Get all users contacts
// @acces Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route  GET api/contacts
// @desc Get all users contacts
// @acces Private
router.post("/", (req, res) => {
  res.send("Add contacts");
});

// @route  GET api/contacts/:id
// @desc Update contact
// @acces Private
router.put("/", (req, res) => {
  res.send("Update contact");
});

// @route  DELETE api/contacts/:id
// @desc Delete contact
// @acces Private
router.delete("/", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
