import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconExternal,
  IconFolder,
  IconFork,
  IconInstagram,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
} from '@components/icons';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faMedium,
  faItchIo,
} from '@fortawesome/free-brands-svg-icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      // return <IconGitHub />;
      return <FontAwesomeIcon icon={faGithub} />;
    case 'Leetcode':
      return <IconInstagram />;
    case 'Linkedin':
      // return <IconLinkedin />;
      return <FontAwesomeIcon icon={faLinkedin} />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'ItchIo':
      return <FontAwesomeIcon icon={faItchIo} />;
    case 'YouTube':
      return <FontAwesomeIcon icon={faYoutube} />;
    case 'Medium':
      return <FontAwesomeIcon icon={faMedium} />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
