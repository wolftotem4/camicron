import { scanImageData } from "zbar.wasm"
import { getElement } from "./dom"
import { matchMsg } from "./message"
import { showOverlay } from "./overlay"
import { send } from "./sms"

export const canvas = getElement('canvas') as HTMLCanvasElement
export const video = getElement('video') as HTMLVideoElement

export async function scan(callback?: () => void) {
    const image = screenshot()
    if (image) {
        scanImage(image, callback, true)
    }
}

export async function scanImage(image: ImageData, callback?: () => void, ignoreUndetected = false) {
    const res = await scanImageData(image)
    if (res.length) {
        const msg = matchMsg(res[0].decode())
        msg.number == '1922' && send(msg)
        showOverlay()
        callback?.()
    } else if (! ignoreUndetected) {
        throw new Error("unable to decode QR code")
    }
}

export function screenshot(): ImageData|null {
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext("2d")?.drawImage(video, 0, 0)
    return canvas.getContext("2d")?.getImageData(0, 0, canvas.width, canvas.height) || null
}

export function attachCameraStream(stream: MediaProvider): Promise<void> {
    return new Promise((resolve, reject) => {
        const video = getElement('video') as HTMLVideoElement
        video.srcObject = stream
        video.classList.remove("hide")
        video.onloadedmetadata = () => { video.play(); resolve() }
        video.onerror = () => { reject() }
    })
}

export async function getCamera(): Promise<MediaStream> {
    return await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { exact: "environment" } } })
}
