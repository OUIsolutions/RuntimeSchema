
class RuntimeSchemaTypeError extends  TypeError{
    constructor(element,expected_type_name) {
        super(`The element ${element} should be ${expected_type_name} instead of ${element.constructor.name}`)
        this.name = "RuntimeSchemaTypeError"; // Define o nome do erro
        this.element = element;
        this.expected_type_name = expected_type_name;
    }
}

module.exports = {RuntimeSchemaTypeError}
