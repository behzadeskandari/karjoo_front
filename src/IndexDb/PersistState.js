import db from "./db";

export const saveState = async (state) => {
  try {
    await db.db.reduxState.put({ id: "appState", state });
  } catch (error) {
    console.error("Could not save state", error);
  }
};

export const loadState = async () => {
  try {
    const data = await db.db.reduxState.get("appState");
    return data ? data.state : undefined;
  } catch (error) {
    console.error("Could not load state", error);
    return undefined;
  }
};
