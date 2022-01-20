import { getElement } from "./dom";

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

function newUploadInput(): HTMLInputElement {
    const input = document.createElement('input')
    input.type = "file"
    input.id = "file"
    input.capture = "environment"
    input.accept = "image/*"
    return input
}

async function fileToImage(file: File): Promise<ImageData> {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
            URL.revokeObjectURL(img.src)
            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0)
            resolve(ctx.getImageData(0, 0, img.width, img.height))
        }
        img.onerror = function (err) {
            reject(err)
        }
        img.src = URL.createObjectURL(file)
    })
}

export function initUploadBtn(btn: HTMLInputElement, callback: (image: ImageData) => void) {
    btn.addEventListener('change', () => {
        if (btn.files?.length) {
            fileToImage(btn.files[0]).then(img => {
                callback(img)
            })
        }

        btn.replaceWith(btn = newUploadInput())
        initUploadBtn(btn, callback)
    }, {once: true})
}

export function showErrMsg() {
    const div = getElement('access-error') as HTMLDivElement
    div.classList.remove('hide')
}
