// reminderDatabase.ts

class Reminder {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public dueDate: Date
    ) {}
  }
  
  export class ReminderDatabase {
    private reminders: Reminder[] = [];
  
    // Creates a new reminder and stores it
    createReminder(id: string, title: string, description: string, dueDate: Date): void {
      if (this.exists(id)) {
        throw new Error(`Reminder with ID ${id} already exists.`);
      }
      const newReminder = new Reminder(id, title, description, dueDate);
      this.reminders.push(newReminder);
    }
  
    // Checks if a reminder exists by its id
    exists(id: string): boolean {
      return this.reminders.some(reminder => reminder.id === id);
    }
  
    // Returns all reminders stored so far
    getAllReminders(): Reminder[] {
      return this.reminders;
    }
  
    // Returns a specific reminder by id, or null if not found
    getReminder(id: string): Reminder | null {
      const reminder = this.reminders.find(reminder => reminder.id === id);
      return reminder || null;
    }
  
    // Removes a reminder by its id
    removeReminder(id: string): void {
      const index = this.reminders.findIndex(reminder => reminder.id === id);
      if (index === -1) {
        throw new Error(`Reminder with ID ${id} not found.`);
      }
      this.reminders.splice(index, 1);
    }
  
    // Updates an existing reminder by id
    updateReminder(
      id: string,
      newTitle?: string,
      newDescription?: string,
      newDueDate?: Date
    ): void {
      const reminder = this.getReminder(id);
      if (!reminder) {
        throw new Error(`Reminder with ID ${id} not found.`);
      }
  
      if (newTitle) {
        reminder.title = newTitle;
      }
      if (newDescription) {
        reminder.description = newDescription;
      }
      if (newDueDate) {
        reminder.dueDate = newDueDate;
      }
    }
  }
  