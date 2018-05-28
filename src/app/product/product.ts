export interface Product {
  asin: string;
  parentASIN: string;
  errors?: null;
  detailPageURL: string;
  itemLinks: ItemLinks;
  salesRank?: null;
  smallImage?: null;
  mediumImage?: null;
  largeImage?: null;
  imageSets?: (null)[] | null;
  itemAttributes: ItemAttributes;
  variationAttributes?: null;
  relatedItems?: (null)[] | null;
  collections?: null;
  subjects?: null;
  offerSummary?: null;
  offers?: null;
  rentalOffers?: null;
  variationSummary?: null;
  variations?: null;
  customerReviews?: null;
  editorialReviews?: null;
  similarProducts?: null;
  accessories?: null;
  tracks?: null;
  browseNodes?: null;
  alternateVersions?: null;
}
export interface ItemLinks {
  itemLink?: (ItemLinkEntity)[] | null;
}
export interface ItemLinkEntity {
  description: string;
  url: string;
}
export interface ItemAttributes {
  actor?: (null)[] | null;
  artist?: (null)[] | null;
  aspectRatio?: null;
  audienceRating?: null;
  audioFormat?: (null)[] | null;
  author?: (null)[] | null;
  binding: string;
  brand: string;
  catalogNumberList?: null;
  category?: (null)[] | null;
  clothingSize?: null;
  color: string;
  creator?: (null)[] | null;
  department?: null;
  director?: (null)[] | null;
  ean: string;
  edition?: null;
  eisbn?: (null)[] | null;
  energyEfficiencyClass?: null;
  episodeSequence?: null;
  feature?: (string)[] | null;
  format?: (null)[] | null;
  genre?: null;
  hardwarePlatform?: null;
  hazardousMaterialType?: null;
  isAdultProduct?: null;
  isAutographed?: null;
  isbn?: null;
  isEligibleForTradeIn?: null;
  isMemorabilia?: null;
  issuesPerYear?: null;
  itemDimensions: ItemDimensionsOrPackageDimensions;
  itemPartNumber?: null;
  label: string;
  languages?: null;
  legalDisclaimer?: null;
  listPrice: ListPrice;
  magazineType?: null;
  manufacturer: string;
  manufacturerMaximumAge?: null;
  manufacturerMinimumAge?: null;
  manufacturerPartsWarrantyDescription?: null;
  mediaType?: null;
  model: string;
  modelYear?: null;
  mpn: string;
  numberOfDiscs?: null;
  numberOfIssues?: null;
  numberOfItems?: null;
  numberOfPages?: null;
  numberOfTracks?: null;
  operatingSystem?: null;
  packageDimensions: ItemDimensionsOrPackageDimensions;
  packageQuantity: number;
  partNumber: string;
  pictureFormat?: (null)[] | null;
  platform?: (null)[] | null;
  productGroup: string;
  productTypeName: string;
  productTypeSubcategory?: null;
  publicationDate?: null;
  publisher: string;
  regionCode?: null;
  releaseDate?: null;
  seasonSequence?: null;
  runningTime?: null;
  seikodoProductCode?: null;
  size?: null;
  sku?: null;
  studio: string;
  subscriptionLength?: null;
  title: string;
  trackSequence?: null;
  tradeInValue?: null;
  upc: string;
  warranty?: null;
  ceroageRating?: null;
  eanlist: Eanlist;
  esrbageRating?: null;
  upclist: Upclist;
  weeetaxValue?: null;
}
export interface ItemDimensionsOrPackageDimensions {
  height: HeightOrLengthOrWeightOrWidth;
  length: HeightOrLengthOrWeightOrWidth;
  weight: HeightOrLengthOrWeightOrWidth;
  width: HeightOrLengthOrWeightOrWidth;
}
export interface HeightOrLengthOrWeightOrWidth {
  value: number;
  units: string;
}
export interface ListPrice {
  amount: number;
  currencyCode: string;
  formattedPrice: string;
}
export interface Eanlist {
  eanlistElement?: (string)[] | null;
}
export interface Upclist {
  upclistElement?: (string)[] | null;
}

// https://jvilk.com/MakeTypes/
