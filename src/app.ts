import { initUploadBtn, showErrMsg } from "./alternative"
import { attachCameraStream, getCamera, scan, scanImage } from "./camera"
import { getElement } from "./dom"
import { showOverlay } from "./overlay"

/** extermine if camera preview is able to be embeded in the webpage */
let embeddable = false

/** scan QR Code every once in a while */
let timer: NodeJS.Timer

function startScan() {
    if (embeddable) {
        timer = setInterval(() => {
            scan(() => { clearInterval(timer) })
        }, 100)
    }
}

function scanMore() {
    showOverlay(false)
    startScan()
}

getCamera()
    .then(attachCameraStream)
    .then(() => {
        embeddable = true
    })
    .then(startScan)
    .catch(error => {
        showErrMsg()
        if (error.name == "NotFoundError") {
            return
        }
        return Promise.reject(error)
    })

getElement("scan")?.addEventListener('click', scanMore)

initUploadBtn(getElement("file") as HTMLInputElement, (image) => {
    scanImage(image).catch(() => {
        alert('無法解析 QR Code. 請重新嘗試.\nUnable to decode QR code.  Please try again')
    })
})
