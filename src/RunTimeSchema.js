

const {RuntimeSchemaTypeError} =  require("./Exeptions/type_error.js");


 let RunTimeSchema = {

    allow_verifiers:false,
    allow_console:false,

    ensure_types(element,type){
        if(!this.allow_verifiers){
            return element;
        }

        let element_type = element.constructor.name;
        let expected_type_name = type;
        let type_of_type_arg = type.constructor.name;
        let type_arg_is_a_class =type_of_type_arg !== 'String';

        if(type_arg_is_a_class){
            expected_type_name = type;
        }
        if(element_type !== expected_type_name){

        }



    }
}

module.exports = {
    RunTimeSchema
};