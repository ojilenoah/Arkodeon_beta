# Project Blueprint

## Overview

This document outlines the plan, features, and design of a Next.js application. The application will feature a responsive header with navigation elements, course information, and user stats, along with a sliding sidebar.

## Current Plan

### Accordion Polish

**Objective:** Add a click-away-to-close feature and a smooth exit animation to the accordion.

*   **Click-Away to Close:** Clicking anywhere outside of the open accordion will close it.
*   **Smooth Exit Animation:** A fade-out and slide-down animation will be added for a smoother closing transition.

**Steps:**

1.  **Update `src/components/ContinueAccordion.tsx`:** An event listener will be added to detect and handle clicks outside of the component, and CSS transitions will be refined for a polished open/close animation.

## Implemented Features

### Floating Accordion Button v2

*   Compact, centered, and visually seamless design.
*   Reduced padding and moved closer to the bottom of the page.

### Floating Accordion Button v1

*   A floating button on the bottom-right opens an accordion with question and maintrack options.

### Iconography Refinements

*   **Cube Icon:** The lines of the cube icon within the "Bits" badge will be made thicker.
*   **Info Icon:** The "i" character within the info icon will be made extra bold, and the surrounding button will be made smaller.

### Sidebar Component v2

*   Sidebar opens below the header.
*   Background color is pure black (`bg-black`).

### Sidebar Component v1

*   Sidebar slides in from the left.
*   Toggle functionality via sidebar button and an overlay.
*   "Bits" badge resized to 70%.

### Header Component v2

*   Responsive header with back button, course title, info button, XP badge, and options button.
*   Text truncation for smaller screens.
*   Second row with sidebar button, module path, and "Bits" badge.

### Header Component v1

*   Responsive header with back button, course title, XP badge, and options button.

## Design and Style Guide

*   **Colors:** The header and sidebar use a dark theme (`bg-black`) with white text and icons. Badges have muted purple and green backgrounds.
*   **Typography:** The course title is bold with a text size of `text-xl`.
