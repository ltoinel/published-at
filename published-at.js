/**
 * This script is used to format the date of publication of an article.
 * The date is displayed in text format (eg. 5 minutes ago) in the language of the user.
 * 
 * The date is formatted in the following way:
 * - less than 1 minute: X seconds ago
 * - less than 1 hour: X minutes ago
 * - less than 1 day: X hours ago
 * - less than 1 year: X days ago
 * - more than 1 year: X years ago
 * 
 * @author : Ludovic Toinel
 * @version : 1.0
 * @license : MIT   
 */

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
        year: ' an',
        years: ' ans',
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
        year: ' year',
        years: ' years',
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
        year: ' anno',
        years: ' anni',
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
        year: ' año',
        years: ' años',
        ago: 'Hace '
    }
};

/**
 * We format the date in text.
 * @param {Date} date - The date to format.
 */
function formatPublishedAt(date) {

    var now = new Date();
    var diff = now - date;
    var lang = getTranslation();

    if (diff < 60000) {
        var seconds = Math.floor(diff / 1000);
        formattedDate = lang.ago + seconds + (seconds === 1 ? lang.second : lang.seconds);
    } else if (diff < 3600000) {
        var minutes = Math.floor(diff / 60000);
        formattedDate = lang.ago + minutes + (minutes === 1 ? lang.minute : lang.minutes);
    } else if (diff < 86400000) {
        var hours = Math.floor(diff / 3600000);
        formattedDate = lang.ago + hours + (hours === 1 ? lang.hour : lang.hours);
    } else if (diff < 31536000000) {
        var days = Math.floor(diff / 86400000);
        formattedDate = lang.ago + days + (days === 1 ? lang.day : lang.days);
    } else {
        var years = Math.floor(diff / 31536000000);
        formattedDate = lang.ago + years + (years === 1 ? lang.year : lang.years);
    }

    return formattedDate;
}

/**
 * We get the translation for the current language.
 */
function getTranslation() {

    var userLang = navigator.language || navigator.userLanguage;
    var language = userLang.split('-')[0];

    // If the language is not supported, we use the default language
    if (!translations[language]) {
        language = 'en';
    }

    return translations[language];
}

/**
 * Find all the elements with the class 'published_at' and format the date.
 */
function publishedAt() {
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
}

// Let start
publishedAt()
