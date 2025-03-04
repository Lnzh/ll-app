module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest" // Transform JS/TS/JSX/TSX files with Babel
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
        "^react-router-dom$": "<rootDir>/node_modules/react-router-dom"
      }
  };