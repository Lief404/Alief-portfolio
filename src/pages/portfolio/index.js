import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setActiveItem(item);
    setShow(true);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* GRID */}
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((item, i) => (
            <div
              key={i}
              className="po_item"
              onClick={() => handleShow(item)}
            >
              <img src={item.coverImg} alt={item.title} />
              <div className="content">
                <p>{item.shortDesc}</p>
                <span className="view_more">View Project</span>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {activeItem && (
          <Modal
            show={show}
            onHide={handleClose}
            centered
            size="lg"
            className="portfolio-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>{activeItem.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img
                src={activeItem.popupImg}
                alt={activeItem.title}
                className="modal-img"
              />
              <p className="modal-desc">{activeItem.description}</p>

              <div className="modal-tech">
                {activeItem.tech.map((t, i) => (
                  <span key={i} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="primary"
                href={activeItem.link}
                target="_blank"
              >
                Visit Project
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </HelmetProvider>
  );
};
