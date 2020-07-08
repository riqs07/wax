const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../db");

const album_like = db.define("album_like", {
	artistID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		references: {
			model: "artists",
			key: "id",
		},
	},
	userID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		references: {
			model: "users",
			key: "id",
		},
	},
});

module.exports = album_like;
