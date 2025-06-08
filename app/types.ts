declare module "expo-router" {
  type RouteNames = 
    | "index"
    | "homescreen"
    | "signin"
    | "about"
    | "riskarea"
    | "zonasperigo";

  export type RelativePathString = RouteNames;
  export type ExternalPathString = RouteNames;
} 