export const getHash = (input) => {
    let hash = 0;
    const len = input.length;
    for (let i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
    return hash;
}

export const language = [{label: 'English', value: 'en', key: 'en'}, {label: 'Deutsch', value: 'de', key: 'de'}, {label: 'Українська', value: 'ua', key: 'ua'}];

export const chooseLanguage = (lang) => {
  let language = 'en-US';
  switch (lang) {      
    case 'en': language = 'en-US';
    break;
    case 'ua': language = 'uk-UA';
    break
    case 'de': language = 'de-DE';
    break;
  }
  return language;
}


export const isValidURL = (string) => {
  // eslint-disable-next-line no-useless-escape
  const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

export const updateArrayItem = (array, item, key = 'sync_id') => {
    const result = [...array];
    const index = result.findIndex(i => i[key] === item[key]);
    if(index !== -1) result[index] = {...result[index], ...item};
    return result;
};