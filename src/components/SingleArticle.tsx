import { useEffect, useState } from "react";
import { Container, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IArticle } from "../interfaces/IArticle";

export const SingleArticle = () => {
  const params = useParams();
  const baseURL =
    "https://api.spaceflightnewsapi.net/v3/articles/" + params.articleID;
  const [article, setArticle] = useState<IArticle>();

  useEffect(() => {
    fetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticle = async () => {
    try {
      const res = await fetch(baseURL);
      if (res.ok) {
        const articleFromAPI = await res.json();
        console.log(articleFromAPI);
        setArticle(articleFromAPI);
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
    <div
      className="d-flex flex-column align-items-center"
      style={{
        backgroundImage: `url(${article?.imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Container className="bg-light mt-6 rounded">
        <Col xs={12}>
          <h1 className="my-3">{article?.title}</h1>
        </Col>

        <Col xs={12} className="fs-3">
          <p className="mb-3">{article?.summary}</p>
        </Col>
        <Col xs={12} className="fs-4">
          <p className="mb-3 fst-italic text-muted">
            {article?.newsSite} - {article?.publishedAt.slice(0, 10)}
          </p>
        </Col>
        <Button href={article?.url} className="mb-2" variant="success">
          To Article
        </Button>
      </Container>
    </div>
  );
};
