export interface PropsType {
  children?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactElement;
}

export interface State {
  hasError: boolean;
  errorInfo?: any;
}

export interface SearchBoxPropsType<T> {
  setQuerySearch: (params: T) => void;
}

export interface AppBarPropsType {
  props: {
    handleCloseNavMenu: (path?: string) => void;
    handleOpenNavMenu?: (event: React.MouseEvent<HTMLElement>) => void;
    anchorElNav?: null | HTMLElement;
  };
}
