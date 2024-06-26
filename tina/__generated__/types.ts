//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  best_sellers: Best_Sellers;
  best_sellersConnection: Best_SellersConnection;
  announcement: Announcement;
  announcementConnection: AnnouncementConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBest_SellersArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBest_SellersConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Best_SellersFilter>;
};


export type QueryAnnouncementArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAnnouncementConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AnnouncementFilter>;
};

export type DocumentFilter = {
  best_sellers?: InputMaybe<Best_SellersFilter>;
  announcement?: InputMaybe<AnnouncementFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Best_Sellers | Announcement | Folder;

export type Best_Sellers = Node & Document & {
  __typename?: 'Best_sellers';
  name?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  piece?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Best_SellersFilter = {
  name?: InputMaybe<StringFilter>;
  src?: InputMaybe<ImageFilter>;
  category?: InputMaybe<StringFilter>;
  price?: InputMaybe<StringFilter>;
  piece?: InputMaybe<StringFilter>;
  link?: InputMaybe<StringFilter>;
};

export type Best_SellersConnectionEdges = {
  __typename?: 'Best_sellersConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Best_Sellers>;
};

export type Best_SellersConnection = Connection & {
  __typename?: 'Best_sellersConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<Best_SellersConnectionEdges>>>;
};

export type Announcement = Node & Document & {
  __typename?: 'Announcement';
  message?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['String']['output']>;
  button?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnnouncementFilter = {
  message?: InputMaybe<StringFilter>;
  discount?: InputMaybe<StringFilter>;
  button?: InputMaybe<StringFilter>;
  link?: InputMaybe<StringFilter>;
  display?: InputMaybe<BooleanFilter>;
};

export type AnnouncementConnectionEdges = {
  __typename?: 'AnnouncementConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Announcement>;
};

export type AnnouncementConnection = Connection & {
  __typename?: 'AnnouncementConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<AnnouncementConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateBest_sellers: Best_Sellers;
  createBest_sellers: Best_Sellers;
  updateAnnouncement: Announcement;
  createAnnouncement: Announcement;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationUpdateBest_SellersArgs = {
  relativePath: Scalars['String']['input'];
  params: Best_SellersMutation;
};


export type MutationCreateBest_SellersArgs = {
  relativePath: Scalars['String']['input'];
  params: Best_SellersMutation;
};


export type MutationUpdateAnnouncementArgs = {
  relativePath: Scalars['String']['input'];
  params: AnnouncementMutation;
};


export type MutationCreateAnnouncementArgs = {
  relativePath: Scalars['String']['input'];
  params: AnnouncementMutation;
};

export type DocumentUpdateMutation = {
  best_sellers?: InputMaybe<Best_SellersMutation>;
  announcement?: InputMaybe<AnnouncementMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  best_sellers?: InputMaybe<Best_SellersMutation>;
  announcement?: InputMaybe<AnnouncementMutation>;
};

export type Best_SellersMutation = {
  name?: InputMaybe<Scalars['String']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  piece?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
};

export type AnnouncementMutation = {
  message?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['String']['input']>;
  button?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  display?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Best_SellersPartsFragment = { __typename: 'Best_sellers', name?: string | null, src?: string | null, category?: string | null, price?: string | null, piece?: string | null, link?: string | null };

export type AnnouncementPartsFragment = { __typename: 'Announcement', message?: string | null, discount?: string | null, button?: string | null, link?: string | null, display?: boolean | null };

export type Best_SellersQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type Best_SellersQuery = { __typename?: 'Query', best_sellers: { __typename: 'Best_sellers', id: string, name?: string | null, src?: string | null, category?: string | null, price?: string | null, piece?: string | null, link?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type Best_SellersConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Best_SellersFilter>;
}>;


export type Best_SellersConnectionQuery = { __typename?: 'Query', best_sellersConnection: { __typename?: 'Best_sellersConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'Best_sellersConnectionEdges', cursor: string, node?: { __typename: 'Best_sellers', id: string, name?: string | null, src?: string | null, category?: string | null, price?: string | null, piece?: string | null, link?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type AnnouncementQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type AnnouncementQuery = { __typename?: 'Query', announcement: { __typename: 'Announcement', id: string, message?: string | null, discount?: string | null, button?: string | null, link?: string | null, display?: boolean | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type AnnouncementConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AnnouncementFilter>;
}>;


export type AnnouncementConnectionQuery = { __typename?: 'Query', announcementConnection: { __typename?: 'AnnouncementConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'AnnouncementConnectionEdges', cursor: string, node?: { __typename: 'Announcement', id: string, message?: string | null, discount?: string | null, button?: string | null, link?: string | null, display?: boolean | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const Best_SellersPartsFragmentDoc = gql`
    fragment Best_sellersParts on Best_sellers {
  __typename
  name
  src
  category
  price
  piece
  link
}
    `;
export const AnnouncementPartsFragmentDoc = gql`
    fragment AnnouncementParts on Announcement {
  __typename
  message
  discount
  button
  link
  display
}
    `;
export const Best_SellersDocument = gql`
    query best_sellers($relativePath: String!) {
  best_sellers(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...Best_sellersParts
  }
}
    ${Best_SellersPartsFragmentDoc}`;
export const Best_SellersConnectionDocument = gql`
    query best_sellersConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: Best_sellersFilter) {
  best_sellersConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...Best_sellersParts
      }
    }
  }
}
    ${Best_SellersPartsFragmentDoc}`;
export const AnnouncementDocument = gql`
    query announcement($relativePath: String!) {
  announcement(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AnnouncementParts
  }
}
    ${AnnouncementPartsFragmentDoc}`;
export const AnnouncementConnectionDocument = gql`
    query announcementConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AnnouncementFilter) {
  announcementConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AnnouncementParts
      }
    }
  }
}
    ${AnnouncementPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      best_sellers(variables: Best_SellersQueryVariables, options?: C): Promise<{data: Best_SellersQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: Best_SellersQueryVariables, query: string}> {
        return requester<{data: Best_SellersQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: Best_SellersQueryVariables, query: string}, Best_SellersQueryVariables>(Best_SellersDocument, variables, options);
      },
    best_sellersConnection(variables?: Best_SellersConnectionQueryVariables, options?: C): Promise<{data: Best_SellersConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: Best_SellersConnectionQueryVariables, query: string}> {
        return requester<{data: Best_SellersConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: Best_SellersConnectionQueryVariables, query: string}, Best_SellersConnectionQueryVariables>(Best_SellersConnectionDocument, variables, options);
      },
    announcement(variables: AnnouncementQueryVariables, options?: C): Promise<{data: AnnouncementQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: AnnouncementQueryVariables, query: string}> {
        return requester<{data: AnnouncementQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: AnnouncementQueryVariables, query: string}, AnnouncementQueryVariables>(AnnouncementDocument, variables, options);
      },
    announcementConnection(variables?: AnnouncementConnectionQueryVariables, options?: C): Promise<{data: AnnouncementConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: AnnouncementConnectionQueryVariables, query: string}> {
        return requester<{data: AnnouncementConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: AnnouncementConnectionQueryVariables, query: string}, AnnouncementConnectionQueryVariables>(AnnouncementConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (
  client: TinaClient,
) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: {
      branch?: string,
      /**
       * Aside from `method` and `body`, all fetch options are passed
       * through to underlying fetch request
       */
      fetchOptions?: Omit<Parameters<typeof fetch>[1], 'body' | 'method'>,
    },
    client
  ) => Promise<any> = async (doc, vars, options) => {
    let url = client.apiUrl
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf('/')
      url = client.apiUrl.substring(0, index + 1) + options.branch
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url,
    }, options)

    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} }
  }

  return requester
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(
      createClient({
        url: "http://localhost:4001/graphql",
        queries,
      })
    )
  )

export const queries = (
  client: TinaClient,
) => {
  const requester = generateRequester(client)
  return getSdk(requester)
}

  