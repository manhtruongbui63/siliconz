import Api from "../../apis/index";
export default {
  addCart(data) {
    return Api().get(
      "cart/add-to-cart/id=" + data.id + "/quantity=" + data.quantity,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  },
  getAllCart() {
    return Api().get("cart/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
};
