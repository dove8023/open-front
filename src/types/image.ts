/**
 * Image type enum, used to identify the type of image uploaded for one record. Easy for filtering images by type.
 */
export enum PRODUCT_IMAGE_TYPE {
  THUMBNAIL = 'thumbnail',
  MAIN = 'main',
  OTHER = 'other'
}

export enum USER_IMAGE_TYPE {
  AVATAR = 'avatar',
  BACKGROUND = 'background',
  OTHER = 'other'
}

export type IMAGE_TYPE = PRODUCT_IMAGE_TYPE | USER_IMAGE_TYPE;