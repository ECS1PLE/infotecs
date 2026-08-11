import "./chunk-WDMUDEB6.js";

// src/app/features/cocktails/cocktails.routes.ts
var COCKTAIL_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-6KTAHRRT.js").then((module) => module.CocktailListPageComponent)
  },
  {
    path: "new",
    loadComponent: () => import("./chunk-MVYF2RVN.js").then((module) => module.CocktailEditorPageComponent)
  },
  {
    path: ":id/edit",
    loadComponent: () => import("./chunk-MVYF2RVN.js").then((module) => module.CocktailEditorPageComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-VEJLCTT6.js").then((module) => module.CocktailDetailPageComponent)
  }
];
export {
  COCKTAIL_ROUTES
};
//# sourceMappingURL=chunk-NYCPQQ42.js.map
