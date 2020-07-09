const { Sequelize, DataTypes } = require("sequelize");
const {db }= require("../../db");

const album_review = db.define("album_review", {
	album_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		references: {
			model: "albums",
			key: "id",
		},
	},
	user_id: {
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
	image_url: Sequelize.STRING,
});

module.exports = album_review;
