const Block = require('./block.js');

class Blockchain {
	constructor(){
		this.chain = [Block.genesis()];
	}

	addBlock(data){
		const block = Block.mineBlock(this.chain[this.chain.length-1], data);
		this.chain.push(block);

		return block;
	}

	//////////////////////////////////////////////////////////////////////////////
	////////////Checking if the chain is fully valid on all blocks///////////////
	///////////to see if no changes were applied to the hashes or data//////////
	///////////////////////////////////////////////////////////////////////////
	isValidChain(chain){
		if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())){
			return false;
		}

		for(let i = 1; i < chain.length; i++){
			const block = chain[i];
			const lastBlock = chain[i-1]

			if((block.lastHash !== lastBlock.hash) 
				|| (block.hash !== Block.blockHash(block))
				){
				return false;
			}
		}

		return true;

	}
	////////////////////////////////////////////////////////////////////
	/////////Applying multiple miners with the longest chain rule//////
	//////////////////////////////////////////////////////////////////
	replaceChain(newChain){
		if(newChain.length < this.chain.length){
			console.log("New chain is no longer than current chain");
			return;
		}
		else if(!this.isValidChain(newChain)){
			console.log("This new chain is not valid")
			return;
		}

		console.log("Replacing current chain with new chain");
		this.chain = newChain;
	}
}

module.exports = Blockchain;