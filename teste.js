

const {RunTimeSchema,PrimitiveTypes}  = require("./src/RunTimeSchema");

let my_schema = new RunTimeSchema();

my_schema.ensure_types(true,[PrimitiveTypes.number,PrimitiveTypes.string]);
