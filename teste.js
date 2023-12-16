

const {RunTimeSchema,PrimitiveTypes}  = require("./src/RunTimeSchema");

RunTimeSchema.enable();

RunTimeSchema.ensure_types(2,[PrimitiveTypes.number,PrimitiveTypes.string]);
