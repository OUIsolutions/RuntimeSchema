

const {RunTimeSchema,PrimitiveTypes}  = require("./src/RunTimeSchema");

RunTimeSchema.enable();

RunTimeSchema.ensure_types(true,[PrimitiveTypes.number,PrimitiveTypes.string]);
