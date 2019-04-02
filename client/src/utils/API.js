import axios from "axios";

export default {
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },

  createUser: function (userData) {
    return axios.post("/api/user/create", userData);
  },
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },
  getTrip(id) {
    return axios.get("/api/places/findTrip", {
      params: {
        id: id
      }
    })
  },
  getTrips(user) {
    return axios.get("/api/places/gettrips", {
      params: {
        uid: user.uid
      }
    })
  }
};
