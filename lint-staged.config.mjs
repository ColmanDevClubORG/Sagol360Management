export default {
  '*.{js,jsx,ts,tsx}': ['pnpm lint:fix', 'pnpm format:fix'],
  '*.{css,scss,md,json}': ['pnpm format:fix'],
}
