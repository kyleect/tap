"use strict";
class ChainableClass {
    constructor() {
        this.value = 0;
    }
    set(value) {
        this.value = value;
        return this;
    }
    get() {
        return this.value;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChainableClass;
//# sourceMappingURL=ChainableClass.js.map