export class TodoItem {
    private _description: string;
    private _isCompleted: boolean;
    private _deadLine: Date;
    private _created_at: Date;
    private _category: string;

    constructor(description: string, deadLine: Date, createdAt: Date, category: string) {
        this._description = description;
        this._isCompleted = false;
        this._category = category;
        this._created_at = createdAt;
        this._deadLine = deadLine;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get deadLine(): Date {
        return this._deadLine;
    }

    set deadLine(deadline: Date) {
        this._deadLine = deadline;
    }

    get createdDate(): Date {
        return this._created_at;
    }

    set createdDate(crd: Date) {
        this._created_at = crd;
    }

    get category(): string {
        return this._category;
    }

    set category(c: string) {
        this._category = c;
    }

    get comptedTask(): boolean {
        return this._isCompleted;
    }

    uncompleteItem() {
        this._isCompleted = false;
    }

    updateDescription(newDescription: string) {
        this._description = newDescription;
    }

    completeItem() {
        this._isCompleted = true;
    }
}