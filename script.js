const Blockchain = require('./blockchain/index.js');
const Block = require('./blockchain/block.js');

particlesJS('particles-js', 
	{
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 868.0624057955
      }
    },
    "color": {
      "value": "#b50de8"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4489553770423464,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4.008530152163807,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 96.20472365193136,
      "color": "#4b0ca4",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

const dataMineInput = document.querySelector(".dataMineInput");
const addButton = document.querySelector(".dataMineButton");
const addCardBody = document.querySelector(".addCardBody");
let blocksCount = 0;

const genLastHash = document.querySelector(".genesisLastHash");
const genTimestamp = document.querySelector(".genesisTimestamp");
const genNonce = document.querySelector(".genesisNonce");
const genHash = document.querySelector(".genesisHash");

let mainBlockChain = new Blockchain();

genLastHash.textContent = mainBlockChain.chain[0].lastHash;
genTimestamp.textContent = mainBlockChain.chain[0].timestamp;
genNonce.textContent = mainBlockChain.chain[0].nonce;
genHash.textContent = mainBlockChain.chain[0].hash;

const creatingNewBlock = function() {
	let blockchainList = document.querySelector(".blockchainList");
	let data = dataMineInput.value
	if(data !== ""){
		mainBlockChain.addBlock(data);

		let lastHashData = mainBlockChain.chain[mainBlockChain.chain.length-1].lastHash;
		let timestampData = mainBlockChain.chain[mainBlockChain.chain.length-1].timestamp;
		let nonceData = mainBlockChain.chain[mainBlockChain.chain.length-1].nonce;
		let hashData = mainBlockChain.chain[mainBlockChain.chain.length-1].hash;
		let blockData = mainBlockChain.chain[mainBlockChain.chain.length-1].data;

		dataMineInput.value = "";
		blocksCount++;

		blockchainList.innerHTML += 
		`<br>
			<div class="animated fadeInRight card card-nav-tabs" style="min-width: 330px;">
	          <div class="card-header card-header-danger" style="background: #7B8AFC;">
	            Block ${blocksCount}
	          </div>
	          <ul class="list-group list-group-flush">
	            <li class="list-group-item">
	              <button style="width: 10em; background-color: #5BBC2E" class="btn btn-primary">
	                Data
	              </button><p class="blockData" style="text-align: left;">${blockData}</p>
	            </li>
	              <li class="list-group-item">
	              <button style="width: 10em; background-color: #5BBC2E" class="btn btn-primary">
	                Last Hash
	              </button><p class="lastHashData"style="text-align: left;">${lastHashData}</p>
	            </li>
	            <li class="list-group-item">
	              <button style="width: 10em; background-color: #5BBC2E" class="btn btn-primary">Timestamp
	              </button><p class="timestampData"style="text-align: left;">${timestampData}</p>
	            </li>
	            <li class="list-group-item">
	              <button style="width: 10em; background-color: #5BBC2E" class="btn btn-primary">Nonce
	              </button><p class="nonceData"style="text-align: left;">${nonceData}</p>
	            </li>
	            <li class="list-group-item">
	              <button style="width: 10em; background-color: #5BBC2E" class="btn btn-primary">Hash
	              </button><p class="hashData"style="text-align: left;">${hashData}</p>
	            </li>
	          </ul>
	        </div>
	        `;
	}
	addCardBody.scrollIntoView(false);
}

addButton.addEventListener("click", creatingNewBlock);

dataMineInput.addEventListener("keydown", function(event){
	if(event.keyCode === 13){
		creatingNewBlock();
	}
});
