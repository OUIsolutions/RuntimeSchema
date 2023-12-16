
class RuntimeSchemaTypeError extends  TypeError{
    constructor(element,expected_types) {
        let type_of_expected_types = expected_types.constructor.name;
        let element_type_name = element.constructor.name;
        if( type_of_expected_types === 'String'){
            let expected_type_name = expected_types;
            super(`The element ${element} should be ${expected_type_name} instead of ${element_type_name}`)
            this.expected_type_name = expected_type_name;
            this.expected_types = [expected_type_name];
        }

        if(type_of_expected_types  === 'Array'){
            super(`The element ${element} of type ${element_type_name} is not inside [${expected_types}]`)
            this.expected_type_name = undefined;
            this.expected_types = expected_types;
        }

        this.element_type_name = element_type_name;
        this.name = "RuntimeSchemaTypeError"; // Define o nome do erro
        this.element = element;

    }
}

module.exports = {RuntimeSchemaTypeError}
