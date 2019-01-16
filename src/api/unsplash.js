import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 7d7b98877af912c230a0f02127ff4d7ecd73de3ca0caa713480134cc98606840"
  }
});
