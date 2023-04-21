import { Provider } from "react-redux";
import { store } from "./strore";

export function Providers ({children}: {children: React.ReactNode }) {
   return <Provider store={store}>
        {children}
    </Provider>
}