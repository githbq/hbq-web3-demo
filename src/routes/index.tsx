/**
 * 路由页面
 */

import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demo from '@/components/Demo'
import Demo2 from '@/components/Demo2'

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/users/*" element={<Demo2 />} />
      </Routes>
    </BrowserRouter>
  );
} 