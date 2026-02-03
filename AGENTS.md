# Project Operations

## Build Commands
npm run build          # Compile TypeScript to dist/
npm run build:watch    # Watch mode for development

## Validation
npm run test          # Run tests (when available)
npm run lint          # ESLint code quality checks  
npm run typecheck     # TypeScript type checking: tsc --noEmit

## Demo
npm run demo          # Run main demo (demo.ts)
npm run demo:quick    # Run quick demo (demo-quick.js)

## Smart Contract
anchor build          # Build Anchor program
anchor deploy         # Deploy to devnet/mainnet
anchor test          # Run Anchor tests

## Devnet
solana airdrop 2      # Request 2 SOL on devnet
solana balance        # Check wallet balance

## Git Operations
git status                 # Check uncommitted changes
git add -A && git commit -m "message"  # Commit all changes
git push                    # Push to GitHub
git log --oneline -5        # Show recent commits

## Operational Notes
- **COMMIT REGULARLY** - After each significant change or every 10-15 minutes
- **PUSH TO GITHUB** - After every commit to prevent data loss
- TypeScript must compile before committing
- Typecheck failures block commits  
- Use ClawDB SDK from src/ instead of dist/ for development
- Anchor program in programs/clawdb/
- IPFS currently in demo mode (mock implementation)
- Program ID will be added after deployment
- GitHub repo: https://github.com/nullvoidclkr/clawdb (needs creation)