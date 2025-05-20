import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Outlet/>
    </>
  );
}
