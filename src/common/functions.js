export const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// generates uniqueID
export const uniqueId = () => {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4();
};

// check singular or plural time for "ago"
export const pluralCheck = s => {
  if (s == 1) {
    return ' ago';
  } else {
    return 's ago';
  }
};

// function to convert timestamp to readable time
export const timeConverter = timestamp => {
  let t = new Date(timestamp * 1000);
  let seconds = Math.floor((new Date() - t) / 1000);

  // check this interval is in years/months/days/hours/minutes?
  // total no of seconds in year are 31536000
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + ' year' + pluralCheck(interval);
  }
  // for months
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' month' + pluralCheck(interval);
  }
  // for days
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' day' + pluralCheck(interval);
  }
  // for hours
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hour' + pluralCheck(interval);
  }
  // for minutes
  interval = Math.ceil(seconds / 60);
  if (interval > 1) {
    return interval + ' minute' + pluralCheck(interval);
  }
  // for seconds
  return Math.floor(seconds) + ' second' + pluralCheck(seconds);
};

export const timeConverterShortened = timestamp => {
  let t = new Date(timestamp * 1000);
  let seconds = Math.floor((new Date() - t) / 1000);

  // check this interval is in years/months/days/hours/minutes?
  // total no of seconds in year are 31536000
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + ' y';
  }

  // for months
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' mo';
  }
  // for days
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' d';
  }
  // for hours
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' h';
  }
  // for minutes
  interval = Math.ceil(seconds / 60);
  if (interval > 1) {
    return interval + ' m';
  }

  // for seconds
  return Math.floor(seconds) + ' s';
};

export const renderRating = (legitVote, fakeVote) => {
  const totalVotes = legitVote + fakeVote;
  const percentage = Math.floor((legitVote / totalVotes) * 100);

  if (legitVote === 0 && fakeVote === 0) {
    return '• ';
  } else if (legitVote === 0 && fakeVote !== 0) {
    return 0;
  } else if (fakeVote === 0 && legitVote !== 0) {
    return 100;
  } else {
    return percentage;
  }
};

export const renderColor = rating => {
  if (rating <= 50) {
    return {color: 'red'};
  } else if (rating >= 80) {
    return {color: 'green'};
  } else if (rating > 50 && rating < 80) {
    return {color: 'orange'};
  } else {
    return {color: 'grey'};
  }
};
