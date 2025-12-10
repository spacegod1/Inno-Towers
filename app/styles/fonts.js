// ========================================
// GOOGLE FONTS VIA CSS - NO BUILD ERRORS!
// ========================================
// Fonts are loaded via CSS link in app/layout.js
// This approach loads fonts at runtime, not during build time
// No more timeout errors or network issues during builds!

// Simple font configuration objects that match Google Fonts loaded via CSS
export const inter = {
  className: 'font-inter',
  style: { fontFamily: "'Inter', sans-serif" }
};

export const montserrat = {
  className: 'font-montserrat',
  style: { fontFamily: "'Montserrat', sans-serif" }
};

export const abrilFatface = {
  className: 'font-abril',
  style: { fontFamily: "'Abril Fatface', serif" }
};

export const nunitoSans = {
  className: 'font-nunito',
  style: { fontFamily: "'Nunito Sans', sans-serif", fontWeight: 300 }
};

export const nunitoSansBold = {
  className: 'font-nunito-bold',
  style: { fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800 }
};

export const ebGaramond = {
  className: 'font-eb-garamond',
  style: { fontFamily: "'EB Garamond', serif", fontWeight: 500, fontStyle: 'italic' }
};

export const ebGaramond400 = {
  className: 'font-eb-garamond-400',
  style: { fontFamily: "'EB Garamond', serif", fontWeight: 400 }
};

export const fraunces = {
  className: 'font-fraunces',
  style: { fontFamily: "'Fraunces', serif" }
};

export const frauncesLight = {
  className: 'font-fraunces-light',
  style: { fontFamily: "'Fraunces', serif", fontWeight: 300 }
};

export const frauncesMedium = {
  className: 'font-fraunces-medium',
  style: { fontFamily: "'Fraunces', serif", fontWeight: 500 }
};

export const frauncesSemibold = {
  className: 'font-fraunces-semibold',
  style: { fontFamily: "'Fraunces', serif", fontWeight: 600 }
};

export const frauncesBold = {
  className: 'font-fraunces-bold',
  style: { fontFamily: "'Fraunces', serif", fontWeight: 700 }
};

export const poiretOne = {
  className: 'font-poiret',
  style: { fontFamily: "'Poiret One', sans-serif" }
};

export const fraunces900 = {
  className: 'font-fraunces-900',
  style: { fontFamily: "'Fraunces', serif", fontWeight: 900 }
};

export const fraunces900Italic = {
  className: 'font-fraunces-900-italic',
  style: { fontFamily: "'Fraunces', serif", fontWeight: 900, fontStyle: 'italic' }
};

export const niconne = {
  className: 'font-niconne',
  style: { fontFamily: "'Niconne', cursive" }
};

// Legacy exports for backward compatibility
export const nunito_sans = nunitoSans;
export const nunito_sans_bold = nunitoSansBold;
export const eb_garamond = ebGaramond;
export const eb_garamond400 = ebGaramond400;
