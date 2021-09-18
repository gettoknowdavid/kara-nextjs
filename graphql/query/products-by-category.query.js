import { gql } from '@apollo/client';

export const ProductsByCategoryQuery = gql`
    query Products($slug: String) {
        products(where: { category: { slug_contains: $slug } }) {
            id
            title
            slug
            description
            price
            inStock
            yard
            featuredImage {
                url
                alternativeText
            }
            tags {
                id
                title
            }
        }
    }                   
`;

export const ProductsVariables = ({ params }) => ({
  slug: params.slug,
});
