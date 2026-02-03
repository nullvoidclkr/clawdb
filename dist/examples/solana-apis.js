/**
 * Example data asset: Solana API Directory
 * A curated list of working Solana APIs and SDKs
 */
import { DataType } from '../types';
export const SOLANA_API_DIRECTORY = {
    title: "Solana API & SDK Directory",
    description: "A curated directory of working Solana APIs, SDKs, and developer resources. Includes endpoint URLs, rate limits, authentication methods, and code examples for major protocols: Jupiter, Helius, Pyth, Metaplex, Kamino, Drift, and more. Updated weekly with new protocol integrations and deprecation notices.",
    dataType: DataType.API_DIRECTORY,
    version: "1.0.0",
    creator: "clawdbot-main",
    createdAt: "2026-02-03T00:00:00Z",
    updatedAt: "2026-02-03T00:00:00Z",
    tags: ["solana", "apis", "sdk", "developer-tools"],
    license: "MIT",
    sampleData: {
        totalAPIs: 47,
        protocols: ["Jupiter", "Helius", "Pyth", "Metaplex", "Kamino", "Drift"],
        lastUpdated: "2026-02-03"
    }
};
export const SOLANA_API_DATA = {
    "version": "1.0.0",
    "lastUpdated": "2026-02-03",
    "apis": {
        "dex": [
            {
                "name": "Jupiter Aggregator",
                "type": "DEX Aggregator",
                "endpoints": {
                    "quote": "https://api.jup.ag/swap/v1/quote",
                    "swap": "https://api.jup.ag/swap/v1/swap",
                    "tokens": "https://token.jup.ag/all"
                },
                "auth": "None (public)",
                "rateLimit": "Unknown",
                "codeExample": "fetch('https://api.jup.ag/swap/v1/quote?inputMint=So11111111111111111111111111111111111111112&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=1000000')"
            },
            {
                "name": "Raydium",
                "type": "DEX",
                "endpoints": {
                    "api": "https://api.raydium.io/v2/sdk/liquidity/mainnet.json",
                    "swap": "https://api.raydium.io/v2/sdk/tx/swap"
                },
                "auth": "None (public)",
                "rateLimit": "Unknown"
            }
        ],
        "rpc": [
            {
                "name": "Helius RPC",
                "type": "RPC + Enhanced APIs",
                "endpoints": {
                    "mainnet": "https://mainnet.helius-rpc.com/?api-key=YOUR_KEY",
                    "devnet": "https://devnet.helius-rpc.com/?api-key=YOUR_KEY",
                    "webhook": "https://webhooks.helius-rpc.com/v1/transactions"
                },
                "auth": "API Key",
                "rateLimit": "Based on plan",
                "features": ["Transaction History", "Token Metadata", "NFT API", "DAS"]
            },
            {
                "name": "Triton RPC",
                "type": "RPC",
                "endpoints": {
                    "mainnet": "https://rpc.triton.one"
                },
                "auth": "None (public)",
                "rateLimit": "Unknown"
            }
        ],
        "oracle": [
            {
                "name": "Pyth Network",
                "type": "Price Oracle",
                "endpoints": {
                    "hermes": "https://hermes.pyth.network/v2/updates/price/latest",
                    "governance": "https://api.pyth.network"
                },
                "auth": "None (public)",
                "rateLimit": "None",
                "assets": 400,
                "updateInterval": "200ms - 2h"
            },
            {
                "name": "Switchboard",
                "type": "Price Oracle",
                "endpoints": {
                    "mainnet": "https://mainnet.switchboard.xyz"
                },
                "auth": "None (public)",
                "features": ["Custom Oracles", "VRF", "Jobs"]
            }
        ],
        "nft": [
            {
                "name": "Metaplex",
                "type": "NFT Infrastructure",
                "endpoints": {
                    "docs": "https://docs.metaplex.com",
                    "auctions": "https://api.helius.xyz/v0/nfts"
                },
                "auth": "None (public)",
                "features": ["Core", "Candy Machine", "Auctions", "Bubblegum"]
            },
            {
                "name": "Tensor",
                "type": "NFT Marketplace",
                "endpoints": {
                    "api": "https://api.tensor.so"
                },
                "auth": "API Key",
                "features": ["Marketplace", "Listings", "Bids", "Mints"]
            }
        ],
        "defi": [
            {
                "name": "Kamino",
                "type": "Lending Protocol",
                "endpoints": {
                    "api": "https://api.kamino.finance/liquidity/pools",
                    "state": "https://api.kamino.finance/positions/strategies"
                },
                "auth": "None (public)",
                "features": ["Lending", "Leverage", "Vaults"]
            },
            {
                "name": "Drift Protocol",
                "type": "Perpetuals + Spot",
                "endpoints": {
                    "api": "https://api.drift.trade",
                    "state": "https://api.drift.trade/state"
                },
                "auth": "None (public)",
                "features": ["Perps", "Spot", "Lending"]
            },
            {
                "name": "Marinade",
                "type": "Liquid Staking",
                "endpoints": {
                    "api": "https://api.marinade.finance",
                    "state": "https://api.marinade.finance/staking/stats"
                },
                "auth": "None (public)",
                "features": ["mSOL", "Native Staking", "Liquidity Pool"]
            }
        ],
        "data": [
            {
                "name": "Helius DAS API",
                "type": "Digital Asset Standard",
                "endpoints": {
                    "assets": "https://mainnet.helius-rpc.com/?api-key=YOUR_KEY",
                    "search": "https://api.helius.xyz/v0/token-list?api-key=YOUR_KEY"
                },
                "auth": "API Key",
                "rateLimit": "Based on plan",
                "features": ["Assets by Owner", "Compressed NFTs", "Metadata"]
            }
        ]
    },
    "deprecated": [
        {
            "name": "Solend",
            "notice": "Deprecated - Use Kamino or Drift instead",
            "deprecatedAt": "2025-06"
        }
    ],
    "tips": [
        "Use Helius RPC for enhanced APIs (token metadata, NFT, webhooks)",
        "Jupiter API has no rate limits for swaps",
        "Pyth prices are updated frequently - check price freshness",
        "Always check protocol health pages for status updates"
    ]
};
