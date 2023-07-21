const User = require("../../models/userSchema");

const getUserData = async (req, res, next) => {
  const user = await User.findById(req.body.id);

  console.log("user", user);

  const { dietaryRestrictions, allergies, skillLevel, cookingEquipment } = user;

  req.body = {
    ...req.body,
    dietaryRestrictions,
    allergies,
    skillLevel,
    cookingEquipment,
  };
  next();
};

module.exports = { getUserData };
