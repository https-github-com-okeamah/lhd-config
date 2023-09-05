import { AddressMapping } from '../types'

const verifiedAssets: AddressMapping[] = [
    {
    tokenSymbol: 'CGPT',
    tokenName: 'ChainGPT',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/CGPT.svg',
    tokenAddresses: [
      { address: '0x9840652DC04fb9db2C43853633f0F62BE6f00f98', chainId: '56' },
      { address: '0x25931894a86D47441213199621F1F2994e1c39Aa', chainId: '1' },
    ],
    knownOwners: [
      '0x5930976FC5eaccCea648555cC12438a3278A9FBe',
      '0xa2EEE3F392f1F0a9b6016A3286AbcaB3544f5E71',
      '0xd9b4753Cd798Bc2F24F6FB6c325A7aEe89D46cB3',
      '0x6B783614eD539183561806E575BdA2e8A5674094',
      '0x944694417A6cA0a70963D644A11d42C10e3af042',
      '0x46A15B0b27311cedF172AB29E4f4766fbE7F4364',
    ],
    tags: ['AI', 'Infrastructure', 'Bond', 'Yield'],
    profileLinks: {
      siteUrl: 'https://www.chaingpt.org/',
      twitterUrl: 'https://twitter.com/chain_gpt',
      telegramUrl: 'https://t.me/chaingpt',
      discordUrl: 'https://discord.gg/chaingpt',
      auditUrls: ['https://www.certik.com/projects/chaingpt', 'https://hacken.io/audits/chaingpt/'],
    },
  },
  {
    tokenSymbol: 'BANANA',
    tokenName: 'ApeSwap BANANA',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/BANANA.svg',
    tokenAddresses: [
      { address: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95', chainId: '56' },
      { address: '0xd978f8489e1245568704407a479a71fcce2afe8f', chainId: '42161' },
      { address: '0x5d47baba0d66083c52009271faf3f50dcc01023c', chainId: '137' },
      { address: '0x667fd83e24ca1d935d36717d305d54fa0cac991c', chainId: '40' },
      { address: '0x92df60c51c710a1b1c20e42d85e221f3a1bfc7f2', chainId: '1' },
    ],
    knownOwners: [
      '0x944694417a6ca0a70963d644a11d42c10e3af042',
      '0xabd7853b79e488bc1bd9e238a870167b074eb714',
      '0x71c0c1001520e1568e17836cc8a19d0dbdb2bd5f',
    ],
    tags: ['DEX', 'Yield', 'Bond'],
    profileLinks: {
      siteUrl: 'https://apeswap.finance/',
      twitterUrl: 'https://twitter.com/ape_swap',
      telegramUrl: 'https://t.me/ape_swap',
      discordUrl: 'https://discord.com/invite/ape-swap',
      auditUrls: ['https://paladinsec.co/projects/apeswap/', 'https://de.fi/audit-database/ApeSwap%20Finance'],
    },
  },
  {
    tokenSymbol: 'TLOS',
    tokenName: 'Telos',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/TLOS.svg',
    tokenAddresses: [
      { address: '0x7825e833d495f3d1c28872415a4aee339d26ac88', chainId: '1' },
      { address: '0xd102ce6a4db07d247fcc28f366a623df0938ca9e', chainId: '40' },
      { address: '0xb6c53431608e626ac81a9776ac3e999c5556717c', chainId: '56' },
    ],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042', '0x6c905b4108a87499ced1e0498721f2b831c6ab13'],
  },
  {
    tokenSymbol: 'CAKE',
    tokenName: 'PancakeSwap',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/CAKE.png',
    tokenAddresses: [
      { address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', chainId: '56' },
      { address: '0x152649ea73beab28c5b49b26eb48f7ead6d4c898', chainId: '1' },
    ],
    knownOwners: [
      '0x14b2e8329b8e06bcd524eb114e23fabd21910109',
      '0x013e5accf6ccca896e730027fd4e3d5ed8e8dbb1',
      '0x78e84b238208a8cdf1ed09e5226d0047e45b633d',
    ],
  },
  {
    tokenSymbol: 'OHM',
    tokenName: 'Olympus',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/OHM.png',
    tokenAddresses: [
      { address: '0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5', chainId: '1' },
      { address: '0xf0cb2dc0db5e6c66b9a70ac27b06b878da017028', chainId: '42161' },
    ],
    knownOwners: [
      '0x245cc372c84b3645bf0ffe6538620b04a217988b',
      '0x012bbf0481b97170577745d2167ee14f63e2ad4c',
      '0x31f8cc382c9898b273eff4e0b7626a6987c846e8',
      '0x9a315bdf513367c0377fb36545857d12e85813ef',
    ],
  },
  {
    tokenSymbol: '1INCH',
    tokenName: '1INCH Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/1INCH.png',
    tokenAddresses: [
      { address: '0x111111111117dc0aa78b770fa6a738034120c302', chainId: '1' },
      { address: '0x111111111117dc0aa78b770fa6a738034120c302', chainId: '56' },
      { address: '0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f', chainId: '137' },
      { address: '0x58f1b044d8308812881a1433d9bbeff99975e70c', chainId: '1666600000' },
      { address: '0xd501281565bf7789224523144fe5d98e8b28f267', chainId: '43114' },
      { address: '0x6314c31a7a1652ce482cffe247e9cb7c3f4bb9af', chainId: '42161' },
    ],
    knownOwners: ['0x06a77eb094ef4e0ca19729770b6b115b57e188f8', '0x225d3822de44e58ee935440e0c0b829c4232086e'],
  },
  {
    tokenSymbol: 'SNX',
    tokenName: 'Synthetix Network',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/SNX.svg',
    tokenAddresses: [
      { address: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', chainId: '1' },
      { address: '0x777850281719d5a96c29812ab72f822e0e09f3da', chainId: '128' },
      { address: '0x50b728d8d964fd00c2d0aad81718b71311fef68a', chainId: '137' },
      { address: '0x56ee926bd8c72b2d5fa1af4d9e4cbb515a1e3adc', chainId: '250' },
      { address: '0x7b9c523d59aefd362247bd5601a89722e3774dd2', chainId: '1666600000' },
      { address: '0xbec243c995409e6520d7c41e404da5deba4b209b', chainId: '43114' },
      { address: '0xcba56cd8216fcbbf3fa6df6137f3147cbca37d60', chainId: '42161' },
      { address: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', chainId: '42' },
      { address: '0x0064a673267696049938aa47595dd0b3c2e705a1', chainId: '69' },
      { address: '0x2e5ed97596a8368eb9e44b1f3f25b2e813845303', chainId: '420' },
      { address: '0x8700daec35af8ff88c16bdf0418774cb3d7599b4', chainId: '10' },
    ],
    knownOwners: ['0x99f4176ee457afedffcb1839c7ab7a030a5e4a92'],
  },
  {
    tokenSymbol: 'UNI',
    tokenName: 'UniSwap',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/UNI.png',
    tokenAddresses: [
      { address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', chainId: '1' },
      { address: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1', chainId: '56' },
      { address: '0x4537e328bf7e4efa29d05caea260d7fe26af9d74', chainId: '100' },
      { address: '0xb33eaad8d922b1083446dc23f610c2567fb5180f', chainId: '137' },
      { address: '0x22c54ce8321a4015740ee1109d9cbc25815c46e6', chainId: '128' },
      { address: '0x8ebaf22b6f053dffeaf46f4dd9efa95d89ba8580', chainId: '43114' },
      { address: '0x90d81749da8867962c760414c1c25ec926e889b6', chainId: '1666600000' },
      { address: '0x6fd9d7ad17242c41f7131d257212c54a0e816691', chainId: '10' },
      { address: '0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0', chainId: '42161' },
      { address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', chainId: '42' },
      { address: '0x5e31b81eafba4b9371e77f34d6f3da8091c3f2a0', chainId: '69' },
    ],
    knownOwners: ['0x25431341a5800759268a6ac1d3cd91c029d7d9ca'],
  },
  {
    tokenSymbol: 'LINK',
    tokenName: 'Chainlink',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/LINK.png',
    tokenAddresses: [
      { address: '0x514910771af9ca656af840dff83e8264ecf986ca', chainId: '1' },
      { address: '0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2', chainId: '100' },
      { address: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd', chainId: '56' },
      { address: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39', chainId: '137' },
      { address: '0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6', chainId: '10' },
      { address: '0x218532a12a389a4a92fc0c5fb22901d1c19198aa', chainId: '1666600000' },
      { address: '0x5947bb275c521040051d82396192181b413227a3', chainId: '43114' },
      { address: '0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8', chainId: '250' },
      { address: '0xa36085f69e2889c224210f603d836748e7dc0088', chainId: '42' },
      { address: '0x4911b761993b9c8c0d14ba2d86902af6b0074f5b', chainId: '69' },
      { address: '0x326c977e6efc84e512bb9c30f76e30c160ed06fb', chainId: '5' },
      { address: '0xdc2cc710e42857672e7907cf474a69b63b93089f', chainId: '420' },
    ],
    knownOwners: ['0x99f4176ee457afedffcb1839c7ab7a030a5e4a92', '0x17080b589cdcbd10ebeaa24cb0096f4bb29eb52b'],
  },
  {
    tokenSymbol: 'BETS',
    tokenName: 'BetSwirl',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/BETS.png',
    tokenAddresses: [
      { address: '0x9246a5f10a79a5a939b0c2a75a3ad196aafdb43b', chainId: '137' },
      { address: '0x3e0a7c7db7bb21bda290a80c9811de6d47781671', chainId: '56' },
      { address: '0xc763f8570a48c4c00c80b76107cbe744dda67b79', chainId: '43114' },
      { address: '0xe26ae3d881f3d5def58d795f611753804e7a6b26', chainId: '42161' },
    ],
    knownOwners: [
      '0xfa695010bf9e757a1abcd2703259f419217aa756',
      '0xcd25325a6ef20bc5df9bceac0cc22a48d2e8f6ef',
      '0x1a75280f832280af93f588f715a5fb4ca7918430',
      '0xf14c79a7fa22c1f97c779f573c9bf39b6b43381c',
      '0x099290d5792c58b01581e50514aecacb232791ab',
    ],
    tags: ['Gambling', 'Yield'],
    profileLinks: {
      siteUrl: 'https://www.betswirl.com/',
      twitterUrl: 'https://twitter.com/BetSwirl',
      telegramUrl: 'https://t.me/betswirl',
      discordUrl: 'https://discord.com/invite/4BxtJV7fbZ',
      auditUrls: ['https://github.com/BetSwirl/Smart-Contracts'],
    },
  },
  {
    tokenSymbol: 'GMEE',
    tokenName: 'GAMEE',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/GMEE.svg',
    tokenAddresses: [
      { address: '0xcf32822ff397ef82425153a9dcb726e5ff61dca7', chainId: '137' },
      { address: '0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373', chainId: '1' },
      { address: '0x84e9a6f9d240fdd33801f7135908bfa16866939a', chainId: '56' },
    ],
    knownOwners: [
      '0x8932c8b93457e383965bf3f3cad108c46166c935',
      '0x72571d815dd31fbde52be0b9d7ffc8344aede616',
      '0xcf9452950912fd96385846ca978cc2f98e8feb77',
      '0xb5b39b50637fe5a6cf64fa29027ceb5fecca0745',
      '0x0f26d1f7af65a06693e2ad907d4767051e517ca4',
      '0x6ed8c61786cc23af318e0c52ca7d9f61fbf23346',
      '0x49a042793b00e091ad66b5a64481030078125528',
      '0xe11fc0b43ab98eb91e9836129d1ee7c3bc95df50',
      '0xe4d19680dff89fb45eddadd538772556f9c26548',
    ],
  },
  {
    tokenSymbol: 'KAINET',
    tokenName: 'KAINET',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/KAINET.png',
    tokenAddresses: [{ address: '0xb097dd6a23175c10eaa45a1f410d7eb4cfdafc8a', chainId: '1' }],
    knownOwners: ['0xe2fe530c047f2d85298b07d9333c05737f1435fb', '0xcd496d70411e98a9b69c572f6ee53086528fa3bc'],
  },
  {
    tokenSymbol: 'ALGB',
    tokenName: 'Algebra',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/ALGB.png',
    tokenAddresses: [{ address: '0x0169ec1f8f639b32eec6d923e24c2a2ff45b9dd6', chainId: '137' }],
    knownOwners: ['0x1d8b6fa722230153be08c4fa4aa4b4c7cd01a95a'],
  },
  {
    tokenSymbol: 'SAVG',
    tokenName: 'SAVAGE',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/SAVG.png',
    tokenAddresses: [{ address: '0x981aecc6eb4d382b96a02b75e931900705e95a31', chainId: '137' }],
    knownOwners: ['0xcbd081cf30e2de8df209365a478055104ecda9d9'],
  },
  {
    tokenSymbol: 'ARRAY',
    tokenName: 'Array',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/ARRAY.png',
    tokenAddresses: [
      { address: '0x164731cd270daa4a94bc70761e53320e48367b8b', chainId: '42161' },
      { address: '0x6068ad384b4d330d4de77f47041885956c9f32a3', chainId: '324' },
    ],
    knownOwners: ['0x5c26953712ffab29ea7b2b416832d3724d26e6e2'],
  },
  {
    tokenSymbol: 'RADAR',
    tokenName: 'DappRadar',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/RADAR.png',
    tokenAddresses: [{ address: '0x489580eb70a50515296ef31e8179ff3e77e24965', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'CGG',
    tokenName: 'ChainGuardians',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/CGG.svg',
    tokenAddresses: [
      { address: '0x1613957159e9b0ac6c80e824f7eea748a32a0ae2', chainId: '56' },
      { address: '0x2ab4f9ac80f33071211729e45cfc346c1f8446d5', chainId: '137' },
    ],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042', '0x60dc928548b92b681beba07fc2551c5e5967a8e6'],
  },
  {
    tokenSymbol: 'LGC',
    tokenName: 'LiveGreen',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/LGC.svg',
    tokenAddresses: [{ address: '0x3496212ec43cc49f5151ec4405efd4975e036f89', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'OATH',
    tokenName: 'Oath Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/OATH.svg',
    tokenAddresses: [{ address: '0xd3c6ceedd1cc7bd4304f72b011d53441d631e662', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'TOKO',
    tokenName: 'Tokoin',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/TOKO.png',
    tokenAddresses: [{ address: '0x45f7967926e95fd161e56ed66b663c9114c5226f', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'CVL',
    tokenName: 'Civilization',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/CVL.svg',
    tokenAddresses: [{ address: '0x9ae0290cd677dc69a5f2a1e435ef002400da70f5', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'TRIVIA',
    tokenName: 'Trivian Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/TRIVIA.svg',
    tokenAddresses: [{ address: '0xb465f3cb6aba6ee375e12918387de1eac2301b05', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'XTAL',
    tokenName: 'XTALToken',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/XTAL.png',
    tokenAddresses: [{ address: '0xd23eae3926431c794e2a04e1622a9446d61174a4', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'WCFLT',
    tokenName: 'Wrapped Coinflect',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/WCFLT.svg',
    tokenAddresses: [{ address: '0xc73d9b9616e855df4a0b32c3f1ef2ed5dc9c1990', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'AVAN',
    tokenName: 'AVANA Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/AVAN.png',
    tokenAddresses: [{ address: '0xf84c55e79858b448c3015c3a1a55efed9edf69c7', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'MONSTA',
    tokenName: 'Cake Monster',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/MONSTA.svg',
    tokenAddresses: [{ address: '0x8a5d7fcd4c90421d21d30fcc4435948ac3618b2f', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'LEAP',
    tokenName: 'LEAP',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/LEAP.svg',
    tokenAddresses: [{ address: '0x6eed9140f80f9e989cb23aecbd20b97a29ffc80f', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: '3AIR',
    tokenName: '3AIR',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/3AIR.svg',
    tokenAddresses: [{ address: '0x596834746b5b78f31a089ee7853fa595682824b7', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'CHRP',
    tokenName: 'Chirpley Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/CHRP.svg',
    tokenAddresses: [{ address: '0xed00fc7d48b57b81fe65d1ce71c0985e4cf442cb', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'LIQ',
    tokenName: 'Liquidus',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/LIQ.svg',
    tokenAddresses: [{ address: '0xc7981767f644c7f8e483dabdc413e8a371b83079', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'IHC',
    tokenName: 'Inflation Hedging Coin',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/IHC.png',
    tokenAddresses: [{ address: '0x86a53fcd199212fea44fa7e16eb1f28812be911d', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'PSTN',
    tokenName: 'PISTON',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/PSTN.svg',
    tokenAddresses: [{ address: '0xbfacd29427ff376ff3bc22dffb29866277ca5fb4', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'GQ',
    tokenName: 'Galactic Quadrant',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/GQ.png',
    tokenAddresses: [{ address: '0xf700d4c708c2be1463e355f337603183d20e0808', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'NFTY',
    tokenName: 'NFTY Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/NFTY.png',
    tokenAddresses: [{ address: '0x5774b2fc3e91af89f89141eacf76545e74265982', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'MOONLIGHT',
    tokenName: 'Moonlight',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/MOONLIGHT.svg',
    tokenAddresses: [{ address: '0xb1ced2e320e3f4c8e3511b1dc59203303493f382', chainId: '56' }],
  },
  {
    tokenSymbol: 'COC',
    tokenName: 'Coin of the champions',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/COC.svg',
    tokenAddresses: [{ address: '0xbdc3b3639f7aa19e623a4d603a3fb7ab20115a91', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'GMR',
    tokenName: 'GAMER',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/GMR.svg',
    tokenAddresses: [{ address: '0xadca52302e0a6c2d5d68edcdb4ac75deb5466884', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'XCUR',
    tokenName: 'Curate',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/XCUR.svg',
    tokenAddresses: [{ address: '0xd52669712f253cd6b2fe8a8638f66ed726cb770c', chainId: '56' }],
    knownOwners: ['0x7c138583a199b30693173c3c62f104a658dc5c42'],
  },
  {
    tokenSymbol: 'XWIN',
    tokenName: 'xWIN Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/XWIN.svg',
    tokenAddresses: [{ address: '0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28', chainId: '56' }],
    knownOwners: ['0x7e81f91b2c3ba470c9e603a744cd6d53573b2511'],
  },
  {
    tokenSymbol: 'FROYO',
    tokenName: 'FROYO',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/FROYO.png',
    tokenAddresses: [{ address: '0xe369fec23380f9f14ffd07a1dc4b7c1a9fdd81c9', chainId: '56' }],
    knownOwners: ['0x9ff2db8821bd61ba348975c3ebe04acdefd0ae4b'],
  },
  {
    tokenSymbol: 'BLID',
    tokenName: 'Bolide',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/BLID.svg',
    tokenAddresses: [{ address: '0x766afcf83fd5eaf884b3d529b432ca27a6d84617', chainId: '56' }],
    knownOwners: ['0xc9f833b514825dec2d11d291fb3d960054e0e169'],
  },
  {
    tokenSymbol: 'HEC',
    tokenName: 'Hector',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/HEC.svg',
    tokenAddresses: [{ address: '0x638eebe886b0e9e7c6929e69490064a6c94d204d', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042', '0x11587da834e3d9f25ad14fc28f6dd670e22f08f9'],
  },
  {
    tokenSymbol: 'FLOKI',
    tokenName: 'FLOKI',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/FLOKI.svg',
    tokenAddresses: [{ address: '0xfb5b838b6cfeedc2873ab27866079ac55363d37e', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'STARS',
    tokenName: 'Mogul Stars',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/STARS.svg',
    tokenAddresses: [{ address: '0xbd83010eb60f12112908774998f65761cf9f6f9a', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'CEEK',
    tokenName: 'CEEK',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/CEEK.png',
    tokenAddresses: [{ address: '0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'HOTCROSS',
    tokenName: 'Hot Cross Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/HOTCROSS.svg',
    tokenAddresses: [{ address: '0x4fa7163e153419e0e1064e418dd7a99314ed27b6', chainId: '56' }],
    knownOwners: ['0x944694417a6ca0a70963d644a11d42c10e3af042'],
  },
  {
    tokenSymbol: 'AXN',
    tokenName: 'Axion',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/AXN.png',
    tokenAddresses: [{ address: '0x839f1a22a59eaaf26c85958712ab32f80fea23d9', chainId: '137' }],
    knownOwners: ['0x60dc928548b92b681beba07fc2551c5e5967a8e6'],
  },
  {
    tokenSymbol: 'TRAXX',
    tokenName: 'TRAXX',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/TRAXX.svg',
    tokenAddresses: [{ address: '0xd43be54c1aedf7ee4099104f2dae4ea88b18a249', chainId: '137' }],
    knownOwners: ['0x60dc928548b92b681beba07fc2551c5e5967a8e6'],
  },
  {
    tokenSymbol: 'DOGIRA',
    tokenName: 'Dogira',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/DOGIRA.svg',
    tokenAddresses: [{ address: '0xdda40cdfe4a0090f42ff49f264a831402adb801a', chainId: '137' }],
    knownOwners: ['0x60dc928548b92b681beba07fc2551c5e5967a8e6'],
  },
  {
    tokenSymbol: 'UNI',
    tokenName: 'UniSwap',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/UNI.svg',
    tokenAddresses: [
      { address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', chainId: '1' },
      { address: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'RPL',
    tokenName: 'Rocket Protocol',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/RPL.png',
    tokenAddresses: [
      { address: '0xd33526068d116ce69f19a9ee46f0bd304f21a51f', chainId: '1' },
      { address: '0xb766039cc6db368759c1e56b79affe831d0cc507', chainId: '42161' },
    ],
    knownOwners: ['0xb867ea3bbc909954d737019fef5ab25dfdb38cb9'],
  },
  {
    tokenSymbol: 'GMX',
    tokenName: 'GMX',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/GMX.png',
    tokenAddresses: [
      { address: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a', chainId: '42161' },
      { address: '0x62edc0692bd897d2295872a9ffcac5425011c661', chainId: '43114' },
    ],
    knownOwners: ['0x4e29d2ee6973e5bd093df40ef9d0b28bd56c9e4e'],
  },
  {
    tokenSymbol: 'APE',
    tokenName: 'ApeCoin',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/APE.svg',
    tokenAddresses: [
      { address: '0x4d224452801aced8b2f0aebe155379bb5d594381', chainId: '1' },
      { address: '0xc762043e211571eb34f1ef377e5e8e76914962f9', chainId: '56' },
      { address: '0x0b079b33b6e72311c6be245f9f660cc385029fc3', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'AAVE',
    tokenName: 'Aave Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/AAVE.svg',
    tokenAddresses: [
      { address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9', chainId: '1' },
      { address: '0xfb6115445bff7b52feb98650c87f44907e58f802', chainId: '56' },
    ],
  },
  {
    tokenSymbol: 'ORBS',
    tokenName: 'Orbs',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/ORBS.svg',
    tokenAddresses: [
      { address: '0xebd49b26169e1b52c04cfd19fcf289405df55f80', chainId: '56' },
      { address: '0x614389eaae0a6821dc49062d56bda3d9d45fa2ff', chainId: '137' },
      { address: '0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa', chainId: '1' },
      { address: '0x3e01b7e242d5af8064cb9a8f9468ac0f8683617c', chainId: '250' },
      { address: '0x340fe1d898eccaad394e2ba0fc1f93d27c7b717a', chainId: '43114' },
    ],
  },
  {
    tokenSymbol: 'SHIBA',
    tokenName: 'BitShiba',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/SHIBA.svg',
    tokenAddresses: [{ address: '0xb84cbbf09b3ed388a45cd875ebba41a20365e6e7', chainId: '56' }],
  },
  {
    tokenSymbol: 'STZ',
    tokenName: '99Starz',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/STZ.svg',
    tokenAddresses: [{ address: '0x7fe378c5e0b5c32af2ecc8829bedf02245a0e4ef', chainId: '56' }],
  },
  {
    tokenSymbol: 'LGX',
    tokenName: 'LegionX',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/LGX.svg',
    tokenAddresses: [{ address: '0x7fe378c5e0b5c32af2ecc8829bedf02245a0e4ef', chainId: '56' }],
  },
  {
    tokenSymbol: 'MAY',
    tokenName: 'Mayfair',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/MAY.png',
    tokenAddresses: [{ address: '0xf9df075716b2d9b95616341dc6bc64c85e56645c', chainId: '42161' }],
    knownOwners: ['0x5c26953712ffab29ea7b2b416832d3724d26e6e2'],
  },
  {
    tokenSymbol: 'GHNY',
    tokenName: 'Grizzly Finance',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/GHNY.svg',
    tokenAddresses: [
      { address: '0xa045e37a0d1dd3a45fefb8803d22457abc0a728a', chainId: '56' },
      { address: '0xfb4d8bee1840f3897d2344035f68ed594359c939', chainId: '1' },
    ],
    knownOwners: ['0x981b04cbdcee0c510d331fadc7d6836a77085030'],
  },
  {
    tokenSymbol: 'NOOT',
    tokenName: 'NOOT',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/NOOT.svg',
    tokenAddresses: [{ address: '0x98a2500a2c3b8877b0ed5ac3acc300c50bf7064b', chainId: '56' }],
    knownOwners: ['0x67c51db055ab177cdd1035857784481a9b4b90cb', '0xe6737b7a8555709171c69483da570dec43f15c1c'],
    profileLinks: {
      siteUrl: 'https://www.noot.fun/',
      twitterUrl: 'https://twitter.com/nootcoinbnb',
      telegramUrl: 'https://t.me/nootnew',
      discordUrl: 'https://discord.com/invite/cBbQZRyFrR',
      auditUrls: ['https://techright.io/audit/nootcoin/'],
    },
  },
  {
    tokenSymbol: 'HYPC',
    tokenName: 'HyperCycle',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/HYPC.svg',
    tokenAddresses: [
      { address: '0x7881cd2b5724431372f57c50e91611352557a606', chainId: '56' },
      { address: '0xea7b7dc089c9a4a916b5a7a37617f59fd54e37e4', chainId: '1' },
    ],
    knownOwners: ['0x257d4c4a401c180fba4eb686ad59a9d3eb7a02a3', '0xff830b7720881656cd275e08a26695464823eac8'],
    profileLinks: {
      siteUrl: 'https://www.hypercycle.ai/',
      twitterUrl: 'https://twitter.com/Hypercycle_AI',
      telegramUrl: 'https://t.me/hypercycle_ai',
    },
  },
  {
    tokenSymbol: 'NOW',
    tokenName: 'ChangeNOW',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/NOW.svg',
    tokenAddresses: [{ address: '0xe9a95d175a5f4c9369f3b74222402eb1b837693b', chainId: '1' }],
    knownOwners: ['0xf13b64a697015a24237aac8b5ee7d823d9f0e33e', '0xa89d931e25e8ce82c492f03e1397e693c1c886ba'],
    profileLinks: {
      siteUrl: 'https://changenow.io/',
      twitterUrl: 'https://twitter.com/ChangeNOW_io',
      telegramUrl: 'https://t.me/CNAnnouncements',
      discordUrl: 'https://discord.com/invite/NyegmK5vsS',
    },
  },
  {
    tokenSymbol: 'UBXS',
    tokenName: 'UBXS Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/UBXS.svg',
    tokenAddresses: [{ address: '0x4f1960E29b2cA581a38c5c474e123f420F8092db', chainId: '56' }],
    knownOwners: ['0x872f7DEB0bCA066416C327Dd3A66BF724c949fCd'],
    tags: ['Blockchain', 'NFTs', 'Metaverse', 'GameFi'],
    profileLinks: {
      siteUrl: 'https://bixos.io',
      twitterUrl: 'https://twitter.com/ubxstoken',
      telegramUrl: 'https://t.me/ubxscommunity',
      discordUrl: 'https://discord.com/invite/2JKmtjkYFt',
      auditUrls: ['https://github.com/solidproof/projects/blob/main/Bixos/SmartContract_Audit_Solidproof_Bixos.pdf'],
    },
  },
  {
    tokenSymbol: 'THX',
    tokenName: 'THX Network',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/THX.png',
    tokenAddresses: [
      { address: '0x2934b36ca9A4B31E633C5BE670C8C8b28b6aA015', chainId: '137' },
      { address: '0xe632ea2ef2cfd8fc4a2731c76f99078aef6a4b31', chainId: '1' },
    ],
    knownOwners: [
      '0xc7637aABd63B3017A261e618BFF7431F7A6F13Ce',
      '0xE98586B05f2C4e654172dE877ADA9C221A02d0bD',
      '0x4a30c80A2c41312ce4ee79f730C8D84cAD9f7B31',
      '0xDC4E86c5C99394132b13876Fc94a617Df84f0b9e',
      '0xc02c205D08a640295fedB2Df45F654b69d7A222E',
      '0x9758f2bf8e6f6ee89bd71fb434d92c699dc89e30',
      '0x59429282A4e566373a1F2D5F20CF08184b46ee07',
      '0xfdc25d605afeaaa4fe5a125bca524413957d18a4',
      '0x476cf198afac0fb13576f664cb49e5e658fd4322',
      '0xba12222222228d8ba445958a75a0704d566bf2c8',
    ],
    tags: ['Blockchain', 'Marketing_Solution', 'Wallet', 'NFTs', 'GameFi', 'Launchpad'],
    profileLinks: {
      siteUrl: 'https://thx.network',
      twitterUrl: 'https://twitter.com/thxprotocol',
      telegramUrl: 'https://t.me/thxnetwork',
      discordUrl: 'https://discord.com/invite/u3DruB5pm5',
      auditUrls: [
        'https://github.com/pessimistic-io/audits/blob/main/THX%20Security%20Analysis%20by%20Pessimistic.pdf',
      ],
    },
  },
  {
    tokenSymbol: 'DCB',
    tokenName: 'Decubate',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/lhd-config/main/logos/DCB.svg',
    tokenAddresses: [{ address: '0xeac9873291ddaca754ea5642114151f3035c67a2', chainId: '56' }],
    knownOwners: ['0x0c89c0407775dd89b12918b9c0aa42bf96518820'],
    tags: ['Infrastructure'],
    profileLinks: {
      siteUrl: 'https://www.decubate.com/',
      twitterUrl: 'https://twitter.com/decubate',
      telegramUrl: 'https://t.me/decubate',
      discordUrl: 'https://discord.com/invite/Decubate',
      auditUrls: ['https://github.com/Decubate-com/public-repository'],
    },
  },
]

export default verifiedAssets
