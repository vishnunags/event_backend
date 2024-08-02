const eventDAO = require('../Dao/eventDao');

module.exports = {
    async getAllEvents() {
        try {
            return await eventDAO.getAllEvents();
        } catch (error) {
            throw new Error('Failed to get events: ' + error.message);
        }
    },

    async createRegistration(eventName, name, contact, email) {
        try {
            return await eventDAO.createRegistration(eventName, name, contact, email);
        } catch (error) {
            throw new Error('Failed to create registration: ' + error.message);
        }
    },

    async deleteRegistration(registrationId) {
        try {
            return await eventDAO.deleteRegistration(registrationId);
        } catch (error) {
            throw new Error('Failed to delete registration: ' + error.message);
        }
    },
};
