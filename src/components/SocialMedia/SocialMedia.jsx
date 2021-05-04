import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="link-icon">
      <a href="https://github.com/arifur-ra" className="social-icon">
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/arifur-rahman-arif-416735131/"
        className="social-icon"
      >
        <LinkedInIcon />
      </a>
      <a href="https://twitter.com/?lang=de" className="social-icon">
        <TwitterIcon />
      </a>
    </div>
  );
};

export default SocialMedia;
