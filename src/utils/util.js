/*
    @Description - This function add the query params to the URL
    @Arguments - An object of params, having key value pairs of the params
*/
export const payloadToQueryParams = (payload) => {
    let queryParams = '';

    for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
            queryParams += `&${key}=${payload[key]}`;
        }
    }

    return queryParams.replace('&', '?');
};

/*
    @Description - This function change the first char of the string to uppercase
    @Arguments - A string
*/
export const firstCharUpperCase = (str) => {
    return str.substring(0,1).toUpperCase().concat(str.substring(1, str.length));
}