const { Sequelize, DataTypes } = require("sequelize");
const {db }= require("../../db");

const Album_review = db.define("album_review", {
	albumID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		references: {
			model: "albums",
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
	review: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
});

module.exports = Album_review;
