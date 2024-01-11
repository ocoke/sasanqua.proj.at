import requestIp from 'request-ip'
import { getIp } from '../cache/getIp'
// import geoip from 'geoip-lite'

export async function getGeoIp(req) {
    const ip = requestIp.getClientIp(req)
    const geo = await getIp(ip) || {}
    return geo
}
