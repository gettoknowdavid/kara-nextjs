import { gql } from '@apollo/client';

export const CategoriesQuery = gql`
    query Category($slug: String) {
        categories(where: { slug_contains: $slug }) {
            id
            title
            slug
        }
    }
`;

export const CategoryVariables = ({ params }) => ({
  slug: params.slug,
});
