var user = function(id, firstName, lastName, email, address1, address2, city, state, zip, country){
	var userModel = {ID: id, firstName: firstname, lastName: lastName, email: email, address1: address1, address2: address2, city: city, state: state, zip: zip, country: country};
	return userModel;
};

module.exports.user = user;