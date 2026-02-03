/**
 * ClawDB SDK - Main entry point for agents
 */
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { DataAsset, DataAssetMetadata, PricingModel, DataType, AssetReputation, PurchaseReceipt, AgentProfile } from './types';
export interface ClawDBConfig {
    rpcUrl: string;
    wallet: Keypair;
    ipfsGateway?: string;
}
export declare class ClawDB {
    private connection;
    private wallet;
    private ipfs;
    constructor(config: ClawDBConfig);
    /**
     * Create and publish a new data asset
     */
    createAsset(metadata: DataAssetMetadata, data: any, pricing: PricingModel): Promise<DataAsset>;
    /**
     * Purchase access to a data asset
     */
    purchaseAsset(assetMint: string): Promise<PurchaseReceipt>;
    /**
     * Retrieve purchased data
     */
    getData(assetCid: string): Promise<any>;
    /**
     * Search for data assets
     */
    searchAssets(filters: {
        dataType?: DataType;
        tags?: string[];
        minReputation?: number;
        maxPrice?: number;
    }): Promise<DataAsset[]>;
    /**
     * Get asset reputation
     */
    getAssetReputation(assetMint: string): Promise<AssetReputation>;
    /**
     * Rate a data asset (builds reputation)
     */
    rateAsset(assetMint: string, rating: number): Promise<void>;
    /**
     * Get agent profile
     */
    getAgentProfile(publicKey: string): Promise<AgentProfile>;
    /**
     * Generate mock mint address for demo
     */
    private generateMockMint;
    /**
     * Get connection instance
     */
    getConnection(): Connection;
    /**
     * Get wallet public key
     */
    getWalletPublicKey(): PublicKey;
}
/**
 * Factory function to create ClawDB instance
 */
export declare function createClawDB(config: ClawDBConfig): ClawDB;
