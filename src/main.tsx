import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import GlobalStyle from "./GlobalStyle";

import Home from "./routes/Home";
import Error from "./routes/Error";
import SobreMim from "./routes/AboutMe";
import Projetos from "./routes/Projects";
import Contato from "./routes/Contact";
import Certifications from "./routes/Certifications";

import { LanguageProvider } from "./context/LanguageContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre-mim", element: <SobreMim /> },
      { path: "/projetos", element: <Projetos /> },
      { path: "/certificacoes", element: <Certifications /> },
      { path: "/contato", element: <Contato /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
    </StrictMode>
  </LanguageProvider>
);
