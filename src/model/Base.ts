export default class Base {
  public id?: string;
  public created_time?: string;
  public updated_time?: string;


  initValues<T>(item: T) {
    Object.keys(item as Object).forEach(key => {
      const k = key as keyof T;
      if (Object.hasOwnProperty.call(item, key)) {
        (this as any)[k] = item[k]
      }
    });

    return this;
  }
}