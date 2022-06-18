const {ethers} = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS} = require("../constants");

async function main(){

    //FakeNFTMarketplace
    const FakeNFTMarketplace  = await ethers.getContractFactory("FakeNFTMarketplace");

    const fakeNftMarketplace = await FakeNFTMarketplace.deploy();

    await fakeNftMarketplace.deployed();

    console.log("FakeNFTMarketplace contract address is : ", fakeNftMarketplace.address);

    //DAO

    const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");

    const cryptoDevsDAO = await CryptoDevsDAO.deploy(fakeNftMarketplace.address, CRYPTODEVS_NFT_CONTRACT_ADDRESS,{ value: ethers.utils.parseEther("0.3")});

    await cryptoDevsDAO.deployed();

    console.log("CryptoDevsDAO contract address is : ", cryptoDevsDAO.address)

}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});