# OCR Image Classifier

A powerful web-based tool for automatically classifying images using Optical Character Recognition (OCR) with Tesseract.js. This tool extracts text from images and automatically categorizes them based on configurable keyword rules.

## Features

### 🖼️ **Image Processing**
- **Multi-format Support**: Upload images in various formats (PNG, JPG, JPEG, etc.)
- **Batch Processing**: Process multiple images simultaneously
- **High-Quality OCR**: Powered by Tesseract.js for accurate text extraction

### 🌍 **Multi-Language OCR Support**
- **English + Traditional Chinese** (default)
- **English only**
- **Traditional Chinese only**
- **Japanese**
- **Korean**
- **French**
- **German**
- **Spanish**

### 🏷️ **Smart Classification**
- **Custom Rules**: Create classification rules with keywords and colors
- **Automatic Categorization**: Images are automatically classified based on extracted text
- **Visual Indicators**: Color-coded classifications for easy identification
- **Real-time Updates**: Classification updates as you modify rules

### 🔍 **Interactive Features**
- **Word Highlighting**: Click on extracted words to highlight them on the image
- **Zoom & Pan**: Navigate through images with mouse wheel zoom and drag pan
- **Bounding Boxes**: Visual representation of detected text regions
- **Accordion View**: Expandable list of all extracted words

### 📊 **Export & Analysis**
- **CSV Export**: Download classification results in CSV format
- **Batch Results**: Process and export results for multiple images
- **Status Tracking**: Monitor processing status for each image

## How to Use

### 1. **Upload Images**
- Click "Upload Images" to select one or more image files
- Images will be automatically queued for OCR processing
- Processing status is displayed on each thumbnail

### 2. **Configure Classification Rules**
- **Add New Rule**: Click "Add New Rule" to create a new classification
- **Keywords**: Enter comma-separated keywords that trigger classification
- **Colors**: Choose a color for each classification category
- **Priority**: Rules are processed in order (first match wins)

### 3. **Monitor Processing**
- Watch real-time progress as images are processed
- Status indicators show: "queued", "processing...", "classifying...", "done", or "error"
- Classified images display their category and color

### 4. **Interact with Results**
- **Select Images**: Click thumbnails to view full-size images
- **Explore Text**: Use the accordion to view all extracted words
- **Highlight Words**: Click on words to highlight their bounding boxes
- **Navigate**: Use mouse wheel to zoom, drag to pan

### 5. **Export Results**
- Click "Download CSV" to export all classifications
- CSV includes: Image Name, Classification, Extracted Text

## Classification Rules

### **Default Rules**
The tool comes with two example rules:
- **Invoice**: Keywords: `invoice,bill,receipt` (Red)
- **Contract**: Keywords: `agreement,contract,terms` (Blue)

### **Creating Custom Rules**
1. Click "Add New Rule"
2. Enter a descriptive name (e.g., "Receipt", "Form", "Letter")
3. Add comma-separated keywords that appear in that document type
4. Choose a distinctive color
5. Rules are automatically applied to all images

### **Keyword Tips**
- Use specific, unique terms for better accuracy
- Include variations and synonyms
- Avoid overly common words
- Test with sample images to refine rules

## Technical Details

### **OCR Engine**
- **Tesseract.js**: WebAssembly port of Google's Tesseract OCR engine
- **Worker-based**: Non-blocking OCR processing
- **Language Models**: Pre-trained models for multiple languages

### **Performance**
- **Parallel Processing**: Multiple images processed simultaneously
- **Memory Efficient**: Images processed in chunks
- **Progress Tracking**: Real-time status updates

### **Browser Compatibility**
- Modern browsers with WebAssembly support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers may have performance limitations

## Use Cases

### **Document Management**
- Automatically categorize invoices, receipts, contracts
- Organize scanned documents by type
- Batch process large document collections

### **Data Extraction**
- Extract text from forms and surveys
- Process handwritten notes and documents
- Analyze image-based content

### **Quality Assurance**
- Verify document types match expected content
- Identify misclassified documents
- Monitor document processing workflows

## Tips for Best Results

### **Image Quality**
- Use high-resolution images (300+ DPI)
- Ensure good contrast between text and background
- Avoid blurry or skewed images
- Use consistent lighting

### **Keyword Selection**
- Start with specific, unique terms
- Test rules with sample images
- Refine keywords based on results
- Consider document context

### **Language Selection**
- Choose the primary language of your documents
- Use multi-language option for mixed content
- Consider regional variations in text

## Troubleshooting

### **Common Issues**

**OCR Not Working**
- Check browser console for errors
- Ensure images are valid and not corrupted
- Try refreshing the page and re-uploading

**Poor Classification Accuracy**
- Review and refine keyword rules
- Check image quality and text clarity
- Verify language selection matches document language

**Slow Processing**
- Reduce image resolution if possible
- Process fewer images simultaneously
- Check browser performance settings

### **Performance Optimization**
- Close other browser tabs
- Use modern, fast browsers
- Ensure stable internet connection
- Process images in smaller batches

## Browser Requirements

- **WebAssembly Support**: Required for Tesseract.js
- **Modern JavaScript**: ES6+ features
- **Memory**: Sufficient RAM for image processing
- **Storage**: Local storage for user preferences

## Privacy & Security

- **Local Processing**: All OCR processing happens in your browser
- **No Upload**: Images are not sent to external servers
- **Temporary Storage**: Images are stored only during the session
- **Data Export**: Only processed results are exported

## Future Enhancements

- **Machine Learning**: Improved classification accuracy
- **Template Matching**: Visual pattern recognition
- **Cloud Processing**: Option for server-side processing
- **API Integration**: Connect with external document systems
- **Advanced Export**: PDF reports and detailed analytics

---

**Version**: 1.0  
**Last Updated**: 2025  
**License**: Open Source  
**Contributors**: PDF Toolbox Team
