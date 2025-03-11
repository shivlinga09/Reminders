import { ReminderDatabase } from './reminder';

let reminderDb = new ReminderDatabase();

reminderDb.createReminder("Buy Milk", new Date('2025-03-15T10:00:00'));
reminderDb.createReminder("Doctor Appointment", new Date('2025-03-16T09:00:00'));

console.log("All Reminders:", reminderDb.getAllReminders());

let reminders = reminderDb.getAllReminders();
let firstId = reminders[0].id; 
console.log("\n");

console.log("Get Reminder:", reminderDb.getReminder(firstId));
console.log("\n");
reminderDb.updateReminder(firstId, "Buy Milk and Bread");
console.log("Updated Reminder:", reminderDb.getReminder(firstId));
console.log("\n");

reminderDb.removeReminder(firstId);
console.log("All Reminders after deletion:", reminderDb.getAllReminders());
