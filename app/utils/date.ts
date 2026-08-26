    //south african only , dont need to check other timezones
    export const dateDayMonthYear = new Date().toLocaleDateString("en-ZA", {
        timeZone: "Africa/Johannesburg",
        day: "2-digit",
        month: "short",
        year: "numeric",
    });