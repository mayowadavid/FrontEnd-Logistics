const baseUrl= location.hostName === "localhost" ? "http://localhost:4000" : "https://backend-logistics.herokuapp.com/"
export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`
}
