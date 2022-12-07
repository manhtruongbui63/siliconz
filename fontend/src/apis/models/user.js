import Api from "../../apis/index";
export default {
  getAll() {
    return Api().get("users");
  },
  secret(){
    return Api().get("users/secret",{
      headers:{
        Authorization:'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  login(data) {
    return Api().post("users/signin", {
      email: data.email,
      password: data.password,
    });
  },
  register(data) {
    return Api().post("users/signup", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
  },
};
