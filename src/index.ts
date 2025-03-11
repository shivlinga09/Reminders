import { ReminderDatabase } from './reminder';

let reminderDb = new ReminderDatabase();

reminderDb.createReminder("Buy Milk", new Date('2025-03-15T10:00:00'));
reminderDb.createReminder("Doctor Appointment", new Date('2025-03-16T09:00:00'));
reminderDb.createReminder("Gym", new Date()); // Due today

console.log("All Reminders:", reminderDb.getAllReminders());

let firstId = reminderDb.getAllReminders()[0].id;

reminderDb.markReminderAsCompleted(firstId);
console.log("Completed Reminders:", reminderDb.getAllRemindersMarkedAsCompleted());

reminderDb.unmarkReminderAsCompleted(firstId);
console.log("Not Completed Reminders:", reminderDb.getAllRemindersNotMarkedAsCompleted());

console.log("Reminders Due Today:", reminderDb.getAllRemindersDueByToday());

reminderDb.removeReminder(firstId);
console.log("All Reminders after deletion:", reminderDb.getAllReminders());
