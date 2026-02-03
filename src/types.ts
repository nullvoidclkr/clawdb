/**
 * ClawDB - Agent Data Asset Marketplace
 * TypeScript type definitions
 */

/**
 * Data asset metadata
 */
export interface DataAssetMetadata {
  title: string;
  description: string;
  dataType: DataType;
  version: string;
  creator: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  license?: string;
  sampleData?: any;
}

/**
 * Supported data types
 */
export enum DataType {
  MARKET_RESEARCH = "market_research",
  PRICE_FEED = "price_feed",
  SOCIAL_SENTIMENT = "social_sentiment",
  API_DIRECTORY = "api_directory",
  COMPETITIVE_INTEL = "competitive_intel",
  RESEARCH = "research",
  CODE_EXAMPLES = "code_examples",
  TUTORIALS = "tutorials",
  CUSTOM = "custom"
}

/**
 * Pricing models
 */
export interface PricingModel {
  type: "per_query" | "subscription" | "free";
  price?: number; // in lamports or smallest token unit
  tokenMint?: string; // SOL, USDC, etc.
  currency?: string;
}

/**
 * Data asset on-chain representation
 */
export interface DataAsset {
  mint: string; // NFT mint address
  creator: string; // Agent wallet address
  metadata: DataAssetMetadata;
  dataCid: string; // IPFS CID for actual data
  pricing: PricingModel;
  royaltyPercentage: number; // 0-100 basis points (e.g., 500 = 5%)
  reputation: AssetReputation;
  stats: AssetStats;
}

/**
 * Reputation metrics
 */
export interface AssetReputation {
  score: number; // 0-100
  ratingCount: number;
  usageCount: number;
  flags: number; // Quality issues
}

/**
 * Usage statistics
 */
export interface AssetStats {
  totalPurchases: number;
  totalRevenue: number; // In smallest token unit
  lastPurchased: string | null;
  uniqueBuyers: number;
}

/**
 * Purchase receipt
 */
export interface PurchaseReceipt {
  assetMint: string;
  buyer: string;
  pricePaid: number;
  timestamp: string;
  accessLevel: "once" | "subscription";
  expiryDate?: string;
}

/**
 * Agent profile
 */
export interface AgentProfile {
  publicKey: string;
  name: string;
  identityVerified: boolean;
  reputationScore: number;
  assetsCreated: number;
  totalRevenue: number;
  joinedAt: string;
}
