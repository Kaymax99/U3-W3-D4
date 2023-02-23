import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { IArticle } from "../interfaces/IArticle";
import { ArticleComponent } from "./ArticleComponent";

export const Home = () => {
  const baseURL = "https://api.spaceflightnewsapi.net/v3/articles";
  const [articlesList, setArticlesList] = useState<IArticle[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await fetch(baseURL);
      if (res.ok) {
        const articlesAPI = await res.json();
        // console.log(articlesAPI);
        setArticlesList(articlesAPI);
      } else {
        console.log("Error while fetching content");
      }
    } catch (error) {
      console.log(
        "There was an error while trying to contact the server: ",
        error
      );
    }
  };

  return (
    <Container>
      <Row>
        {articlesList.map((article, i) => {
          return <ArticleComponent key={"article-" + i} article={article} />;
        })}
      </Row>
    </Container>
  );
};
