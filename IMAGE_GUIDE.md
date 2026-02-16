# 📸 Image Integration Guide

## Folder Structure
```
public/
└── images/
    ├── food/         # Food menu item images
    └── categories/   # Category icon images
```

## Image Naming Convention

### Food Menu Images
Name your images to match the menu items:
```
burger-classic.jpg
burger-cheese.jpg
burger-veggie.jpg
pizza-margherita.jpg
pizza-pepperoni.jpg
pizza-hawaiian.jpg
sushi-california.jpg
sushi-salmon.jpg
pasta-carbonara.jpg
pasta-bolognese.jpg
cake-chocolate.jpg
cake-cheese.jpg
juice-fresh.jpg
smoothie-berry.jpg
salad-caesar.jpg
salad-greek.jpg
```

### Category Images
Name your images for each category:
```
burgers.jpg
pizza.jpg
sushi.jpg
pasta.jpg
desserts.jpg
drinks.jpg
salads.jpg
all.jpg (optional - for "All" category)
```

## Recommended Image Specifications

### Food Menu Images
- **Format**: JPG or PNG
- **Size**: 800x800px (square) or 800x600px (landscape)
- **File size**: Under 200KB for faster loading
- **Quality**: High quality, well-lit food photography

### Category Images
- **Format**: JPG or PNG
- **Size**: 400x400px (square)
- **File size**: Under 100KB
- **Style**: Clean, simple icons or representative food images

## After Adding Images

Once you've copied your images to the folders, let me know and I'll:
1. Update `FoodMenu.jsx` to use real images instead of emojis
2. Update `Categories.jsx` to use real images instead of emojis
3. Add proper image loading and error handling
4. Optimize the image display

## Quick Steps

1. ✅ Copy your images to `public/images/food/` and `public/images/categories/`
2. ✅ Make sure image names match the convention above (or tell me your naming)
3. ✅ Let me know when ready, and I'll update the code!

## Example Usage (After Update)

The images will be accessed like:
```javascript
// Food items
image: '/images/food/burger-classic.jpg'

// Categories
icon: '/images/categories/burgers.jpg'
```
