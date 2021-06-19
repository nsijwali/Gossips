export const timeStampConverter = (stamp) => {
	let unix_timestamp = stamp;
	// Create a new JavaScript Date object based on the timestamp
	// multiplied by 1000 so that the argument is in milliseconds, not seconds.
	let date = new Date(unix_timestamp * 1000);
	// Hours part from the timestamp
	let hours = date.getHours();
	let prefix = hours >= '12' ? 'PM' : 'AM';
	// Minutes part from the timestamp
	let minutes = '0' + date.getMinutes();
	// Seconds part from the timestamp
	let seconds = '0' + date.getSeconds();
	hours = hours % 12;
	hours = hours ? hours : 12;
	// Will display time in 10:30:23 format
	let formattedTime = hours + ':' + minutes.substr(-2) + ' ' + prefix;

	if (isToday(stamp) === true) {
		return formattedTime;
	} else {
		return isToday(stamp);
	}
};

const isToday = (someDate) => {
	const today = new Date();
	let date = new Date(someDate * 1000);

	switch (true) {
		case date.getDate() == today.getDate() &&
			date.getMonth() == today.getMonth() &&
			date.getFullYear() == today.getFullYear():
			return true;
			break;
		case date.getDate() == today.getDate() - 1:
			return 'yesterday';
			break;
		case true:
			return dateConverter(someDate);
			break;
	}
};

export const dateConverter = (stamp) => {
	let unix_timestamp = stamp;
	// Create a new JavaScript Date object based on the timestamp
	// multiplied by 1000 so that the argument is in milliseconds, not seconds.
	let date = new Date(unix_timestamp * 1000);
	let newDate =
		date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	return newDate;
};
