export function slugify(input?: string) {
    if (!input) return '';

    let slug = input.toLowerCase().trim();

    if (/[\u3131-\uD79D]/.test(slug)) {
        slug = slug.replace(/[^\uAC00-\uD7A3\u3131-\uD79Da-z0-9\s-]/g, '')
                  .trim()
                  .replace(/[\s-]+/g, '-');
        return slug;
    }

    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
}
