export default function sitemap() {
  const BASE_URL = "https://www.ctiddp.com"

  const routes = [
    "/",
    "/about",
    "/how-it-works",
    "/services",
    "/services/global-ddp-shipping",
    "/services/supplier-payments",
    "/services/qc-inspection",
    "/services/warehousing",
    "/services/customs-clearance",
    "/services/last-mile-delivery",
    "/services/multi-vendor-consolidation",
    "/services/canton-fair-support",
    "/eco-system",
    "/canton-fair",
    "/blog",
    "/contact",
    "/quote",
  ] 

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.8,
  }))
}