class Reminder {
  id: string;
  title: string;
  dueDate: Date;

  constructor(title: string, dueDate: Date) {
      this.id = Math.random().toString(36).substr(2, 9); // Generate a unique ID
      this.title = title;
      this.dueDate = dueDate;
  }
}

export class ReminderDatabase {
  reminders = new Map<string, Reminder>(); // Instance property, not static

  createReminder(title: string, dueDate: Date) {
      let reminder = new Reminder(title, dueDate);
      this.reminders.set(reminder.id, reminder);
  }

  exists(id: string) {
      return this.reminders.has(id);
  }

  getAllReminders() {
      return Array.from(this.reminders.values());
  }

  getReminder(id: string) {
      return this.reminders.get(id) || null;
  }

  removeReminder(id: string) {
      this.reminders.delete(id);
  }

  updateReminder(id: string, title?: string, dueDate?: Date) {
      let reminder = this.reminders.get(id);
      if (!reminder) return;
      if (title) reminder.title = title;
      if (dueDate) reminder.dueDate = dueDate;
  }
}
