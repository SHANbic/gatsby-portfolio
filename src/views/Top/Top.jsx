import React from "react";
import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return <ImageCard imageFileName={imageFileName} header={header} subheader={subheader} />;
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
