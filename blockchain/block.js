const CryptoJS = require('crypto-js');
const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestamp, lastHash, hash, data, nonce, difficulty){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = 3;
    }
    
    toString(){
        return `Block - 
        Timestamp : ${this.timestamp}
        Last Hash : ${this.lastHash.substring(0,10)}
        Hash      : ${this.hash.substring(0,10)}
        Data      : ${this.data}
        Nonce     : ${this.nonce}
        Difficulty: ${this.difficulty}`;
    }
    
    static genesis(){
        return new this('Genesis time','0000000','DS1342ADSD2',[], 0, 3);
    }
    
    static hash(timestamp, lastHash, data, nonce, difficulty){
        return SHA256(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
    }
    
    static mineBlock(lastBlock, data){

        let hash;
        let timestamp;
        const lastHash = lastBlock.hash;

        let { difficulty } = lastBlock;
        let nonce = 0;

        do{
            nonce++;
            timestamp = Date();
            hash = this.hash(timestamp, lastHash, data, nonce, difficulty);
        } while(hash.substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this(timestamp, lastHash, hash, data, nonce, difficulty);
    }

/////////////////////////////////////////////////////////////////////
////Static method that we are going to use for checking the current/
///block hash with the block itself, check isValidChain(block) in//
//blockchain.js file//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
    static blockHash(block){
        const { timestamp, lastHash, data, nonce, difficulty } = block;
        return this.hash(timestamp, lastHash, data, nonce, difficulty);
    }
}

module.exports = Block;