# Images Editor

A powerful and user-friendly web-based image editing application that allows you to apply various filters and effects to your images in real-time. Built with vanilla JavaScript and the HTML5 Canvas API.

## 📋 Overview

This is a lightweight image editor that lets you upload images and apply professional-quality filters without needing heavy software. All processing happens in your browser with instant visual feedback.

## ✨ Features

✅ **Upload Images** - Load images from your device in any format (JPG, PNG, GIF, etc.)  
✅ **7 Powerful Filters** - Apply multiple filters simultaneously  
✅ **Real-Time Preview** - See changes instantly as you adjust sliders  
✅ **Saturate** - Enhance or reduce color intensity (0-200%)  
✅ **Contrast** - Adjust image contrast levels (0-200%)  
✅ **Brightness** - Control image brightness (0-200%)  
✅ **Sepia** - Apply vintage sepia tone effect (0-200%)  
✅ **Grayscale** - Convert to black and white (0-100%)  
✅ **Blur** - Add blur effect to soften the image (0-10px)  
✅ **Hue-Rotate** - Shift color spectrum (0-360 degrees)  
✅ **Reset All** - Restore original image with one click  
✅ **Download** - Save edited images to your device  
✅ **No Installation** - Works directly in your browser  

## 📁 Project Structure

```
project-folder/
├── index.html        # Main HTML file with layout and controls
├── main.js           # JavaScript file with image editing logic
├── style.css         # Stylesheet for styling
└── README.md         # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations or software required

### How to Run

1. **Download or clone** all project files
2. **Place files** in the same folder:
   - `index.html`
   - `main.js`
   - `style.css`
3. **Double-click** `index.html` to open in your browser
   - OR right-click → Open with → Choose your browser

That's it! The application is ready to use.

## 📖 How to Use

### Step 1: Upload an Image

1. Click the **"Upload"** button
2. Select an image from your computer (JPG, PNG, GIF, WebP, etc.)
3. The image appears in the preview area
4. The editor controls become active

### Step 2: Apply Filters

Adjust any filter slider to see real-time changes:

**Saturate** (0-200%)
- 0% = Completely desaturated (grayscale)
- 100% = Original colors
- 200% = Highly saturated, vibrant colors

**Contrast** (0-200%)
- 0% = Flat, no contrast
- 100% = Original contrast
- 200% = High contrast, dark darks and light lights

**Brightness** (0-200%)
- 0% = Completely black
- 100% = Original brightness
- 200% = Very bright, washed out

**Sepia** (0-200%)
- 0% = No sepia effect
- 50% = Moderate vintage look
- 200% = Extreme sepia tone

**Grayscale** (0-1.0)
- 0 = Full color
- 0.5 = Half grayscale, half color
- 1.0 = Complete black and white

**Blur** (0-10px)
- 0px = Sharp image
- 5px = Moderate blur
- 10px = Heavy blur effect

**Hue-Rotate** (0-360°)
- 0° = Original colors
- 90° = Colors rotated 90° on color wheel
- 180° = Inverted colors
- 360° = Back to original

### Step 3: Combine Multiple Filters

You can apply all filters together to create unique effects:
- Example: Increase brightness + add sepia + reduce saturation = Old photo effect
- Example: Increase contrast + increase saturation + add blur = Artistic effect

### Step 4: Reset Filters

Click **"Reset"** to:
- Restore all sliders to default positions
- Remove all applied effects
- Return to original image appearance

### Step 5: Download Your Image

1. Once you're happy with your edits, click **"Download"**
2. The edited image is saved to your Downloads folder
3. Image is saved as "image" (add .png or .jpg extension as needed)

## 🔧 Technical Details

### HTML Structure (index.html)

**Image Container:**
- `img` element for displaying uploaded image
- `canvas` element for processing and rendering filters

**Upload Section:**
- File input for selecting images

**Filters Section:**
- Range sliders for each filter control
- Labels for each filter
- Reset button to restore defaults
- Download link to save edited image

### JavaScript Functionality (main.js)

**Key DOM Elements:**
```javascript
saturate, contrast, brightness, sepia, grayscale, blur, huerotate
upload, download, img, reset, canvas, ctx
```

**Core Functions:**

| Function | Purpose |
|----------|---------|
| `resetvalue()` | Resets all filter values to defaults |
| `upload.onchange` | Handles image file upload |
| `img.onload` | Sets canvas dimensions and draws image |
| `filter.addEventListener` | Applies filters in real-time |
| `download.onclick` | Prepares image for download |

**Filter Application Process:**
```javascript
// Canvas context applies all filters
ctx.filter = `
  saturate(${saturate.value}%)
  contrast(${contrast.value}%)
  brightness(${brightness.value}%)
  sepia(${sepia.value}%)
  grayscale(${grayscale.value})
  blur(${blur.value}px)
  hue-rotate(${huerotate.value}deg)
`
// Redraw image with filters
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
```

### HTML5 Canvas API

The application uses Canvas API features:
- **getContext('2d')** - Get 2D drawing context
- **drawImage()** - Draw image on canvas
- **filter property** - Apply CSS filters to canvas context
- **toDataURL()** - Convert canvas to downloadable image

### CSS Styling (style.css)

- Container layout with image and filter sections
- Range slider styling
- Upload and download button styling
- Canvas styling for image display
- Responsive layout design

## 🎨 Filter Effects Guide

### Common Filter Combinations

**Old Photo Effect:**
- Saturate: 50%
- Brightness: 110%
- Sepia: 80%
- Contrast: 80%

**High Contrast Black & White:**
- Grayscale: 1.0
- Contrast: 150%
- Brightness: 110%

**Artistic/Dreamy:**
- Brightness: 120%
- Saturate: 80%
- Blur: 2-3px
- Hue-Rotate: 30-60°

**Cool Tone:**
- Hue-Rotate: 180°
- Saturation: 120%
- Contrast: 110%

**Warm Tone:**
- Hue-Rotate: 30°
- Saturate: 110%
- Brightness: 105%

## 💾 How Download Works

1. Canvas captures all filter effects applied to the image
2. `toDataURL()` converts canvas to a data URL
3. Data URL is set as download link href
4. Clicking "Download" saves the image with filters applied

## ⚠️ Current Limitations

⚠️ **Image Size** - Very large images may be slow to process  
⚠️ **File Format** - Downloaded image format may vary by browser  
⚠️ **No Undo Stack** - Cannot undo individual filter changes  
⚠️ **No Custom Presets** - Cannot save filter settings for reuse  
⚠️ **No Crop/Rotate** - Only filter editing, no transformations  
⚠️ **Limited Filters** - 7 filters available (can add more)  
⚠️ **No Layers** - Single layer editing only  
⚠️ **Filename** - Downloaded as generic "image" name  

## 🌐 Browser Compatibility

✅ Chrome/Chromium (Full support)  
✅ Firefox (Full support)  
✅ Safari (Full support)  
✅ Edge (Full support)  
✅ Opera (Full support)  
✅ Mobile Browsers (iOS Safari, Chrome Mobile)  

**Note:** Canvas filter support requires modern browsers (2020+)

## 🎯 Supported Image Formats

**Upload:**
- JPG/JPEG
- PNG
- GIF
- WebP
- BMP
- TIFF

**Download:**
- PNG (recommended for quality)
- JPG (compressed)
- Format depends on browser implementation

## 📝 Technical Notes

- **Filter Application** - All filters applied using CSS filter syntax on canvas context
- **Performance** - Real-time filtering may be slower on very large images (2000+ pixels)
- **Canvas Dimensions** - Automatically matches uploaded image dimensions
- **Image Display** - Original image hidden, canvas used for display
- **Value Ranges** - Each filter has optimized min/max values for best results

## 💡 Future Enhancement Ideas

1. **Additional Filters**
   - Invert colors
   - Opacity control
   - Shadow/highlight adjustment
   - Color curves

2. **Image Manipulation**
   - Crop tool
   - Rotate image
   - Flip horizontal/vertical
   - Resize image

3. **Presets & Saving**
   - Save filter presets
   - Load saved presets
   - Preset library (Instagram-style filters)

4. **Advanced Features**
   - Undo/redo history
   - Multiple layers
   - Drawing tools
   - Text overlay

5. **User Experience**
   - Before/after comparison
   - Keyboard shortcuts
   - Drag-and-drop upload
   - Batch processing

6. **File Management**
   - Custom filename for download
   - Multiple format options (PNG/JPG/WebP)
   - Quality slider for JPEG
   - Metadata preservation

7. **Performance**
   - Worker threads for large images
   - Progressive processing
   - Lazy loading

8. **Sharing**
   - Social media share buttons
   - QR code generation
   - Cloud storage integration

## 🔐 Privacy

All image processing happens locally in your browser. Images are never uploaded to external servers or shared with anyone. Your images remain completely private.

## 📄 License

Free to use and modify for personal or educational purposes.

## 👨‍💻 Author(Mostafa Sayed)

Created as an image editing learning project using Canvas API.

## 🚀 Tips for Best Results

1. **Start with good lighting** - Original image quality affects final result
2. **Make small adjustments** - Extreme values may create harsh effects
3. **Combine filters wisely** - Some combinations work better than others
4. **Test on different images** - Different images respond differently to filters
5. **Use reset button** - If you get lost, reset and start over
6. **Save multiple versions** - Download images at different filter levels

---

**Happy editing!** 🎨🖼️
