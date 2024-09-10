// src/utils/slugToText.js

/**
 * Converts a slug to a human-readable text with only the first letter capitalized.
 * @param {string} slug - The slug to convert.
 * @returns {string} The formatted text.
 */
export function slugToText(slug) {
  // Replace hyphens with spaces, convert to lowercase, and capitalize the first letter
  return slug
    .replace(/-/g, " ")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
}
