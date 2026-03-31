# AI4BNT Lab Website - Modular Structure

This website has been refactored into a modular structure for easy maintenance and customization. Each component can be edited independently.

## 📁 File Structure

```
AI4BNT/
├── index.html                 # Main HTML file (clean & modular)
├── css/
│   ├── main.css              # All component styles
│   ├── animations.css        # Keyframe animations
│   └── responsive.css        # Mobile responsive styles
├── js/
│   ├── navigation.js         # Header & menu functionality
│   ├── scroll.js            # Smooth scroll & scroll-to-top
│   ├── submissions.js       # Form & submission management
│   ├── animations.js        # Scroll effects & toggle cards
│   └── brain-animation.js   # 3D rotating brain visualization
└── README.md                 # This file
```

## 🎨 CSS Files

### `css/main.css` - Main Styles
Contains all component styling organized by sections:
- **Header & Navigation** - Logo, menu, hamburger
- **Hero Section** - Banner and CTA buttons
- **About Section** - Stats and content
- **Research Section** - Research cards
- **Team Section** - Team member profiles (alternating layout)
- **Projects Section** - Project showcases
- **Publications Section** - Publication listings
- **Contact & Submissions** - Forms and submission display
- **Footer** - Footer content and links
- **Scroll to Top Button** - Fixed button styling

### `css/animations.css` - Animation Definitions
Keyframe animations used throughout the site:
- `slideInDown` - Elements sliding down
- `slideInUp` - Elements sliding up
- `fadeIn` - Fade in effect
- `slideDown` - Expand from top
- `rotateBrain` - 3D brain rotation
- `floatBrain` - Floating animation

### `css/responsive.css` - Mobile Responsive
Media query styles for screens ≤768px width:
- Navigation hamburger menu
- Hero section adjustments
- Grid layout changes
- Team layout modifications
- Submissions grid

## 📝 HTML Structure

### `index.html` - Main HTML File
Clean HTML with external CSS/JS references:
- 7 main sections + header/footer
- Form fields for contact & submissions
- All content can be edited directly in HTML
- Easy to add/remove sections

**To Edit Content:**
1. Open `index.html` in your text editor
2. Find the section you want to edit (e.g., `<section id="about">`)
3. Modify the text, titles, or structure
4. Save and refresh browser

## 🔧 JavaScript Files

### `js/navigation.js` - Navigation & Menu
Handles hamburger menu toggle and smooth closing.

**Edit if:**
- You want to change menu behavior
- Add animation to hamburger icon

### `js/scroll.js` - Smooth Scrolling
Handles smooth scroll navigation and scroll-to-top button.

**Edit if:**
- You want to adjust scroll speed
- Change scroll-to-top trigger position (currently 300px)

### `js/submissions.js` - Form Submissions
Manages contact form submissions with localStorage.

**Functions:**
- `saveSubmission()` - Save form data
- `getSubmissions()` - Retrieve saved submissions
- `displaySubmissions()` - Show submissions on page
- `deleteSubmission()` - Remove a submission
- `clearAllSubmissions()` - Delete all submissions
- `downloadSubmissions()` - Export as JSON
- `handleSubmit()` - Process form submission
- `escapeHtml()` - Prevent security issues

**Edit if:**
- You want to change form fields
- Modify storage location/method
- Adjust form validation

### `js/animations.js` - Scroll Effects
Handles element animations on scroll and card toggles.

**Edit if:**
- You want to change animation timing
- Modify card toggle behavior
- Change animation threshold

### `js/brain-animation.js` - 3D Brain Animation
Creates rotating 3D brain visualization on hero.

**Edit if:**
- You want to change particle count (currently 200)
- Modify rotation speed
- Change particle colors
- Adjust canvas size

## 🎯 How to Customize

### Change Colors
Edit CSS variables in `css/main.css` (lines 7-15):
```css
:root {
    --primary-color: #5f1eaf;      /* Purple */
    --secondary-color: #03221f;    /* Dark green */
    --accent-color: #f59e0b;       /* Gold */
    /* ... more colors ... */
}
```

### Edit Team Members
In `index.html`, find the team section and edit:
```html
<div class="team-member">
    <div class="member-image">👨‍🔬</div>
    <div class="member-info">
        <div class="member-name">Dr. Name</div>
        <div class="member-role">Position</div>
        <div class="member-bio">Bio text</div>
    </div>
</div>
```

### Add New Section
1. Add HTML in `index.html`
2. Create CSS styles in `css/main.css`
3. Add responsive styles in `css/responsive.css`
4. Add any JavaScript in appropriate JS file

### Change Fonts
Edit font-family in `css/main.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

## 📱 Responsive Breakpoint

Current breakpoint: **768px**
- Screens smaller than 768px use mobile styles
- Navigation becomes hamburger menu
- Grids become single column
- Larger text becomes smaller

## 🧠 Brain Animation Details

The 3D brain is made of 200 particles:
- **Colors:** #ff6b9d, #ffa502, #7b68ee, #00d4ff, #ff1493, #00ff00
- **Location:** Hero section using HTML5 Canvas
- **Performance:** Optimized for smooth 60fps animation

To modify:
- Particle count: Change `200` in `js/brain-animation.js`
- Colors: Modify the `colors` array
- Rotation speed: Adjust `rotation += 0.005` value

## 💾 Data Storage

Submissions are stored in browser's **localStorage**:
- Key: `ai4bnt_submissions`
- Format: JSON array
- Persists after page refresh
- Cleared when browser data is cleared

## 🚀 Performance Tips

- All CSS is external (better caching)
- JavaScript files are imported at end (faster page load)
- Animations use CSS transforms (GPU accelerated)
- Intersection Observer for efficient animations
- Canvas animation uses requestAnimationFrame

## 📞 Contact Form Fields

Required fields:
- Name
- Email
- Message

Optional fields:
- Topic
- GitHub Profile / Website

## ✅ Checklist for Updates

- [ ] Edit HTML content
- [ ] Update CSS colors/fonts if needed
- [ ] Modify JavaScript behavior if needed
- [ ] Test on mobile (768px, 480px)
- [ ] Check form submission
- [ ] Verify all links work
- [ ] Test scroll functionality

## 🐛 Troubleshooting

**Brain animation not showing:** Check `js/brain-animation.js` and canvas ID

**Form not saving:** Check browser's localStorage isn't disabled

**Mobile menu not working:** Verify hamburger button HTML structure

**Styles not applying:** Check CSS file paths relative to HTML

## 📞 Support

For any questions about the structure or customization, refer to individual file comments.
