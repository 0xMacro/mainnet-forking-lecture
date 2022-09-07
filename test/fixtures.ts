
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import { FiatTokenV2 } from "../typechain-types";

describe("Fixtures", function () {
  let usdcContractArray;
  beforeEach(async () => {
    // The slow way:
    usdcContractArray = await someLongSetup()
  })

  it("it", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })

  it("seems", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })

  it("to", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })

  it("be", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })
  it("taking", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })

  it("a", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })
  it("long", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })
  it("time...", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })
  it("...", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })
  it("...", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })
  it("...", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
  })
  it("...", async () => {
    // const usdcContractArray = await loadFixture(usdcFixture);
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
