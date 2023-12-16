
class RuntimeSchemaTypeError extends  TypeError{
    constructor(element,expected_type) {
        super(`The element ${element} should be ${expected_type} instead of ${element.constructor.name}`)
        this.name = "RuntimeSchemaTypeError"; // Define o nome do erro
        this.element = element;
        this.expected_type = expected_type;
    }
}

module.exports = {RuntimeSchemaTypeError}
