// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import "../../src/Vault4626.sol";
import {SillyStategyTemplate} from "../../src/Strategies/strategy.sol";
import {VaultTokenWrapped} from "../../src/Governance/VaultTokenWrapped.sol";

contract Deploy is Script {
    // Test accounts from passphrase in env (not in repo)
    // address constant account0 = 0x17eE56D300E3A0a6d5Fd9D56197bFfE968096EdB;

    function run() external {
        // uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(); /*deployerPrivateKey*/

        console.log("Creator (owner): ", msg.sender);

        // Deploy guardian factory
        Vault4626 factory = new Vault4626(0xF6BEEeBB578e214CA9E23B0e9683454Ff88Ed2A7, 60, 0x4f2bD410B81Ea24F83D1E807511BAec204c4Cf7a);
        factory.addGovernor(0x7E3Ee99EC9b2aBd42c8c8504dc8195C8dc4942D0);

        SillyStategyTemplate sfac = new SillyStategyTemplate(0xF6BEEeBB578e214CA9E23B0e9683454Ff88Ed2A7, address(factory));
        factory.changeStrategy(address(sfac));

        VaultTokenWrapped mtw = new VaultTokenWrapped(address(factory));
        
        console.log("Vault4626 Factory deployed: ", address(factory));
        console.log("Strat Factory deployed: ", address(sfac));
        console.log("Vault4626 Factory deployed: ", address(mtw));
    }
}
