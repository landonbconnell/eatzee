const skillLevelNumToString = (skillLevelNum) => {
  switch (skillLevelNum) {
    case 0:
      return "beginner";
    case 1:
      return "intermediate";
    case 2:
      return "advanced";
    default:
      return "beginner";
  }
};

module.exports = { skillLevelNumToString };
