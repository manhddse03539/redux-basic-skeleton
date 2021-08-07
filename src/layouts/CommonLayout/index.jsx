import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './common.styles';

const propTypes = {
  children: PropTypes.element.isRequired,
};
const CommonLayout = ({ children }) => <Wrapper>{children}</Wrapper>;
CommonLayout.propTypes = propTypes;
export default CommonLayout;
