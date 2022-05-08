import ListViewItemNews from "components/News_listviewItem";
import MyPageDesign from 'generated/pages/sportsPage';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import { Category, INews } from "types";
import { hideWaitDialog, showWaitDialog } from "lib/waitDialog";
import { getNews } from "service/news";


export default class SportsPage extends withDismissAndBackButton(MyPageDesign) {
    data: INews[] = [];
    isLoading: boolean = false;
    page: number =  1;
    totalResults: number;
    constructor(private router?: Router, private route?: Route) {
        super({});
    }

    centerizeTheChildrenLayout() {
        this.dispatch({
            type: "updateUserStyle",
            userStyle: {
                flexProps: {
                  flexDirection: 'ROW',
                  justifyContent: 'CENTER',
                  alignItems: 'CENTER'
                }
            }
        })
      }

      refreshListView() {
        this.listNews.itemCount = this.data?.length;
        this.listNews.refreshData();
        this.listNews.stopRefresh();
        this.isLoading = false;
    }

    async getNewsData() {
        try {
            showWaitDialog()
            const response = await getNews(Category.SPORTS, this.page);
            this.data = [...this.data,...response.articles]
            this.totalResults = response.totalResults
        } catch (error) {
            throw new Error(global.lang.productServiceError);
        } finally {
            this.refreshListView();
            hideWaitDialog();
        }
    }

    pushMoreToDataset() {
        this.getNewsData()
    }

    initListView() {
        this.listNews.onRowBind = (listViewItem: ListViewItemNews, index: number) => {
            listViewItem.image.loadFromUrl({
                url:this.data[index].urlToImage,
                useHTTPCacheControl: true,
            })
            listViewItem.titleText = this.data[index].title;
            listViewItem.descriptionText = this.data[index].description

            if (index > this.data.length - 3 && !this.isLoading && !(this.totalResults<= this.data.length)) {
                this.isLoading = true;
                this.page = this.page+1
                this.pushMoreToDataset();
              }
        }
    }

    /**
     * @event onShow
     * This event is called when the page appears on the screen (everytime).
     */
    onShow() {
        super.onShow();
        
    }

    /**
     * @event onLoad
     * This event is called once when the page is created.
     */
    onLoad() {
        super.onLoad();
        this.centerizeTheChildrenLayout();
        this.initListView();
        this.refreshListView()
        this.getNewsData();
    }
    
  
}

