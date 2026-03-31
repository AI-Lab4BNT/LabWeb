# 📝 Complete Content Editing Guide

## 🎯 Quick Navigation to Edit Everything

Your website has been redesigned with a side navigation. Here's exactly how to edit every part:

---

## 📸 Image Slider Setup

### Where to Add Images
1. Create a folder named `LAB` in your project root: `c:\Users\user\Desktop\AI4BNT\LAB\`
2. Add your images: `img1.jpg`, `img2.jpg`, `img3.jpg`, `img4.jpg`
3. Images should be at least 1200x700px for best quality

### Edit Slider Images
**File:** `index.html` (Lines 43-50)

```html
<!-- Change image file names here -->
<img src="LAB/img1.jpg" alt="Lab 1" class="slider-image active">
<img src="LAB/img2.jpg" alt="Lab 2" class="slider-image">
<img src="LAB/img3.jpg" alt="Lab 3" class="slider-image">
<img src="LAB/img4.jpg" alt="Lab 4" class="slider-image">
```

💡 **Tips:**
- Add more images by copying the `<img>` line
- Slider dots and controls will auto-generate
- Images fade in/out automatically every 5 seconds
- Manual controls: Left/Right arrow buttons

---

## 🏷️ Navigation Menu (Side Bar)

### Edit Nav Items & Title
**File:** `index.html` (Lines 14-32)

```html
<aside class="side-nav" id="sideNav">
    <div class="nav-header">
        <h2>AI LAB FOR<br>NETWORK<br>THERAPEUTICS</h2>
    </div>
    <ul class="nav-menu">
        <li><a href="#home" onclick="smoothScroll(event)">HOME</a></li>
        <li><a href="#career" onclick="smoothScroll(event)">CAREER</a></li>
        <li><a href="#research" onclick="smoothScroll(event)">RESEARCH</a></li>
        <li><a href="#software" onclick="smoothScroll(event)">SOFTWARE</a></li>
        <li><a href="#people" onclick="smoothScroll(event)">PEOPLE</a></li>
        <li><a href="#news" onclick="smoothScroll(event)">NEWS</a></li>
    </ul>
</aside>
```

### To Add a New Navigation Item:
1. Add new section ID in HTML (e.g., `id="events"`)
2. Add new menu item in nav:
   ```html
   <li><a href="#events" onclick="smoothScroll(event)">EVENTS</a></li>
   ```
3. Create the section content below

### To Change the Sidebar Title:
Simply edit the text in `<h2>`:
```html
<h2>YOUR LAB NAME<br>YOUR SECOND LINE<br>YOUR THIRD LINE</h2>
```

---

## 🏠 Hero Section (Home/Banner)

### Edit Main Heading
**File:** `index.html` (Line 58)

```html
<h1>AI LAB FOR NETWORK THERAPEUTICS</h1>
```

### Edit Subtitle
**File:** `index.html` (Line 59)

```html
<h2 style="font-size: 1.5rem; font-weight: 300; margin-bottom: 1rem; color: rgba(255,255,255,0.9);">
    Cutting-edge AI Research for Brain Health
</h2>
```

### Edit Description Paragraph
**File:** `index.html` (Line 60)

```html
<p style="font-size: 1.3rem; margin-bottom: 2rem; opacity: 0.95;">
    Pioneering research at the intersection of artificial intelligence and neurotherapeutics
</p>
```

### Edit Button Text
**File:** `index.html` (Lines 62-63)

```html
<button class="btn btn-primary" onclick="smoothScroll({target: {getAttribute: () => '#research'}})">
    Explore Research  <!-- CHANGE THIS TEXT -->
</button>
<button class="btn btn-secondary" onclick="smoothScroll({target: {getAttribute: () => '#contact'}})">
    Get In Touch  <!-- CHANGE THIS TEXT -->
</button>
```

---

## 📋 Sections - About, Research, Team, etc.

### Change Section Titles
**File:** `index.html`

Search for `<section id="about">` and look for:
```html
<h2 class="section-title">About Our Lab</h2>
```

Change `"About Our Lab"` to your title.

### Example Locations:
- **About:** Search for `id="about"` 
- **Research:** Search for `id="research"`
- **Projects:** Search for `id="projects"`
- **Team:** Search for `id="team"`
- **Publications:** Search for `id="publications"`
- **Contact:** Search for `id="contact"`

---

## 👥 Edit Team Members

**File:** `index.html` (Search for "<!-- Team Section -->")

### Current Layout:
```html
<div class="team-member">
    <div class="member-info">
        <h3>Dr. John Smith</h3>
        <p class="member-title">Lab Director</p>
        <p>PhD in Neuroscience</p>
        <p>john@university.edu</p>
    </div>
    <div class="member-image">
        <div style="font-size: 5rem;">👨‍🔬</div>
    </div>
