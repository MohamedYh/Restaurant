export function priceFormat(s: string) {
    const dotIndex = s.indexOf(".");
    var afterDot = s.slice(dotIndex);
    if (afterDot.length == 2) {
        afterDot += "0";
    }
    return s.slice(0, dotIndex) + afterDot;
}

export function ElementsShuffler(arr: Array<any>) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
