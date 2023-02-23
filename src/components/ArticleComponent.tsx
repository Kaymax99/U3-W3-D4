import { Col, Card, Button } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import { Link } from "react-router-dom";

interface ArticleComponentProps {
  article: IArticle;
}

export const ArticleComponent = ({ article }: ArticleComponentProps) => {
  return (
    <Col xs={12} md={6} className="mt-4">
      <Card>
        <Card.Img
          variant="top"
          src={article.imageUrl}
          style={{ aspectRatio: 1.5 / 1 }}
        />
        <Card.Body>
          <Card.Title className="ellipsisTitle">{article.title}</Card.Title>
          <Card.Text className="ellipsisSummary">{article.summary}</Card.Text>
          <Link to={"/article/" + article.id}>
            <Button variant="success">Read more</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
