/**
 * Example data asset: Solana API Directory
 * A curated list of working Solana APIs and SDKs
 */
import { DataAssetMetadata } from '../types';
export declare const SOLANA_API_DIRECTORY: DataAssetMetadata;
export declare const SOLANA_API_DATA: {
    version: string;
    lastUpdated: string;
    apis: {
        dex: ({
            name: string;
            type: string;
            endpoints: {
                quote: string;
                swap: string;
                tokens: string;
                api?: undefined;
            };
            auth: string;
            rateLimit: string;
            codeExample: string;
        } | {
            name: string;
            type: string;
            endpoints: {
                api: string;
                swap: string;
                quote?: undefined;
                tokens?: undefined;
            };
            auth: string;
            rateLimit: string;
            codeExample?: undefined;
        })[];
        rpc: ({
            name: string;
            type: string;
            endpoints: {
                mainnet: string;
                devnet: string;
                webhook: string;
            };
            auth: string;
            rateLimit: string;
            features: string[];
        } | {
            name: string;
            type: string;
            endpoints: {
                mainnet: string;
                devnet?: undefined;
                webhook?: undefined;
            };
            auth: string;
            rateLimit: string;
            features?: undefined;
        })[];
        oracle: ({
            name: string;
            type: string;
            endpoints: {
                hermes: string;
                governance: string;
                mainnet?: undefined;
            };
            auth: string;
            rateLimit: string;
            assets: number;
            updateInterval: string;
            features?: undefined;
        } | {
            name: string;
            type: string;
            endpoints: {
                mainnet: string;
                hermes?: undefined;
                governance?: undefined;
            };
            auth: string;
            features: string[];
            rateLimit?: undefined;
            assets?: undefined;
            updateInterval?: undefined;
        })[];
        nft: ({
            name: string;
            type: string;
            endpoints: {
                docs: string;
                auctions: string;
                api?: undefined;
            };
            auth: string;
            features: string[];
        } | {
            name: string;
            type: string;
            endpoints: {
                api: string;
                docs?: undefined;
                auctions?: undefined;
            };
            auth: string;
            features: string[];
        })[];
        defi: {
            name: string;
            type: string;
            endpoints: {
                api: string;
                state: string;
            };
            auth: string;
            features: string[];
        }[];
        data: {
            name: string;
            type: string;
            endpoints: {
                assets: string;
                search: string;
            };
            auth: string;
            rateLimit: string;
            features: string[];
        }[];
    };
    deprecated: {
        name: string;
        notice: string;
        deprecatedAt: string;
    }[];
    tips: string[];
};
