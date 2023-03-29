"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(description, deadLine, createdAt, category) {
        this._description = description;
        this._isCompleted = false;
        this._category = category;
        this._created_at = createdAt;
        this._deadLine = deadLine;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get deadLine() {
        return this._deadLine;
    }
    set deadLine(deadline) {
        this._deadLine = deadline;
    }
    get createdDate() {
        return this._created_at;
    }
    set createdDate(crd) {
        this._created_at = crd;
    }
    get category() {
        return this._category;
    }
    set category(c) {
        this._category = c;
    }
    get comptedTask() {
        return this._isCompleted;
    }
    completeItem() {
        this._isCompleted = true;
    }
}
exports.TodoItem = TodoItem;
//# sourceMappingURL=TodoItem.js.map