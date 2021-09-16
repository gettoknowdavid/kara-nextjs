import React from 'react';
import { useStyletron } from 'baseui';
import { actions } from '../../../constants/actions.list';
import NavActionItem from '@/atoms/nav-action-item';

function NavActionsList() {
  const [css] = useStyletron();

  return (
    <ul className={css({ display: 'flex' })}>
      {actions.map((action) => (
        <NavActionItem key={action.id} action={action} />
      ))}
    </ul>
  );
}

export default NavActionsList;
