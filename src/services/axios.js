import axios from "axios";

const APIrequest = async ({
    bodydata,
    method,
    url,
    baseURL,
    queryParams,
    token = ""
}) => {
    const apiToken = token !== "" ? token : "kladjfiou834759jkyzx89c76y789";
    try {
        const axiosConfig = {
            method: method || "GET",
            baseURL: "http://localhost:5000",
            headers: {
                "content-type": "application/json",
            }
        };
        if (baseURL) {
            axiosConfig.baseURL = baseURL;
        }

        if (url) {
            axiosConfig.url = url;
        }

        if (bodydata) {
            const bodyPayload = {};
            for (const key in bodydata) {
                if (Object.hasOwnProperty.call(bodydata, key)) {
                    let element = bodydata[key];
                    if (typeof element === "string") {
                        element = element.trim();
                    }
                    if (![null, undefined, NaN].includes(element)) {
                        bodyPayload[key] = element;
                    }
                }
            }
            axiosConfig.data = bodyPayload;
        }

        if (token) {
            axiosConfig.headers = {
                ...axiosConfig.headers,
                authorization: `Bearer ${apiToken}`,
            };
        }
        console.log(axiosConfig);
        
        const res = await axios(axiosConfig);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export default APIrequest;