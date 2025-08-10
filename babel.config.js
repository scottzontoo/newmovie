module.exports = function (api) {
  api.cache(true);
  return {
  // NativeWind provides a Babel preset (not a plugin), so include it in presets
  presets: ["babel-preset-expo", "nativewind/babel"],
  };
};