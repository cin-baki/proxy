const { ethers, upgrades } = require('hardhat');

async function main() {
	const DangV1Factory = await ethers.getContractFactory('EstERC721');
	console.log("Deploing Box ... ")
	DangV1 = await upgrades.deployProxy(DangV1Factory, { kind: 'uups' });
	console.log("Continue Deploing Box ... ")
	await DangV1.deployed();
	console.log("EstERC721 deployed to:", DangV1.address);

	implementationContractAddress = await upgrades.erc1967.getImplementationAddress("0x4abD63A08532e74e30D8C36A025E58Cc3f2ab351");
  	console.log('Implementation Address:', implementationContractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
