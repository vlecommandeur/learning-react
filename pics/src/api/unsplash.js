import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6RXv80uFP-ZuBsnsRSVPGcwOn9duFkI-hKRFB6uZMMU"
  }
});