</div>
```

### To Edit a Member:
1. Change `Dr. John Smith` to name
2. Change `Lab Director` to role
3. Change `PhD in Neuroscience` to credentials
4. Change email

### To Add a New Team Member:
Copy the entire `<div class="team-member">` block and modify:
```html
<div class="team-member">
    <div class="member-info">
        <h3>Dr. New Name</h3>
        <p class="member-title">Position</p>
        <p>Credentials</p>
        <p>email@university.edu</p>
    </div>
    <div class="member-image">
        <div style="font-size: 5rem;">👩‍💻</div>
    </div>
</div>
```

### Change Member Emoji:
Replace the emoji in `<div style="font-size: 5rem;">👨‍🔬</div>`
- 👨‍💼 = Manager
- 👩‍🔬 = Scientist
- 👨‍💻 = Developer
- 🧑‍⚕️ = Doctor
- [More emojis](https://emojipedia.org/)

---

## 📄 Add/Edit Research Areas

**File:** `index.html` (Search for "<!-- Research Areas -->")

### Current Structure:
```html
<div class="research-card" onclick="toggleCard(this)">
    <div class="research-icon">🧠</div>
    <h3>Brain Network Analysis</h3>
    <p>Main description...</p>
    <div class="toggle-content">
        <p>Detailed description...</p>
    </div>
</div>
```

### To Add New Research Area:
Copy the entire card and modify:
```html
<div class="research-card" onclick="toggleCard(this)">
    <div class="research-icon">🔬</div>
    <h3>Your Research Title</h3>
    <p>Brief description that appears first</p>
    <div class="toggle-content">
        <p>Longer detailed description revealed when clicked</p>
    </div>
</div>
```

### Emoji Options:
- 🧠 = Brain
- 🤖 = AI/Robot
- 💊 = Medicine
- 🔬 = Research
- 📊 = Data
- 🎯 = Target

---

## 🔬 Edit Research Statistics

**File:** `index.html` (Search for "<!-- About Section -->")

### Located in the About section:
```html
<div class="stat-box">
    <div class="stat-number">25+</div>
    <div class="stat-label">Active Research Projects</div>
</div>
```

Just change the numbers and labels:
- `25+` = your number
- `Active Research Projects` = your label

---

## 📚 Add/Edit Publications

**File:** `index.html` (Search for "<!-- Publications -->")

### Current Format:
```html
<div class="pub-item">
    <h4>Title of Publication</h4>
    <p class="pub-authors">Author Names</p>
    <p class="pub-venue">Journal/Conference Name, Year</p>
    <p>Brief description...</p>
    <a href="https://doi.org/xxxxx" target="_blank">Read Paper →</a>
</div>
```

### To Add Publication:
```html
<div class="pub-item">
    <h4>Your Paper Title</h4>
    <p class="pub-authors">Author 1, Author 2, Author 3</p>
    <p class="pub-venue">Nature Neuroscience, 2024</p>
    <p>Brief description of the paper...</p>
    <a href="https://your-link.com" target="_blank">Read Paper →</a>
</div>
```

---

## 💻 Add/Edit Projects

**File:** `index.html` (Search for "<!-- Projects -->")

### Current Format:
```html
<div class="project-item">
    <div class="project-content">
        <h3>Project Title</h3>
        <p class="project-tech">Tech: Python, TensorFlow, PyTorch</p>
        <p>Project description...</p>
        <a href="https://github.com/yourrepo" target="_blank">View Code →</a>
    </div>
    <div class="project-image">
        <div style="font-size: 4rem;">🤖</div>
    </div>
</div>
```

### To Add Project:
```html
<div class="project-item">
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p class="project-tech">Tech: Language1, Library1, Language2</p>
        <p>What this project does and its impact...</p>
        <a href="https://github.com/yourrepo" target="_blank">View Code →</a>
    </div>
    <div class="project-image">
        <div style="font-size: 4rem;">🎯</div>
    </div>
