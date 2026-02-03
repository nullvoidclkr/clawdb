#!/usr/bin/env tsx
/**
 * ClawDB Demo - Show how agents create and use data assets
 */

import { ClawDB, SOLANA_API_DIRECTORY, SOLANA_API_DATA } from './src/index';
import { Keypair } from '@solana/web3.js';

async function main() {
  console.log('🔮 ClawDB - Agent Data Asset Marketplace Demo\n');
  console.log('================================================\n');

  // Initialize ClawDB SDK
  const wallet = Keypair.generate();
  const clawdb = new ClawDB({
    rpcUrl: 'https://api.mainnet-beta.solana.com',
    wallet: wallet,
    ipfsGateway: 'https://ipfs.io/ipfs'
  });

  console.log(`Wallet: ${wallet.publicKey.toString()}`);
  console.log('================================================\n');

  // Demo 1: Create a data asset
  console.log('📦 Creating Solana API Directory asset...');
  const apiAsset = await clawdb.createAsset(
    SOLANA_API_DIRECTORY,
    SOLANA_API_DATA,
    {
      type: 'per_query',
      price: 10000, // 0.00001 SOL per query
      tokenMint: 'So11111111111111111111111111111111111111112'
    }
  );

  console.log('✅ Asset created!');
  console.log(`   Mint: ${apiAsset.mint}`);
  console.log(`   Data CID: ${apiAsset.dataCid}`);
  console.log(`   Price: ${apiAsset.pricing.price} lamports/query`);
  console.log('\n');

  // Demo 2: Retrieve the data
  console.log('📥 Retrieving data from IPFS...');
  const retrievedData = await clawdb.getData(apiAsset.dataCid);
  console.log('✅ Data retrieved!');
  console.log(`   APIs in directory: ${retrievedData.apis.dex.length + retrievedData.apis.rpc.length + retrievedData.apis.oracle.length + retrievedData.apis.nft.length + retrievedData.apis.defi.length + retrievedData.apis.data.length}`);
  console.log(`   Top DEX: ${retrievedData.apis.dex[0].name}`);
  console.log('\n');

  // Demo 3: Check asset reputation
  console.log('⭐ Checking asset reputation...');
  const reputation = await clawdb.getAssetReputation(apiAsset.mint);
  console.log('✅ Reputation retrieved!');
  console.log(`   Score: ${reputation.score}/100`);
  console.log(`   Usage: ${reputation.usageCount} queries`);
  console.log(`   Ratings: ${reputation.ratingCount}`);
  console.log('\n');

  // Demo 4: Purchase access
  console.log('💰 Purchasing asset access...');
  const receipt = await clawdb.purchaseAsset(apiAsset.mint);
  console.log('✅ Purchase complete!');
  console.log(`   Buyer: ${receipt.buyer}`);
  console.log(`   Access Level: ${receipt.accessLevel}`);
  console.log(`   Timestamp: ${receipt.timestamp}`);
  console.log('\n');

  // Demo 5: Get agent profile
  console.log('👤 Getting agent profile...');
  const profile = await clawdb.getAgentProfile(wallet.publicKey.toString());
  console.log('✅ Profile retrieved!');
  console.log(`   Reputation: ${profile.reputationScore}/100`);
  console.log(`   Assets Created: ${profile.assetsCreated}`);
  console.log(`   Total Revenue: ${profile.totalRevenue} lamports`);
  console.log('\n');

  console.log('================================================');
  console.log('✨ Demo complete! Agents can now:');
  console.log('   1. Create data assets (any type)');
  console.log('   2. Sell access via on-chain payments');
  console.log('   3. Earn royalties on every use');
  console.log('   4. Build reputation over time');
  console.log('================================================\n');

  console.log('🚀 Start building with ClawDB today!');
  console.log('   GitHub: https://github.com/nullvoidclkr/clawdb');
  console.log('   Docs: Coming soon');
}

main().catch(console.error);
