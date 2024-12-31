import { defaultCSS } from "./defaults";
import { FlameAppI, FlameAppProperties, StringFlameComponent, FlameStyles, FlameTitle, FlameSingleTags, FlameTags, FlameTagOpen, FlameComponentT } from "./@types";

export class FlameApp implements FlameAppI {

    public body;
    public document;
    public title;
    public description;

    constructor(props: FlameAppProperties) { 
        this.body = props.document.body;
        this.document = props.document;
        this.title = props.title || "FlameJS";
        this.description = props.description || "Just a FlameApp";

        this.replaceStyles(defaultCSS);
        this.setTitle(this.title);
    }

    public getTitle(): FlameTitle { return this.document.title; }

    public setTitle(title: string): void { 
        this.title = title;
        this.document.title = title;
    }
    public getDescription(): string { return this.description }

    public setDescription(description: string): void { 
        this.description = description;
    }

    public appendDefaults(defauts: StringFlameComponent[]): void { 
        defauts.forEach((component: StringFlameComponent) => {
            this.document.body.innerHTML += component;
        });
    }

    public replaceStyles(styles: FlameStyles): void {
        this.document.head.innerHTML = styles;
    }

    public append(content: StringFlameComponent | StringFlameComponent[]) {
        if (Array.isArray(content)) {
            content.forEach((component: StringFlameComponent) => {
                this.body.innerHTML += component;
            })
        } else {
            this.document.body.innerHTML += content;
        }
    }

    public replace(content: StringFlameComponent | StringFlameComponent[]) {
        var full: string;
        if (Array.isArray(content)) {
            content.forEach((component: StringFlameComponent) => {
                full += component;
                this.document.body.innerHTML = full;
            });
        } else {
            full = content;
            this.document.body.innerHTML = full;
        }
    }
}

export class FlameComponent {
    private tagName: FlameTags | FlameSingleTags;
    private content?: string;
    private attributes: Record<string, string> = {};

    constructor(tagName: FlameTags | FlameSingleTags, content?: string, attributes?: Record<string, string>) {
        this.tagName = tagName;
        this.content = content;
        if (attributes) {
            this.attributes = attributes;
        }
    }

    // Método para adicionar ou atualizar atributos
    public setAttribute(key: string, value: string): void {
        this.attributes[key] = value;
    }

    // Método para definir o conteúdo
    public setContent(content: string): void {
        this.content = content;
    }

    // Método para renderizar a tag HTML
    public render(): string {
        // Constrói a string de atributos
        const attrs = Object.entries(this.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(' ');

        // Se a tag for uma tag única, retorna apenas a tag
        if (['area', 'basefont', 'base', 'bgsound', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'].includes(this.tagName as FlameSingleTags)) {
            return `<${this.tagName}${attrs ? ' ' + attrs : ''} />`;
        }

        // Retorna a tag com conteúdo e atributos
        return `<${this.tagName}${attrs ? ' ' + attrs : ''}>${this.content || ''}</${this.tagName}>`;
    }
}