import Api from "../../apis/index";
export default {
  getAll() {
    return Api().get("products/");
  },
  getProduct(payload) {
    return Api().get("products/" + payload);
  },
  postCreate(formData) {
    return Api().post("products/", formData);
  },
};
