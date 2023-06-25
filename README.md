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

# Dev Docs
## Deployment Stages
1. Deploy new instance of ACTUAL4626 - 0x6637867dF88Ae4a24C090E5B03C6255a1f5b51cE
   	  Constructor:
	     Set the underlying, Set the rewards cycle
	     Governor is temporarily set to my EOA
Optional: Verify the vault on etherscan.

2. Deploy a strategy - 0x5d309a073505991beDB1cc14Af5C189B092d2104
	  Constructor:
	   Set the underlying
	   Set the vault to be the ACTUAL2626 addy
Optional: Verify the strategy on etherscan.

3. Set the strategy of the Actual4626 to be whatever strategy address is being used.
     Constructor:
      Approve the vault on the underlying.
      Deposit into the vault and receive share tokens.
Optional: Call syncRewards on the ACTUAL4626 to simply move assets from the vault into the strategy.

4. Deploy a vaultTokenWrapperFlattened - 0x261ED1EAE1829e18728088cc72C9459cD551AC2F
	Constructor:
	 Use the ACTUAL4626 Vault receipt token as the underlying token to wrap.
Optional: Verify the contract on Etherscan.

5. Approve the vaultTokenWrapperFlattened on the ACTUAL4626.
   
6. Wrap the vault receipt token into the vault token wrapper by calling depositFor.

7. Deploy vault_governor_flattened 
	Constructor:
	 Set the underlying to be the wrapped vault token.
	 Set the timelock to be 0x00000.....(0x00 address)
  Verify contract if neccessary 

8. Create the governor on tally using the right addresses n whatnot...
9. Call changeGovernor on Etherscan using the EOA to change the vault governor to the governor contract
