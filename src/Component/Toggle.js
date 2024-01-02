import React from 'react';
import { Button, Card, CardBody, Collapse } from "reactstrap";

export const Toggle = () => {
    const [state, setState] = React.useState({
    
        moreInfoOpen: false
      });
      const { article, moreInfoOpen } = state;
    
      const toggleMoreInfo = () => {
        setState((prevState) => ({
          article: " ",
          moreInfoOpen: !prevState.moreInfoOpen
        }));
      };
    
      const handleArticleOpen = (article) => {
        setState((prevState) => ({
          ...prevState,
          article
        }));
      };
  return (
    <div className="app">
    <Button className="info-button" color="primary" onClick={toggleMoreInfo}>
      More Info
    </Button>
    <Collapse isOpen={moreInfoOpen}>
      <Card className="card">
        <CardBody className="card-body">
          <div className="section section-articles">
            <div className="articles-buttons">
              <Button
                className="article2-button"
                color="primary"
                onClick={() => handleArticleOpen("2")}
              >
                <h3>Article 2</h3>
              </Button>
              <Button
                className="article1-button"
                color="primary"
                onClick={() => handleArticleOpen("1")}
              >
                <h3>Article 1</h3>
              </Button>
            </div>

            <Collapse isOpen={article === "2"}>
              <Card className="card">
                <CardBody className="card-body">
                  <div>Article 2</div>
                </CardBody>
              </Card>
            </Collapse>
            <Collapse isOpen={article === "1"}>
              <Card className="card">
                <CardBody className="card-body">
                  <div>Article 1</div>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </CardBody>
      </Card>
    </Collapse>
  </div>
);
}
