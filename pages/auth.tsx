import { graphql, useLazyLoadQuery } from 'react-relay';
import AuthScene from 'scenes/Auth/Auth';
import GalleryRoute from 'scenes/_Router/GalleryRoute';
import { authQuery } from '__generated__/authQuery.graphql';

export default function Auth() {
  const query = useLazyLoadQuery<authQuery>(
    graphql`
      query authQuery {
        ...AuthFragment
      }
    `,
    {}
  );

  return <GalleryRoute element={<AuthScene queryRef={query} />} navbar={false} />;
}
