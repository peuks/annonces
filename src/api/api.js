/**
 * BaseUrl
 * @return URL
 * @eg  http://localhost:8000/api | https://apollo-immo.fr:8000/api
 */
const baseUrl =
  !process.env.REACT_APP_NODE_ENV || process.env.REACT_APP_NODE_ENV === "dev"
    ? process.env.REACT_APP_BASE_URL_DEV
    : process.env.REACT_APP_BASE_URL_PROD;

//properties
const properties = "properties";

export const propertiesUrl = () => `${baseUrl}/${properties}`;
export const propertysUrl = (id) => `${baseUrl}/${properties}/${id}`;
