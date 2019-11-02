var UserProfile = require('./UserProfile.js')
class User{
	constructor(id, firstName, lastName, email, address1, address2, city, state, zip, country){
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.address1 = address1;
		this.address2 = address2;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.country = country;
		this.profile = new UserProfile(id);
	};
};

module.exports = User;