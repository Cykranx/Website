import { v4 as uuidv4 } from "uuid";

export const state = () => ({
 
  aboutMe: [
    {
      id: uuidv4(),
      bio: "15-jährige Anfänger Programmierer. Ich interessiere mich für Software Entwicklung in programmiere, sprachen wie: Python, Javascript, und C Sharp. Ich bin noch an das Lernen von Programier sprachen und deshalb hab ich bis jetzt wenige Projekt fertigstellen.",
    },
    {
      id: uuidv4(),
      bio: "",
    },
    {
      id: uuidv4(),
      bio: "",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/Cykranx",
    },
    {
    
    },
    {
    
    },
  ],
  projects: [

  ]
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // Todo
};

export const actions = {
  // Todo
};
