# TOM-ART Image Generation Prompts

**Style Preset:** Industrial Yellow
**Primary Color:** #eab308 (yellow/gold)
**Background:** #0a0a0a (near black)
**Mood:** Professional, industrial, warm accents

---

## GLOBAL PREPROMPT

Dodaj do każdego prompta:

```
Professional construction photography, 35mm lens, slightly desaturated colors.
Color scheme: dark backgrounds (#0a0a0a), warm yellow/gold accents (#eab308).
Golden hour lighting with dramatic shadows.
Polish residential architecture, central European style.
No text, no watermarks, photorealistic.
```

---

## 1. HERO IMAGE

**Filename:** `hero.jpg`
**Aspect ratio:** 16:9 (1920x1080)
**Usage:** Full-screen hero background with gradient overlay

### Prompt:
```
Professional construction photography, 35mm lens, slightly desaturated colors.
Color scheme: dark backgrounds, warm yellow/gold accents.
Golden hour lighting with dramatic shadows.

Wide establishing shot of a modern Polish single-family home exterior.
Freshly completed white and gray facade with large windows.
Yellow construction safety elements visible in foreground (tape, helmet, or equipment).
Dramatic sky at golden hour, warm light on building.
Magazine-quality architectural photography.
Scale emphasis showing grandeur of completed work.
--ar 16:9 --s 250 --q 2
```

---

## 2. ABOUT/WHY US IMAGE

**Filename:** `about.jpg`
**Aspect ratio:** 4:3 (1200x900)
**Usage:** WhyUs section - right side image

### Prompt:
```
Professional construction photography, 35mm lens, slightly desaturated colors.
Color scheme: dark backgrounds, warm yellow/gold accents.
Golden hour lighting with dramatic shadows.

Elegant Polish house with white classical facade and decorative columns.
Terracotta roof tiles, well-maintained garden visible.
Yellow measuring tape or level tool as accent in corner.
Late afternoon warm light creating long shadows.
Professional real estate photography style.
Architectural details sharp and prominent.
--ar 4:3 --s 250 --q 2
```

---

## 3. PORTFOLIO IMAGES

### 3a. Nowoczesny dom jednorodzinny
**Filename:** `portfolio-1.jpg`
**Aspect ratio:** 4:3

```
Professional construction photography, 35mm lens, slightly desaturated colors.
Color scheme: dark backgrounds, warm yellow/gold accents.

Modern Polish single-family home, white and graphite facade.
Vertical metal cladding panels, large glass windows.
Wooden pergola or terrace accent.
Evening blue hour with warm interior lights glowing.
Yellow construction markers or equipment accent.
Contemporary minimalist architecture.
--ar 4:3 --s 250 --q 2
```

### 3b. Dom w stylu klasycznym
**Filename:** `portfolio-2.jpg`
**Aspect ratio:** 4:3

```
Professional construction photography, 35mm lens, slightly desaturated colors.
Color scheme: dark backgrounds, warm yellow/gold accents.

Classic Polish manor-style house with white columns.
Ornate architectural details, decorative cornices.
Red ceramic roof tiles, symmetrical design.
Golden hour lighting emphasizing white facade.
Yellow safety helmet on ground as subtle accent.
Stately, prestigious appearance.
--ar 4:3 --s 250 --q 2
```

### 3c. Wykończenie wnętrza — sztukaterie
**Filename:** `portfolio-3.jpg`
**Aspect ratio:** 4:3

```
Professional construction photography, 35mm lens, slightly desaturated colors.
Color scheme: dark backgrounds, warm yellow/gold accents.

Interior hallway with white decorative wall panels and moldings.
Smooth plastered ceiling, elegant stucco work.
Warm yellow wall sconce lighting visible.
Clean, freshly completed interior.
Detail shot showing craftsmanship quality.
Sophisticated European interior design.
--ar 4:3 --s 250 --q 2
```

### 3d. Remont elewacji
**Filename:** `portfolio-4.jpg`
**Aspect ratio:** 4:3

```
Professional construction photography, 35mm lens, slightly desaturated colors.
Color scheme: dark backgrounds, warm yellow/gold accents.

Before-after transformation feel: renovated Polish house.
White and gray facade with wooden accent panels.
New roof, clean modern appearance.
Yellow construction scaffolding partially visible.
Dramatic improvement visible in the architecture.
Professional renovation showcase.
--ar 4:3 --s 250 --q 2
```

