import { localSkills } from "../data/localSkills";

export async function getSkills() {
  console.log("Compétences locales chargées :", localSkills);
  return localSkills;
}