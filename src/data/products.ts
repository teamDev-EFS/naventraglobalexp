import basmati1121 from '../assets/1121 Basmati Rice.jpg'
import basmati1509 from '../assets/1509 Basmati Rice.jpg'
import pusaBasmati from '../assets/Pusa Basmati Rice.jpg'
import traditionalBasmati from '../assets/Traditional Basmati Rice Premium.jpg'
import kolamRice from '../assets/Kolam Rice.jpg'
import turmericRoot from '../assets/turmeric-root-and-powder.jpg'
import turmericPowder from '../assets/turmeric.jpg'
import makhanaRaw from '../assets/makhana.jpg'
import makhanaRoasted from '../assets/Makhana roasted.webp'
import parboiledRice from '../assets/Parboiled Rice.jpg'
import thaiRice from '../assets/thai rice.webp'
export type ProductCategorySlug = 'rice-portfolio' | 'turmeric' | 'makhana'

export type Product = {
  categorySlug: ProductCategorySlug
  categoryName: string
  slug: string
  name: string
  heroImage: string
  gallery: string[]
  shortDesc: string
  longDesc: string
  highlights: string[]
  specs: { label: string; value: string }[]
  varieties: string[]
  packaging: string[]
  attributes: string[]
  tags: string[]
  keywords: string[]
}

export const productCategories: { slug: ProductCategorySlug; name: string; description: string }[] = [
  {
    slug: 'rice-portfolio',
    name: 'Rice Portfolio',
    description: 'Premium basmati and specialty rice with export-grade consistency.',
  },
  {
    slug: 'turmeric',
    name: 'Turmeric',
    description: 'High-curcumin turmeric selections in finger and powder formats.',
  },
  {
    slug: 'makhana',
    name: 'Fox Nuts / Makhana',
    description: 'Hand-selected makhana for retail packs, roasting, and premium blends.',
  },
]

