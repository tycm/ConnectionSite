class Connection{
	constructor(id, name, topic, date, cat, host, where){
		this.ID = id;
		this.name = name;
		this.topic = topic;
		this.date = date;
		this.category = cat;
		this.host = host;
		this.where = where;
	}
}
module.exports = Connection;