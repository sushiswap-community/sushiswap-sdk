import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: string = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'

// export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
//   [ChainId.MAINNET]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
//   [ChainId.ROPSTEN]: '0xaDe0ad525430cfe17218B679483c46B6c1d63fe2',
//   [ChainId.RINKEBY]: '0xaDe0ad525430cfe17218B679483c46B6c1d63fe2',
//   [ChainId.GÖRLI]: '0xaDe0ad525430cfe17218B679483c46B6c1d63fe2',
//   [ChainId.KOVAN]: '0xaDe0ad525430cfe17218B679483c46B6c1d63fe2'
// }

export const INIT_CODE_HASH: string = "0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303"

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
