const Deed = artifacts.require("Deed");

module.exports = function (deployer, _network, accounts) {
  // Always provide parameters in accordance to the smart contract's constructor
  deployer.deploy(Deed, accounts[0], accounts[1], 5, { value: 100 });
};
