const { MerkleTree } = require('merkletreejs');
const SHA256 = require('crypto-js/sha256');
window.MerkleTree = MerkleTree;
window.SHA256 = SHA256;