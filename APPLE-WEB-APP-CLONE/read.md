# Apple-Inspired Website Clone

A modern, responsive **Apple-inspired website clone** built using **HTML, CSS, JavaScript, and Bootstrap 5**.

This project recreates the clean, minimal, premium-style experience commonly associated with modern technology product websites while using original frontend code and CSS designs.

---

## 🚀 Features

* Responsive Apple-inspired navigation bar
* Modern hero section
* iPhone product showcase
* MacBook Pro section
* iPad section
* Apple Watch section
* AirPods section
* Apple TV+ section
* Accessories section
* Support section
* Responsive footer
* Search overlay
* Search functionality
* Dark mode / Light mode
* Theme saved using `localStorage`
* Smooth scrolling
* Scroll reveal animations
* Bootstrap responsive grid
* Bootstrap Icons
* Mobile-friendly navigation
* Interactive product buttons
* Toast notifications
* Keyboard shortcut for search
* Modern responsive design

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5.3.3
* Bootstrap Icons
* Google Fonts

### Browser APIs

* `localStorage`
* `IntersectionObserver`
* DOM API
* Keyboard events
* Scroll events

---

## 📁 Project Structure

```text
apple-clone/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📄 File Description

### `index.html`

Contains the complete website structure, including:

* Navigation
* Search overlay
* Hero section
* iPhone section
* MacBook section
* iPad section
* Apple Watch section
* AirPods section
* Apple TV+ section
* Accessories
* Support
* Footer
* Toast notification

---

### `style.css`

Contains all custom styling:

* Apple-inspired layouts
* Responsive design
* Product illustrations
* Hero styling
* Dark mode
* Cards
* Buttons
* Navigation
* Footer
* Animations
* Mobile layouts
* Product mockups

---

### `script.js`

Controls the website's interactive functionality:

* Search
* Dark/light mode
* Toast messages
* Product interactions
* Support button
* Mobile navigation
* Scroll effects
* Reveal animations
* Keyboard shortcuts

---

## 💻 Installation

No installation or backend server is required.

### Step 1

Download or copy the project files.

### Step 2

Put all files inside one folder:

```text
apple-clone/
```

### Step 3

Open:

```text
index.html
```

in your browser.

That's it.

---

## 🌐 Bootstrap

This project uses Bootstrap through CDN.

Bootstrap CSS:

```html
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
>
```

Bootstrap JavaScript:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

Bootstrap Icons:

```html
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
    rel="stylesheet"
>
```

An internet connection is therefore recommended when running the project so the CDN assets can load.

---

# 🎨 Website Sections

## Navigation

The navigation contains:

* Apple-style logo
* Store
* Mac
* iPhone
* iPad
* Watch
* AirPods
* Accessories
* Support
* Search
* Shopping bag
* Theme switcher

The navigation is responsive and converts into a mobile Bootstrap menu on smaller screens.

---

## Hero Section

The main hero section contains:

```text
Introducing

iPhone 17 Pro

All Pro. All-new.

[ Learn more ] [ Buy ]
```

It also includes a CSS-created phone illustration.

---

## iPhone Section

The iPhone section provides:

* Product heading
* Description
* Learn More button
* Buy button
* CSS-generated iPhone design
* Camera module
* Lighting effects

---

## MacBook Section

The MacBook section contains:

* MacBook Pro heading
* Product description
* Learn More button
* Buy button
* CSS-generated MacBook illustration
* Animated-style wallpaper

---

## Product Grid

The website includes several product cards:

### iPad Pro

```text
Thin. Powerful.
Beautiful.
```

### Apple Watch

```text
Series 11

Smarter. Brighter. Healthier.
```

### AirPods Pro

```text
The world's
best in-ear sound.
```

### Apple TV+

```text
Stories that
stay with you.
```

---

# 🌙 Dark Mode

The website includes a dark/light mode switch.

Clicking the moon icon changes the website to dark mode.

Clicking the sun icon changes it back to light mode.

The selected theme is stored in:

```javascript
localStorage
```

Therefore, the selected theme can remain available when the page is reopened.

---

# 🔍 Search

The navigation includes a search button.

Clicking it opens a full-screen search interface.

Users can search for sections such as:

```text
iPhone
Mac
iPad
Watch
AirPods
Accessories
Support
Store
```

For example:

```text
iPhone
```

will automatically scroll to the iPhone section.

---

# ⌨️ Keyboard Shortcut

The website supports:

```text
Ctrl + K
```

Pressing:

```text
Ctrl + K
```

opens the search interface.

Press:

```text
Esc
```

to close it.

---

# 📱 Responsive Design

The website is designed for:

* Desktop
* Laptop
* Tablet
* Mobile
* Small mobile screens

Bootstrap's responsive grid is used together with custom CSS media queries.

Example:

```css
@media (max-width: 576px) {

}
```

---

# ✨ Animations

The website includes scroll-based reveal animations.

Product cards gradually appear as the user scrolls down the page.

The implementation uses:

```javascript
IntersectionObserver
```

Example:

```javascript
const revealObserver =
    new IntersectionObserver(...)
