### Development Guidelines

- **Branching Strategy**:

  - **Dev Branch**: Use the `dev` branch for ongoing development.
  - **Main Branch**: The `main` branch is reserved for production-ready code.

- **Create Feature Branches**: For each feature or bug fix, create a new branch using the following command:

  ```bash
  git checkout -b feature/your-feature

  ```

- **Avoid Hardcoded Values**: Ensure consistency and maintainability by avoiding hardcoded values for styles. Instead, use variables.

- **Linting with Husky**: We are using Husky to enforce linting rules for code consistency. Before committing your changes, ensure that your code passes all linting checks set up by Husky.
