import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import test from 'node:test';
import { isSafeHttpsUrl, isSafeLinkHref, isSafePaperUrl, parseInlineLinks } from './security-utils.ts';

test('external URLs require HTTPS and reject embedded credentials', () => {
    assert.equal(isSafeHttpsUrl('https://example.com/path'), true);
    assert.equal(isSafeHttpsUrl('http://example.com/path'), false);
    assert.equal(isSafeHttpsUrl('javascript:alert(1)'), false);
    assert.equal(isSafeHttpsUrl('https://user:password@example.com'), false);
});

test('paper URLs allow HTTPS or a single local PDF filename', () => {
    assert.equal(isSafePaperUrl('https://arxiv.org/pdf/2503.12358'), true);
    assert.equal(isSafePaperUrl('/papers/A Human Readable Paper.pdf'), true);
    assert.equal(isSafePaperUrl('/papers/../private.key'), false);
    assert.equal(isSafePaperUrl('/papers/%2e%2e/private.key'), false);
    assert.equal(isSafePaperUrl('/papers/nested/paper.pdf'), false);
    assert.equal(isSafePaperUrl('/papers/paper.pdf?download=1'), false);
});

test('rendered links only allow expected browser-safe destinations', () => {
    assert.equal(isSafeLinkHref('/about'), true);
    assert.equal(isSafeLinkHref('#research'), true);
    assert.equal(isSafeLinkHref('mailto:hello@example.com'), true);
    assert.equal(isSafeLinkHref('//attacker.example'), false);
    assert.equal(isSafeLinkHref('data:text/html,payload'), false);
    assert.equal(isSafeLinkHref('javascript:alert(1)'), false);
});

test('unsafe Markdown destinations are rendered as text instead of links', () => {
    assert.deepEqual(parseInlineLinks('Go to [About](/about).'), [
        { text: 'Go to ' },
        { text: 'About', href: '/about' },
        { text: '.' }
    ]);
    assert.deepEqual(parseInlineLinks('[Click](javascript:alert)'), [{ text: 'Click' }]);
});

test('all checked-in content URLs satisfy the security policy', () => {
    for (const filename of globSync('src/content/projects/*.{md,mdx}')) {
        const content = readFileSync(filename, 'utf8');
        for (const [, field, value] of content.matchAll(/^(projectUrl|sourceUrl):\s*['"]([^'"]+)['"]\s*$/gm)) {
            assert.equal(isSafeHttpsUrl(value), true, `${filename}: ${field} must use a safe HTTPS URL`);
        }
    }

    for (const filename of globSync('src/content/research/*.{md,mdx}')) {
        const content = readFileSync(filename, 'utf8');
        for (const [, value] of content.matchAll(/^paperUrl:\s*['"]([^'"]+)['"]\s*$/gm)) {
            assert.equal(isSafePaperUrl(value), true, `${filename}: paperUrl must use a safe paper URL`);
        }
    }
});
