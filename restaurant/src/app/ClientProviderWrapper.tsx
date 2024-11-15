"use client"; // Marks this component as a Client Component

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store"; // Adjust path as needed

interface ClientProviderWrapperProps {
    children: ReactNode;
}

const ClientProviderWrapper = ({ children }: ClientProviderWrapperProps) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ClientProviderWrapper;
