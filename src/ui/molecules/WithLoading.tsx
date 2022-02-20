import React from 'react';
import { Loader } from 'ui/atoms';

interface WithLoadingProps {
  loading: boolean
}

export const WithLoading = <P extends object>(Component: React.ComponentType<P>) => {
  const withLoading: React.FC<P & WithLoadingProps> = (wrapperProps) => {
    const {loading, ...props} = wrapperProps
    return loading ? <Loader /> : <Component {...props as P} />
  }
  withLoading.displayName = 'WithLoading'
  return withLoading
}
