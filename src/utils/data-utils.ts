import { slugify } from './common-utils';

export type Tag = {
    name: string;
    slug: string;
};

export function sortItemsByDateDesc<T extends { data: { publishDate: Date } }>(itemA: T, itemB: T) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function getAllTags<T extends { data: { tags?: string[] } }>(posts: T[]): Tag[] {
    const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => ({
            name: tag,
            slug: slugify(tag)
        }))
        .filter((obj, pos, arr) => arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos);
}

export function getPostsByTag<T extends { data: { tags?: string[] } }>(posts: T[], tagSlug: string): T[] {
    return posts.filter((post) => (post.data.tags || []).map((tag: string) => slugify(tag)).includes(tagSlug));
}
