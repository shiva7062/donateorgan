const mongoose = require('mongoose');

const organDonorSchema = new mongoose.Schema({
  donate: { type: String, enum: ['allOrgan', 'specificOrgan'], required: true },
  details: { type: String },
  select: { type: String, enum: ['research', 'transplant', 'researchTransplant'], required: true },
  organs: { type: String },
  blood: { type: String }
});

const OrganDonor = mongoose.model('OrganDonor', organDonorSchema);

module.exports = OrganDonor;
