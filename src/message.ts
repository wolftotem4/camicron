import { SMSMsg } from "./types"

export function matchMsg(msg: string): SMSMsg {
    let match: RegExpMatchArray|null
    if (match = msg.match(/^SMSTO:(\d+):(.+)$/)) {
        return {
            number: match[1],
            body: match[2],
        }
    }
    throw new Error("unexpected msg pattern")
}
