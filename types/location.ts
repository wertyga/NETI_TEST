import * as H from 'history';

export interface Match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

export interface RouteComponentProps<P> {
  match: Match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}
