# Blueprint

## Overview

This document outlines the plan to modify the application to render markdown content in separate frames, split by `---` in the markdown file.

## Style and Design

The application will display markdown content in a series of vertically stacked frames. Each frame will have a slightly lighter background than the main page and will contain a section of the markdown content. The frames will have rounded corners and padding to ensure the content is well-presented.

## Features

- **Markdown Splitting**: The application will read a single markdown file and split its content into multiple sections based on a `---` separator.
- **Dynamic Frame Rendering**: Each section of the markdown will be rendered in its own individual frame.
- **Server-Side Rendering**: The markdown content will be read and processed on the server, ensuring fast page load times and preserving the existing rendering pipeline.

## Current Plan

1.  **Read the MDX file content**: In `src/app/page.tsx`, which is a Server Component, use Node.js's `fs` module to read the raw content of `src/components/CourseContent.mdx`.
2.  **Split the content**: Split the raw MDX content string by the `---` separator to get an array of markdown strings.
3.  **Render sections with `next-mdx-remote`**: For each markdown string in the array, use the `MDXRemote` component from `next-mdx-remote/rsc` to render it. This allows rendering MDX content from a string on the server. The same remark and rehype plugins from `next.config.ts` will be used to ensure consistent rendering.
4.  **Component Structure**: Each rendered section will be wrapped in the existing `MdxContent` component to maintain the styling of the frames.
5.  **Styling adjustments**: The main container in `page.tsx` will be adjusted to a flex column layout to stack the markdown frames vertically. The `MdxContent` component will also be slightly adjusted.
