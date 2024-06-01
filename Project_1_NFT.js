// create a variable to hold your NFT's
var a = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
    var b = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    a.push(b); // Store the created NFT in the myNFTs array
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < a.length; i++) {
        console.log("name: " + a[i].name);
        console.log("eye color: " + a[i].eyeColor);
        console.log("shirt type: " + a[i].shirtType);
        console.log("bling: " + a[i].bling);
        console.log("......................");
      }
    };


// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return a.length;
}

// call your functions below this line
mintNFT("puffy parrot", "green", "coat", "bow-tie");
mintNFT("talking tom ", "black", "vest", "diamonds");
mintNFT("sleeky snake", "grey", "shirt", "spectacles");
mintNFT("busy bird", "pink", "t-shirt", "piano");
mintNFT("coward cat", "brown", "coat", "bracelet");
mintNFT("happy hippo", "orange", "blazer", "gems");

listNFTs(); // Print details of all NFTs
console.log("Total NFTs: " + getTotalSupply()); // Print total number of NFTs
