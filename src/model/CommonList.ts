import request from "@/utils/request";
import { action, makeObservable, observable } from "mobx";


export class CommonList<T> {
  public page = 1;
  public limit = 10;
  public total = 0;

  public loading = false;
  public list: T[] = [];

  public url = '';

  constructor(url: string) {
    this.url = url;

    makeObservable(this, {
      loading: observable,
      list: observable,
      page: observable,
      total: observable,

      setLoading: action,
      setList: action,
      setPage: action,
      setTotal: action
    });
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setList(list: T[]) {
    this.list = list;
  }

  setPage(page: number) {
    this.page = page;
  }

  setTotal(total: number) {
    this.total = total;
  }

  afterFetch(item: T) {
    return item;
  }

  refresh(needResetPage = true) {
    if (needResetPage) {
      this.setPage(1);
    }

    return this.fetch();
  }

  async fetch(): Promise<void> {
    this.setLoading(true);

    try {
      const { list, total } = await request<{ list: T[], total: number }>({
        url: this.url,
        method: 'GET',
        queryParams: {
          page: this.page,
          limit: this.limit
        }
      })

      this.setList(list.map(i => this.afterFetch(i)))
      this.setTotal(total)
    } catch (error) {
      console.error(error);
    } finally {
      this.setLoading(false);
    }
  }

  nextPage(): Promise<void> {
    this.page += 1;
    return this.fetch();
  }

  prevPage(): Promise<void> {
    this.page -= 1;
    return this.fetch();
  }

  gotoPage(page: number): Promise<void> {
    this.setPage(page);
    return this.fetch();
  }
}