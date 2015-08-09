module.exports = {

    harvest: function(worker, spawn) {
        console.log(worker + " " + worker.carry + " " + worker.carryCapacity)
        if (worker.carry < worker.carryCapacity) { // go and dig
            console.log('going to harvest');
            if (worker.memory.lastMine == null) {
                var target = worker.pos.findClosest(FIND_SOURCES_ACTIVE);
                worker.memory.lastMine = target.id;
            } else {
                var target = Game.getObjectById(worker.memory.lastMine);
            }
            if(target) {
                worker.moveTo(target);
                worker.harvest(target);
            }
        } else { // return to spawn
//            worker.memory.lastMine = null;
//            worker.moveTo(Game.spawns.S1);
//            worker.transferEnergy(spawn);
        }
    },

    getRole: function(role) {
        var harvesters = _.filter(Game.creeps, {
            memory: {role: role}
        });
        return harvesters;
    }
}