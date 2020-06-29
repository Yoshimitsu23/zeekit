export const getApi = (url) => {
    let resp = fetch(url);
    let data = resp.Json();
    console.log(data);

}