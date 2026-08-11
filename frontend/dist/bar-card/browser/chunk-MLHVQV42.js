import "./chunk-WDMUDEB6.js";

// src/app/features/auth/auth.routes.ts
var AUTH_ROUTES = [
  {
    path: "login",
    loadComponent: () => import("./chunk-AOPBO35S.js").then((module) => module.LoginPageComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-4VGCX6GU.js").then((module) => module.RegisterPageComponent)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  }
];
export {
  AUTH_ROUTES
};
//# sourceMappingURL=chunk-MLHVQV42.js.map
