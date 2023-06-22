import axios from "axios";

import config from "../config";

const APIrequest = async ({
    method,
    url,
    baseURL,
    queryParams,
    bodyData,
    formHeaders,
}) => {

    try {

        const axiosConfig = {
            method: method || "GET",
            baseURL: "http://localhost:3001",
            headers: {
                "content-type": "application/json",
                "X-Frame-Options": "sameorigin",
                
            },
        };

        if (formHeaders) {
            axiosConfig.headers = { ...axiosConfig.headers, ...formHeaders };
        }

        if (baseURL) {
            axiosConfig.baseURL = baseURL;
        }

        if (url) {
            axiosConfig.url = url;
        }




        if (queryParams) {

            const queryParamsPayload = {};

            for (const key in queryParams) {
                if (Object.hasOwnProperty.call(queryParams, key)) {
                    let element = queryParams[key];
                    if (typeof element === "string") {
                        element = element.trim();
                    }
                    if (!["", null, undefined, NaN].includes(element)) {
                        queryParamsPayload[key] = element;
                    }
                }
            }
            axiosConfig.params = queryParamsPayload;
        }




        if (bodyData) {
            const bodyPayload = {};
            for (const key in bodyData) {
                if (Object.hasOwnProperty.call(bodyData, key)) {
                    let element = bodyData[key];
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

        // console.log(axiosConfig)
        const res = await axios(axiosConfig);

        return res;

    } catch (error) {
        return error;
    }

};




export default APIrequest;