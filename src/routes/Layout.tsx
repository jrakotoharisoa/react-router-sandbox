import { useEffect } from "react";
import {
  ActionFunction,
  Form,
  LoaderFunction,
  Outlet,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";



export const loader: LoaderFunction = async () => {
  return "Loader data";
}

export default function Layout() {
  const loaderData = useLoaderData() as string;
  
  return (
    <>
      <div>Layout - {loaderData}</div>
      <Outlet />
    </>
  );
}
