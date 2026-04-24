# Contributing to Mastishk

Thank you for your interest in contributing to Mastishk! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/yourusername/mastishk/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, browser, Node version)

### Suggesting Features

1. Check existing feature requests
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach
   - Mockups or examples if applicable

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the code style
   - Add tests if applicable
   - Update documentation
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

## 📝 Code Style

### JavaScript/React
- Use ES6+ features
- Use functional components with hooks
- Follow Airbnb style guide
- Use meaningful variable names
- Add comments for complex logic

### File Naming
- Components: PascalCase (e.g., `QuizCard.jsx`)
- Utilities: camelCase (e.g., `formatDate.js`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_URL`)

### Commit Messages
Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build/config changes

Examples:
```
feat: add voice quiz mode
fix: resolve quiz submission error
docs: update deployment guide
```

## 🧪 Testing

### Before Submitting PR
- [ ] Code runs without errors
- [ ] All existing tests pass
- [ ] New features have tests
- [ ] Documentation is updated
- [ ] No console warnings/errors
- [ ] Tested on multiple browsers

### Running Tests
```bash
npm test
npm run lint
```

## 📚 Documentation

Update documentation when:
- Adding new features
- Changing API endpoints
- Modifying configuration
- Updating dependencies

Files to update:
- `README.md` - Main documentation
- `SETUP.md` - Setup instructions
- `DEPLOYMENT.md` - Deployment guide
- Code comments - Inline documentation

## 🏗️ Development Setup

1. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/mastishk.git
   cd mastishk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

4. **Start development**
   ```bash
   # Terminal 1
   npm run server:dev
   
   # Terminal 2
   npm run dev
   ```

## 🎯 Areas for Contribution

### High Priority
- [ ] Add comprehensive tests
- [ ] Improve accessibility
- [ ] Performance optimization
- [ ] Mobile responsiveness
- [ ] Error handling

### Features
- [ ] Voice quiz mode
- [ ] Google OAuth
- [ ] Real-time multiplayer
- [ ] Quiz sharing
- [ ] Advanced analytics

### Documentation
- [ ] API documentation
- [ ] Component documentation
- [ ] Video tutorials
- [ ] Translation to other languages

## 🔍 Code Review Process

1. **Automated Checks**
   - Linting passes
   - Tests pass
   - Build succeeds

2. **Manual Review**
   - Code quality
   - Performance impact
   - Security considerations
   - Documentation completeness

3. **Feedback**
   - Address review comments
   - Make requested changes
   - Re-request review

## 🚀 Release Process

1. Version bump in `package.json`
2. Update `CHANGELOG.md`
3. Create release tag
4. Deploy to production
5. Announce release

## 📞 Getting Help

- **Discord**: [Join our community]
- **Email**: dev@mastishk.com
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions make Mastishk better for everyone. We appreciate your time and effort!

---

**Happy Coding! 🎉**
