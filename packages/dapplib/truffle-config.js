require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name return stick hospital hockey entire army gift'; 
let testAccounts = [
"0xd526cb011cc4f8d1f6486040cbe440d41d644f1722cfadd16f3e633d1cdd2273",
"0xe2e3d841faf7875350ece7b6ae9444f0175378d6514e4d8fd1bc02ff2adaa101",
"0x196399e3e6da34036ed371c0a89467243c79377945b43df2fe71e5a377b69d53",
"0x21c5433181e5a1d3f011fecb7fd7a5ae05782c9a82d97d3f08e2015d10f14e09",
"0x111c5d0430afc8d5adf2e0a7c4aad30be7fbf82fd3c6d544d33289052a2b1434",
"0xf241d003a23d6343d640556d95c2aed5d5b4e363950378ac852d7a1abe21c91b",
"0x50e6ce6f819a7912e0ea7a112e8cd63077fd26fad76757c0a2a650d32fbaa0c5",
"0x44b6e5ad18ae8f873624e9c264a2140488e891ea3db0fce57f47f7151703539d",
"0x9a905adbc78a364738f422f34738048fae07a5d12ba6ce34ec174f08fb801121",
"0x575f846e74d6af44f0a86d74a450d739a8bca1c157b31d2d663dfd74f602e3fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

