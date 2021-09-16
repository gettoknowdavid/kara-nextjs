import { gql } from '@apollo/client';

export const GlobalQuery = gql`
    query Global {
        global {
            siteName
            defaultSeo {
                metaTitle
                metaDescription
                isProduct
                shareImage {
                    url
                    alternativeText
                }
            }
            favicon {
                url
            }
            logo {
                url
                alternativeText
            }
            categories {
                id
                title
                slug
            }
        }
    }
`;
