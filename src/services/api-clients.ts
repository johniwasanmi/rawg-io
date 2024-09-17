import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b9d424280f51452fb76c8ea4cbf8fd58",
  },
});
