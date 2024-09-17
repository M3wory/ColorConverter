const colorPicker = document.getElementById('color-picker');
const rgbInputs = ['r', 'g', 'b'].map(id => document.getElementById(id));
const rgbSliders = ['r', 'g', 'b'].map(id => document.getElementById(`${id}-slider`));
const cmykInputs = ['c', 'm', 'y', 'k'].map(id => document.getElementById(id));
const cmykSliders = ['c', 'm', 'y', 'k'].map(id => document.getElementById(`${id}-slider`));
const hsvInputs = ['h', 's', 'v'].map(id => document.getElementById(id));
const hsvSliders = ['h', 's', 'v'].map(id => document.getElementById(`${id}-slider`));

function rgbToCmyk(r, g, b) {
    r = r / 255;
    g = g / 255;
    b = b / 255;
    let k = 1 - Math.max(r, g, b);
    let c = (1 - r - k) / (1 - k) || 0;
    let m = (1 - g - k) / (1 - k) || 0;
    let y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100].map(Math.round);
}

function cmykToRgb(c, m, y, k) {
    c = c / 100;
    m = m / 100;
    y = y / 100;
    k = k / 100;
    let r = 255 * (1 - c) * (1 - k);
    let g = 255 * (1 - m) * (1 - k);
    let b = 255 * (1 - y) * (1 - k);
    return [r, g, b].map(Math.round);
}

function rgbToHsv(r, g, b) {
    r = r / 255;
    g = g / 255;
    b = b / 255;
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, v = max;

    let d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
        h = 0;
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, v * 100].map(Math.round);
}

function hsvToRgb(h, s, v) {
    h = h / 360;
    s = s / 100;
    v = v / 100;
    let r, g, b;

    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return [r * 255, g * 255, b * 255].map(Math.round);
}

function updateAllFields(rgb) {
    rgbInputs.forEach((input, i) => {
        input.value = rgb[i];
        rgbSliders[i].value = rgb[i];
    });

    let cmyk = rgbToCmyk(...rgb);
    cmykInputs.forEach((input, i) => {
        input.value = cmyk[i];
        cmykSliders[i].value = cmyk[i];
    });

    let hsv = rgbToHsv(...rgb);
    hsvInputs.forEach((input, i) => {
        input.value = hsv[i];
        hsvSliders[i].value = hsv[i];
    });

    colorPicker.value = `#${rgb.map(x => x.toString(16).padStart(2, '0')).join('')}`;
}

colorPicker.addEventListener('input', (e) => {
    let hex = e.target.value.substring(1);
    let rgb = hex.match(/.{2}/g).map(x => parseInt(x, 16));
    updateAllFields(rgb);
});

rgbInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        let rgb = rgbInputs.map(input => parseInt(input.value));
        updateAllFields(rgb);
    });
});

rgbSliders.forEach((slider, i) => {
    slider.addEventListener('input', () => {
        rgbInputs[i].value = slider.value;
        let rgb = rgbInputs.map(input => parseInt(input.value));
        updateAllFields(rgb);
    });
});

cmykInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        let cmyk = cmykInputs.map(input => parseFloat(input.value));
        let rgb = cmykToRgb(...cmyk);
        updateAllFields(rgb);
    });
});

cmykSliders.forEach((slider, i) => {
    slider.addEventListener('input', () => {
        cmykInputs[i].value = slider.value;
        let cmyk = cmykInputs.map(input => parseFloat(input.value));
        let rgb = cmykToRgb(...cmyk);
        updateAllFields(rgb);
    });
});

hsvInputs.forEach((input, i) => {
    input.addEventListener('input', () => {
        let hsv = hsvInputs.map(input => parseFloat(input.value));
        let rgb = hsvToRgb(...hsv);
        updateAllFields(rgb);
    });
});

hsvSliders.forEach((slider, i) => {
    slider.addEventListener('input', () => {
        hsvInputs[i].value = slider.value;
        let hsv = hsvInputs.map(input => parseFloat(input.value));
        let rgb = hsvToRgb(...hsv);
        updateAllFields(rgb);
    });
});

updateAllFields([255, 255, 255]);
