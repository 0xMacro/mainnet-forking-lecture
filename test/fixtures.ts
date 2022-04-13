import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import hre, { ethers, waffle } from "hardhat";
import { FiatTokenV2 } from "../typechain";

const loadFixture = waffle.loadFixture

describe("Fixtures", function () {
  let usdcContractArray;
  beforeEach(async () => {
    // The slow way:
    usdcContractArray = await someLongSetup()

    // The FAST way (uncomment the line below and comment out the line above):
    // usdcContractArray = await loadFixture(usdcFixture);
  })

  it("it", async () => {
    
  })

  it("seems", async () => {
    
  })

  it("to", async () => {
    
  })

  it("be", async () => {
    
  })
  it("taking", async () => {
    
  })

  it("a", async () => {
    
  })
  it("long", async () => {
    
  })
  it("time...", async () => {
    
  })
  it("...", async () => {
    
  })
  it("...", async () => {
    
  })
  it("...", async () => {
    
  })
  it("...", async () => {
    
  })

  async function usdcFixture(): Promise<Array<FiatTokenV2>> {
    return someLongSetup();
  }

  async function someLongSetup(): Promise<Array<FiatTokenV2>> {
    const usdcFactory = await ethers.getContractFactory('FiatTokenV2');

    const output = [];
    for (let i = 0; i < 10; i++) {
      output.push(
        await usdcFactory.deploy()
      )
    }
    return output;
  }
});
