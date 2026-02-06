# Brutalist Framework Integration

This project integrates the **Brutalist Framework** based on [Brutalist-Framework-Static](https://github.com/pinecreativelabs/Brutalist-Framework-Static) by Pine Creative Labs.

## What's Included

The integration includes core brutalist CSS components:

### BUTCH: Base Utility & Typography Class Helpers

- Typography utilities (`.bold`, `.heavy`, `.allcaps`, etc.)
- Fluid text sizing (`.flow-text`, `.fluid-text`)
- Padding & spacing utilities
- Flexbox utilities
- Container classes

### Flavors: Color Classes Library

- Core color classes (`.black`, `.white`, `.red`, `.yellow`, etc.)
- Text colors (`.black-t`, `.white-t`, etc.)
- Border colors (`.black-b`, `.white-b`, etc.)
- Pre-defined color concoctions (`.mono`, `.success`, `.warning`, `.alert`, `.info`)

### BUIX: Buttons & UI Elements

- Brutalist-styled buttons (`.btn`, `.btn-primary`, `.btn-lg`, `.btn-sm`)
- Navigation buttons (`.nb-btn`, `.nb-btn-big`)
- Cards (`.brutalist-card`)

### Grids: Basic Layout System

- Flexbox-based grid (`.block-wrap`, `.block`)
- Width classes (`.bw100`, `.bw67`, `.bw50`, `.bw33`, `.bw25`)
- Responsive breakpoints

### Additional Features

- Shape utilities (`.jagged` for zig-zag borders)
- Background patterns (`.checkerboard`, `.brickbuild`, `.infinitile`)
- Effects (`.glassmorph`)
- List styles
- **Custom Brutalist Fonts** (see Font Families section below)

## Font Families

The framework includes custom fonts from the Brutalist Framework repository, loaded via CDN:

### Brutalist Custom Fonts

- `.brutalism` - The signature Brutalism font
- `.crude` - Rough, hand-drawn style font
- `.monolisk` - Bold geometric monospace font
- `.vcr-mono` - Retro VCR-style monospace
- `.sudo` - Clean monospace with multiple weights
- `.bitstream` - Classic terminal font
- `.communist` - Vintage propaganda style
- `.depixel` - Pixel art font
- `.syne` - Modern geometric sans-serif

### Web-Safe Fonts

Standard web-safe fonts are also available:

- `.courier`, `.courier-new` - Monospace
- `.lucida` - Console monospace
- `.arial` - Sans-serif
- `.arial-black` - Heavy sans-serif
- `.comic`, `.comic-sans` - Casual sans-serif
- `.tahoma` - Sans-serif
- `.helvetica` - Sans-serif
- `.impact` - Heavy sans-serif
- `.verdana` - Sans-serif
- `.georgia` - Serif
- `.times`, `.times-new-roman` - Serif
- `.palatino` - Serif

### Font Usage Example

```html
<h1 class="brutalism allcaps">Brutalist Typography</h1>
<h2 class="monolisk heavy">Bold Geometric Heading</h2>
<p class="vcr-mono">Retro monospace text</p>
<div class="syne">Modern sans-serif content</div>
```

## Usage

The brutalist framework is automatically imported in `src/styles/global.css` and available throughout your Astro project.

### Example Button

```html
<button class="btn btn-primary btn-lg allcaps">Click Me</button>
```

### Example Card

```html
<div class="brutalist-card padded">
  <h3 class="fluid-text monolisk">Card Title</h3>
  <p class="flow-text">Card content goes here</p>
</div>
```

### Example Grid

```html
<div class="block-wrap">
  <div class="block bw50">
    <p>Half width</p>
  </div>
  <div class="block bw50">
    <p>Half width</p>
  </div>
</div>
```

### Color Classes

```html
<div class="black white-t padded">Black background with white text</div>

<div class="red-b b-s-t padded">Element with red border</div>
```

## JavaScript Effects

The framework includes jQuery-based effects for adding dynamic, chaotic brutalist interactions:

### Rumbler Effects

Make any element shake and rumble! Requires jQuery (automatically included).

#### Available Classes

- `.rumble` - Constant rumbling
- `.prumble` - Pulse rumble, constantly
- `.drunk` - Aggressive constant rumble
- `.hyper` - Extra aggressive constant rumble
- `.crumble` - Rumble constantly on click
- `.trumble` - Triggered rumble on click for only 1.5 sec
- `.hrumble` - Rumble upon hover
- `.mdrumble` - Rumble on mousedown
- `.caffeinated` - Aggressive rumble on hover

#### Stop Constant Rumble

- `.rumble.strumble` - Rumble constantly, stop upon click
- `.rumble.sthrumble` - Rumble constantly, stop upon hover

#### Usage Example

```html
<h1 class="rumble padded lime blue-t">Let's get ready to rumble!</h1>
<button class="btn hrumble">Hover to shake</button>
<div class="caffeinated flow-text">Aggressive hover effect</div>
```

## Customization

All CSS variables are defined in `src/styles/brutalist.css` under `:root`:

```css
:root {
  --primary: #fff;
  --secondary: #000;
  --tertiary: #ff0000;
  --accent: #0000ff;
  --auxiliary: #ffff00;
  --brutalist-border: 4px solid #000;
  --brutalist-shadow: 8px 8px 0 #000;
}
```

Modify these values to customize the brutalist theme to your needs.

## Credits

Based on [Brutalist Framework Static](https://github.com/pinecreativelabs/Brutalist-Framework-Static) by Pine Creative Labs.
