import contentful, { EntryFieldTypes } from "contentful";

export interface Catalogue {
    contentTypeId:"colorins",
    fields:{
        category: EntryFieldTypes.Text
        tipoDePrenda: EntryFieldTypes.Text,
        title: EntryFieldTypes.Text,
        color: EntryFieldTypes.Text,
        tallas: EntryFieldTypes.Text,
        price: EntryFieldTypes.Number,
        outlet: EntryFieldTypes.Number
    }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});