export const products: Product[] = [
  {
    categorySlug: 'rice-portfolio',
    categoryName: 'Rice Portfolio',
    slug: '1121-basmati-rice',
    name: '1121 Basmati Rice',
    heroImage: basmati1121,
    gallery: [basmati1121, parboiledRice, thaiRice],
    shortDesc: 'Extra long grain premium basmati with aroma and consistent length.',
    longDesc:
      '1121 Basmati Rice known for its extra-long grains (8.5mm+), exquisite aroma, and distinct flavor. Available in Steam, Sella, and Raw varieties with tight moisture control.',
    highlights: ['Extra Long Grain (8.5mm+)', 'Exceptional Aroma & Flavor', 'Low broken (1–2%)'],
    specs: [
      { label: 'Grain length', value: '8.5mm+' },
      { label: 'Moisture', value: '12–14%' },
      { label: 'Broken', value: '1–2%' },
      { label: 'Purity', value: '95%+' },
      { label: 'Crop', value: 'New crop / old crop' },
    ],
    varieties: ['Steam', 'Sella (Parboiled)', 'Raw'],
    packaging: ['1kg', '5kg', '10kg', '25kg', '40kg', '50kg'],
    attributes: ['Export-ready', 'Premium grade', 'Aged aroma'],
    tags: ['Basmati', 'Extra long', 'Aromatic'],
    keywords: ['1121 basmati', 'extra long grain rice', 'premium basmati export'],
  },
  {
    categorySlug: 'rice-portfolio',
    categoryName: 'Rice Portfolio',
    slug: '1509-basmati-rice',
    name: '1509 Basmati Rice',
    heroImage: basmati1509,
    gallery: [basmati1509, parboiledRice],
    shortDesc: 'Long-grain basmati known for yield and consistency in large-scale kitchens.',
    longDesc:
      '1509 basmati offers reliable length and cooking yield, ideal for QSR, HORECA, and bulk programs needing predictable performance.',
    highlights: ['Consistent length', 'Great yield', 'Kitchen-friendly'],
    specs: [
      { label: 'Grain length', value: '7.5mm+' },
      { label: 'Moisture', value: '12–13.5%' },
      { label: 'Broken', value: '<2%' },
      { label: 'Purity', value: '95%+' },
      { label: 'Crop', value: 'New crop' },
    ],
    varieties: ['Steam', 'Sella', 'Golden Sella'],
    packaging: ['5kg', '10kg', '25kg', '40kg', '50kg'],
    attributes: ['Export-ready', 'Value-optimized'],
    tags: ['Basmati', 'Food service'],
    keywords: ['1509 basmati', 'food service rice', 'bulk basmati'],
  },
  {
    categorySlug: 'rice-portfolio',
    categoryName: 'Rice Portfolio',
    slug: 'pusa-basmati',
    name: 'Pusa Basmati',
    heroImage: pusaBasmati,
    gallery: [pusaBasmati, parboiledRice],
    shortDesc: 'Balanced aroma and grain length for versatile retail packs.',
    longDesc:
      'Pusa basmati balances aroma, texture, and price — ideal for mainstream retail and private label programs needing dependable quality.',
    highlights: ['Aromatic', 'Versatile cooking', 'Retail friendly'],
    specs: [
      { label: 'Grain length', value: '7.2mm+' },
      { label: 'Moisture', value: '12–13%' },
      { label: 'Broken', value: '<2%' },
      { label: 'Purity', value: '93–95%' },
      { label: 'Crop', value: 'New crop' },
    ],
    varieties: ['Steam', 'Sella'],
    packaging: ['1kg', '5kg', '10kg', '25kg'],
    attributes: ['Private label ready', 'Export-ready'],
    tags: ['Basmati', 'Retail'],
    keywords: ['pusa basmati', 'retail basmati rice', 'private label rice'],
  },
  {
    categorySlug: 'rice-portfolio',
    categoryName: 'Rice Portfolio',
    slug: 'traditional-basmati',
    name: 'Traditional Basmati',
    heroImage: traditionalBasmati,
    gallery: [traditionalBasmati, parboiledRice],
    shortDesc: 'Classic basmati profile for heritage and specialty programs.',
    longDesc:
      'Traditional basmati with authentic aroma and slender grains, suited for heritage brands and premium hospitality menus.',
    highlights: ['Authentic aroma', 'Slender grains', 'Heritage choice'],
    specs: [
      { label: 'Grain length', value: '7.0mm+' },
      { label: 'Moisture', value: '12–13%' },
      { label: 'Broken', value: '<2%' },
      { label: 'Purity', value: '95%+' },
      { label: 'Crop', value: 'Aged & new crop options' },
    ],
    varieties: ['Aged', 'Steam'],
    packaging: ['5kg', '10kg', '25kg'],
    attributes: ['Premium grade', 'Aged aroma'],
    tags: ['Basmati', 'Heritage'],
    keywords: ['traditional basmati', 'heritage rice', 'premium aged rice'],
  },
  {
    categorySlug: 'rice-portfolio',
    categoryName: 'Rice Portfolio',
    slug: 'kolam-rice',
    name: 'Kolam Rice',
    heroImage: kolamRice,
    gallery: [kolamRice, parboiledRice],
    shortDesc: 'Everyday table rice with soft texture, ideal for retail packs.',
    longDesc:
      'Kolam rice with consistent grain and cooking behavior, suited for mainstream retail and private label SKUs needing value and reliability.',
    highlights: ['Soft texture', 'Reliable cooking', 'Value aligned'],
    specs: [
      { label: 'Grain length', value: '5.0–5.5mm' },
      { label: 'Moisture', value: '<13%' },
      { label: 'Broken', value: '<3%' },
      { label: 'Purity', value: '92–95%' },
      { label: 'Crop', value: 'New crop' },
    ],
    varieties: ['Steam'],
    packaging: ['1kg', '5kg', '10kg', '25kg'],
    attributes: ['Retail friendly', 'Value-optimized'],
    tags: ['Kolam', 'Table rice'],
    keywords: ['kolam rice', 'retail rice', 'value rice'],
  },
  {
    categorySlug: 'rice-portfolio',
    categoryName: 'Rice Portfolio',
    slug: 'parboiled-rice',
    name: 'Parboiled Rice',
    heroImage: parboiledRice,
    gallery: [parboiledRice, basmati1509],
    shortDesc: 'Parboiled grains for bulk and food service programs.',
    longDesc:
      'Parboiled rice processed for better yield and holding quality, ideal for QSR, catering, and institutional buyers.',
    highlights: ['Stable hold', 'Great yield', 'Food-service ready'],
    specs: [
      { label: 'Moisture', value: '12–13%' },
      { label: 'Broken', value: '<3%' },
      { label: 'Purity', value: '92–95%' },
      { label: 'Crop', value: 'New crop' },
    ],
    varieties: ['Parboiled'],
    packaging: ['5kg', '10kg', '25kg', '40kg', '50kg'],
    attributes: ['Bulk ready', 'Export-ready'],
    tags: ['Parboiled', 'Food service'],
    keywords: ['parboiled rice', 'bulk rice', 'food service rice'],
  },
  {
    categorySlug: 'turmeric',
    categoryName: 'Turmeric',
    slug: 'turmeric-finger',
    name: 'Turmeric Finger',
    heroImage: turmericRoot,
    gallery: [turmericRoot, turmericPowder],
    shortDesc: 'High-curcumin whole turmeric fingers with bright color.',
    longDesc:
      'Sourced from trusted growers with strict sorting and drying controls to retain curcumin and vibrant color.',
    highlights: ['High curcumin', 'Low moisture', 'Bright color'],
    specs: [
      { label: 'Curcumin', value: '3–5%+' },
      { label: 'Moisture', value: '<10%' },
      { label: 'Origin', value: 'India' },
      { label: 'Impurities', value: '<1%' },
      { label: 'Processing', value: 'Steam sterilized on request' },
    ],
    varieties: ['Erode', 'Salem'],
    packaging: ['1kg', '5kg', '10kg', '25kg'],
    attributes: ['Export-ready', 'Steam sterilization option'],
    tags: ['Turmeric', 'Whole'],
    keywords: ['turmeric finger', 'high curcumin turmeric', 'whole turmeric export'],
  },
  {
    categorySlug: 'turmeric',
    categoryName: 'Turmeric',
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    heroImage: turmericPowder,
    gallery: [turmericPowder, turmericRoot],
    shortDesc: 'Fine mesh turmeric powder with consistent color and flavor.',
    longDesc:
      'Processed in hygienic facilities with mesh control for smooth texture. Ideal for retail packs and spice blends.',
    highlights: ['Consistent mesh', 'Bright color', 'Retail-ready'],
    specs: [
      { label: 'Mesh size', value: '80–100 mesh options' },
      { label: 'Moisture', value: '<10%' },
      { label: 'Curcumin', value: '2.5–4% options' },
      { label: 'Additives', value: 'None' },
      { label: 'Treatment', value: 'Steam sterilization on request' },
    ],
    varieties: ['Alleppey grade', 'Madras grade'],
    packaging: ['200g', '500g', '1kg', '5kg', '25kg'],
    attributes: ['Private label ready', 'Premium grade'],
    tags: ['Turmeric', 'Powder'],
    keywords: ['turmeric powder', 'aleppey turmeric', 'premium turmeric'],
  },
  {
    categorySlug: 'turmeric',
    categoryName: 'Turmeric',
    slug: 'alleppey-turmeric',
    name: 'Alleppey Turmeric (Premium)',
    heroImage: turmericRoot,
    gallery: [turmericRoot],
    shortDesc: 'Premium Alleppey turmeric with rich color and aroma.',
    longDesc:
      'Select Alleppey turmeric known for deep color and higher curcumin, ideal for premium retail and specialty blends.',
    highlights: ['Premium color', 'High curcumin', 'Aromatic'],
    specs: [
      { label: 'Curcumin', value: '5%+ options' },
      { label: 'Moisture', value: '<10%' },
      { label: 'Mesh', value: 'Customizable' },
      { label: 'Origin', value: 'Kerala, India' },
      { label: 'Treatment', value: 'Steam sterilization available' },
    ],
    varieties: ['Fine powder', 'Coarse powder'],
    packaging: ['500g', '1kg', '5kg', '25kg'],
    attributes: ['Premium grade', 'Export-ready'],
    tags: ['Turmeric', 'Premium'],
    keywords: ['alleppey turmeric', 'premium turmeric export', 'high curcumin'],
  },
  {
    categorySlug: 'makhana',
    categoryName: 'Fox Nuts / Makhana',
    slug: 'premium-makhana-4-suta',
    name: 'Premium Makhana (4 Suta)',
    heroImage: makhanaRaw,
    gallery: [makhanaRaw],
    shortDesc: 'Large-size makhana for premium retail packs and gifting.',
    longDesc:
      'Handpicked large fox nuts with uniform size, ideal for premium snacking SKUs and flavored roasts.',
    highlights: ['Large size', 'Hand-selected', 'Low moisture'],
    specs: [
      { label: 'Size', value: '4 Suta' },
      { label: 'Moisture', value: '<6%' },
      { label: 'Broken', value: '<2%' },
      { label: 'Processing', value: 'Cleaned & graded' },
      { label: 'Origin', value: 'India' },
    ],
    varieties: ['Plain', 'Roast-ready'],
    packaging: ['100g', '200g', '500g', '1kg', '5kg'],
    attributes: ['Premium grade', 'Retail-ready'],
    tags: ['Makhana', 'Premium'],
    keywords: ['premium makhana', 'fox nuts export', '4 suta makhana'],
  },
  {
    categorySlug: 'makhana',
    categoryName: 'Fox Nuts / Makhana',
    slug: 'standard-makhana-5-suta',
    name: 'Standard Makhana (5 Suta)',
    heroImage: makhanaRaw,
    gallery: [makhanaRaw],
    shortDesc: 'Balanced size makhana for everyday retail and bulk formats.',
    longDesc:
      'Consistent 5-suta sizing suitable for flavored roasting lines, retail pouches, and bulk food service packs.',
    highlights: ['Consistent grading', 'Roast-friendly', 'Value aligned'],
    specs: [
      { label: 'Size', value: '5 Suta' },
      { label: 'Moisture', value: '<6%' },
      { label: 'Broken', value: '<3%' },
      { label: 'Processing', value: 'Cleaned & graded' },
      { label: 'Origin', value: 'India' },
    ],
    varieties: ['Plain', 'Roast-ready'],
    packaging: ['100g', '200g', '500g', '1kg', '5kg'],
    attributes: ['Export-ready', 'Value-optimized'],
    tags: ['Makhana', 'Standard'],
    keywords: ['standard makhana', '5 suta', 'fox nuts bulk'],
  },
  {
    categorySlug: 'makhana',
    categoryName: 'Fox Nuts / Makhana',
    slug: 'roasted-makhana',
    name: 'Roasted Makhana',
    heroImage: makhanaRoasted,
    gallery: [makhanaRoasted, makhanaRaw],
    shortDesc: 'Ready-to-season roasted fox nuts for fast GTM.',
    longDesc:
      'Lightly roasted makhana base with low moisture for longer shelf life, ready for flavoring lines and private label packs.',
    highlights: ['Ready to flavor', 'Low moisture', 'Shelf-life friendly'],
    specs: [
      { label: 'Size', value: '4–5 Suta mix' },
      { label: 'Moisture', value: '<5.5%' },
      { label: 'Broken', value: '<3%' },
      { label: 'Processing', value: 'Roasted & graded' },
      { label: 'Origin', value: 'India' },
    ],
    varieties: ['Plain roasted'],
    packaging: ['100g', '200g', '500g', '1kg'],
    attributes: ['Export-ready', 'Private label ready'],
    tags: ['Makhana', 'Roasted'],
    keywords: ['roasted makhana', 'ready to flavor fox nuts', 'makhana export'],
  },
]

export const findProduct = (categorySlug: string | undefined, productSlug: string | undefined) =>
  products.find(
    (product) => product.categorySlug === categorySlug && product.slug === productSlug,
  )

export const productsByCategory = (categorySlug?: ProductCategorySlug) =>
  categorySlug ? products.filter((p) => p.categorySlug === categorySlug) : products

// convenient default export for pages expecting array
const productsDefault = products.map((p) => ({
  ...p,
  categoryLabel: p.categoryName,
}))

export default productsDefault
