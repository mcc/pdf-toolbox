# Form Alignment & Checkbox Extraction

A sophisticated web-based tool for aligning form images and extracting checkbox regions using advanced computer vision techniques. Built with OpenCV.js, this tool provides precise image registration and automated checkbox detection for form processing workflows.

## Features

### 🔍 **Advanced Image Processing**
- **OpenCV.js Integration**: Professional-grade computer vision algorithms
- **Multi-format Support**: Process PNG, JPG, JPEG, and other image formats
- **High-Precision Alignment**: Sub-pixel accuracy for form registration
- **Real-time Processing**: Interactive ROI selection and adjustment

### 📐 **Form Alignment**
- **Template Matching**: Find and align target forms using base image references
- **Feature Detection**: ORB (Oriented FAST and Rotated BRIEF) keypoint matching
- **Affine Transformation**: Robust geometric transformation for alignment
- **Manual Override**: Interactive region selection for complex cases

### ☑️ **Checkbox Extraction**
- **JSON-based Configuration**: Define checkbox locations and properties
- **Batch Processing**: Extract multiple checkboxes simultaneously
- **Visual Preview**: See extracted checkbox regions with labels
- **ZIP Export**: Download selected checkboxes as individual images

### 🎯 **Interactive ROI Management**
- **Dynamic Selection**: Click and drag to define regions of interest
- **Resize Handles**: Adjust ROI boundaries with precision
- **Visual Feedback**: Real-time preview of selected regions
- **Export/Import**: Save and load ROI configurations

## How to Use

### 1. **Prepare Your Files**
- **Base Image**: A reference form image with known checkbox positions
- **Checkbox JSON**: JSON file defining checkbox coordinates and labels
- **Target Image**: The form image to be aligned and processed

### 2. **Upload Base Image & JSON**
- Upload your base form image
- Upload the checkbox definition JSON file
- The tool will automatically calculate the initial ROI

### 3. **Adjust ROI (Region of Interest)**
- **Interactive Selection**: Click and drag to adjust the ROI rectangle
- **Resize**: Use corner and edge handles to fine-tune dimensions
- **Visual Feedback**: See the selected region highlighted on the image

### 4. **Upload Target Image**
- Upload the form image you want to process
- The tool will automatically find and align the target region
- Alignment uses template matching and feature detection

### 5. **Review & Export**
- **Checkbox List**: View all detected checkboxes with thumbnails
- **Selection**: Choose which checkboxes to export
- **Download**: Export selected checkboxes as a ZIP file

## File Formats

### **Image Files**
- **Supported Formats**: PNG, JPG, JPEG, BMP, TIFF
- **Resolution**: High-resolution images recommended (300+ DPI)
- **Quality**: Clear, well-lit images for best results

### **JSON Configuration**
```json
[
  {
    "type": "checkbox",
    "label": "Checkbox Label",
    "box_2d": [y1, x1, y2, x2]
  }
]
```

**JSON Structure**:
- `type`: Must be "checkbox" for checkbox elements
- `label`: Human-readable label for the checkbox
- `box_2d`: Array of 4 coordinates [top, left, bottom, right]

## Advanced Features

### **Manual Alignment**
- **Use Manual Region**: Override automatic detection with manual selection
- **Debug Canvas**: Visual debugging of alignment process
- **Search Region**: Adjustable search area for template matching

### **Export Options**
- **ROI & JSON Export**: Save current configuration for reuse
- **Checkbox Images**: Individual PNG files for each selected checkbox
- **Batch Processing**: Process multiple forms with the same configuration

### **Debug Tools**
- **Visual Debugging**: See search regions and match results
- **Status Updates**: Real-time processing information
- **Error Handling**: Graceful fallbacks for failed alignments

## Technical Architecture

### **Computer Vision Pipeline**
1. **Image Loading**: Convert uploaded images to OpenCV matrices
2. **ROI Calculation**: Determine region of interest from checkbox data
3. **Template Matching**: Find target region in new image
4. **Feature Detection**: Extract ORB keypoints for precise alignment
5. **Transformation**: Apply affine transformation for alignment
6. **Checkbox Extraction**: Crop and save individual checkbox regions

### **Key Algorithms**
- **Template Matching**: TM_CCOEFF_NORMED for region detection
- **ORB Features**: Fast, rotation-invariant keypoint detection
- **Affine Transformation**: 2D geometric transformation matrix
- **ROI Operations**: Efficient image region extraction

