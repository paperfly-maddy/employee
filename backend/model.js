var mongoose = require('mongoose');
var empSchema = new mongoose.Schema({
    empid:String,
    name: String,
    sirname:String,
    //level:Number,
    position : String,
    department : String,
    salary : String
})

var Employee = module.exports = mongoose.model('Employee', empSchema);

module.exports.getEmployees = function(callback){
    Employee.find(callback);
}
module.exports.addEmployee = function(newEmployee, callback){
    Employee.create(newEmployee, callback);
}
module.exports.updateEmployee = function(id, newEmployee, callback){
    Employee.findByIdAndUpdate(id, newEmployee, callback);
}
module.exports.deleteEmployee = function(id, callback){
    Employee.findByIdAndRemove(id, callback);
}
module.exports.getEmployee = function(id, callback){
    Employee.findById(id, callback);
}
