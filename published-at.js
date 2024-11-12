// For each <time> element with class 'published_at'
document.querySelectorAll('time.published-at').forEach(function(element) {

    // Get the date from the element
    var date = new Date(element.getAttribute('data-published-at'));

    // Format the date found
    if (date) {
        var publishedAt = formatPublishedAt(date);
        element.textContent = publishedAt;
    } 

});

/**
 * We format the date in text.
 */
function formatPublishedAt(date) {
    var now = new Date();
    var diff = now - date;

    var userLang = navigator.language || navigator.userLanguage;

    var translations = {
        fr: {
            second: ' seconde',
            seconds: ' secondes',
            minute: ' minute',
            minutes: ' minutes',
            hour: ' heure',
            hours: ' heures',
            day: ' jour',
            days: ' jours',
            ago: 'il y a '
        },
        en: {
            second: ' second',
            seconds: ' seconds',
            minute: ' minute',
            minutes: ' minutes',
            hour: ' hour',
            hours: ' hours',
            day: ' day',
            days: ' days',
            ago: ''
        },
        it: {
            second: ' secondo',
            seconds: ' secondi',
            minute: ' minuto',
            minutes: ' minuti',
            hour: ' ora',
            hours: ' ore',
            day: ' giorno',
            days: ' giorni',
            ago: ''
        },
        es: {
            second: ' segundo',
            seconds: ' segundos',
            minute: ' minuto',
            minutes: ' minutos',
            hour: ' hora',
            hours: ' horas',
            day: ' día',
            days: ' días',
            ago: 'Hace '
        }
    };

    var lang = translations[userLang.split('-')[0]] || translations['en'];

    if (diff < 60000) {
        var seconds = Math.floor(diff / 1000);
        formattedDate = lang.ago + seconds + (seconds === 1 ? lang.second : lang.seconds);
    } else if (diff < 3600000) {
        var minutes = Math.floor(diff / 60000);
        formattedDate = lang.ago + minutes + (minutes === 1 ? lang.minute : lang.minutes);
    } else if (diff < 86400000) {
        var hours = Math.floor(diff / 3600000);
        formattedDate = lang.ago + hours + (hours === 1 ? lang.hour : lang.hours);
    } else {
        var days = Math.floor(diff / 86400000);
        formattedDate = lang.ago + days + (days === 1 ? lang.day : lang.days);
    }

    return formattedDate;
}
