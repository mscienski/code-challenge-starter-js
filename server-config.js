const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),
  app: {
    title: 'Code Challenge Starter'
  }
}, environment);
