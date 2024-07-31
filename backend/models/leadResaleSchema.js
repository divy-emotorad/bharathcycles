import mongoose from "mongoose";

const leadResaleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name field required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email field required"],
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: [true, "PhoneNumber field required"],
    },
    pincode: {
      type: String,
      trim: true,
      required: [true, "Pincode field required"],
    },
    state: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const BharathCyclesResaleLead = mongoose.model(
  "BharathCyclesResaleLead",
  leadResaleSchema
);

export default BharathCyclesResaleLead;
