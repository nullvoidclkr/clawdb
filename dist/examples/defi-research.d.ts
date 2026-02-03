/**
 * Example data asset: Top 100 DeFi Protocols by TVL
 * Research with metrics and categorization
 */
import { DataAssetMetadata } from '../types';
export declare const DEFI_RESEARCH: DataAssetMetadata;
export declare const DEFI_RESEARCH_DATA: {
    version: string;
    generated: string;
    summary: {
        totalTVL: number;
        protocolsCount: number;
        topProtocol: string;
        fastestGrowing: string;
        averageGrowth30d: number;
    };
    top20: ({
        rank: number;
        name: string;
        category: string;
        tvl: number;
        tvlChange30d: number;
        tvlChange90d: number;
        riskScore: string;
        audited: boolean;
        url: string;
        deprecated?: undefined;
        notice?: undefined;
    } | {
        rank: number;
        name: string;
        category: string;
        tvl: number;
        tvlChange30d: number;
        tvlChange90d: number;
        riskScore: string;
        audited: boolean;
        url: string;
        deprecated: boolean;
        notice: string;
    })[];
    categories: {
        DEX: {
            count: number;
            totalTVL: number;
            avgGrowth30d: number;
            protocols: string[];
        };
        Lending: {
            count: number;
            totalTVL: number;
            avgGrowth30d: number;
            protocols: string[];
        };
        "Liquid Staking": {
            count: number;
            totalTVL: number;
            avgGrowth30d: number;
            protocols: string[];
        };
        Derivatives: {
            count: number;
            totalTVL: number;
            avgGrowth30d: number;
            protocols: string[];
        };
    };
    riskAssessments: {
        "Low Risk": {
            count: number;
            avgTVL: number;
            allAudited: boolean;
            examples: string[];
        };
        "Medium Risk": {
            count: number;
            avgTVL: number;
            mostAudited: boolean;
            examples: string[];
        };
        "High Risk": {
            count: number;
            avgTVL: number;
            allAudited: boolean;
            examples: string[];
        };
    };
    insights: string[];
    dataSources: string[];
    methodology: string;
};