```

This avoids requiring additional animation libraries.

---

# 🛒 Product Buttons

Product buttons are currently frontend demo interactions.

For example, clicking an accessory's Buy button displays a toast notification:

```text
AirPods added to your bag.
```

A real e-commerce backend can later be connected.

---

# 🔔 Toast Notifications

The project uses Bootstrap Toasts for notifications.

Examples include:

```text
Dark mode enabled.
```

```text
Light mode enabled.
```

```text
This is a demo product page.
```

```text
AirPods added to your bag.
```

---

# 🎯 Customization

You can easily change the website's colors using the CSS variables at the top of `style.css`.

Example:

```css
:root {
    --bg: #ffffff;
    --text: #1d1d1f;
    --muted: #6e6e73;
    --blue: #0071e3;
}
```

You can change the primary blue color:

```css
--blue: #0071e3;
```

For example:

```css
--blue: #ff2d55;
```

---

# 🖼️ Product Images

The current project intentionally uses CSS-generated product illustrations instead of copying proprietary Apple website images.

This keeps the project lightweight and makes it easy to customize.

For a production project, you can replace the CSS illustrations with properly licensed product images.

---

# ⚡ Performance

The project does not require:

* React
* Vue
* Angular
* Node.js
* PHP
* Database
* Backend server

It is a lightweight frontend project.

---

# 🔒 Security

This project is frontend-only.

It does not collect:

* Passwords
* Credit card information
* Personal account information
* Authentication credentials

Any real payment or authentication system should be implemented using a secure backend.

---

# 🧪 Testing

Test the project in modern browsers such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

Test the following:

* Navigation
* Search
* Dark mode
* Mobile menu
* Product buttons
* Smooth scrolling
* Responsive layouts
* Toast notifications
* Keyboard shortcuts

---

# 🐛 Troubleshooting

## Bootstrap is not loading

Make sure you have an active internet connection because Bootstrap is loaded through CDN.

You can also download Bootstrap and host it locally.

---

## Icons are missing

The project uses Bootstrap Icons CDN.

Make sure this exists inside `index.html`:

```html
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
    rel="stylesheet"
>
```

---

## JavaScript is not working

Make sure this appears at the bottom of `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="script.js"></script>
```

Also make sure the filename is exactly:

```text
script.js
```

---

## CSS is not loading

Make sure this exists inside the `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

And make sure:

```text
style.css
```

is in the same folder as:

```text
index.html
```

---

# 🔮 Future Improvements

This frontend can be expanded into a complete e-commerce website.

Possible future features:

* Shopping cart
* Product detail pages
* Product comparison
* Product search
* Product filtering
* Checkout page
* User authentication
* Wishlist
* Order history
* Real product database
* Admin dashboard
* Payment gateway
* Customer accounts
* Contact form
* Newsletter subscription
* Product reviews
* Inventory management
* Backend API
* Database integration

---

# ⚠️ Disclaimer

This project is an **Apple-inspired educational frontend project**.

It is not an official Apple website and is not affiliated with or endorsed by Apple Inc.

Apple names, logos, product names, trademarks, and related intellectual property belong to their respective owners.

Use appropriately licensed assets if deploying a public or commercial version.

---

# 📜 License

This project is provided for **educational and demonstration purposes**.

You are free to modify the HTML, CSS, and JavaScript for your own learning and portfolio projects.

---

## 👨‍💻 Built With

```text
HTML5
CSS3
JavaScript
Bootstrap 5
Bootstrap Icons
```

### Project Goal

The goal of this project is to demonstrate how to build a polished, modern technology-product website using **plain HTML, CSS, JavaScript, and Bootstrap without a frontend framework**.