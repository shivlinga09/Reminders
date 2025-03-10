// index.ts

import { ReminderDatabase } from './remainder';

const reminderDb = new ReminderDatabase();

// Create some reminders
reminderDb.createReminder("1", "Buy Milk", "Don't forget to buy milk at the store.", new Date('2025-03-15T10:00:00'));
reminderDb.createReminder("2", "Doctor Appointment", "Check-up with Dr. Smith.", new Date('2025-03-16T09:00:00'));

// Get all reminders
console.log(reminderDb.getAllReminders());

// Get a specific reminder
console.log(reminderDb.getReminder("1"));

// Update a reminder
reminderDb.updateReminder("1", "Buy Milk and Bread", "Don't forget to buy milk and bread at the store.");
console.log(reminderDb.getReminder("1"));

// Remove a reminder
reminderDb.removeReminder("2");
console.log(reminderDb.getAllReminders());
