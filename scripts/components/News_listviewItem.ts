import Button from '@smartface/native/ui/button';
import ListViewItemNewsDesign from 'generated/my-components/News_listviewItem';

export default class News_listviewItem extends ListViewItemNewsDesign {
    pageName?: string | undefined;
    _openNews: (...args) => void;
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
        this.lblTitle.on(Button.Events.Touch, () => {
            this._openNews && this._openNews();
        });
    }

    static getHeight(): number {
        return 300;
    }

    get titleText(): string {
        return this.lblTitle.text || "";
    }
    set titleText(value: string) {
        this.lblTitle.text = typeof value === "string" ? value : "";
    }

    get descriptionText(): string {
        return this.lblDescription.text || "";
    }
    set descriptionText(value: string) {
        this.lblDescription.text = typeof value === "string" ? value : "";
    }

    get onActionClick(): (...args) => void {
        return this._openNews;
    }

    set onActionClick(value: (...args) => void) {
        this._openNews = value;
    }
}
