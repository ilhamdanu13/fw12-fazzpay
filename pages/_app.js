import { Provider } from "react-redux";
import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
