import { ComponentType, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import { RoutePropsType } from "types/Router.types";
import { routes } from "utils/routes";
import { SystemMessages } from "utils/system.message";
import AppBarCustom from "./AppBarCustom/AppBarCustom";
import ErrorBoundary from "./ErrorBoundary";
import ErrorMessage from "./ErrorMessage";

const RouteHandler = () => (
  <Router>
    <Suspense fallback={<ErrorMessage>{SystemMessages.loadingText}</ErrorMessage>}>
      <AppBarCustom />
      <Container sx={{ minWidth: "100%" }}>
        <ErrorBoundary>
          <Routes>
            {routes.map(({ title, path, component, children }: RoutePropsType, index: number) => {
              const Component: ComponentType = lazy(component);
              if (!children) {
                return <Route key={`${title}_${index}`} path={path} element={<Component />} />;
              }
              // else {
              //   return (<Route key={`${title}_${index}`} path={path} element={<Component />} >
              //        {
              //         children.map(({ title_, path_, component}: Record<string,any>, index_:number) =>{
              //           // if(component){
              //           //   const Componet_child : ComponentType = lazy(component)
              //           //   {
              //           //     <Route key={`${title}_${index}${index_}`} path={path} element={<Componet_child />} />
              //           //   }
              //           // }else
              //           {
              //             <Route key={`${title_}_${index}${index_}`} path={path_} element={<Component />} />
              //           }
              //        })
              //       }
              //     </Route>
              //   )
              // }
            })}
            {/* <Route path="*" element={routes && <Navigate to={routes[0]["path"]} replace />} /> */}
          </Routes>
        </ErrorBoundary>
      </Container>
    </Suspense>
  </Router>
);

export default RouteHandler;
