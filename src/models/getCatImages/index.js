import { message } from "antd";
import axios from "axios";
const getCatImages = async (limit = 10) => {
  try {
    const { data } = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    );
    return data;
  } catch {
    message.error(
      "Failed to fetch data from our wonderful cat API )). Please,retry"
    );
    return [];
  }
};

export default getCatImages;
