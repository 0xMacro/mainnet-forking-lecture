import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import * as helpers from "@nomicfoundation/hardhat-network-helpers";

import { expect } from "chai";
import hre, { ethers } from "hardhat";

// The following code is an example of how we can use Hardhat's mainnet forking
// feature to pretend to be the owner of the USDC contract, and mint 1 million USDC
// to an arbitrary address (Alice's).
//
// I see 2 big ways this is useful:
//
// 1) You are a protocol dev who is about to make a complicated and possibly destructive
// change to your mainnet contracts (for instance, upgrading a contract) and you want to
// simulate exactly how it will work when you execute your upgrade on mainnet
//
// 2) You are a [white/black]hat hacker, and you want to simulate your attack on the
// victims contract
describe("USDC mainnet forking", function () {
  it("mint USDC for free!", async () => {
    // all of the addresses we'll need
    const usdcMasterMinter = '0xe982615d461dd5cd06575bbea87624fda4e3de17'
    const usdcContractAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
    const ownerOfMasterMinter = '0xc1d9fe41d19dd52cb3ae5d1d3b0030b5d498c704'

    const ONE_MILLION_USD = 1_000_000 * 10 ** 6; // USDC has 6 decimals

    // Impersonate as the owner of the master USDC minter contract
    // so we can mint some USDC for Alice
    await helpers.impersonateAccount(ownerOfMasterMinter);

    // setup all the contract state we'll need
    const impersonatedSigner: SignerWithAddress = await ethers.getSigner(ownerOfMasterMinter);
    const [alice] = await ethers.getSigners();

    const usdcContractFactory = await ethers.getContractFactory("FiatTokenV2_1");
    const masterMinterFactory = await ethers.getContractFactory("MasterMinter");

    const masterMinter = await masterMinterFactory.attach(usdcMasterMinter)
    const usdc = await usdcContractFactory.attach(usdcContractAddress)

    // The owner of the MasterMinter doesn't have enough ETH on mainnet
    // to execute the transactions we need, so let's give the owner some ETH
    await alice.sendTransaction({
      to: impersonatedSigner.address,
      value: ethers.utils.parseEther("10.0")
    })

    // now all the contract state is setup, and we can have an arbitrary address (Alice)
    // make herself a minter and mint 1_000_000 USDC

    // only owner of MasterMinter can call this, and this will allow the owner
    // to call configureMinter
    await masterMinter.connect(impersonatedSigner).configureController(ownerOfMasterMinter, ownerOfMasterMinter);

    // allow the owner to mint 1_000_000 USDC
    await masterMinter.connect(impersonatedSigner).configureMinter(ONE_MILLION_USD);

    // finally, mint the 1 million USDC to Alice
    await usdc.connect(impersonatedSigner).mint(alice.address, ONE_MILLION_USD);

    // Alice should have received 1_000_000 USDC (which has 6 decimals)
    await expect(await usdc.balanceOf(alice.address)).to.equal(1e6 * 1e6)

  })
});
