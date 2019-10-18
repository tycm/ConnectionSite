var connection = function(i, n, t, d, c, h, w){
	var connectionModel = {ID: i, name: n, topic: t, date: d, category: c, host: h, where: w};
	return connectionModel;
};

module.exports.connection = connection;