import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import * as SocialIcons from "components/SocialIcons";

import "./TeamMember.scss";

const TeamMember = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  presentation1,
  presentation2,
  social: { twitter, facebook, linkedin, github, medium },
}) => {
  const twitterPart = twitter ? <SocialIcons.Twitter userName={twitter} /> : null;
  const facebookPart = facebook ? <SocialIcons.Facebook userName={facebook} /> : null;
  const linkedinPart = linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null;
  const githubPart = github ? <SocialIcons.Github userName={github} /> : null;
  const mediumPart = medium ? <SocialIcons.Medium userName={medium} /> : null;

  return (
    <div className="team-member">
      <div className="team-member-info">
        <Image
          className="mx-auto circle rounded-circle"
          fileName={imageFileName}
          alt={imageAlt || header || subheader}
        />
        <h4>{header}</h4>
        <p className="text-muted">{subheader}</p>
        <div>
          {twitterPart}
          {facebookPart}
          {linkedinPart}
          {githubPart}
          {mediumPart}
        </div>
      </div>
      <div className="team-member-presentation">
        <p>{presentation1}</p>
        <p>{presentation2}</p>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  presentation1: PropTypes.string,
  presentation2: PropTypes.string,
  social: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    medium: PropTypes.string,
  }),
};

TeamMember.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  presentation1: "",
  presentation2: "",
  social: {
    twitter: null,
    facebook: null,
    linkedin: null,
    github: null,
    medium: null,
  },
};

export default TeamMember;
