export enum PAYMENT_TYPE {
  UN_KNOW = "UN_KNOW",
  WX = "WX",
  ZFB = "ZFB",
  VISA = "VISA",
  CASH = "CASH",
  // PAY_BACK = "PAY_BACK"
}

export const PAYMENT_TYPE_LABEL = {
  [PAYMENT_TYPE.UN_KNOW]: "未知",
  [PAYMENT_TYPE.WX]: "微信支付",
  [PAYMENT_TYPE.ZFB]: "支付宝支付",
  [PAYMENT_TYPE.VISA]: "信用卡支付",
  [PAYMENT_TYPE.CASH]: "现金支付",
  // [PAYMENT_TYPE.PAY_BACK]: "退款"
}

export const PAYMENT_OPTIONS = [
  { value: PAYMENT_TYPE.UN_KNOW, label: PAYMENT_TYPE_LABEL[PAYMENT_TYPE.UN_KNOW] },
  { value: PAYMENT_TYPE.WX, label: PAYMENT_TYPE_LABEL[PAYMENT_TYPE.WX] },
  { value: PAYMENT_TYPE.ZFB, label: PAYMENT_TYPE_LABEL[PAYMENT_TYPE.ZFB] },
  { value: PAYMENT_TYPE.VISA, label: PAYMENT_TYPE_LABEL[PAYMENT_TYPE.VISA] },
  { value: PAYMENT_TYPE.CASH, label: PAYMENT_TYPE_LABEL[PAYMENT_TYPE.CASH] },
  // { value: PAYMENT_TYPE.PAY_BACK, label: PAYMENT_TYPE_LABEL[PAYMENT_TYPE.PAY_BACK] }
]

export enum ORDER_STATUS {
  SUBMITTED = 10,
  WAITING_CONFIRM = 20,
  CONFIRMED = 30,
  USER_CANCELED = 50,
  OPERATE_CANCELED = 51,
  DONE = 100
}

export const ORDER_STATUS_LABEL = {
  [ORDER_STATUS.SUBMITTED]: "待付款",
  [ORDER_STATUS.WAITING_CONFIRM]: "已付款",
  [ORDER_STATUS.CONFIRMED]: "已确认",
  [ORDER_STATUS.USER_CANCELED]: "已取消(用户)",
  [ORDER_STATUS.OPERATE_CANCELED]: "已取消(运营)",
  [ORDER_STATUS.DONE]: "已完成"
}

export const ORDER_STATUS_OPTIONS = [
  { value: ORDER_STATUS.SUBMITTED, label: ORDER_STATUS_LABEL[ORDER_STATUS.SUBMITTED] },
  { value: ORDER_STATUS.WAITING_CONFIRM, label: ORDER_STATUS_LABEL[ORDER_STATUS.WAITING_CONFIRM] },
  { value: ORDER_STATUS.CONFIRMED, label: ORDER_STATUS_LABEL[ORDER_STATUS.CONFIRMED] },
  { value: ORDER_STATUS.USER_CANCELED, label: ORDER_STATUS_LABEL[ORDER_STATUS.USER_CANCELED] },
  { value: ORDER_STATUS.OPERATE_CANCELED, label: ORDER_STATUS_LABEL[ORDER_STATUS.OPERATE_CANCELED] },
  { value: ORDER_STATUS.DONE, label: ORDER_STATUS_LABEL[ORDER_STATUS.DONE] }
]