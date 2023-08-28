import { message } from "antd";
import axios from "axios";
const getCatCategories = async () => {
  try {
    const { data } = await axios.get(
      "https://api.thecatapi.com/v1/categories "
    );
    return data;
  } catch {
    message.error(
      "Failed to fetch cat categories from out wonderful cat API )). Please,retry"
    );
  }
};

export default getCatCategories;
