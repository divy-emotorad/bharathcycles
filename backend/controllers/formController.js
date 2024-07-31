import BharathCyclesResaleLead from "../models/leadResaleSchema.js";

export const addLeadData = async (req, res, next) => {
  try {
    const data = await BharathCyclesResaleLead.create(req.body);
    res.status(201).json({ message: "Lead Created Successfully", data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
