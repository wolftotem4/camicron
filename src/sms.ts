import { getElement } from "./dom"
import { SMSMsg } from "./types"

export function send(msg: SMSMsg) {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const separator = iOS ? '&' : '?'
    const link = getElement('link') as HTMLAnchorElement
    link.href = `sms:${msg.number}${separator}body=${encodeURIComponent(msg.body).replace(/%20/g, "+")}`
}
