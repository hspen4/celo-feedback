var UniswapV2Factory = artifacts.require('UniswapV2Factory')

module.exports = function(deployer) {
  deployer.deploy(UniswapV2Factory, "0x0000000000000000000000000000000000000000")
}