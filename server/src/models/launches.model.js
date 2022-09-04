const launches = new Map();

let lastFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);

function addNewLaunch(input) {
    launches.set(++lastFlightNumber, Object.assign(input, {
        success: true,
        upcoming: true,
        customer: ['From Software', 'NASA'],
        flightNumber: lastFlightNumber
    }));
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function existsFlight(id) {
    return launches.has(id);
}

function abortLaunch(id) {
    id = parseInt(id);
    if (existsFlight(id)) {
        launches.get(id).success = false;
        launches.get(id).upcoming =false;
        return launches.get(id);
    }
}

module.exports = {
    addNewLaunch,
    getAllLaunches,
    existsFlight,
    abortLaunch,
};