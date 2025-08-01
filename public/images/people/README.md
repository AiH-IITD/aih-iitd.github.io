# People Images

This directory contains profile images for team members.

## Image Requirements

- **Format**: JPG, PNG, or SVG
- **Size**: 96x96 pixels (or larger, will be scaled down)
- **Aspect Ratio**: Square (1:1)
- **File Naming**: Use lowercase with hyphens (e.g., `chetan-arora.jpg`)

## Adding New Images

1. Add the image file to this directory
2. Update the `imagePath` in `lib/people.json` to point to the new image
3. The path should be `/images/people/filename.ext`

## Current Placeholder

The `placeholder.svg` file is used as a default when no specific image is provided.

## Example

```json
{
  "name": "Dr. Chetan Arora",
  "title": "Professor, IIT Delhi",
  "imagePath": "/images/people/chetan-arora.jpg",
  "profileUrl": "https://www.cse.iitd.ac.in/~chetan/"
}
``` 