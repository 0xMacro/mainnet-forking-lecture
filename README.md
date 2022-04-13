# Hardhat Mainnet Forking and Fixture Example

## Mainnet Forking

Go to [the forking.ts test file](test/forking.ts) to see how Hardhat mainnet forking can be used to simulate and test complex contract interactions using the state of live mainnet contracts. In this example, we're impersonating the address that has the ability to be the minter of 1 million USDC.

Run `npx hardhat test test/forking.ts` to execute the forking logic.

## Fixtures

Go to [the fixtures.ts test file](test/fixtures.ts) to see how you can speedup your Hardhat tests
by re-using the EVM state that was updated in your `beforeEach` setup function.

First, run `npx hardhat test test/fixtures.ts` and see how long the fixtures tests take. Then, uncomment and comment out the code inside of the `beforeEach`. Run `npx hardhat test test/fixtures.ts` again and see how much faster it is!