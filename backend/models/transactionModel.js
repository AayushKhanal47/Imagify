import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  plan: { type: String, requierd: true },
  amount: { type: Number, requierd: true },
  credits: { type: Number, requierd: true },
  payment: { type: Boolean, default: false },
  date: { type: Number },
});

const transactionModel = mongoose.model("transaction", transactionSchema);

export default transactionModel;
