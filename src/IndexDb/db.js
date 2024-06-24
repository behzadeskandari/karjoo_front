import Dexie from "dexie";

const db = new Dexie("ReduxDB");

db.version(1).stores({
  reduxState: "id,state",
});

export default { db };
