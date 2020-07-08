const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../db");


const album_rating = db.define("album_rating", {
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
		rating: {
			type: Sequelize.DECIMAL,
			allowNull: false,
		},
	},
});

module.exports = album_rating;
