export function isUUID(str: string): boolean {
  const regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regex.test(str);
}

export interface II18nItem {
  column_name: string;
  value: string;
}

export function getI18nItemText(
  items: II18nItem[],
  columnName: string
): string {
  const item = items.find((i) => i.column_name === columnName);
  return item?.value || "";
}

export function setI18nItemText(
  items: II18nItem[],
  columnName: string,
  value: string | number
) {
  const item = items.find((i) => i.column_name === columnName);
  if (item) {
    item.value = value.toString();
    return;
  }

  items.push({
    column_name: columnName,
    value: value.toString(),
  });
}
