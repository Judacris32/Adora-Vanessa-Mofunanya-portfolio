// Central manifest of every photographic asset used across the site.
// Organizing them here keeps captions/alt text consistent and makes it
// trivial to re-order, re-caption, or swap an image later.

export type CollectionImage = {
  src: string;
  alt: string;
  caption?: string;
  orientation?: "portrait" | "landscape" | "square";
};

export const portraits: CollectionImage[] = [
  {
    src: "/images/portraits/portrait-01.jpg",
    alt: "Adora Vanessa Mofunanya seated in her studio, surrounded by African wax print fabrics",
    caption: "In the studio “Design. Create. Inspire.”",
  },
  {
    src: "/images/portraits/portrait-02.jpg",
    alt: "Adora Vanessa Mofunanya at her sewing table with a Singer sewing machine",
  },
  {
    src: "/images/portraits/portrait-03.jpg",
    alt: "Close portrait of Adora Vanessa Mofunanya resting beside her sewing machine",
  },
  {
    src: "/images/portraits/portrait-04.jpg",
    alt: "Adora Vanessa Mofunanya holding an open thread and notions case",
  },
  {
    src: "/images/portraits/portrait-05.jpg",
    alt: "Adora Vanessa Mofunanya smiling while presenting her sewing kit",
  },
  {
    src: "/images/portraits/portrait-06.jpg",
    alt: "Adora Vanessa Mofunanya draping lilac faux fur over a dress form",
  },
  {
    src: "/images/portraits/portrait-07.jpg",
    alt: "Adora Vanessa Mofunanya hand-finishing a violet faux fur and velvet garment",
  },
  {
    src: "/images/portraits/portrait-08.jpg",
    alt: "Adora Vanessa Mofunanya sewing indoors, headwrap on, garment in progress",
  },
  {
    src: "/images/portraits/portrait-09.jpg",
    alt: "Adora Vanessa Mofunanya measuring a wax-print garment on a dress form in the garden",
  },
  {
    src: "/images/portraits/portrait-10.jpg",
    alt: "Adora Vanessa Mofunanya seated beside her Singer sewing machine, studio portrait",
  },
  {
    src: "/images/portraits/portrait-11.jpg",
    alt: "Adora Vanessa Mofunanya presenting her open sewing kit, smiling",
  },
  {
    src: "/images/portraits/portrait-12.jpg",
    alt: "Adora Vanessa Mofunanya at her sewing machine in her home studio",
  },
];

export const couture: CollectionImage[] = [
  { src: "/images/collections/couture/couture-01.jpg", alt: "Emerald off-shoulder gown with a hand-set floral brooch, runway", orientation: "portrait" },
  { src: "/images/collections/couture/couture-02.jpg", alt: "Cobalt halter gown with a feathered pompom detail and matching headpiece, runway", orientation: "portrait" },
  { src: "/images/collections/couture/couture-03.jpg", alt: "Lineup of five eveningwear looks in emerald, blush, garnet and violet", orientation: "landscape" },
  { src: "/images/collections/couture/couture-04.jpg", alt: "Blush pink cutout gown with a sweeping train, side profile", orientation: "portrait" },
  { src: "/images/collections/couture/couture-05.jpg", alt: "Blush pink cutout gown, front view", orientation: "portrait" },
  { src: "/images/collections/couture/couture-06.jpg", alt: "Garnet velvet peplum top with fur-trimmed off-shoulder sleeves, front", orientation: "portrait" },
  { src: "/images/collections/couture/couture-07.jpg", alt: "Garnet velvet peplum top with fur-trimmed sleeves, back view", orientation: "portrait" },
  { src: "/images/collections/couture/couture-08.jpg", alt: "Moss-green textured crop top styled with a cream ruffled skirt", orientation: "portrait" },
];

