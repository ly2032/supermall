import {request,datarequest} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return datarequest({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
