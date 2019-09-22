import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  en: {
    //Bottom navigation
    scanner: 'Scanner',
    history: 'History',
    lookup: 'Lookup',
    settings: 'Settings',

    //Scanner
    appPermissions:'App Permissions',
    wouldLikeToUse:'QReader would like to use your camera',
    allow:'Allow',
    scannedCode:'Scanned code',
    copiedTo:'Copied to Clipboard',
    share:'Share',
    listen:'Listen',

    //settings
    language:'Language'
  },
  ua:{
    //Bottom navigation
    scanner: 'Cканувати',
    history: 'Історія',
    lookup: 'Lookup',
    settings: 'Налаштування',

    //Scanner
    appPermissions:'Дозволи програми',
    wouldLikeToUse:'QReader - потребує дозволу на використання камери',
    allow:'Надати',
    scannedCode:'Відсканований код',
    copiedTo:'Скопійовано у буферу обміну',
    share:'Поділитися',
    listen:'Прослухати',

    //settings
    language:'Мова'
  },
  de: {
    //Bottom navigation
    scanner: 'Scanner',
    history: 'Geschichte',
    lookup: 'Sieh nach oben',
    settings: 'Einstellungen',

    //Scanner
    appPermissions:'App-Berechtigungen',
    wouldLikeToUse:'QReader möchte Ihre Kamera benutzen',
    allow:'Ermöglichen',
    scannedCode:'Gescannter Code',
    copiedTo:'In die Zwischenablage kopiert',
    share:'Aktie',
    listen:'Hör zu',

    //settings
    language:'Sprache'
  }
});

export default strings;