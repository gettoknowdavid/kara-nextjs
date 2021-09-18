import { gql } from '@apollo/client';

export const ProductsFragment = gql`
    fragment Products on Product {
        id
        title
        slug
        description
        price
        inStock
        featuredImage {
            url
            alternativeText
        }
        images {
            id
            url
            alternativeText
        }
        tags {
            id
            title
        }
        category {
            id
            title
            slug
        }
        type {
            id
            title
            slug
        }
    }
`;
