import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import User from "@/models/User";
import Post from "@/models/Post";

Vue.use(Vuex);

VuexORM.use(VuexORMAxios, {
  axios,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Create a new instance of Database.
const database = new VuexORM.Database();

// Register Models to Database.
database.register(User);
database.register(Post);

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)],
});

export default store;
