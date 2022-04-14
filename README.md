# Dynamic Navigation Bar

## Table of Contents

* [Description](#Description)
* [Features](#Features)
* [Getting Started](#Getting-Started)
* [Instructions](#Instructions)
* [Hint](#Hint)
* [Contributors](#Contributors)
* [Copy Rights](#Copy-Rights)

---

## Description
Simple Dynamic Responsive Navigation Bar with a demo landing page using vanilla JavaScript.
---

## Features
1. The JS core waits for the DOM content to be loaded.
2. Dynamic Navigation Menu using JS.
3. Focused Sections, Navigation Links & Heading2 while Scrolling.
4. Navigation Bar Smooth Scroll when jumping to the desired section.
5. Navigation Bar hides in while scrolling down allowing for more reading space.
6. Navigation Bar hides after 10000MS from scrolling, will appear again when scroll up.
7. When reaching the top page, the Navigation Bar changes color & a border down is animated.
8. Responsive Navigation menu with a drop down menu while on screens less or equal to 576px.
---

## Getting Started
1. Clone the project - `git clone https://github.com/Storm-Maker/Dynamic-Navigation-Bar-Frontend.git`
2. Navigate to the project folder and open index.html.
---

## Instructions

To add a new section in the index file, add the following:
```
<section id="sectionx" data-nav="Section x">
<div class="landing__container">
```
then replace the **x** in the `id` and `data-nav` with the appropriate section number
---
## Hint
The two Navigation bar hide functions are not really compatible together, to cancel the automatic Nav bar hide function ":
1. To enable the *automatic hide functionality* of the navigation bar, comment line: 76 `setTimeout(hideAnch, 10000)`
2. To cancel the *automatic hide bar when scrolling down*, comment line: 16, 70:78, then **replace it with** `setTimeout(hideAnch, 10000)`

```
let lastScroll = window.scrollY
if (lastScroll < window.scrollY) {
    hideAnch()
} else {
    header.classList.remove("nav__hideWhenScroll")
    setTimeout(hideAnch, 10000)
}
lastScroll = window.scrollY
```
---

## Contributors
- Udacity "Starter Code/ Skeleton" <https://review.udacity.com/>
- Mohammed Ahmed Morsi "Navigation Bar, Navigation Functionality" <stormmaker_cf@hotmail.com>
---

## Copy Rights
- The Navigation Bar Image was downloaded from clipartmax <https://www.clipartmax.com/middle/m2i8i8A0K9A0H7b1_navbar-toggle-icon-menu-hamburger-png-white/>
- Licenced for Personal Use
- The HTML & Styling files are provided from Udacity for the Landing Page project <https://review.udacity.com/>