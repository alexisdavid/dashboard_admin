
import Request from '../utils/http'
const request = new Request()

const fetchNextData=async(url, params) =>{
const response = await request.get(url,params)
console.log("🚀 ~ file: fetchNextData.js ~ line 7 ~ fetchNextData ~ response", response)
    if (response && response.statusCode===200){
        return response.result.data;
    }
}
export default  fetchNextData