---

## 4. SERVICES IMAGES (optional, for enhanced version)

### Tynki i gładzie
```
Professional construction photography, detail shot.
Craftsman hands applying smooth plaster to wall.
Professional plastering tools visible.
Yellow safety elements (gloves, tape measure).
Focus on precision and skill of work.
Authentic work-in-progress moment.
--ar 3:2 --s 200 --q 2
```

### Malowanie
```
Professional construction photography, detail shot.
Paint roller applying white paint to wall.
Professional painting equipment.
Yellow paint tray or tape as color accent.
Clean, precise work visible.
Interior renovation context.
--ar 3:2 --s 200 --q 2
```

### Posadzki
```
Professional construction photography, detail shot.
Craftsman laying ceramic floor tiles.
Level tool, tile spacers visible.
Yellow measuring tape accent.
Precise alignment, professional work.
Modern bathroom or kitchen setting.
--ar 3:2 --s 200 --q 2
```

### Elewacje
```
Professional construction photography, exterior shot.
Worker on scaffolding applying thermal insulation.
Yellow safety harness and helmet.
Styrofoam panels, finishing materials.
Large house facade visible.
Industrial construction site atmosphere.
--ar 3:2 --s 200 --q 2
```

### Instalacje
```
Professional construction photography, detail shot.
Electrician installing outlets in wall.
Professional wiring, junction boxes.
Yellow safety gloves, voltage tester.
Clean, organized work area.
Modern electrical installation.
--ar 3:2 --s 200 --q 2
```

---

## IMAGE PROCESSING NOTES

### Color Grading
Po wygenerowaniu/pozyskaniu zdjęć:

1. **Desaturate slightly:** -10-15% saturation
2. **Lift blacks:** don't go pure black, add slight lift
3. **Add yellow/gold tint:** subtle warm tone in highlights
4. **Increase contrast:** +10-15% for industrial feel
5. **Vignette:** subtle darkening at edges

### CSS Overlay for Hero
```css
background: linear-gradient(
  to right,
  rgba(10, 10, 10, 0.95),
  rgba(10, 10, 10, 0.7),
  rgba(10, 10, 10, 0.4)
);
```

### Consistent Elements
- Yellow/gold accents in EVERY image (equipment, tape, helmet, light)
- Same time of day (golden hour or overcast)
- Same lens look (35mm environmental)
- Same editing style (slightly desaturated, lifted blacks)

---

## RECOMMENDED AI TOOLS

1. **Midjourney v6:** Best for architectural photography
2. **DALL-E 3:** Good for specific scenes
3. **Ideogram 2.0:** Good text handling if needed
4. **Leonardo.ai:** Free alternative with good results

### Midjourney-specific Settings
- `--ar 16:9` or `--ar 4:3` (aspect ratio)
- `--s 250` (stylize for more artistic look)
- `--q 2` (higher quality)
- `--no people, faces` (if avoiding people)

---

## STOCK PHOTO ALTERNATIVES

Jeśli AI generation nie jest opcją, szukaj na:
- **Unsplash:** "Polish architecture", "home renovation", "construction site"
- **Pexels:** "house facade", "interior finishing"
- **Freepik:** "construction work", "renovation before after"

### Search Terms (Polish context):
- "dom jednorodzinny polska"
- "elewacja dom"
- "remont wnetrza"
- "budowa domu"
- "tynkowanie sciany"

Po pobraniu: zastosuj color grading jak opisano wyżej.

---

## FILE NAMING CONVENTION

```
public/images/
├── hero.jpg           (16:9, hero background)
├── about.jpg          (4:3, why-us section)
├── portfolio-1.jpg    (4:3, nowoczesny dom)
├── portfolio-2.jpg    (4:3, klasyczny dom)
├── portfolio-3.jpg    (4:3, wnętrze sztukaterie)
├── portfolio-4.jpg    (4:3, remont elewacji)
├── service-tynki.jpg  (3:2, optional)
├── service-malowanie.jpg
├── service-posadzki.jpg
├── service-elewacje.jpg
└── service-instalacje.jpg
```

---

## QUICK START

1. Skopiuj GLOBAL PREPROMPT
2. Dodaj konkretny SCENE PROMPT
3. Wygeneruj 2-3 warianty
4. Wybierz najlepszy
5. Color grade do palette Industrial Yellow
6. Zapisz w public/images/
