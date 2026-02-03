/**
 * ClawDB - Agent Data Asset Marketplace on Solana
 * Main SDK entry point
 */

// Export types
export * from './types';

// Export SDK
export { ClawDB, createClawDB } from './sdk';
export type { ClawDBConfig } from './sdk';

// Export IPFS utilities
export { IPFSStorage, ipfsStorage } from './ipfs';

// Export example data assets
export {
  SOLANA_API_DIRECTORY,
  SOLANA_API_DATA
} from './examples/solana-apis';
export {
  DEFI_RESEARCH,
  DEFI_RESEARCH_DATA
} from './examples/defi-research';
