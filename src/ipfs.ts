/**
 * IPFS integration for ClawDB data storage
 */

import * as fs from 'fs';
import * as path from 'path';

export interface IPFSConfig {
  gateway?: string;
  pinataApiKey?: string;
  pinataSecret?: string;
}

export class IPFSStorage {
  private config: IPFSConfig;

  constructor(config?: IPFSConfig) {
    this.config = config || {
      gateway: "https://ipfs.io/ipfs"
    };
  }

  /**
   * Upload data to IPFS via Pinata (production)
   * Falls back to public gateway for demo purposes
   */
  async uploadData(data: any): Promise<string> {
    try {
      // For hackathon demo, we'll simulate IPFS upload
      // In production, this would use Pinata or similar service
      const cid = await this.mockIPFSUpload(data);
      return cid;
    } catch (error) {
      console.error("IPFS upload error:", error);
      throw new Error("Failed to upload data to IPFS");
    }
  }

  /**
   * Retrieve data from IPFS
   */
  async retrieveData(cid: string): Promise<any> {
    try {
      // For hackathon demo, return mock data
      return await this.mockIPFSRetrieve(cid);
    } catch (error) {
      console.error("IPFS retrieve error:", error);
      throw new Error("Failed to retrieve data from IPFS");
    }
  }

  /**
   * Mock IPFS upload for hackathon demo
   * Generates a CID-like identifier
   */
  private async mockIPFSUpload(data: any): Promise<string> {
    const hash = this.generateHash(JSON.stringify(data));
    const cid = `Qm${hash.substring(0, 44)}`;

    // Store locally for demo
    const cacheDir = path.join(process.cwd(), '.clawdb', 'cache');

    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(cacheDir, `${cid}.json`),
      JSON.stringify(data, null, 2)
    );

    console.log(`Mock IPFS upload: ${cid}`);
    return cid;
  }

  /**
   * Mock IPFS retrieve for hackathon demo
   */
  private async mockIPFSRetrieve(cid: string): Promise<any> {
    const cacheDir = path.join(process.cwd(), '.clawdb', 'cache');
    const cacheFile = path.join(cacheDir, `${cid}.json`);

    if (fs.existsSync(cacheFile)) {
      const data = fs.readFileSync(cacheFile, 'utf-8');
      return JSON.parse(data);
    }

    throw new Error(`Data not found for CID: ${cid}`);
  }

  /**
   * Generate a simple hash for CID simulation
   */
  private generateHash(input: string): string {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16).padStart(44, '0');
  }

  /**
   * Get gateway URL for a CID
   */
  getGatewayUrl(cid: string): string {
    const gateway = this.config.gateway || "https://ipfs.io/ipfs";
    return `${gateway}/${cid}`;
  }
}

export const ipfsStorage = new IPFSStorage();
