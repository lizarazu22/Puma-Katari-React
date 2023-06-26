'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import { cardData } from '@/data/card';
import TemporaryDrawer from './layout/AppLayout';
import { AppRouter } from '@/router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from '@/context/ContextProvider';


export default function Home() {
  
  return (
    <StoreProvider>
    


        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>

   
    </StoreProvider>
  )
}
