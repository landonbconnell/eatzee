const User = require("../../models/userSchema");
const { skillLevelNumToString } = require("../../utils/skillLevelNumToString");

const getUserData = async (req, res, next) => {
  const user = await User.findById(req.body.id);
  const { dietaryRestrictions, allergies, skillLevel, cookingEquipment } =
    user.data;

  newBody = {
    ...req.body,
    data: {
      ...req.body.data,
      dietaryRestrictions,
      allergies,
      skillLevel: skillLevelNumToString(skillLevel),
      cookingEquipment,
    },
  };

  req.body = newBody;
  next();
};

module.exports = { getUserData };
