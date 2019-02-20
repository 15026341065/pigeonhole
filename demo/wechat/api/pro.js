import {post} from "../utils/http/index";

export const proList = (data) => post('getGoodsList', data);
