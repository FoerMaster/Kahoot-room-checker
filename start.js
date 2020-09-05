var Kahoot = require("kahoot.js-updated");
const readline = require('readline');
var randomstring = require("randomstring");

var kid = 0;
var botscount = 0;
var curbot = 0

console.log(`Kahoot room checker`);
console.log(`---------------------------------------------`);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input KahootID: ', (answer) => {
  kid = answer
  rl.close();
  const rl2 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
  });

	rl2.question('Input bot\'s count: ', (answer2) => {
		botscount = answer2
		LetsGOO()
		rl2.close();
	});

});

function LetsGOO() {
	console.log(`---------------------------------------------`);
	console.log(`Current KahootID: ${kid}`);
	console.log(`Bot\'s count: ${botscount}`);

	console.log("Joining kahoot...");
	console.log(`---------------------------------------------`);
	Connect()

}

function Connect() {
	var k = new Kahoot;
	k.join(kid, randomstring.generate(7)).then(() => {
		console.log(`Joined bot#${curbot}`);
		if(curbot < botscount){
			Connect()
			curbot += 1
		}		
	}).catch(e=>{
		console.log(e);
		Connect()	
	});
}