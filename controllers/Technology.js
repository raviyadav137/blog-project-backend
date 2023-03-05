const express=require("express");

const technologyApi=require("../api/Technology");

const technology=express.Router();

technology.route("/technology").get(technologyApi.apiController);

module.exports=technology;