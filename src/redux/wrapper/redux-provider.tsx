"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { useRef } from "react";

import { AppStore, makeStore } from "@/redux/store/store";
import { addToCart } from "../features/cart/cartSlice";

type Props = { children: ReactNode };

const ReduxProvider = ({ children }: Props) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    //    storeRef.current.dispatch(addToCart("testProductID"));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
