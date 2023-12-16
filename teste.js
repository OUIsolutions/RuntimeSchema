

const RunTimeSchema  = require("./src/RunTimeSchema").RunTimeSchema;
const PrimitiveTypes =  require("./src/primitive_types.js").PrimitiveTypes;

RunTimeSchema.allow_verifiers = true;
RunTimeSchema.allow_console = true;


RunTimeSchema.ensure_types("aaaa",PrimitiveTypes.string);
