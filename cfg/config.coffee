### Configuration file - Set your Shapeways/App specific variables here ###

# Shapeways Login/Pass (required)
exports.SHAPEWAYS_USERNAME = process.env.SHAPEWAYS_USERNAME || ''
exports.SHAPEWAYS_PASSWORD = process.env.SHAPEWAYS_PASSWORD || ''

# Shapeways Application ID (optional)
exports.SHAPEWAYS_APPLICATION_ID = process.env.SHAPEWAYS_APPLICATION_ID || ''

# Shapeways API Server to use
exports.API_SERVER = process.env.API_SERVER || 'shapeways.com'
