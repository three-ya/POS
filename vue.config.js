module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/POS/' // test20200915 為 repo 名稱
  : '/'
}
