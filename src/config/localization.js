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
    stop:'Stop',
    openInBrowser:'Open in browser',
    urlNotOpen:'Url is not valid.',
    text:'Text',

    //History
    noScannedBarcode:'No Scanned QR-codes',
    pleaseScanThe:'Please scan the QR code to listen to information encrypted in the QR code.',
    delete:"Delete",

    //settings
    language:'Language',
    speechRate:'Speech Rate'
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
    stop:'Зупинити',
    openInBrowser:'Перейти за посиланням',
    urlNotOpen:'URL-адреса недійсна.',
    text:'Текст',

    //History
    noScannedBarcode:'Немає відсканованих QR-кодів',
    pleaseScanThe:'Будь ласка, скануйте QR-код, щоб прослухати інформацію, зашифровану в QR-коді.',
    delete:"Видалити",
    
    //settings
    language:'Мова',
    speechRate:'Швидкість озвучення'
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
    stop:'Stop',
    openInBrowser:'Im Browser öffnen',
    urlNotOpen:'Der URL ist nicht korrekt.',
    text:'Text',

    //History
    noScannedBarcode:'Keine gescannten QR-Codes',
    pleaseScanThe:'Bitte scannen Sie den QR-Code, um die im QR-Code verschlüsselten Informationen anzuhören.',
    delete:"Löschen",
    
    //settings
    language:'Sprache',
    speechRate:'Sprachrate'
  }
});

export default strings;