

const {RuntimeSchemaTypeError} =  require("./Exeptions/type_error.js");
const {PrimitiveTypes} = require("./primitive_types");

 let RunTimeSchema = {

    allow_verifiers:false,
    allow_console:false,
    enable(){
        this.allow_verifiers = true;
        this.allow_console = true;
    },

    disable(){
        this.allow_verifiers = false;
        this.allow_console = false;
    },


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


        function clojure_ensure_type(expected_type_name){
            if(element_type_name !== expected_type_name){
                throw new RuntimeSchemaTypeError(element,expected_type_name);
            }
        }



        let type_of_type_arg = types.constructor.name;
        let type_arg_is_unique = type_of_type_arg !== PrimitiveTypes.array;
        if(type_arg_is_unique){
            let expected_type_name = get_expected_type_name(types);
            clojure_ensure_type(expected_type_name);
            return;
        }

        let expected_types = types.map(get_expected_type_name);
        let generated_error;
        expected_types.forEach((type_name)=>{
            if(generated_error){
                return;
            }

            try{
                clojure_ensure_type(type_name);
            }catch (error){
                generated_error = error;
                generated_error.message = `The element ${element} is not inside ${expected_types}`
            }
        })




    }
}

module.exports = {
    RunTimeSchema,
    PrimitiveTypes
};