### **Performance Optimizations**
- **WebAssembly**: Fast OpenCV.js execution
- **Memory Management**: Efficient matrix operations
- **Parallel Processing**: Non-blocking image operations
- **Progressive Loading**: Real-time status updates

## Use Cases

### **Form Processing**
- **Survey Forms**: Extract checkbox responses from scanned surveys
- **Application Forms**: Process application checkboxes and selections
- **Assessment Forms**: Extract test answer selections
- **Registration Forms**: Process registration checkboxes

### **Document Digitization**
- **Paper Forms**: Convert paper forms to digital data
- **Historical Documents**: Process legacy form documents
- **Batch Processing**: Handle large volumes of similar forms
- **Quality Control**: Verify form completion and accuracy

### **Data Entry Automation**
- **OCR Integration**: Combine with text recognition tools
- **Database Population**: Automatically populate databases from forms
- **Workflow Automation**: Streamline form processing pipelines
- **Compliance Checking**: Verify required form fields

## Best Practices

### **Image Preparation**
- **Consistent Lighting**: Use uniform lighting for all images
- **High Resolution**: Capture images at 300+ DPI
- **Good Contrast**: Ensure clear distinction between elements
- **Minimal Distortion**: Avoid skewed or warped images

### **ROI Configuration**
- **Adequate Padding**: Include sufficient margin around checkboxes
- **Consistent Positioning**: Maintain similar layouts across forms
- **Clear Boundaries**: Ensure ROI encompasses all relevant elements
- **Test Coverage**: Verify ROI covers all expected checkbox positions

### **JSON Structure**
- **Descriptive Labels**: Use clear, meaningful checkbox names
- **Coordinate Accuracy**: Ensure precise coordinate measurements
- **Validation**: Verify JSON format and structure
- **Version Control**: Track changes to checkbox configurations

## Troubleshooting

### **Common Issues**

**Alignment Failures**
- Check image quality and similarity
- Verify ROI covers sufficient area
- Ensure consistent form layouts
- Try manual region selection

**Missing Checkboxes**
- Verify JSON coordinates are correct
- Check ROI boundaries include all checkboxes
- Ensure checkbox definitions match form layout
- Review coordinate system (y1,x1,y2,x2)

**Poor Image Quality**
- Improve lighting and contrast
- Increase image resolution
- Reduce image compression
- Use consistent scanning settings

### **Performance Issues**
- **Slow Processing**: Reduce image resolution
- **Memory Errors**: Process smaller images
- **Browser Crashes**: Close other tabs and applications
- **Alignment Timeouts**: Check image similarity and quality

## Browser Requirements

### **Technical Requirements**
- **WebAssembly Support**: Required for OpenCV.js
- **Modern Browser**: Chrome 67+, Firefox 60+, Safari 11+
- **Sufficient Memory**: 4GB+ RAM recommended
- **Fast Processor**: Multi-core CPU for optimal performance

### **Compatibility**
- **Desktop**: Full feature support
- **Tablet**: Limited functionality
- **Mobile**: Not recommended for large images
- **Legacy Browsers**: Not supported

## Security & Privacy

### **Data Handling**
- **Local Processing**: All processing occurs in your browser
- **No Upload**: Images are not sent to external servers
- **Temporary Storage**: Data exists only during the session
- **Secure Export**: Only processed results are exported

### **File Safety**
- **Image Privacy**: Your form images remain private
- **No Tracking**: No user behavior monitoring
- **Local Storage**: All data stored locally
- **Secure Export**: Safe download of processed results

## Future Enhancements

### **Planned Features**
- **Machine Learning**: AI-powered checkbox detection
- **Cloud Processing**: Server-side processing options
- **API Integration**: Connect with external systems
- **Advanced Analytics**: Processing statistics and insights

### **Algorithm Improvements**
- **Deep Learning**: Neural network-based detection
- **Multi-scale Processing**: Handle various image sizes
- **Real-time Processing**: Live video stream support
- **3D Alignment**: Handle perspective distortions

---

**Version**: 1.0  
**Last Updated**: 2025  
**License**: Open Source  
**Contributors**: PDF Toolbox Team  
**Technology**: OpenCV.js, WebAssembly, Computer Vision
