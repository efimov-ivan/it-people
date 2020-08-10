module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: "autoplace",
      overrideBrowserslist: ['> 1%', 'last 2 versions']
    })]
};