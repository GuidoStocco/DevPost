import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {

  const singed = false;
  const loading = false;

  

  return (
    singed ? <AppRoutes /> : <AuthRoutes />
  )
}
