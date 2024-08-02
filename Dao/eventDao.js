const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = {
    async getAllEvents() {
        try {
            const [rows] = await pool.query('SELECT * FROM events');
            return rows;
        } catch (error) {
            throw error;
        }
    },

    async createRegistration(eventName, name, contact, email) {
        try {
            const [result] = await pool.query(
                'INSERT INTO registrations (event_name, name, contact, email) VALUES (?, ?, ?, ?)',
                [eventName, name, contact, email]
            );
            return result.insertId;
        } catch (error) {
            throw error;
        }
    },

    async deleteRegistration(registrationId) {
        try {
            const [result] = await pool.query('DELETE FROM registrations WHERE id = ?', [registrationId]);
            return result.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    },

    // Optionally, you can add a method to get all registrations for an event
    async getRegistrationsByEvent(eventId) {
        try {
            const [rows] = await pool.query('SELECT * FROM registrations WHERE event_id = ?', [eventId]);
            return rows;
        } catch (error) {
            throw error;
        }
    }
};