export const readyToWear: CollectionImage[] = [
  { src: "/images/collections/ready-to-wear/rtw-01.jpg", alt: "Moss-green cropped top and wide-leg trouser co-ord, styled two ways", orientation: "landscape" },
  { src: "/images/collections/ready-to-wear/rtw-02.jpg", alt: "Four looks in colour-blocked crop tops and purple pleated maxi skirts", orientation: "landscape" },
  { src: "/images/collections/ready-to-wear/rtw-03.jpg", alt: "Sage lace bralette styled with a moss-green skirt, backlit editorial", orientation: "portrait" },
  { src: "/images/collections/ready-to-wear/rtw-04.jpg", alt: "Close portrait in a mint faux fur hood and blush lace bralette", orientation: "portrait" },
  { src: "/images/collections/ready-to-wear/rtw-05.jpg", alt: "Design illustration of a blush tailored short suit with the Dela-Fin mark", orientation: "portrait" },
];

export const accessoriesFootwear: CollectionImage[] = [
  { src: "/images/collections/accessories-footwear/access-01.jpg", alt: "Powder blue faux fur trimmed heels, close detail", orientation: "portrait" },
  { src: "/images/collections/accessories-footwear/access-02.jpg", alt: "Blush pink heels with hand-appliqued green leaf embroidery", orientation: "portrait" },
  { src: "/images/collections/accessories-footwear/access-03.jpg", alt: "Ivory heels embellished with a beaded garnet floral vine", orientation: "portrait" },
  { src: "/images/collections/accessories-footwear/access-04.jpg", alt: "Powder blue faux fur trimmed heels, pair", orientation: "portrait" },
  { src: "/images/collections/accessories-footwear/access-05.jpg", alt: "Ivory strap sandal heel with hand-sculpted green floral vine", orientation: "square" },
  { src: "/images/collections/accessories-footwear/access-06.jpg", alt: "Ivory floral sandal heels, side angle", orientation: "portrait" },
  { src: "/images/collections/accessories-footwear/access-07.jpg", alt: "Pair of ivory floral sandal heels on a blue backdrop", orientation: "landscape" },
  { src: "/images/collections/accessories-footwear/access-08.jpg", alt: "Faux fur headbands with hand-embroidered floral detailing", orientation: "portrait" },
  { src: "/images/collections/accessories-footwear/access-09.jpg", alt: "Model wrapped in a powder blue faux fur stole", orientation: "portrait" },
];

export const loungewear: CollectionImage[] = [
  { src: "/images/collections/loungewear/lounge-01.jpg", alt: "Crimson Dela-Fin logo tracksuit styled with a faux fur trapper hat", orientation: "portrait" },
  { src: "/images/collections/loungewear/lounge-02.jpg", alt: "Crimson Dela-Fin logo tracksuit, alternate angle", orientation: "portrait" },
  { src: "/images/collections/loungewear/lounge-03.jpg", alt: "Cornflower blue knit sweatsuit with matching beanie", orientation: "portrait" },
  { src: "/images/collections/loungewear/lounge-04.jpg", alt: "Grey knit shorts with embroidered Dela-Fin script logo, on hanger", orientation: "portrait" },
  { src: "/images/collections/loungewear/lounge-05.jpg", alt: "Grey knit sweater with embroidered Dela-Fin script logo, on hanger", orientation: "portrait" },
];

export const commission: CollectionImage[] = [
  { src: "/images/press/commission-portrait-01.jpg", alt: "Portrait detail of the custom overcoat with hand-crocheted 3D roses", orientation: "portrait" },
  { src: "/images/press/commission-full-01.jpg", alt: "Full-length view of the custom overcoat with hand-crocheted 3D roses", orientation: "portrait" },
  { src: "/images/press/commission-detail-01.jpg", alt: "Detail view of the hand-crocheted rose appliqué on the custom overcoat", orientation: "portrait" },
  { src: "/images/press/commission-stage-01.jpg", alt: "The custom overcoat worn on stage during a live performance", orientation: "portrait" },
];

