import { localProjects } from "../data/localProjects";

export async function getProjects() {
  console.log("Projets locaux chargés :", localProjects);
  return localProjects;
}