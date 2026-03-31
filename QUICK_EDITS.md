# 🎯 Quick Edit Guide - Common Changes

This guide shows you exactly where to make common edits to your website.

---

## 🎨 Change Colors

**File:** `css/main.css` (Lines 7-15)

```css
:root {
    --primary-color: #5f1eaf;        ← Purple - buttons, titles
    --secondary-color: #03221f;      ← Dark green - gradients
    --accent-color: #f59e0b;         ← Gold - highlights
    --dark-bg: #0f172a;              ← Dark blue - footer
    --light-bg: #f8fafc;             ← Light gray - alternate sections
    --text-dark: #1e293b;            ← Dark text
    --text-light: #64748b;           ← Light text
    --border-color: #e2e8f0;         ← Borders
}
```

**Change Example:**
```css
--primary-color: #0066cc;  /* Changed from purple to blue */
```

---

## ✏️ Edit Team Members

**File:** `index.html` - Search for `<!-- Team Section -->`

```html
<div class="team-member">
    <div class="member-image">👨‍🔬</div>
    <div class="member-info">
        <div class="member-name">Dr. James Chen</div>       ← Change name
        <div class="member-role">Laboratory Director</div>  ← Change role
        <div class="member-bio">Ph.D. in...</div>          ← Change bio
    </div>
</div>
```

**To Add a New Team Member:** Copy entire `<div class="team-member">` block and modify

---

## 📝 Edit Contact Information

**File:** `index.html` - Search for `<!-- Contact Section -->`

```html
<h4>Address</h4>
<p>Building 42, Floor 3<br>Academic Medical Center<br>Research Avenue 100</p>

<h4>Email</h4>
<p>info@ai4bnt.edu<br>collaboration@ai4bnt.edu</p>

<h4>Phone</h4>
<p>+1 (555) 123-4567<br>+1 (555) 123-4568</p>
```

---

## 📚 Add New Research Area

**File:** `index.html` - Find `<!-- Research Areas -->` section

Copy this block and modify:
```html
<div class="research-card" onclick="toggleCard(this)">
    <div class="research-icon">🧠</div>
    <h3>Brain Network Analysis</h3>
    <p>Main description text here.</p>
    <div class="toggle-content">
        <p>Expanded description appears on click.</p>
    </div>
</div>
```

**Change:**
- Icon emoji (🧠)
- Title (Brain Network Analysis)
- Description (p tag)
- Expanded content (toggle-content)

---

## 📰 Add New Publication

**File:** `index.html` - Find `<!-- Publications Section -->`

Copy existing pub-item and modify:
```html
<div class="pub-item">
    <div class="pub-authors">Chen, J., Williams, S. (2025)</div>
    <div class="pub-title">Your Paper Title Here</div>
    <div class="pub-journal">Journal Name, Volume(Issue), Pages</div>
</div>
```

---

## 🔬 Add New Project

**File:** `index.html` - Find `<!-- Projects Section -->`

```html
<div class="project-item">
    <div class="project-image">🔗</div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description and details.</p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
    </div>
</div>
```

---

## 🔤 Change Fonts

**File:** `css/main.css` - Search for `body` (Line ~26)

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  ← Change this
}
```

**Common Font Choices:**
```css
font-family: 'Arial', sans-serif;
font-family: 'Verdana', sans-serif;
font-family: 'Trebuchet MS', sans-serif;
font-family: 'Georgia', serif;
font-family: 'Courier New', monospace;
```

---

## 📏 Change Font Sizes

**File:** `css/main.css` - Search for specific section

**Title sizes:**
```css
.section-title {
    font-size: 2.5rem;  ← Change section titles
}

.hero h1 {
    font-size: 4rem;    ← Change hero title
}
```

---

## 🎬 Change Animation Speed

**File:** `css/animations.css`

```css
@keyframes rotateBrain {
    /* Rotation animation complete in 6 seconds */
}
```

**File:** `js/brain-animation.js`

```javascript
rotation += 0.005;  ← Increase for faster, decrease for slower
```

---

## 📱 Change Mobile Breakpoint

**File:** `css/responsive.css` (Line 1)

```css
@media (max-width: 768px) {  ← Currently mobile starts at 768px
    /* mobile styles */
}
```

**Change Examples:**
```css
@media (max-width: 640px)   /* Smaller breakpoint */
@media (max-width: 1024px)  /* Larger breakpoint */
```

---

## 🧠 Customize Brain Animation

**File:** `js/brain-animation.js`

```javascript
// Create brain particle points
for (let i = 0; i < 200; i++) {  ← Particle count
    // ...
    const colors = ['#ff6b9d', '#ffa502', '#7b68ee', ...];  ← Colors
}

rotation += 0.005;  ← Rotation speed
```

---

## 🔄 Enable/Disable Sections

**File:** `index.html`

To hide a section, comment out or delete:
```html
<!-- <section id="research">
    ... entire section ...
</section> -->
```

To remove from navigation, find and delete:
```html
<li><a href="#research" onclick="smoothScroll(event)">Research</a></li>
```

---

## 🏷️ Change Logo Text

**File:** `index.html` - Find navigation

```html
<a href="#" class="logo">
    AI4BNT           ← Change logo text
    <span>Lab</span> ← Change badge text
</a>
```

---

## 📧 Change Form Fields

**File:** `index.html` - Find `<form onsubmit="handleSubmit(event)">`

Current fields:
- Name (required)
- Email (required)
- Topic (optional)
- GitHub (optional)
- Message (required)

To add field, copy:
```html
<div class="form-group">
    <label for="fieldname">Label Text</label>
    <input type="text" id="fieldname" name="fieldname">
</div>
```

Update JavaScript in `js/submissions.js` to handle new field!

---

## 📝 Edit About Section

**File:** `index.html` - Find `<!-- About Section -->`

```html
<h3>Mission & Vision</h3>
<p>Edit this paragraph...</p>

<h3>Our Approach</h3>
<p>Edit this paragraph...</p>
```

Also modify stat boxes:
```html
<div class="stat-box">
    <div class="stat-number">25+</div>      ← Change number
    <div class="stat-label">Active Research...</div>  ← Change label
</div>
```

---

## 🔗 Add Social Links

**File:** `index.html` - Find `Follow Us`

```html
<div class="social-links">
    <a href="https://twitter.com/youraccount" title="Twitter">𝕏</a>
    <a href="https://linkedin.com/in/yourprofile" title="LinkedIn">in</a>
    <a href="https://github.com/yourprofile" title="GitHub">⚡</a>
    <a href="https://researchgate.net/profile" title="ResearchGate">R</a>
</div>
```

Change the href URLs to your actual profiles!

---

## 🎨 Button Styling

**File:** `css/main.css`

```css
.btn-primary {
    background: var(--accent-color);
    color: var(--text-dark);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}
```

---

## 🔍 Footer Links

**File:** `index.html` - Find `<!-- Footer -->`

Update each section:
```html
<div class="footer-section">
    <h4>About AI4BNT</h4>
    <p>Update intro text...</p>
</div>
```

---

## 💾 Form Submission Storage

**File:** `js/submissions.js`

Currently uses browser localStorage (saved locally only).

To send to server instead:
1. Remove localStorage code
2. Add fetch() to send to server
3. Create backend endpoint

---

**📌 Remember:**
- Always keep a backup before major changes
- Test in browser (F12 for console errors)
- Mobile test at 768px width
- Clear browser cache if changes don't show (Ctrl+Shift+Delete)

---

**Need more help?** Check `README.md` for detailed documentation!
