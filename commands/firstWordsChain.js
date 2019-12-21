exports.run = (bot, message, args) => {
	const MarkovChain = require('markovchain');
	const fs = require('fs');
	const koalafacts = new MarkovChain(fs.readFileSync('./data/frc.txt', 'utf8'));
	message.channel.send(`${koalafacts.start("FRC").end(" ").process()}`);
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['frc', 'frcwords', 'whatisfrc'],
	botPerms: [],
	memberPerms: [],
    servers: ['global','tdu','test']
};

exports.help = {
	name: 'frcchain',
	description: 'A Markov Chain for FRC',
	usage: 'frcchain'
};
