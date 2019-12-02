export const getHash = (input) => {
    let hash = 0;
    const len = input.length;
    for (let i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
    return hash;
}

export const updateArrayItem = (array, item, key = 'sync_id') => {
    const result = [...array];
    const index = result.findIndex(i => i[key] === item[key]);
    if(index !== -1) result[index] = {...result[index], ...item};
    return result;
};