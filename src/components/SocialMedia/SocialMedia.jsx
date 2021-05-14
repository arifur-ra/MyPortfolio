import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="link-icon">
      <a
        href="https://github.com/arifur-ra"
        target="_blank"
        className="social-icon"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/arifur-rahman-arif-416735131/"
        target="_blank"
        className="social-icon"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://twitter.com/?lang=de"
        target="_blank"
        className="social-icon"
        rel="noreferrer"
      >
        <TwitterIcon />
      </a>
    </div>
  );
};

export default SocialMedia;
