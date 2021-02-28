module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let team = [];
  for (let member of members) {
    if (typeof member === "string") {
      team.push(member.trim().toUpperCase()[0]);
    }
  }
  return team.sort().join("");
};
