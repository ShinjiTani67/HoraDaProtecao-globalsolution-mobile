declare module "expo-router" {
  type RouteNames = 
    | "index"
    | "HomeScreen"
    | "signin"
    | "about"
    | "riskarea"
    | "zonasperigo";

  export type RelativePathString = RouteNames;
  export type ExternalPathString = RouteNames;
} 