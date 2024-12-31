// aliases

/**
 * **Flame Component** is an `alias` that represents a **FlameJS**
 *  component which is ultimately just a string.
 */
export type StringFlameComponent = string;

/**
 * **Flame Styles** is an `alias` that represents the styles of a **FlameJS**
 *  component which is ultimately just a string.
 */
export type FlameStyles = string;

/**
 * **Flame Title** is an `alias` that represents the title of a **FlameJS**
 *  app which is ultimately just a string.
 */
export type FlameTitle = string;

// types

/**
 * Type referring to the any `ID` of **FlameApp**.
 */
export type FlameID = `#${string}`;

/**
 * Type referring to FlameApp sizes in pixels. 
 * 
 * **[WARN]**
 * `Only accepts pixels.`
 */
export type FlamePixelsSize = `${number}px`;

/**
 * Type referring to FlameApp sizes in percent values. 
 * 
 * **[WARN]**
 * `Only accepts percent values.`
 */
export type FlamePercentSize = `${number}%`;

/**
 * Type referring to FlameApp sizes in View Widht. 
 * 
 * **[WARN]**
 * `Only accepts View Width values.`
 */
export type FlameViewWidthSize = `${number}vw`;

/**
 * Type referring to FlameApp sizes in View Height. 
 * 
 * **[WARN]**
 * `Only accepts View Height values.`
 */
export type FlameViewHeightSize = `${number}vh`;

export interface FlameAppProperties {
    document: Document;
    debug?: boolean;
    title?: FlameTitle;
    description?: string;
}

export interface FlameAppI {
    body: HTMLElement;
    document: Document;
    title: FlameTitle;
    description: string;
}

export type FlameSingleTags = 
    "area" | "basefont" | "base" | "bgsound" | "br" |
    "col" | "embed" | "hr" | "img" | "input" | 
    "keygen" | "link" | "meta" | "param" | "source" | 
    "track" | "wbr";

export type FlameTags = 
"abbr" | "acronym" | "address" | "a" | "applet" | "article" | "aside" | "audio" |
"bdi" | "bdo" | "big" | "blockquote" | "body" | "b" | "button" | "caption" | "canvas" |
"center" | "cite" | "code" | "colgroup" | "data" | "datalist" | "dd" | "dfn" | "del" |
"details" | "dialog" | "div" | "dl" | "dt" | "fieldset" | "figcaption" | "figure" |
"footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" |
"hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" |
"label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" |
"meta" | "meter" | "nav" | "noscript" | "object" | "ol" | "optgroup" | "option" |
"output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" |
"ruby" | "s" | "samp" | "script" | "section" | "select" | "small" | "source" |
"span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" |
"td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" |
"tr" | "track" | "u" | "ul" | "var" | "video" | "wbr";

export type FlameComponentT = `<${FlameTags}>${any}</${FlameTags}>` | `<${FlameSingleTags}>`;

export type FlameTagOpen = `<${FlameTags}>`;
export type FlameTagClose = `</${FlameTags}>`;
export type FlameComment = `<!--${string}-->`


