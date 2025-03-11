import { ReminderDatabase } from './reminder';

let reminderDb = new ReminderDatabase();

reminderDb.createReminder("Buy Milk", new Date('2025-03-15T10:00:00'));
reminderDb.createReminder("Doctor Appointment", new Date('2025-03-16T09:00:00'));
reminderDb.createReminder("Gym", new Date()); // Due today

console.log("All Reminders:\n", reminderDb.getAllReminders());

let firstId = reminderDb.getAllReminders()[0].id;
let secondId = reminderDb.getAllReminders()[1].id;
let thirdId = reminderDb.getAllReminders()[2].id;

reminderDb.markReminderAsCompleted(firstId);
reminderDb.markReminderAsCompleted(secondId);
console.log("\nCompleted Reminders:(marked 1st and 2nd)\n", reminderDb.getAllRemindersMarkedAsCompleted());

reminderDb.unmarkReminderAsCompleted(secondId);
console.log("\nNot Completed Reminders:(unmarked 2nd)\n", reminderDb.getAllRemindersNotMarkedAsCompleted());

console.log("\nReminders Due Today:", reminderDb.getAllRemindersDueByToday());

reminderDb.removeReminder(thirdId);
console.log("\nAll Reminders after deletion:(removed 3rd)\n", reminderDb.getAllReminders());
