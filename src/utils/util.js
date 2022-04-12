export const payloadToQueryParams = (payload) => {
    let queryParams = '';

    for (const key in payload) {
        // eslint-disable-next-line no-prototype-builtins
        if (payload.hasOwnProperty(key)) {
            queryParams += `&${key}=${payload[key]}`;
        }
    }

    return queryParams.replace('&', '?');
};

export const firstCharUpperCase = (str) => {
    return str.substring(0,1).toUpperCase().concat(str.substring(1, str.length));
}