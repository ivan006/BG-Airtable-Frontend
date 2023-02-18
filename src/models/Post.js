// Post Model

import { Model } from "@vuex-orm/core";
// import User from "./User";

export default class Post extends Model {
  static entity = "posts";

  // `this.belongsTo` is for belongs to relationship. The first argument is
  // the Model class, and second is the field name for the foreign key.
  static fields() {
    return {
      id: this.attr(null),
      userId: this.attr(null),
      title: this.attr(""),
      body: this.attr(""),
      // published: this.attr(false),
      // author: this.belongsTo(User, "user_id"),
    };
  }

  static FetchAll(
    { page = 1, limit = 15 },
    query = {},
    relationships = [],
    view = "Grid view"
  ) {
    page;
    relationships;
    return this.api().get("/Table%201", {
      params: {
        ...{
          // page: page,
          maxRecords: limit,
          view: view,
          // with: relationships,
        },
        ...(query !== {} ? query : {}),
      },
      dataTransformer: ({ data }) => {
        return data.records.map((entity) => {
          return { ...entity, ...entity.fields };
        });
      },
    });
  }
}
