import {noPost} from "../utils/http/index.js";
export const login = (data) => noPost('getTokenValue',Object.assign(data,{loginFrom:'Mobile'}));

