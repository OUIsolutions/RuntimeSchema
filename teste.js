

const {createRunTimeSchema,PrimitiveTypes}  = require("./src/RunTimeSchema");

let my_schema = createRunTimeSchema();


my_schema.ensure_types(true,[PrimitiveTypes.number,PrimitiveTypes.string]);
