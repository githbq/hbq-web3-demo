/**
 * 路由页面
 */

import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DefaultComponent = () => <div>hello world</div>
const UserComponent = () => <div>hello every one</div>

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultComponent />} />
        <Route path="/users/*" element={<UserComponent />} />
      </Routes>
    </BrowserRouter>
  );
} 