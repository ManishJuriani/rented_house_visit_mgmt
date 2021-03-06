const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const consts = require("../static/constants");

const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level}: ${message}`;
});

let logger = createLogger({
	levels: {
		error: 0,
		warn: 1,
		info: 2,
		debug :4,
		test: 3
	},
	format: combine(
		label({ label: consts.SERVICE_NAME }),
		timestamp(),
		myFormat
	),
	transports: [new transports.Console()]
});

logger.level = "info";
module.exports = logger;