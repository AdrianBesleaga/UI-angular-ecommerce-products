export interface Product {
  asin: string;
  parentASIN: string;
  errors?: null;
  detailPageURL: string;
  itemLinks: ItemLinks;
  salesRank: string;
  smallImage: SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage;
  mediumImage: SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage;
  largeImage: SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage;
  imageSets?: (ImageSetsEntity)[] | null;
  itemAttributes: ItemAttributes;
  variationAttributes?: null;
  relatedItems?: (null)[] | null;
  collections?: null;
  subjects?: null;
  offerSummary: OfferSummary;
  offers: Offers;
  rentalOffers?: null;
  variationSummary?: null;
  variations?: null;
  customerReviews: CustomerReviews;
  editorialReviews: EditorialReviews;
  similarProducts?: null;
  accessories?: null;
  tracks?: null;
  browseNodes: BrowseNodes;
  alternateVersions?: null;
}
export interface ItemLinks {
  itemLink?: (ItemLinkEntity)[] | null;
}
export interface ItemLinkEntity {
  description: string;
  url: string;
}
export interface SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage {
  url: string;
  height: HeightOrWidthOrLengthOrWeight;
  width: HeightOrWidthOrLengthOrWeight;
  isVerified?: null;
}
export interface HeightOrWidthOrLengthOrWeight {
  value: number;
  units: string;
}
export interface ImageSetsEntity {
  imageSet?: (ImageSetEntity)[] | null;
}
export interface ImageSetEntity {
  swatchImage: SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage;
  smallImage: SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage;
  thumbnailImage: SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage;
  tinyImage: SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage;
  mediumImage: SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage;
  largeImage: SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage;
  hiResImage: SwatchImageOrSmallImageOrThumbnailImageOrTinyImageOrMediumImageOrLargeImageOrHiResImage;
  category: string;
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
  clothingSize: string;
  color: string;
  creator?: (null)[] | null;
  department: string;
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
  isAdultProduct: boolean;
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
  listPrice: ListPriceOrLowestNewPriceOrLowestUsedPriceOrPrice;
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
  operatingSystem: string;
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
  size: string;
  sku?: null;
  studio: string;
  subscriptionLength?: null;
  title: string;
  trackSequence?: null;
  tradeInValue?: null;
  upc: string;
  warranty?: null;
  eanlist: Eanlist;
  ceroageRating?: null;
  esrbageRating?: null;
  upclist: Upclist;
  weeetaxValue?: null;
}
export interface ItemDimensionsOrPackageDimensions {
  height: HeightOrWidthOrLengthOrWeight;
  length: HeightOrWidthOrLengthOrWeight;
  weight: HeightOrWidthOrLengthOrWeight;
  width: HeightOrWidthOrLengthOrWeight;
}
export interface ListPriceOrLowestNewPriceOrLowestUsedPriceOrPrice {
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
export interface OfferSummary {
  lowestNewPrice: ListPriceOrLowestNewPriceOrLowestUsedPriceOrPrice;
  lowestUsedPrice: ListPriceOrLowestNewPriceOrLowestUsedPriceOrPrice;
  lowestCollectiblePrice?: null;
  lowestRefurbishedPrice?: null;
  totalNew: string;
  totalUsed: string;
  totalCollectible: string;
  totalRefurbished: string;
}
export interface Offers {
  totalOffers: number;
  totalOfferPages: number;
  moreOffersUrl: string;
  offer?: (OfferEntity)[] | null;
}
export interface OfferEntity {
  merchant?: null;
  offerAttributes: OfferAttributes;
  offerListing?: (OfferListingEntity)[] | null;
  loyaltyPoints?: null;
  promotions?: null;
}
export interface OfferAttributes {
  condition: string;
}
export interface OfferListingEntity {
  offerListingId: string;
  pricePerUnit?: null;
  price: ListPriceOrLowestNewPriceOrLowestUsedPriceOrPrice;
  salePrice?: null;
  amountSaved?: null;
  percentageSaved?: null;
  availability: string;
  availabilityAttributes: AvailabilityAttributes;
  isEligibleForSuperSaverShipping: boolean;
  isEligibleForPrimeFreeDigitalVideo?: null;
  isEligibleForPrime: boolean;
}
export interface AvailabilityAttributes {
  availabilityType: string;
  isPreorder?: null;
  minimumHours: number;
  maximumHours: number;
}
export interface CustomerReviews {
  hasReviews: boolean;
  iframeURL: string;
}
export interface EditorialReviews {
  editorialReview?: (EditorialReviewEntity)[] | null;
}
export interface EditorialReviewEntity {
  source: string;
  content: string;
  isLinkSuppressed: boolean;
}
export interface BrowseNodes {
  request?: null;
  browseNode?: (BrowseNodeEntity)[] | null;
}
export interface BrowseNodeEntity {
  browseNodeId: string;
  name: string;
  isCategoryRoot?: null;
  properties?: null;
  children?: AncestorsOrChildren | null;
  ancestors: Ancestors;
  topSellers?: null;
  newReleases?: null;
  topItemSet?: (null)[] | null;
}
export interface AncestorsOrChildren {
  browseNode?: (BrowseNodeEntity1)[] | null;
}
export interface BrowseNodeEntity1 {
  browseNodeId: string;
  name: string;
  isCategoryRoot?: null;
  properties?: null;
  children?: null;
  ancestors?: null;
  topSellers?: null;
  newReleases?: null;
  topItemSet?: (null)[] | null;
}
export interface Ancestors {
  browseNode?: (BrowseNodeEntity2)[] | null;
}
export interface BrowseNodeEntity2 {
  browseNodeId: string;
  name: string;
  isCategoryRoot?: null;
  properties?: null;
  children?: null;
  ancestors?: Ancestors1 | null;
  topSellers?: null;
  newReleases?: null;
  topItemSet?: (null)[] | null;
}
export interface Ancestors1 {
  browseNode?: (BrowseNodeEntity3)[] | null;
}
export interface BrowseNodeEntity3 {
  browseNodeId: string;
  name: string;
  isCategoryRoot?: boolean | null;
  properties?: null;
  children?: null;
  ancestors: Ancestors2;
  topSellers?: null;
  newReleases?: null;
  topItemSet?: (null)[] | null;
}
export interface Ancestors2 {
  browseNode?: (BrowseNodeEntity4)[] | null;
}
export interface BrowseNodeEntity4 {
  browseNodeId: string;
  name: string;
  isCategoryRoot?: boolean | null;
  properties?: null;
  children?: null;
  ancestors?: AncestorsOrChildren1 | null;
  topSellers?: null;
  newReleases?: null;
  topItemSet?: (null)[] | null;
}
export interface AncestorsOrChildren1 {
  browseNode?: (BrowseNodeEntity1)[] | null;
}

// https://jvilk.com/MakeTypes/
