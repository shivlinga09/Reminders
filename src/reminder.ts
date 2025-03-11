class Reminder {
    id: string;
    title: string;
    dueDate: Date;
    completed: boolean;

    constructor(title: string, dueDate: Date) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.title = title;
        this.dueDate = dueDate;
        this.completed = false;
    }
}

export class ReminderDatabase {
    reminders = new Map<string, Reminder>();

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

    markReminderAsCompleted(id: string) {
        let reminder = this.reminders.get(id);
        if (reminder) reminder.completed = true;
    }

    unmarkReminderAsCompleted(id: string) {
        let reminder = this.reminders.get(id);
        if (reminder) reminder.completed = false;
    }

    getAllRemindersMarkedAsCompleted() {
        return Array.from(this.reminders.values()).filter(r => r.completed);
    }

    getAllRemindersNotMarkedAsCompleted() {
        return Array.from(this.reminders.values()).filter(r => !r.completed);
    }

    getAllRemindersDueByToday() {
        let today = new Date();
        return Array.from(this.reminders.values()).filter(r => {
            return (
                r.dueDate.getFullYear() === today.getFullYear() &&
                r.dueDate.getMonth() === today.getMonth() &&
                r.dueDate.getDate() === today.getDate()
            );
        });
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
