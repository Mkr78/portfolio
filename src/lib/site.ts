export const productionUrl = "https://portfolio-olive-six-16.vercel.app";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl;
}
