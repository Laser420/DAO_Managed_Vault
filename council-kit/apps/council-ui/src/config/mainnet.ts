import { CouncilConfig } from "src/config/CouncilConfig";

export const mainnetCouncilConfig: CouncilConfig = {
  version: "",
  chainId: 1,
  timelock: {
    address: "0x81758f3361A769016eae4844072FA6d7f828a651",
  },
  coreVoting: {
    name: "Core Voting",
    address: "0xEaCD577C3F6c44C3ffA398baaD97aE12CDCFed4a",
    descriptionURL: "https://moreinfo.com",
    vaults: [
      {
        name: "Locking Vault",
        sentenceSummary:
          "Allows users to deposit their tokens in exchange for voting power, which can also be delegated to a different user.",
        paragraphSummary:
          "Allows users to deposit their tokens in exchange for voting power, which can also be delegated to a different user.",
        address: "0x02Bd4A3b1b95b01F2Aa61655415A5d3EAAcaafdD",
        type: "FrozenLockingVault",
        descriptionURL: "https://moreinfo.com",
      },
      {
        name: "Vesting Vault",
        address: "0x6De73946eab234F1EE61256F10067D713aF0e37A",
        sentenceSummary:
          "Allows locked / vesting positions to still have voting power in the governance system by using a defined multiplier for the vested tokens over unvested.",
        paragraphSummary:
          "Allows locked / vesting positions to still have voting power in the governance system by using a defined multiplier for the vested tokens over unvested.",
        type: "VestingVault",
        descriptionURL: "https://moreinfo.com",
      },
    ],
    proposals: {
      0: {
        descriptionURL: "https://moreinfo.com",
        targets: [],
        calldatas: [],
      },
      1: {
        descriptionURL: "https://moreinfo.com",
        targets: [],
        calldatas: [],
        title: "DAO-1 Launch WETH vault + strategy",
        sentenceSummary: "Launch a yield bearing vault and strategy for weth idle",
        paragraphSummary:
          "As of today there are no well known yield platforms on linea, zkevm, gnosis chain. A weth interest bearing vault attracts more TVL and can be used to further direct ETH towards LSDs later. Proposal is to launch the deployed weth vault and strategy by cloning ",
      },
    },
  },

  gscVoting: {
    name: "GSC",
    address: "0x40309f197e7f94B555904DF0f788a3F48cF326aB",
    descriptionURL: "https://moreinfo.com",
    vaults: [
      {
        name: "GSC Vault",
        address: "0xcA870E8aa4FCEa85b5f0c6F4209C8CBA9265B940",
        type: "GSCVault",

        sentenceSummary:
          "The Governance Steering Council (GSC) vault gives one vote to each member that has surpassed a pre-established threshold of delegated Voting Power defined by the DAO.",
        paragraphSummary:
          "The Governance Steering Council (GSC) vault gives one vote to each member that has surpassed a pre-established threshold of delegated Voting Power defined by the DAO. Members of the council can create, vote, and execute proposals if the GSC quorum is met, with quorum set by the DAO.",
        descriptionURL: "https://moreinfo.com",
      },
    ],
    proposals: {
      0: { descriptionURL: "", targets: [], calldatas: [] },
      1: { descriptionURL: "", targets: [], calldatas: [] },
    },
  },
};
