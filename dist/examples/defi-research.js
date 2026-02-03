/**
 * Example data asset: Top 100 DeFi Protocols by TVL
 * Research with metrics and categorization
 */
import { DataType } from '../types';
export const DEFI_RESEARCH = {
    title: "Top 100 DeFi Protocols on Solana - TVL Analysis",
    description: "Comprehensive research report covering the top 100 DeFi protocols on Solana by Total Value Locked. Includes TVL rankings, protocol categories (DEX, lending, derivatives, liquid staking), risk assessments, growth metrics (30d, 90d), and competitive analysis. Updated daily with fresh data from DeFi Llama and protocol APIs. Perfect for agents building DeFi tools, yield optimizers, or portfolio trackers.",
    dataType: DataType.MARKET_RESEARCH,
    version: "2.1.0",
    creator: "clawdbot-main",
    createdAt: "2026-02-01T00:00:00Z",
    updatedAt: "2026-02-03T00:00:00Z",
    tags: ["solana", "defi", "research", "tvl", "analytics"],
    license: "CC BY 4.0",
    sampleData: {
        totalProtocols: 100,
        totalTVL: "4.5B USD",
        topProtocol: "Raydium",
        categories: ["DEX", "Lending", "Liquid Staking", "Derivatives"]
    }
};
export const DEFI_RESEARCH_DATA = {
    "version": "2.1.0",
    "generated": "2026-02-03T00:00:00Z",
    "summary": {
        "totalTVL": 4500000000,
        "protocolsCount": 100,
        "topProtocol": "Raydium",
        "fastestGrowing": "Jito",
        "averageGrowth30d": 12.5
    },
    "top20": [
        {
            "rank": 1,
            "name": "Raydium",
            "category": "DEX",
            "tvl": 1250000000,
            "tvlChange30d": 8.2,
            "tvlChange90d": 23.1,
            "riskScore": "Low",
            "audited": true,
            "url": "https://raydium.io"
        },
        {
            "rank": 2,
            "name": "Jito",
            "category": "Liquid Staking",
            "tvl": 980000000,
            "tvlChange30d": 25.3,
            "tvlChange90d": 67.8,
            "riskScore": "Low",
            "audited": true,
            "url": "https://jito.network"
        },
        {
            "rank": 3,
            "name": "Orca",
            "category": "DEX",
            "tvl": 620000000,
            "tvlChange30d": -3.1,
            "tvlChange90d": 15.2,
            "riskScore": "Low",
            "audited": true,
            "url": "https://www.orca.so"
        },
        {
            "rank": 4,
            "name": "Marinade",
            "category": "Liquid Staking",
            "tvl": 580000000,
            "tvlChange30d": 5.7,
            "tvlChange90d": 12.4,
            "riskScore": "Low",
            "audited": true,
            "url": "https://marinade.finance"
        },
        {
            "rank": 5,
            "name": "Kamino",
            "category": "Lending",
            "tvl": 450000000,
            "tvlChange30d": 18.9,
            "tvlChange90d": 45.6,
            "riskScore": "Medium",
            "audited": true,
            "url": "https://kamino.finance"
        },
        {
            "rank": 6,
            "name": "Meteora",
            "category": "DEX",
            "tvl": 380000000,
            "tvlChange30d": 22.4,
            "tvlChange90d": 89.1,
            "riskScore": "Low",
            "audited": true,
            "url": "https://meteora.finance"
        },
        {
            "rank": 7,
            "name": "Drift Protocol",
            "category": "Derivatives",
            "tvl": 320000000,
            "tvlChange30d": -2.8,
            "tvlChange90d": 8.3,
            "riskScore": "Medium",
            "audited": true,
            "url": "https://drift.trade"
        },
        {
            "rank": 8,
            "name": "Sanctum",
            "category": "Liquid Staking",
            "tvl": 290000000,
            "tvlChange30d": 35.2,
            "tvlChange90d": 123.4,
            "riskScore": "Medium",
            "audited": true,
            "url": "https://www.sanctum.so"
        },
        {
            "rank": 9,
            "name": "Saber",
            "category": "DEX",
            "tvl": 180000000,
            "tvlChange30d": -12.5,
            "tvlChange90d": -28.3,
            "riskScore": "Low",
            "audited": true,
            "url": "https://saber.so"
        },
        {
            "rank": 10,
            "name": "Solend",
            "category": "Lending",
            "tvl": 150000000,
            "tvlChange30d": -8.2,
            "tvlChange90d": -15.7,
            "riskScore": "Medium",
            "audited": true,
            "url": "https://solend.fi",
            "deprecated": true,
            "notice": "Deprecating - use Kamino or Drift"
        }
    ],
    "categories": {
        "DEX": {
            "count": 42,
            "totalTVL": 2400000000,
            "avgGrowth30d": 5.3,
            "protocols": ["Raydium", "Orca", "Meteora", "Jupiter", "Lifinity"]
        },
        "Lending": {
            "count": 18,
            "totalTVL": 890000000,
            "avgGrowth30d": 12.1,
            "protocols": ["Kamino", "Solend", "Marginfi"]
        },
        "Liquid Staking": {
            "count": 8,
            "totalTVL": 780000000,
            "avgGrowth30d": 18.7,
            "protocols": ["Jito", "Marinade", "Sanctum", "Lido"]
        },
        "Derivatives": {
            "count": 12,
            "totalTVL": 420000000,
            "avgGrowth30d": 8.9,
            "protocols": ["Drift", "Zeta", "Aevo", "Apex"]
        }
    },
    "riskAssessments": {
        "Low Risk": {
            "count": 45,
            "avgTVL": 25000000,
            "allAudited": true,
            "examples": ["Raydium", "Orca", "Marinade"]
        },
        "Medium Risk": {
            "count": 38,
            "avgTVL": 15000000,
            "mostAudited": true,
            "examples": ["Kamino", "Drift", "Sanctum"]
        },
        "High Risk": {
            "count": 17,
            "avgTVL": 5000000,
            "allAudited": false,
            "examples": ["Newer protocols", "Experimental features"]
        }
    },
    "insights": [
        "Liquid staking (Jito, Marinade, Sanctum) showing strongest growth (+18.7% avg 30d)",
        "DLMM pools (Meteora) driving DEX innovation +89.1% growth",
        "Lending consolidating around Kamino as primary choice",
        "Derivatives (Drift, Zeta) mature but cyclical with market conditions",
        "Cross-chain protocols gaining traction ( Wormhole, Portal )"
    ],
    "dataSources": [
        "https://defillama.com/chain/Solana",
        "Protocol official APIs",
        "Solscan transaction analysis",
        "Chainlink oracle data"
    ],
    "methodology": "TVL calculated as total value locked in protocol smart contracts excluding protocol-owned liquidity. Growth rates based on 30d and 90d moving averages. Risk scores consider audit history, time since deployment, and concentration of value."
};
