var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InsuranceProvidersSchema = new Schema({
    companyName: String,
    logoUrl: String
});

module.exports = mongoose.model('insuranceProviders', InsuranceProvidersSchema);
