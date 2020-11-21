import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telephone, email } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mb-5">{header}</h2>
          <p className="mb-5">{subheader}</p>
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="ml-auto text-center phone-icon">
          <a className="d-block " href={`tel:${telephone}`}>
            <Icon iconName="PhoneIcon" size="3x" className="mb-1" />
          </a>
          <a className="d-block " href={`tel:${telephone}`}>
            {telephone}
          </a>
        </Col>
        <Col sm={6} className="mr-auto text-center mail-icon">
          <a className="d-block" href={`mailto:${email}`} target="_blank" rel="noreferrer">
            <Icon iconName="EnvelopIcon" size="3x" className="mb-1" />
          </a>
          <a className="d-block" href={`mailto:${email}`} target="_blank" rel="noreferrer">
            {email}
          </a>
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
