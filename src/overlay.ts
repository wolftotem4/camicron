import { getElement } from "./dom";

export function showOverlay(toggle = true) {
    const list = getElement('overlay')?.classList;
    (toggle) ? list?.remove('hide') : list?.add('hide')
}
