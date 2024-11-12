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
            seconds: ' secondes',
            minutes: ' minutes',
            hours: ' heures',
            days: ' jours',
            ago: 'il y a '
        },
        en: {
            seconds: ' seconds',
            minutes: ' minutes',
            hours: ' hours',
            days: ' days',
            ago: ''
        },
        it: {
            seconds: ' secondi',
            minutes: ' minuti',
            hours: ' ore',
            days: ' giorni',
            ago: ''
        },
        es: {
            seconds: ' segundos',
            minutes: ' minutos',
            hours: ' horas',
            days: ' días',
            ago: 'Hace '
        }
    };

    var lang = translations[userLang.split('-')[0]] || translations['en'];

    if (diff < 60000) {
        formattedDate = lang.ago + Math.floor(diff / 1000) + lang.seconds;
    } else if (diff < 3600000) {
        formattedDate = lang.ago + Math.floor(diff / 60000) + lang.minutes;
    } else if (diff < 86400000) {
        formattedDate = lang.ago + Math.floor(diff / 3600000) + lang.hours;
    } else {
        formattedDate = lang.ago + Math.floor(diff / 86400000) + lang.days;
    }

    return formattedDate;
}
