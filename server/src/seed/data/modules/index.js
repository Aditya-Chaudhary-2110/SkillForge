import javaModules from "./java.module.js";
import osModules from "./os.module.js";
import dbmsModules from "./dbms.module.js";
import cnModules from "./cn.module.js";

const modules = [
  {
    skill: "java",
    modules: javaModules,
  },

  {
    skill: "operating-systems",
    modules: osModules,
  },

  {
    skill: "dbms",
    modules: dbmsModules,
  },

  {
    skill: "computer-networks",
    modules: cnModules,
  },
];

export default modules;
