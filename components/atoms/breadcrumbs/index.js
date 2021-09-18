import React from 'react';
import { Breadcrumbs as BaseBreadcrumbs } from 'baseui/breadcrumbs';

function Breadcrumbs({ ...props }) {
  return (
    <BaseBreadcrumbs
      {...props}
      overrides={{
        ListItem: {
          style: ({ $itemIndex, $theme }) => {
            if ($itemIndex === 0) return {};
            return {
              ...$theme.typography.LabelSmall,
              ':before': {
                content: "'/'",
                color: $theme.colors.mono700,
                marginLeft: $theme.sizing.scale400,
                marginRight: $theme.sizing.scale400,
                ...$theme.typography.LabelSmall,
              },
            };
          },
        },
        Separator: {
          component: () => null,
        },
      }}
    />
  );
}

export default Breadcrumbs;
