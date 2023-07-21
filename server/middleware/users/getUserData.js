const User = require("../../models/User");

export const getUserData = async (req, res, next) => {
  const { dietaryRestrictions, allergies, skillLevel, cookingEquipment } =
    await User.findById(req.body.id);

  // add userData to req.body without overwriting existing data or creating a new property
  req.body = {
    ...req.body,
    dietaryRestrictions,
    allergies,
    skillLevel,
    cookingEquipment,
  };
  next();
};
