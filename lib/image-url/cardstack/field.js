/* eslint-env node */

module.exports = {
  valid(value) {
    return typeof value === 'string';
  },
  defaultMapping() {
    return {
      type: 'object',
      enabled: false
    };
  }
};
