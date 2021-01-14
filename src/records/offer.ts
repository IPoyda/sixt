import {IImages, IOfferData, IPrice} from "../common/types";
import {BASE_URL} from "../constants";

export class OfferRecord {
    public id: string;
    public name: string;
    public price: IPrice;
    public images: IImages;

    constructor(offerData: IOfferData) {
        this.id = offerData.id;
        this.name = OfferRecord.getName(offerData);
        this.price = OfferRecord.getPrice(offerData);
        this.images = OfferRecord.getImages(offerData);
    }

    private static getName(offerData: IOfferData): string {
        return offerData?.headlines?.description || "";
    }

    private static getPrice(offerData: IOfferData): IPrice {
        const defaultPrice = {
            currency: 'EUR',
            display: '0,0',
            value: 0,
        }
        return offerData?.prices?.totalPrice?.amount || defaultPrice;
    }

    private static getImages(offerData: IOfferData): IImages {
        const images: IImages = offerData?.images || {};
        const updatePath = (path = "") => `${BASE_URL}${(path).split("//").pop()}`;
        return {
            small: updatePath(images.small),
            medium: updatePath(images.medium),
            large: updatePath(images.large),
        }
    }
}