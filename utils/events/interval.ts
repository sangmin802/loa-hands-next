export function interval(t, cb) {
  const intervalArr = [];

  function startInterval(args) {
    cb(args);
    const interval = setInterval(() => cb(args), t * 1000);
    intervalArr.push(interval);
    return interval;
  }

  function endInterval() {
    intervalArr.forEach(interval => clearInterval(interval));
  }

  return { startInterval, endInterval };
}
