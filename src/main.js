var helper = require('helper')
var workTool = require('worker')

var S1 = Game.spawns.S1;
//console.log(S1)
//console.log(helper.getRole('harvester').length)


if (helper.getRole('harvester').length < 1) {
    helper.createWorker(S1, 'w1');
}

var w;
for (w in helper.getRole('harvester')) {
    workTool.harvest(w, S1);
}