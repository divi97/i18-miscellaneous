"use strict";

module.exports = (app) => {
    app.use('/api/GetName', require('./api/getName'))
    app.use('/api/GetValue', require('./api/getValue'))
    app.use('/api/getDebounceData', require('./api/debounceData'))
}
