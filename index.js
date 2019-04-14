/**
 * @format
 */

import { UIManager } from 'react-native';

require('./App');

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true); // eslint-disable-line

module.exports = {
  name: 'BroApp',
};


