

const {RunTimeSchema,PrimitiveTypes}  = require("./src/RunTimeSchema");

RunTimeSchema.allow_verifiers = true;
RunTimeSchema.allow_console = true;


RunTimeSchema.ensure_types(2,PrimitiveTypes.string);
