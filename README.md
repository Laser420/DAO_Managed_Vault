# DAO_Managed_Vault

# Abstract

Permissionless creation of simple interest bearing vaults and strategies.  
Usable Dapps are necessary on new chains and cross-listing of protocols is beneficial for protocols involved.  
Yield or interest rate farming via Yearn style vaults and strategies is a common contract system pattern heavily used across the ecosystem and boosts chain TVLs when first launched.  
We allow a pre-set group of real users (worldcoin/sismo sybil resistant IDs) to create and deploy ERC4626 vaults via a clone function protected by GovernorBravo.  

# Introduction 

Imagine a new user on a new chain.  They want to earn interest and try new protocols but aren't sure where to start.  
But there's a good chance they've used yearn on mainnet or beefy on other chains. 
The DAO managed vault system allows DAO members to permissionlessly deploy new vaults and strategies.  
A helping hand of sorts for new users to discover new protocols and earn interest. 
And for slightly more experiemced users to create new vaults with alpha and research on the chain and earn part of the pool interest.   

# Problems
- Difficult to discover new protocols on new chains
- Difficult to deploy contracts on new chains sometimes
- Non-technical users and investors may have alpha but cannot share it in a profitable manner
- No incentives to truly share alpha
- Yield bearing protocols can often rug/move tokens on behalf of users

# Solution

- Our ERC4626 features a simple vault and underlying strategy.
- Each vault has just 1 strategy
- Real users can create new vaults, strategies using the clone function
- Thus sharing alpha
- And earning part of the earned yield as incentives

The solution allows faster iteration of yield bearing vaults and the permissionless creation of these even in the absence of core-devs maintaining the protocol. 

# Impl
1. Frontend uses sismo and/or world coin starter kits
2. It uses sismo connect or idkit to verify a user is real
3. If the user is unique, we mint a governance token
4. The token is accepted in a Compound GovernorBravo contract to create proposals via Tally/Delv
5. Once the proposal passes, calldata in it is executed, mainly of type `clone(...)` to create new vaults and strategies with respective underlying and deposit contracts (Compound / crv)
6. Users can then interact with the new vault and deposit the underlying token
7. On deposit/withdraw andSync is called which reports losses/gains from the strategy to the vault
8. Users can withdraw the underlying token + interest at the end of the reward cycle length.
