export interface RoutePropsType {
  title: string;
  path: string;
  component?: any;
  children?: RoutePropsType[];
}
