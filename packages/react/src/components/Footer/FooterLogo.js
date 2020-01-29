/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { settings as ddsSettings } from '@carbon/ibmdotcom-utilities';
import FooterLogo from '@carbon/ibmdotcom-styles/icons/svg/IBM-8bar-logo--h65-white.svg';
import React from 'react';
import { settings } from 'carbon-components';

const { stablePrefix } = ddsSettings;
const { prefix } = settings;

/**
 * Footer logo component
 *
 * @returns {object} JSX object
 */
const Logo = () => {
  return (
    <div
      data-autoid={`${stablePrefix}--footer-logo`}
      className={`${prefix}--footer-logo`}>
      <a
        data-autoid={`${stablePrefix}--footer-logo__link`}
        className={`${prefix}--footer-logo__link`}
        href="https://www.ibm.com/">
        <FooterLogo />
      </a>
    </div>
  );
};

export default Logo;
