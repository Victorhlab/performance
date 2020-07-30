function performanceStart(time) {
    window.performance = window.performance || {};
    time.start = performance.now = (function () {
        return performance.now ||
                performance.mozNow ||
                performance.msNow ||
                performance.oNow ||
                performance.webkitNow ||
                function () {
                    return new Date().getTime();
                };
    })();
}

function performanceEnd(time) {
    time.end = performance.now();
    return time.end-time.start;
}

function performanceTime(time) {
    return time.end-time.start;
}

module.exports.performance = performanceStart;