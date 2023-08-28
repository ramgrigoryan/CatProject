import { Card } from "antd";
import "./CatCard.css";
const CatCard = ({ catImgUrl }) => {
  return (
    <Card className="cat-card">
      <img src={catImgUrl} alt="cat" width={350} height={350} />
    </Card>
  );
};

export default CatCard;
