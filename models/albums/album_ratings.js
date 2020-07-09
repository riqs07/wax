const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../db");


// const album_rating = db.define("album_rating", {
// 	album_id: {
// 		type: Sequelize.INTEGER,
// 		primaryKey: true,
// 		references: {
// 			model: "albums",
// 			key: "id",
// 		},
// 	},
// 	user_id: {
// 		type: Sequelize.INTEGER,
// 		primaryKey: true,
// 		references: {
// 			model: "users",
// 			key: "id",
// 		},
// 		rating: {
// 			type: Sequelize.INTEGER,
// 			allowNull: false,
// 		},
// 	},
// });

// module.exports = album_rating;
