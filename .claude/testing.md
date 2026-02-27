# Testing Configuration

## Framework
This project has no automated test framework. "Tests" are verified by:

1. **Build check**: `cd /Users/markshust/Sites/markshust.com && npm run build` — must complete with no errors
2. **Type check**: Build includes TypeScript checking via Astro

## Test Commands

### Run all tests (build verification)
```bash
cd /Users/markshust/Sites/markshust.com && npm run build
```

### Run dev server (visual verification)
```bash
cd /Users/markshust/Sites/markshust.com && npm run dev
```

## Success Criteria
- `npm run build` exits with code 0
- No TypeScript errors
- No Astro compilation errors
- All pages generate HTML output

## Notes
- This is an Astro v5 static site generator project
- No Jest, Vitest, or Playwright test suite
- Requirements in task files are implementation requirements, verified by successful build + code review
- TDD workers should implement requirements and verify with `npm run build`
