import React from 'react';
import { ANCHOR, Drawer } from 'baseui/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { Block } from 'baseui/block';
import { selectBag, toggleBagPopup } from '@/slices/bag.slice';

function BagDrawer() {
  const bagRepo = useSelector(selectBag);
  const { isBagOpen, items } = bagRepo;
  const dispatch = useDispatch();

  return (
    <Drawer
      isOpen={isBagOpen}
      onClose={() => dispatch(toggleBagPopup())}
      autoFocus
      anchor={ANCHOR.right}
      overrides={{
        Root: { style: () => ({ zIndex: '13' }) },
      }}
    >
      {items.map((item) => (
        <Block key={item.id} display="flex" justifyContent="space-between">
          <span>{item.title}</span>
          <span>{item.quantity}</span>
        </Block>
      ))}
    </Drawer>
  );
}

export default BagDrawer;
