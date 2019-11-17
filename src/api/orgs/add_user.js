"use strict";
// Require async modules
let mongoMod = require("./db/mongo");

// Require constants
let {
    NO_ZONES_FOUND_ERR
} = require("./const/err");


// Initialising mongo collections
let mongoUsersCollection = null,

    mongoOrgsCollection = null,
    mongoZonesCollection = null;

mongoMod.then(collections => {
    let {usersCollection, orgsCollection, zonesCollection} = collections;

    mongoUsersCollection = usersCollection;

    mongoOrgsCollection = orgsCollection;
    mongoZonesCollection = zonesCollection;
});

/**
 * Implementation of orgs:getZones api method
 *
 * @param {String} orgId
 * @returns {Object}
 */
async function getZones(orgId) {
    let {zones} = await getZones1(orgId);

    if (!zones) {
        return NO_ZONES_FOUND_ERR;
    }

    return {res: 0, zones};
}

/**
 * Adds
 *
 * @param {String} orgId
 * @returns {Object|Boolean}
 */
async function addUserToOrg(orgId) {
    let dbRes = await mongoZonesCollection.find({oid: orgId}).toArray();

    if (!dbRes.length) {
        return false;
    }

    return {zones: dbRes};
}

module.exports = getZones;