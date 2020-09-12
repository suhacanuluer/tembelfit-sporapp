const Sequelize = require("sequelize");
const UsersModel = require("../Models/Users");
const SportCategoriesModel = require("../Models/SportCategories");
const SportSubCategoriesModel = require("../Models/SportSubCategories");
const SportDetailsCategoriesModel = require("../Models/SportDetailsCategories");
const SportDetailsModel = require("../Models/SportDetails");
const RecipeCategoriesModel = require("../Models/RecipeCategories");
const RecipesModel = require("../Models/Recipes");
const RecipeDetailsModel = require("../Models/RecipeDetails");
const AdvisorCategoriesModel = require("../Models/AdvisorCategories");
const AdvisorsModel = require("../Models/Advisors");
const DietCategoriesModel = require("../Models/DietCategories");
const DietsModel = require("../Models/Diets");

const sequelize = new Sequelize("tembelfit-sporapp", "root", "Ass122...", {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    reconnect: reconnectOptions || true,
});

sequelize
    .sync()
    .then(() => {
        console.log("connect success.");
    })
    .catch((e) => {
        console.log("cannot connect", e);
    });

var reconnectOptions = {
    max_retries: 999,
    onRetry: function (count) {
        console.log("connection lost, trying to reconnect (" + count + ")");
    },
};
  
// Models
const Users = UsersModel(sequelize, Sequelize);
const SportCategories = SportCategoriesModel(sequelize, Sequelize);
const SportSubCategories = SportSubCategoriesModel(sequelize, Sequelize);
const SportDetailsCategories = SportDetailsCategoriesModel(sequelize, Sequelize);
const SportDetails = SportDetailsModel(sequelize, Sequelize);
const RecipeCategories = RecipeCategoriesModel(sequelize, Sequelize);
const Recipes = RecipesModel(sequelize, Sequelize);
const RecipeDetails = RecipeDetailsModel(sequelize, Sequelize);
const AdvisorCategories = AdvisorCategoriesModel(sequelize, Sequelize);
const Advisors = AdvisorsModel(sequelize, Sequelize);
const DietCategories = DietCategoriesModel(sequelize, Sequelize);
const Diets = DietsModel(sequelize, Sequelize);

// Relations 
SportSubCategories.belongsTo(SportCategories, { foreignKey: "cat_id" });
SportCategories.hasMany(SportSubCategories, { foreignKey: "cat_id" });

SportDetailsCategories.belongsTo(SportSubCategories, { foreignKey: "subcat_id" });
SportSubCategories.hasMany(SportDetailsCategories, { foreignKey: "subcat_id" });

SportDetails.belongsTo(SportDetailsCategories, { foreignKey: "detailscat_id" });
SportDetailsCategories.hasMany(SportDetails, { foreignKey: "detailscat_id" });

Recipes.belongsTo(RecipeCategories, { foreignKey: "cat_id" });
RecipeCategories.hasMany(Recipes, { foreignKey: "cat_id" });

RecipeDetails.belongsTo(Recipes, { foreignKey: "rec_id" });
Recipes.hasMany(RecipeDetails, { foreignKey: "rec_id" });

Advisors.belongsTo(AdvisorCategories, { foreignKey: "cat_id" });
AdvisorCategories.hasMany(Advisors, { foreignKey: "cat_id" });

Diets.belongsTo(DietCategories, { foreignKey: "cat_id" });
DietCategories.hasOne(Diets, { foreignKey: "cat_id" });

module.exports = {
    sequelize,
    Users,
    SportCategories,
    SportSubCategories,
    SportDetailsCategories,
    SportDetails,
    RecipeCategories,
    Recipes,
    RecipeDetails,
    AdvisorCategories,
    Advisors,
    DietCategories,
    Diets
};
