import Api from "../../apis/index";
export default {
  getAll() {
    return Api().get("categories/")
  },
  postCreate(data) {
    return Api().post("categories/", {
      categoryName: data.categoryName,
      categoryDescription: data.categoryDescription,
    });
  },
};
