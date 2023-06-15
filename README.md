# @jakubserwin/eslint-config

This package provides a custom ESLint configuration, `@jakubserwin/eslint-config`, to help you maintain consistent code style and enforce best practices in your React and Next projects.

- Accessibility
- React Hooks
- Tailwind
- Prettier
- Sorted imports
- and more..

## Installation

To install the package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run one of the following commands based on your preferred package manager:

```shell
# Using pnpm
pnpm i -D @jakubserwin/eslint-config

# Using npm
npm i -D @jakubserwin/eslint-config

# Using yarn
yarn add -D @jakubserwin/eslint-config
```
## Configuration

To configure ESLint to use `@jakubserwin/eslint-config`, follow these steps:

1. Create a `.eslintrc.js` file in the root directory of your project if you don't have one already.
2. Open the `.eslintrc.js` file and add the following code:

   ```javascript
   module.exports = {
     extends: ['@jakubserwin/eslint-config'],
   }
   ```

3. Save the file.

Now ESLint will use the `@jakubserwin/eslint-config` configuration for linting your files.

## Contributing

Contributions to this ESLint configuration package are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request on the GitHub repository for this project.

## License

This project is licensed under the [MIT License](LICENSE).