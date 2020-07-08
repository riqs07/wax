const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../db");

const album_review = db.define("album_review", {
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
	link: Sequelize.STRING,
});

module.exports = album_review;
