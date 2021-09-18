import { List, MagnifyingGlass, User } from 'phosphor-react';
import Link from 'next/link';
import React from 'react';
import BagIcon from '@/atoms/bag-icon';
import WishlistIcon from '@/atoms/wishlist-icon';

export const actions = [
  { id: 'search', icon: (<MagnifyingGlass weight="bold" />) },
  { id: 'account', icon: (<Link href="/account"><User weight="bold" /></Link>) },
  { id: 'wishlist', icon: (<Link href="/wishlist"><WishlistIcon /></Link>) },
  { id: 'cart', icon: (<Link href="/bag"><BagIcon /></Link>) },
  { id: 'menu', icon: (<List weight="bold" />) },
];
