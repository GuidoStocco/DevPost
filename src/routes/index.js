import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

 
  return (
    signed ? <AppRoutes/> : <AuthRoutes/>
  )
}

  
