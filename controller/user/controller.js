const User = require("../../model/User");
exports.registar = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json({ data: user });
  } catch (err) {
    next(err);
  }
};

exports.updateDetail = async (req, res, next) => {
  try {
    let user = await User.update(req.body, {
      where: {
        user_id: req.params.id,
      },
    });
    user = await User.findByPk(req.params.id);
    res.json({ data: user });
  } catch (err) {
    next(err);
  }
};

exports.delteteData = async (req, res, next) => {
  try {
    let user = await User.destroy({
      where: {
        user_id: req.params.id,
      },
    });
    res.json({ data: "Data deleted!!" });
  } catch (err) {
    next(err);
  }
};
