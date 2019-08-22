import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  en: {
    //Bottom navigation
    scanner: 'Scanner',
    tasks: 'Tasks',
    lookup: 'Lookup',
    profile: 'Profile'
  },
  de: {
    //Bottom navigation
    scanner: 'Scanner',
    tasks: 'Aufgaben',
    lookup: 'Sieh nach oben',
    profile: 'Profil'
  }
});

export default strings;