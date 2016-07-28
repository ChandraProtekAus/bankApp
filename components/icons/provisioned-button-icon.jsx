import React, { Component, PropTypes } from 'react';
import Icon from './icon';
import { imagePath } from '../../lib/utils';
const { COMPANY } = process.env;

export default class ProvisionedButtonIcon extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { selected, className, style } = this.props;
    const src = selected
              ? imagePath(`/images/${COMPANY}/icons/btn-provisioned-selected.png`)
              : imagePath(`/images/${COMPANY}/icons/btn-provisioned.png`);

    return (
      <Icon
        className={className}
        src={src}
        style={Object.assign({ width: 60, height: 24 }, style)}
      />
    );
  }
}