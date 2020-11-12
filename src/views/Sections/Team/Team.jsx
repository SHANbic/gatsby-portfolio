import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

const Team = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, teamMember } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      {/* <Row> */}
      {teamMember.map(({ header, ...tmProps }) => (
        <TeamMember key={header} header={header} {...tmProps} />
      ))}
      {/* </Row> */}
    </PageSection>
  );
};

Team.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Team.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Team;
