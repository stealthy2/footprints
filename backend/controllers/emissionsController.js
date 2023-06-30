const express = require("express");
const emissions = express.Router();
const {
  getAllEmissions,
  getOneEmission,
  createEmission,
  removeEmission,
  updateEmission,
} = require("../queries/emissions");
const db = require("../db/dbConfig");

emissions.get("/", async (req, res) => {
  try {
    const allEmissions = await getAllEmissions();
    if (allEmissions[0]) {
      res.status(200).json(allEmissions);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
});
emissions.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const emission = await getOneEmission(id);
    if (emission.id) {
      res.status(200).json(emission);
    } else {
      res.status(404).json({ error: "Emission Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
});

emissions.post("/", async (req, res) => {
   
 const  {body}  = req;
  try {
    const newEmission = await createEmission(body);
    if (newEmission.id) {
      res.status(200).json(newEmission);
    } else {
      res.status(404).json({ error: "Emission not created" });
    }
  } catch (error) {
    console.log(error);
  }
});

emissions.delete("/:id", async (req, res)=> {
    const {id}= req.params
    try {
        const deletedEmission = await removeEmission(id);
        if (deletedEmission.id) {
            res.status(200).json(deletedEmission)
            
        } else {
            res.status(422).json({error:"Emission not deleted"})
            
        }

    } catch (error) {
        console.log("error:", error)
        
    }
})

emissions.put("/:id", async (req,res)=> {
    const {id} = req.params
    const {body} = req
    try {
        const updatedEmission = await updateEmission(id, body)
        if (updatedEmission.id) {
            res.status(200).json(updatedEmission)
            
        } else {
            res.status(422).json({error: "Emission not updated"})
            
        }
        
    } catch (error) {
        console.log(error)
        
    }
})
module.exports = emissions;
