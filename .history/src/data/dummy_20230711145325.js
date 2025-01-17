import React from 'react';
import { FiShoppingBag, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import {  BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import avatar from './avatar.jpg';
import product from './product.jpg';




//Navigation Lists
export const links = [
  {
    title: 'Tools',
    links: [
      {
        name: 'SKU Management',
        link: 'sku-management',
        icon: <FiShoppingBag />,
      },

      {
        name: 'SKU Management',
        link: 'sku-management',
        icon: <FiShoppingBag />,
      },
    ],
  },
];

// Theme Color
export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];
