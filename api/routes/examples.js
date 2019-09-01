var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.example
    .findAll({
      attributes: ["id", "name"]
    })
    .then(examples => res.send(examples))
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
  models.example
    .create({ name: req.body.name })
    .then(example => res.status(201).send({ id: example.id }))
    .catch(() => res.sendStatus(500));
});

const findExample = (id, { onSuccess, onNotFound, onError }) => {
  models.example
    .findOne({
      attributes: ["id", "name"],
      where: { id }
    })
    .then(example => (example ? onSuccess(example) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findExample(req.params.id, {
    onSuccess: example => res.send(example),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = example =>
    example
      .update({ name: req.body.name }, { fields: ["name"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findExample(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = example =>
    example
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findExample(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
