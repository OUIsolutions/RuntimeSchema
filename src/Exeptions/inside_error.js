

class RuntimeSchemaInsideError extends Error{
    constructor(element,expected_inside) {
        super(`the element ${element} is  inside [${expected_inside}]`);
        this.element = element;
        this.expected_inside = expected_inside;
    }
}
module.exports = {RuntimeSchemaInsideError}
