// doczrc.js
export default {
  modifyBundlerConfig: config => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    });
    return config;
  }
};
