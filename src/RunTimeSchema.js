

const {RuntimeSchemaTypeError} =  require("./Exeptions/type_error.js");
const {PrimitiveTypes} = require("./primitive_types");

 class  RunTimeSchema{

    constructor(allow_verifiers=true,allow_console=true) {
        this.allow_verifiers = allow_verifiers;
        this.allow_console = allow_console;
    }

    enable(){
        this.allow_verifiers = true;
        this.allow_console = true;
    };

    disable(){
        this.allow_verifiers = false;
        this.allow_console = false;
    };

    log(message){
        if(this.allow_console){
            console.log(message);
        }
    };

    ensure_types(element,types){
        if(!this.allow_verifiers){
            return element;
        }
        let element_type_name = element.constructor.name;

        function  get_expected_type_name(type){
            let type_of_type_arg = type.constructor.name;
            let type_arg_is_a_string =type_of_type_arg === PrimitiveTypes.string;
            if(type_arg_is_a_string){
                return  type;
            }
            return type_of_type_arg;
        }


        let type_of_type_arg = types.constructor.name;
        //means the type arg is like Primitive.string
        let type_arg_is_unique = type_of_type_arg !== PrimitiveTypes.array;
        if(type_arg_is_unique){
            let expected_type_name = get_expected_type_name(types);
            if(element_type_name !== expected_type_name){
                throw new RuntimeSchemaTypeError(element,expected_type_name);
            }
            return;
        }

        //means the type arg is like [Primitive.string,Primitive.number]

        let expected_types = types.map(get_expected_type_name);
        if(!expected_types.includes(element_type_name)){
            throw new RuntimeSchemaTypeError(element,expected_types);

        }


    }



}


module.exports = {
    RunTimeSchema,
    PrimitiveTypes
};