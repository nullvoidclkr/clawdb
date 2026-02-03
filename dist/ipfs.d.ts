/**
 * IPFS integration for ClawDB data storage
 */
export interface IPFSConfig {
    gateway?: string;
    pinataApiKey?: string;
    pinataSecret?: string;
}
export declare class IPFSStorage {
    private config;
    constructor(config?: IPFSConfig);
    /**
     * Upload data to IPFS via Pinata (production)
     * Falls back to public gateway for demo purposes
     */
    uploadData(data: any): Promise<string>;
    /**
     * Retrieve data from IPFS
     */
    retrieveData(cid: string): Promise<any>;
    /**
     * Mock IPFS upload for hackathon demo
     * Generates a CID-like identifier
     */
    private mockIPFSUpload;
    /**
     * Mock IPFS retrieve for hackathon demo
     */
    private mockIPFSRetrieve;
    /**
     * Generate a simple hash for CID simulation
     */
    private generateHash;
    /**
     * Get gateway URL for a CID
     */
    getGatewayUrl(cid: string): string;
}
export declare const ipfsStorage: IPFSStorage;
