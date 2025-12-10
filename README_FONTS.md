# 🎨 Fonts Configuration - Inno Towers

## ✅ Current Setup: Google Fonts via CSS

This project uses **Google Fonts loaded via CSS** for optimal performance and zero build errors.

### Fonts Used:
- **Inter** - Body text and UI elements
- **Montserrat** - Paragraphs and descriptions
- **Abril Fatface** - Headings and titles
- **Nunito Sans** - Alternative body text
- **EB Garamond** - Serif text
- **Fraunces Light** - Display serif for body text
- **Fraunces 900** - Hero heading (bold)
- **Poiret One** - Navbar navigation
- **Niconne** - Script headings on apartments page (NEW!)

---

## 🔧 How It Works

### 1. Fonts are loaded in `app/layout.js`:
```jsx
<link 
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Abril+Fatface&family=Nunito+Sans:wght@300;800&family=EB+Garamond:ital,wght@0,400;0,500;1,500&display=swap" 
  rel="stylesheet" 
/>
```

### 2. Font utilities in `app/styles/fonts.js`:
```javascript
import { inter, montserrat, abrilFatface } from './styles/fonts';

// Usage:
<h1 className={abrilFatface.className}>Title</h1>
<p style={montserrat.style}>Description</p>
```

### 3. CSS classes in `app/globals.css`:
```css
.font-inter { font-family: 'Inter', sans-serif; }
.font-montserrat { font-family: 'Montserrat', sans-serif; }
.font-abril { font-family: 'Abril Fatface', serif; }
```

---

## ✨ Benefits

✅ **No build errors** - Fonts load at runtime, not build time  
✅ **No downloads needed** - Google CDN handles everything  
✅ **Fast loading** - Google's optimized CDN  
✅ **Auto caching** - Browser caches fonts automatically  
✅ **Easy updates** - Just change the CSS link  

---

## 🔄 Adding New Fonts

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select your font and weights
3. Copy the `<link>` tag
4. Add to `app/layout.js` in the `<head>` section
5. Add font utility to `app/styles/fonts.js`
6. Add CSS class to `app/globals.css`

---

## 🚨 Troubleshooting

**Issue: Fonts not loading**
- Check internet connection
- Verify Google Fonts is not blocked
- Check browser console for errors

**Issue: Fonts look different**
- Clear browser cache
- Check font weights are loaded correctly

---

## 📝 Note

This approach was chosen to avoid build-time font download errors that occurred with Next.js `next/font/google` when network connectivity was unreliable.

