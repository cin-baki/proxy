const { ethers, upgrades } = require('hardhat');
const assert = require("assert");
describe('EstERC721', async () => {
  it('deploys', async function () {
    const DangV1Factory = await ethers.getContractFactory('EstERC721');
    DangV1 = await upgrades.deployProxy(DangV1Factory, { kind: 'uups' });
  });

  it('must require >= 100 before upgrade new contract', async () => {
  	[account] = await ethers.getSigners();
    assert.ok(await DangV1.mint(account.address, {value:100}))
    try {
    	await DangV1.mint(account.address, {value:50, from:account});
    	assert(false);
    }
    catch(err) {
    	assert(err);
    }
  });

  it('Upgrade contract', async function () {
    const DangV2Factory = await ethers.getContractFactory('EstERC721V2');
    DangV2 = await upgrades.upgradeProxy(DangV1.address,DangV2Factory);
  });

  it('must require >= 200 after upgrade contract', async () => {
  	[account] = await ethers.getSigners();
  	assert.ok(await DangV2.mint(account.address, {value:200}))
  	try {
    	await DangV2.mint(account.address, {value:100, from:account});
    	assert(false);
    }
    catch(err) {
    	assert(err);
    }
  });

});