export const sketches: CollectionImage[] = [
  { src: "/images/sketches/sketch-09-coat.jpg", alt: "Design sketch: custom coat with handmade 3D crochet roses, front and back", orientation: "portrait" },
  { src: "/images/sketches/sketch-10-fur-dress.jpg", alt: "Design sketch: fitted dress with asymmetric faux fur wrap detail, front and back", orientation: "portrait" },
  { src: "/images/sketches/sketch-01.jpg", alt: "Design sketch: emerald mermaid gown and blush fringe halter gown", orientation: "portrait" },
  { src: "/images/sketches/sketch-02.jpg", alt: "Design sketch: symmetrical long-sleeve blouse and symmetrical hem skirt gown", orientation: "portrait" },
  { src: "/images/sketches/sketch-03.jpg", alt: "Design sketch: asymmetrical cutout top and pleated blazer with pleated skirt", orientation: "portrait" },
  { src: "/images/sketches/sketch-04.jpg", alt: "Design sketch: oversized blazer with slit pencil skirt, cocoon silhouette", orientation: "portrait" },
  { src: "/images/sketches/sketch-05.jpg", alt: "Design sketch: corset bustier and tiered tulle skirt", orientation: "portrait" },
  { src: "/images/sketches/sketch-06.jpg", alt: "Design sketch: satin wrap bodysuit, marble cropped flare dress, lace set", orientation: "portrait" },
  { src: "/images/sketches/sketch-07.jpg", alt: "Design sketch: wrap slit pleated skirt, check fringed trouser, bush pants set", orientation: "portrait" },
  { src: "/images/sketches/sketch-08.jpg", alt: "Design sketch: structured bodice look, feathered mermaid dress, coral fringe set", orientation: "portrait" },
];

export const pressEvidence = {
  trophy: { src: "/images/press/afaa-trophy.jpg", alt: "The AFAA 2025 award trophy, engraved with Adora Vanessa Mofunanya's name" },
  flyer: { src: "/images/press/afaa-flyer.jpg", alt: "Official AFAA 2025 nominee announcement featuring Adora Vanessa Mofunanya" },
  articleScreenshot: {
    src: "/images/press/independent-article-screenshot.jpg",
    alt: "Independent Online News article: “Adora Vanessa Mofunanya Wins AFAA 2025 Emerging Innovative Fashion Designer of The Year”",
  },
};

export const logo = {
  mark: { src: "/images/logo/avm-logo.png", alt: "Adora Vanessa Mofunanya monogram logo" },
  full: { src: "/images/logo/avm-logo-full.jpg", alt: "Adora Vanessa Mofunanya — AVM monogram", width: 700, height: 409 },
  // Tight crop of just the AVM emblem (no wordmark) for small placements
  // like the footer plaque, where the full lockup would be too dense.
  footerMark: {
    src: "/images/logo/avm-logo-mark.jpg",
    alt: "Adora Vanessa Mofunanya — AVM monogram",
    width: 500,
    height: 356,
  },
};

export const instagramIcon = { src: "/images/social/instagram-icon.png", alt: "Instagram" };

// Hero slideshow — a curated atelier/lifestyle sequence rather than a
// portrait. Swap in different photography any time by editing this array;
// wide/landscape images fill the frame edge-to-edge with the least cropping,
// since a full-bleed hero always crops a portrait photo's sides on a wide screen.
export const heroSlides: (CollectionImage & { focus: string })[] = [
  {
    src: "/images/hero/hero-01-atelier-desk.jpg",
    alt: "Sewing desk flatlay with linen fabric, gold shears, pins and a hand-drawn gown sketch",
    focus: "center 40%",
  },
  {
    src: "/images/hero/hero-02-accessories.jpg",
    alt: "Styled flatlay of heels, handbags, sunglasses and fine jewellery with gift bags",
    focus: "center 55%",
  },
  {
    src: "/images/hero/hero-03-moodboard.jpg",
    alt: "Dress form draped in fabric beside a studio moodboard of sketches and swatches",
    focus: "center 35%",
  },
];

export const allCollectionCategories = [
  { key: "couture", label: "Couture & Eveningwear", items: couture },
  { key: "ready-to-wear", label: "Ready-to-Wear", items: readyToWear },
  { key: "accessories-footwear", label: "Accessories & Footwear", items: accessoriesFootwear },
  { key: "loungewear", label: "Loungewear & Streetwear", items: loungewear },
] as const;
