import fs from "node:fs";
import path from "node:path";

const locales = ["fr", "en"];
const requiredProjectFields = [
  "slug",
  "title",
  "tagline",
  "type",
  "summary",
  "tags",
  "problem",
  "solution",
  "architecture",
  "stack",
  "highlights",
  "results",
  "learnings"
];
const requiredExperienceFields = [
  "role",
  "company",
  "period",
  "location",
  "description",
  "achievements",
  "stack",
  "security"
];
const mojibakePattern = /Ã|Â|�|â[€™€œ€�€“€”†€¢]/;
const errors = [];

function readJson(locale) {
  const file = path.join("src", "content", `${locale}.json`);
  const raw = fs.readFileSync(file, "utf8");
  if (mojibakePattern.test(raw)) {
    errors.push(`${file}: possible mojibake detected`);
  }
  return JSON.parse(raw);
}

function isBlank(value) {
  return typeof value === "string" && value.trim().length === 0;
}

function requireNonEmptyArray(items, label) {
  if (!Array.isArray(items) || items.length === 0) {
    errors.push(`${label}: expected a non-empty array`);
    return;
  }
  items.forEach((item, index) => {
    if (isBlank(item)) errors.push(`${label}[${index}]: empty string`);
  });
}

function validateLinks(links, label) {
  if (!links) return;
  for (const [key, value] of Object.entries(links)) {
    if (isBlank(value)) errors.push(`${label}.links.${key}: empty URL`);
    if (value && !/^https?:\/\//.test(value)) {
      errors.push(`${label}.links.${key}: URL must start with http:// or https://`);
    }
  }
}

function validateProject(project, locale) {
  const label = `${locale}.projects.${project.slug ?? project.title ?? "unknown"}`;
  requiredProjectFields.forEach((field) => {
    if (!(field in project)) errors.push(`${label}: missing ${field}`);
    if (isBlank(project[field])) errors.push(`${label}.${field}: empty string`);
  });
  requireNonEmptyArray(project.tags, `${label}.tags`);
  if (Array.isArray(project.tags) && project.tags.length > 3) {
    errors.push(`${label}.tags: keep at most 3 broad tags`);
  }
  requireNonEmptyArray(project.stack, `${label}.stack`);
  requireNonEmptyArray(project.highlights, `${label}.highlights`);
  requireNonEmptyArray(project.results, `${label}.results`);
  requireNonEmptyArray(project.learnings, `${label}.learnings`);
  if (project.security) requireNonEmptyArray(project.security, `${label}.security`);
  validateLinks(project.links, label);
}

function validateExperience(role, locale, index) {
  const label = `${locale}.experience.roles[${index}]`;
  requiredExperienceFields.forEach((field) => {
    if (!(field in role)) errors.push(`${label}: missing ${field}`);
    if (isBlank(role[field])) errors.push(`${label}.${field}: empty string`);
  });
  requireNonEmptyArray(role.achievements, `${label}.achievements`);
  requireNonEmptyArray(role.stack, `${label}.stack`);
  requireNonEmptyArray(role.security, `${label}.security`);
}

function unique(values, label) {
  const seen = new Set();
  values.forEach((value) => {
    if (seen.has(value)) errors.push(`${label}: duplicate ${value}`);
    seen.add(value);
  });
}

const content = Object.fromEntries(locales.map((locale) => [locale, readJson(locale)]));

for (const locale of locales) {
  const data = content[locale];
  const projectSlugs = data.projects.map((project) => project.slug);
  unique(projectSlugs, `${locale}.projects`);
  data.projects.forEach((project) => validateProject(project, locale));

  data.featuredProjects.forEach((slug) => {
    if (!projectSlugs.includes(slug)) {
      errors.push(`${locale}.featuredProjects: unknown project slug ${slug}`);
    }
  });

  data.experience.roles.forEach((role, index) => validateExperience(role, locale, index));

  requireNonEmptyArray(data.academic.education, `${locale}.academic.education`);
  requireNonEmptyArray(data.academic.certifications, `${locale}.academic.certifications`);
  requireNonEmptyArray(data.academic.languages, `${locale}.academic.languages`);
}

const frProjectSlugs = content.fr.projects.map((project) => project.slug).sort();
const enProjectSlugs = content.en.projects.map((project) => project.slug).sort();
if (JSON.stringify(frProjectSlugs) !== JSON.stringify(enProjectSlugs)) {
  errors.push("fr/en projects must use the same slugs");
}

const frFeatured = [...content.fr.featuredProjects].sort();
const enFeatured = [...content.en.featuredProjects].sort();
if (JSON.stringify(frFeatured) !== JSON.stringify(enFeatured)) {
  errors.push("fr/en featuredProjects must use the same slugs");
}

if (errors.length > 0) {
  console.error("Content validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Content validation passed.");
