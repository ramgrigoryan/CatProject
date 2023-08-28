import { useEffect, useState } from "react";
import "./App.css";
import getCatImages from "./models/getCatImages";
import getCatCategories from "./models/getCatCategories";
import CatCard from "./components/CatCard";
import { Button, Card, Layout } from "antd";

const { Sider } = Layout;

const App = () => {
  const [ourCats, setOurCats] = useState([]);
  const [catCount, setCatCount] = useState(20);
  const [catCategories, setCatCategories] = useState([]);

  const fetchAndSetOurCats = async () => {
    const data = await getCatImages(catCount);
    setOurCats(data);
  };

  const fetchAndSetCatCategories = async () => {
    const data = await getCatCategories();
    setCatCategories(data);
  };

  useEffect(() => {
    fetchAndSetOurCats();
  }, [catCount]);

  useEffect(() => {
    fetchAndSetCatCategories();
  }, []);

  return (
    <div className="App">
      <Layout>
        <Sider theme="light">
          {catCategories.map(({ id, name }) => (
            <Card key={id}>{name}</Card>
          ))}
        </Sider>
        {ourCats.length && (
          <div className="cat-container">
            {ourCats.map(({ id, url, width, height }) => (
              <CatCard key={id} catImgUrl={url} width={width} height={height} />
            ))}
          </div>
        )}
        <Button type="primary" onClick={() => setCatCount(catCount + 10)}>
          Load more
        </Button>
      </Layout>
    </div>
  );
};

export default App;
