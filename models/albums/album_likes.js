const { Sequelize, DataTypes } = require("sequelize");
const {db} = require("../../db");

const album_like = db.define("album_like", {
	album_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		references: {
			model: "artists",
			key: "id",
		},
	},
	user_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		references: {
			model: "users",
			key: "id",
		},
	},
});

module.exports = album_like;
