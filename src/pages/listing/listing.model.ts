export class ListingModel {
  populars: Array<ListingItemModel>;
  categories: Array<ListingItemModel>;
  banner_title: string;
  banner_sub: string;
  banner_image: string;
  banner_desp: string;
  
}

export class ListingItemModel {
  title: string;
  image: string;
}
