// const Block = require('./block.js');
// const Blockchain = require('./index.js');

// describe("Blockchain", () => {
// 	let blockchain;
// 	let blockchain2;

// 	beforeEach( () => {
// 		blockchain = new Blockchain();
// 		blockchain2 = new Blockchain();
// 	})

// 	it("compares the first block", () => {
// 		expect(blockchain.chain[0]).toEqual(Block.genesis());
// 	})

// 	it("add new block", () => {
// 		const data = "foo";
// 		blockchain.addBlock(data);
// 		expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(data);
// 	})

// 	it('validates a valid chain',()=>{
//         blockchain2.addBlock('foo');
//         // conventional method for check true and false is toBe
//         expect(blockchain.isValidChain(blockchain2.chain)).toBe(true);
//     });

//     it('validates chain with wrong data', () => {
//     	blockchain2.chain[0].data = "wrong data";
//     	expect(blockchain.isValidChain(blockchain2.chain)).toBe(false);
//     })

//     it('invalidates a corrput chain',()=>{
//         blockchain2.addBlock('foo');
//         blockchain2.chain[1].data = 'not foo';

//         expect(blockchain.isValidChain(blockchain2.chain)).toBe(false);
//     });

//     it('expects to replace the chain', () => {
//     	blockchain2.addBlock('guru');
//     	blockchain.replaceChain(blockchain2.chain);
//     	expect(blockchain.chain).toEqual(blockchain2.chain);
//     })

//     it('expects not to replace the current chain because its longer', () => {
//     	blockchain.addBlock("pop");
//     	expect(blockchain.chain).not.toEqual(blockchain2.chain);
//     })
// })