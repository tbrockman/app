import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Paragraph from '@tiptap/extension-paragraph';
import { Highlight } from '@tiptap/extension-highlight';
import { Superscript } from '@tiptap/extension-superscript';
import { Subscript } from '@tiptap/extension-subscript';
import { markInputRule, markPasteRule, Node } from '@tiptap/core';
import ListItem from '@tiptap/extension-list-item';
import { v4 } from 'uuid';

import { DOMParser } from '@tiptap/pm/model';
import { parseHTML } from 'zeed-dom';
import { Extensions, getSchema, Mark } from '@tiptap/vue-2';
import {
    kbdInputRegex,
    kbdPasteRegex,
} from '~/components/editor/extensions/kbd';
import { CodeBlock } from './codeblock-codemirror';

export const generateJSON = (
    html: string,
    extensions: Extensions,
): Record<string, any> => {
    const schema = getSchema(extensions);
    const dom = parseHTML(html) as unknown as Node;

    return DOMParser.fromSchema(schema)
        .parse(dom as any, { preserveWhitespace: 'full' })
        .toJSON();
};

const createParserNode = (
    name: string,
    group: string,
    attributes: Record<string, any>,
    tag: string,
    content?: string,
) => {
    return Node.create({
        name,
        group,
        inline: group.includes('inline'),
        content,

        addAttributes() {
            return attributes;
        },

        parseHTML() {
            return [
                {
                    tag,
                },
            ];
        },
    });
};

const DetailsNode = createParserNode(
    'details',
    'block',
    {
        type: {
            default: 'info',
        },
        id: {
            default: () => v4(),
        },
        open: {
            default: true,
        },
    },
    'details',
    'detailsSummary detailsContent',
);

const DetailsSummaryNode = createParserNode(
    'detailsSummary',
    'block',
    {
        type: {
            default: 'info',
        },
        id: {
            default: () => v4(),
        },
        open: {
            default: true,
        },
    },
    'summary',
    'text*',
);

const DetailsContentNode = createParserNode(
    'detailsContent',
    'block',
    {
        type: {
            default: 'info',
        },
        id: {
            default: () => v4(),
        },
        open: {
            default: true,
        },
    },
    'div[data-type="detailsContent"]',
    'block+',
);

const DocumentLinkParserNode = createParserNode(
    'inlineDocumentLink',
    'inline',
    {
        id: {
            default: 'new',
        },
        preview: {
            default: undefined,
        },
        oc: {
            default: undefined,
        },
    },
    'inline-document-link',
);
const EventParserNode = createParserNode(
    'inlineEvent',
    'inline',
    {
        id: {
            default: 'new',
        },
    },
    'inline-event',
);
const InlineKaTeXParserNode = createParserNode(
    'inlineKatex',
    'inline',
    {
        expression: {
            default: '',
        },
    },
    'inline-katex-component',
);

const BlockKaTeXParserNode = createParserNode(
    'blockKatex',
    'block',
    {
        expression: {
            default: '',
        },
    },
    'block-katex-component',
);

const MermaidParserNode = createParserNode(
    'mermaid-component',
    'block',
    {
        expression: {
            default: '',
        },
    },
    'mermaid-component',
);

const BlockImageComponentParserNode = createParserNode(
    'imageComponent',
    'block',
    {
        id: {
            default: null,
        },
        src: {
            default: null,
        },
        alt: {
            default: null,
        },
        title: {
            default: null,
        },
    },
    'image-component',
);

const BlockImageParserNode = createParserNode(
    'image-block',
    'block',
    {
        id: {
            default: null,
        },
        src: {
            default: null,
        },
        alt: {
            default: null,
        },
        title: {
            default: null,
        },
    },
    'img',
);

const InlineImageParserNode = createParserNode(
    'image-inline',
    'inline',
    {
        id: {
            default: null,
        },
        src: {
            default: null,
        },
        alt: {
            default: null,
        },
        title: {
            default: null,
        },
    },
    'img',
);

const JiraLink = createParserNode(
    'jira-link',
    'inline',
    {
        id: {
            default: '',
        },
        url: {
            default: '',
        },
    },
    'jira-link',
);

const GithubLink = createParserNode(
    'github-link',
    'inline',
    {
        id: {
            default: '',
        },
        url: {
            default: '',
        },
    },
    'github-link',
);

const JiraIssueLinks = createParserNode(
    'jira-issue',
    'block',
    { id: { default: null } },
    'jira-issue',
);

const YoutubeParserNode = createParserNode(
    'youtube',
    'block',
    {
        src: {
            default: null,
            parseHTML: (element: any) => {
                const src = element?.firstChild?.getAttribute('src');
                if (!src) return null;
                const videoId = src.split('/').pop();
                return `https://www.youtube.com/watch?v=${videoId}`;
            },
        },
    },
    'div[data-youtube-video=""]',
);

const InlineTaskParserNode = createParserNode(
    'taskItemContent',
    'block',
    {
        id: { default: null },
        start: { default: null },
        end: { default: null },
        rrule: { default: null },
        completed: { default: false },
    },
    'div[data-type="taskItemContent"]',
    'inline*',
);

const KbdParserNode = Mark.create({
    name: 'kbd',
    excludes: '_',
    inclusive: false,

    parseHTML() {
        return [
            {
                tag: 'kbd',
            },
        ];
    },

    renderHTML() {
        return ['kbd'];
    },
});

const HashtagParserNode = Node.create({
    name: 'hashtag',
    group: 'inline',
    inline: true,

    addAttributes() {
        return {
            id: {
                default: null,
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: 'hashtag',
            },
        ];
    },
});

export const CodeBlockParserNode = CodeBlock

export const ParserNodesList = [
    InlineTaskParserNode,
    DetailsNode,
    DetailsSummaryNode,
    DetailsContentNode,
    MermaidParserNode,
    DocumentLinkParserNode,
    EventParserNode,
    InlineKaTeXParserNode,
    BlockKaTeXParserNode,
    InlineImageParserNode,
    BlockImageParserNode,
    BlockImageComponentParserNode,
    HashtagParserNode,
    YoutubeParserNode,
    JiraIssueLinks,
    Table,
    TableRow,
    TableCell,
    TableHeader,
    TaskList,
    TaskItem,
    CodeBlockParserNode,
    StarterKit.configure({
        hardBreak: false,
        codeBlock: false,
        listItem: false,
    }),
    ListItem.extend({
        content: 'block+',
    }),
    Underline,
    Link,
    Paragraph.extend({
        name: 'hard_break',
    }),
    Highlight.configure({
        HTMLAttributes: {
            class: 'text-highlight',
        },
        multicolor: true,
    }),
    Superscript,
    Subscript,
    KbdParserNode,
    GithubLink,
    JiraLink,
];
