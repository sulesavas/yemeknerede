import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import Logout from './screens/Logout';
import RestaurantDetails from './screens/RestaurantDetails';
import RestaurantReviews from './screens/RestaurantReviews';
import Restaurants from './screens/Restaurants';
import Contact from './screens/Contact';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
    title: 'Anasayfa',
    isLink: true,
    isPrivate: true
  },
  {
    path: '/login',
    component: () => <Login />,
    title: 'Oturum Aç',
    isPrivate: false
  },
  {
    path: '/contact',
    component: () => <Contact />,
    title: 'İletişim',
    isLink: true,
    isPrivate: true,
  },

  {
    path: '/logout',
    component: () => <Logout />,
    title: 'Çıkış Yap',
    isLink: true,
    isPrivate: true
  },
  {
    path: '/restaurants/:cityName',
    component: () => <Restaurants />,
    title: 'Restoranlar',
    isPrivate: true
  },
  {
    path: '/restaurant-details/:restaurantName',
    component: () => <RestaurantDetails />,
    title: 'Restoran Detayları',
    isPrivate: true
  },
  {
    path: '/restaurant-reviews/:restaurantName',
    component: () => <RestaurantReviews />,
    title: 'Restoran Görüşleri',
    isPrivate: true
  },

  
]  