import contentful, { Entry, EntryFieldTypes } from "contentful";

export interface Catalogue {
    contentTypeId:"colorins",
    fields:{
        id: string
        category: EntryFieldTypes.Text,
        tipoDePrenda: EntryFieldTypes.Text,
        title: EntryFieldTypes.Text,
        color: EntryFieldTypes.Text,
        tallas: EntryFieldTypes.Text,
        price: EntryFieldTypes.Number,
        outlet: EntryFieldTypes.Number,
        sku: EntryFieldTypes.Text,
        imagenes: EntryFieldTypes.AssetLink,
    }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});