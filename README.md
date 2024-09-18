# Color Converter Documentation

## Overview

The **Color Converter** web application allows users to convert colors between RGB, CMYK, and HSV color models. It offers the ability to manually adjust colors via sliders and numerical inputs, as well as select colors through a built-in **Color Palette** tool.

## Main Interface Elements

### 1. Color Palette
- Located at the top of the page.
- A square button displaying the current color in HEX format.
- Clicking the button opens the system color picker. Once a color is selected, the RGB, CMYK, and HSV values update automatically.

### 2. RGB Section
- Controls for adjusting Red (R), Green (G), and Blue (B) channels.
- Each channel has a numerical input (range: 0 to 255) and a slider for visual adjustment.
- Changing RGB values automatically recalculates and updates the corresponding CMYK and HSV values.

### 3. CMYK Section
- Controls for adjusting Cyan (C), Magenta (M), Yellow (Y), and Black (K) components.
- Each component has a numerical input (range: 0 to 100) and a slider for visual adjustment.
- Changing CMYK values automatically recalculates and updates the corresponding RGB and HSV values.

### 4. HSV Section
- Controls for adjusting Hue (H), Saturation (S), and Value (V).
- The numerical input for Hue accepts values from 0 to 360, while Saturation and Value range from 0 to 100.
- Changing HSV values automatically updates the corresponding RGB and CMYK values.

## Key Features

### Selecting a Color via the Palette
1. Click the square palette button at the top of the page.
2. Choose a color using the system’s color picker.
3. The selected color will be converted into RGB, CMYK, and HSV, with the numerical values and sliders updating accordingly.

### Manually Adjusting Values
- To manually change a color, use either the numerical input fields or sliders for any of the color models (RGB, CMYK, HSV).
- When one model's value is updated, the other models are automatically recalculated to maintain color consistency.

## Limitations
- Values are restricted to the following ranges for each color model:
  - **RGB**: 0 to 255.
  - **CMYK**: 0 to 100.
  - **HSV**: Hue from 0 to 360, Saturation and Value from 0 to 100.
- The system’s color picker outputs a HEX code, which is then converted to RGB, followed by conversion to CMYK and HSV.

---

This web application provides a user-friendly interface for precise color conversion and manipulation, allowing flexibility in selecting and adjusting colors across different models.
https://m3wory.github.io/ColorConverter/
