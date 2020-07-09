const Sequelize = require("sequelize");
const db = require("../../db");

const Album = db.define(
	"Album",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		artist_id: {
			type: Sequelize.INTEGER,
			references: {
				model: "artists",
				key: "id",
			},
		},
		release_year: {
			type: Sequelize.DATEONLY,
		},
		runtime: {
			// IN SECONDS
			type: Sequelize.INTEGER,
		},
		genre: Sequelize.STRING,
	},
);




module.exports = Album;
