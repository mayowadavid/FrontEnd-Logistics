const baseUrl=  "https://backend-logistics.herokuapp.com"
export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`
}
