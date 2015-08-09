var _ = require('lodash');


module.exports = {

    createWorker: function(spawn, workerName) {
        spawn.createCreep([WORK, CARRY, MOVE], workerName, {role: 'harvester'});
    },

    getRole: function(role) {
        var harvesters = _.filter(Game.creeps, {
            memory: {role: role}
        });
        return harvesters;
    }
}