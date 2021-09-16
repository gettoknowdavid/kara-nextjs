import { gql } from '@apollo/client';

export const HomeQuery = gql`
    query Home {
        home {
            seo {
                metaTitle
                metaDescription
                isProduct
                shareImage {
                    url
                    alternativeText
                }
            }
            categories {
                id
                title
                slug
            }
        }
    }
`;
