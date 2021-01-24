require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone stove renew noble push hope enroll slot giggle'; 
let testAccounts = [
"0x301cd0c45d5feae38a64413231ae93744479595836104e05fface00a91edd9f5",
"0xe98018a3798e50f13b7c44a1c62e7afcfb7d243607e1c5a08b32194dff56a760",
"0xa3383ec37c6e0039bf3ba2419c576461f0148300023a73403134cf416530f57e",
"0xc843ab775829652d68a5f5c047f9ecd9e0e0b8699e2c5fd83d9fe59c2f428c24",
"0xac6b7dbe8b5d789dde040f3699b48a4c08b40ed8babd8552c06ba7796f49a05c",
"0xbab339755758f9671716e2ca13f221530b5506b1c47b3c808fdfa9ecdff4b2d0",
"0x6b734f66d777e28c6f2aed996dcff72db93db317eb4e43e8c8c4a5b2775c8304",
"0x005dfe419e2f1422b836631a94b0f03b8ef917c66aef83aa63d7015fc69df0d0",
"0x22ea8d93fd97afdc29ac19af640e9b4c43bfc5371d59956dbd5706bacc04b7ab",
"0x4d950b3cb5c55826ecc1facb05a3d4beeb4136a25f908539ef46967efdbd8a03"
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
            version: '^0.5.11'
        }
    }
};