</div>
```

---

## 📝 Edit Contact Form

**File:** `index.html` (Search for "<!-- Contact Form -->")

### Form Fields:
```html
<input type="text" id="name" placeholder="Full Name" required>
<input type="email" id="email" placeholder="Email Address" required>
<input type="text" id="topic" placeholder="Research Topic/Interest" required>
<input type="url" id="github" placeholder="GitHub Profile (optional)">
<textarea id="message" placeholder="Your Message" rows="6" required></textarea>
```

To change placeholder text, just edit the text:
```html
<input type="text" id="name" placeholder="YOUR NEW TEXT" required>
```

---

## 🎨 Edit Colors & Styling

### Main Colors
**File:** `css/main.css` (Lines 9-15)

```css
:root {
    --primary-color: #5f1eaf;          /* Purple */
    --secondary-color: #03221f;        /* Dark Green */
    --accent-color: #f59e0b;           /* Gold */
    --dark-bg: #0f172a;                /* Dark Background */
    --light-bg: #f8fafc;               /* Light Background */
    --text-dark: #1e293b;
    --text-light: #64748b;
}
```

### Common Color Changes:
1. **Change Primary Color (Purple):** Edit `#5f1eaf`
2. **Change Secondary Color:** Edit `#03221f`
3. **Change Accent Color:** Edit `#f59e0b`

💡 Use an online color picker: [Google Colors](https://www.google.com/search?q=color+picker)

---

## 🔤 Edit Fonts

**File:** `css/main.css` (Line 26)

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### To Change Font:
Replace `'Segoe UI'` with another font name:
- `Arial`
- `Georgia`
- `Courier New`
- `Times New Roman`
- Or use Google Fonts (requires additional setup)

---

## ⚙️ Slider Settings

### Change Auto-Slide Speed
**File:** `js/slider.js` (Line 53)

```javascript
autoSlideInterval = setInterval(() => {
    changeSlide(1);
}, 5000); // Change 5000 to milliseconds (5000 = 5 seconds)
```

Change `5000` to:
- `3000` = 3 seconds
- `10000` = 10 seconds

---

## 📋 Disable Sections Temporarily

If you want to hide a section without deleting:

1. Find the section, e.g.: `<section id="research">`
2. Add `style="display: none;"` to hide:
```html
<section id="research" style="display: none;">
```

3. Remove `style="display: none;"` to show again

---

## 🧠 Customize Brain Animation

**File:** `js/brain-animation.js`

### Change Rotation Speed
**Line 44:**
```javascript
rotation += 0.005;  // Change 0.005 to 0.01 (faster) or 0.002 (slower)
```

### Change Particle Count
**Line 17:**
```javascript
for (let i = 0; i < 200; i++) {  // Change 200 to any number you want
```

### Change Brain Colors
**Line 10:**
```javascript
const colors = ['#ff6b9d', '#ffa502', '#7b68ee', '#00d4ff', '#ff1493', '#00ff00'];
```
Replace hex colors with your own.

---

## 📱 Mobile Responsive Sizes

**File:** `css/responsive.css`

### Breakpoint for Mobile
```css
@media (max-width: 768px) {  /* Tablets and phones use this CSS */
```

To change when mobile styles apply: Edit `768px`
- `1024px` = Apply mobile styling on larger tablets
- `480px` = Only very small phones

---

## 🚀 File Quick Reference

| File | What to Edit |
|------|--------------|
| `index.html` | Text, headings, team, projects, publications, images |
| `css/main.css` | Colors, sizes, fonts, spacing, styling |
| `css/animations.css` | Animation timings and effects |
| `css/responsive.css` | Mobile view appearance |
| `js/slider.js` | Image slider speed, behavior |
| `js/brain-animation.js` | Brain animation speed, particles, colors |
| `LAB/img*.jpg` | Your images for the slider |

---

## ✅ Common Editing Tasks Checklist

- [ ] Add images to `LAB` folder
- [ ] Change navigation menu items
- [ ] Update hero heading
- [ ] Update team members
- [ ] Change research areas
- [ ] Add projects
- [ ] Update publications
- [ ] Change colors in CSS
- [ ] Update contact email
- [ ] Test slider on desktop
- [ ] Test on mobile (resize browser)
- [ ] Check all links work

---

## 💡 Pro Tips

1. **Before editing:** Make a backup copy of the file
2. **Test often:** Refresh browser with Ctrl+F5 to see changes
3. **Colors:** Use online tools to pick perfect colors
4. **Images:** Large images (2MB+) slow down website - optimize them
5. **Text:** Keep it clear and concise
6. **Mobile:** Always test how it looks on phone (resize your browser)

---

## 🆘 Troubleshooting

### Images Not Showing
- Check file path: `LAB/img1.jpg` (case-sensitive)
- Image file should exist in the LAB folder
- Try different image format: `.jpg`, `.png`, `.webp`

### Styling Not Changing
- Clear browser cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+F5
- Make sure you edited the right CSS file

### Slider Not Working
- Check `slider.js` is linked in HTML
- Verify image file paths are correct
- Check browser console for errors (F12)

---

## 📞 Quick Help

**Need to find something?** Use Ctrl+F to search:
- Search `id="about"` to find About section
- Search `class="stat-box"` to find statistics
- Search `team-member` to find team section
- Search `hero` to find banner section

---

Happy editing! 🎉
