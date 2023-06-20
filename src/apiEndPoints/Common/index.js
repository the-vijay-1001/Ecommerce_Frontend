import config from "../../config";

const Common = {
    media : (mediaType,mediaFor)=>`${config.API_BASE_URL}/media/upload/${mediaType}/${mediaFor}`
}

export default Common;