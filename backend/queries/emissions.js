// const emissions = require("../controllers/emissionsController.js");
const db = require("../db/dbConfig.js");

const getAllEmissions = async () => {
  try {
    const allEmissions = await db.any("SELECT * FROM emissions");
    return allEmissions;
  } catch (error) {
    return error;
  }
};

const getOneEmission = async (id) => {
  try {
    const oneEmission = await db.one("SELECT * FROM emissions WHERE id=$1", id);
    return oneEmission;
  } catch (error) {
    return error;
  }
};

const createEmission = async (emission) => {
  try {
    const newEmission = await db.one(
      "INSERT INTO emissions (project_id, server_id, location, year, month, watt_hours, pue) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        emission.project_id,
        emission.server_id,
        emission.location,
        emission.year,
        emission.month,
        emission.watt_hours,
        emission.pue,
      ]
    );
    return newEmission;
  } catch (error) {
    return error;
  }
};

const removeEmission = async (id) => {
  try {
    const deletedEmission = await db.one(
      "DELETE FROM emissions WHERE id=$1 RETURNING *",
      id
    );
    return deletedEmission;
  } catch (error) {
    return error;
  }
};
const updateEmission = async (id, emission) => {
  try {
    const updatedEmission = await db.one(
      "UPDATE emissions SET project_id=$1, server_id=$2, location=$3, year=$4, month=$5, watt_hours=$6, pue=$7 WHERE id=$8 RETURNING *",
      [
        emission.project_id,
        emission.server_id,
        emission.location,
        emission.year,
        emission.month,
        emission.watt_hours,
        emission.pue,
        id
      ]
    );
    return updatedEmission
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllEmissions,
  getOneEmission,
  createEmission,
  removeEmission,
  updateEmission,
};
