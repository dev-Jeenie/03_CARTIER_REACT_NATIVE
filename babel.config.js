module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '#apis': './src/apis',
          '#assets': './src/assets',
          '#commons': './src/commons',
          '#components': './src/components',
          '#contexts': './src/contexts',
          '#nav': './src/nav',
          '#pages': './src/pages',
          '#reducer': './src/reducer',
          '#types': './src/types',
          '#utils': './src/utils',
        },
      },
    ],
  ],
};
