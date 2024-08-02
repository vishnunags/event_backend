const express = require('express');
const router = express.Router();
const eventService = require('../service/eventService');

// Get all events
router.get('/events', async (req, res) => {
    try {
        const events = await eventService.getAllEvents();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Register for an event
router.post('/register', async (req, res) => {
    const { eventName, name, contact, email } = req.body;
    try {
        const registrationId = await eventService.createRegistration(eventName, name, contact, email);
        res.status(201).json({ id: registrationId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a registration (if needed)
router.delete('/registrations/:id', async (req, res) => {
    const registrationId = req.params.id;
    try {
        const success = await eventService.deleteRegistration(registrationId);
        if (success) {
            res.status(200).json({ message: 'Registration deleted successfully' });
        } else {
            res.status(404).json({ message: 'Registration not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
