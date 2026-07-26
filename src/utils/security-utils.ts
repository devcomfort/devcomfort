export type TextSegment = { text: string; href?: string };

export function isSafeHttpsUrl(value: string): boolean {
    try {
        const url = new URL(value);
        return url.protocol === 'https:' && !url.username && !url.password;
    } catch {
        return false;
    }
}

export function isSafePaperUrl(value: string): boolean {
    if (isSafeHttpsUrl(value)) return true;

    try {
        const decodedPath = decodeURIComponent(value);
        const filename = decodedPath.slice('/papers/'.length);

        return (
            decodedPath.startsWith('/papers/') &&
            filename.length > '.pdf'.length &&
            filename.toLowerCase().endsWith('.pdf') &&
            !decodedPath.includes('..') &&
            !decodedPath.includes('\\') &&
            !decodedPath.includes('?') &&
            !decodedPath.includes('#') &&
            !filename.includes('/')
        );
    } catch {
        return false;
    }
}

export function isSafeLinkHref(value: string): boolean {
    return (
        isSafeHttpsUrl(value) ||
        /^\/(?!\/)[^\\]*$/.test(value) ||
        /^#[A-Za-z][\w:.-]*$/.test(value) ||
        /^mailto:[^\s?@]+@[^\s?@]+$/i.test(value)
    );
}

export function parseInlineLinks(text: string): TextSegment[] {
    const segments: TextSegment[] = [];
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    let cursor = 0;

    for (const match of text.matchAll(linkPattern)) {
        const index = match.index ?? 0;
        if (index > cursor) segments.push({ text: text.slice(cursor, index) });

        const [, label, href] = match;
        segments.push(isSafeLinkHref(href) ? { text: label, href } : { text: label });
        cursor = index + match[0].length;
    }

    if (cursor < text.length) segments.push({ text: text.slice(cursor) });
    return segments;
}
