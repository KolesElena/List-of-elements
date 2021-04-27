export const mobileStartWidth = 480;
export const tabletStartWidth = 768;
export const desktopStartWidth = 1024;
export const largeDesktopWidth = 1440;
export const tabletEndWidth = desktopStartWidth;
export const xDesktopStartWidth = 1200;
export const xxDesktopStartWidth = 1440;

export const mobileOnly = `@media (max-width: ${tabletStartWidth}px)`;

export const mobile = `@media (min-width: ${mobileStartWidth}px)`;

export const tablet = `@media (min-width: ${tabletStartWidth}px)`;

export const desktop = `@media (min-width: ${tabletEndWidth}px)`;

export const desktopStart = `@media (min-width: ${desktopStartWidth + 1}px)`;

export const xDesktop = `@media (min-width: ${xDesktopStartWidth}px)`;

export const xxDesktop = `@media (min-width: ${xxDesktopStartWidth}px)`;
