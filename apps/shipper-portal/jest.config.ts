/* eslint-disable */
export default {
  displayName: 'shipper-portal',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/shipper-portal',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
