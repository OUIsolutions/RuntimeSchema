

const {RuntimeSchemaTypeError} =  require("./Exeptions/type_error.js");
const {PrimitiveTypes} = require("./primitive_types");

 let RunTimeSchema = {

    allow_verifiers:false,
    allow_console:false,

    ensure_types(element,types){
        if(!this.allow_verifiers){
            return element;
        }

        function  get_expected_type_name(type){
            let type_of_type_arg = type.constructor.name;
            let type_arg_is_a_string =type_of_type_arg === PrimitiveTypes.string;
            if(type_arg_is_a_string){
                return  type;
            }
            return type_of_type_arg;
        }


        function clojure_ensure_type(type){
            let element_type = element.constructor.name;
            let expected_type_name = get_expected_type_name(type);
            if(element_type !== expected_type_name){
                throw new RuntimeSchemaTypeError(element,expected_type_name);
            }
        }



        let type_of_type_arg = types.constructor.name;
        if(type_of_type_arg !== PrimitiveTypes.array){
            clojure_ensure_type(types);
            return;
        }
        let expected_types = types.map(get_expected_type_name);

        expected_types.forEach((type)=>{
            try{
                clojure_ensure_type(type);
            }catch (error){
                error.message = `The element ${element} is not inside ${expected_types}`
            }
        })

        

    }
}

module.exports = {
    RunTimeSchema,
    PrimitiveTypes
};