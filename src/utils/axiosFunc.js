import axios from "axios";
const KEY = "15871594-e6aabc3dbb9db4d877f262370";

const get = (query, page = 1) => {
  const response = axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};

export default get;
