import {
  List, MagnifyingGlass, ShoppingBag, User,
} from 'phosphor-react';
import Link from 'next/link';
import React from 'react';

export const actions = [
  { id: 'search', icon: (<MagnifyingGlass weight="bold" />) },
  { id: 'account', icon: (<Link href="/account"><User weight="bold" /></Link>) },
  { id: 'cart', icon: (<Link href="/cart"><ShoppingBag weight="bold" /></Link>) },
  { id: 'menu', icon: (<List weight="bold" />) },
];
