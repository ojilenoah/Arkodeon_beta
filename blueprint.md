# Project Blueprint

## Overview

This document outlines the plan, features, and design of a Next.js application. The application will feature a responsive header with navigation elements, course information, and user stats, along with a sliding sidebar.

## Current Plan

### Adjust Sidebar Position and Style

**Objective:** Modify the sidebar to open below the header and match its background color.

*   **Positioning:** The sidebar and its overlay should appear below the header, leaving the header visible and interactive.
*   **Styling:** The sidebar's background color will be changed to pure black (`bg-black`).

**Steps:**

1.  **Update `src/components/Sidebar.tsx`:**
    *   Modify the `className` to change the background to `bg-black`.
    *   Adjust the positioning classes to make the sidebar render below the header (e.g., using `top-[4.5rem]`).
2.  **Update `src/components/Header.tsx`:**
    *   Modify the overlay `div`'s classes to match the sidebar's new vertical position.

## Implemented Features

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
