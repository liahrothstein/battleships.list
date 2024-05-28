import { GraphQLResolveInfo } from 'graphql';
import { baseApiWithGraphql } from '../api/baseApi.ts';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Icon = {
  __typename?: 'Icon';
  large: Scalars['String']['output'];
  medium: Scalars['String']['output'];
};

export type Nation = {
  __typename?: 'Nation';
  color: Scalars['String']['output'];
  icons: NationIcon;
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type NationIcon = {
  __typename?: 'NationIcon';
  large: Scalars['String']['output'];
  medium: Scalars['String']['output'];
  small: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  vehicles: Array<Maybe<Vehicle>>;
};


export type QueryVehiclesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type Type = {
  __typename?: 'Type';
  icons: TypeIcon;
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TypeIcon = {
  __typename?: 'TypeIcon';
  default: Scalars['String']['output'];
};

export type Vehicle = {
  __typename?: 'Vehicle';
  description: Scalars['String']['output'];
  icons: Icon;
  level: Scalars['Int']['output'];
  nation: Nation;
  title: Scalars['String']['output'];
  type: Type;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Icon: ResolverTypeWrapper<Icon>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Nation: ResolverTypeWrapper<Nation>;
  NationIcon: ResolverTypeWrapper<NationIcon>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Type: ResolverTypeWrapper<Type>;
  TypeIcon: ResolverTypeWrapper<TypeIcon>;
  Vehicle: ResolverTypeWrapper<Vehicle>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Icon: Icon;
  Int: Scalars['Int']['output'];
  Nation: Nation;
  NationIcon: NationIcon;
  Query: {};
  String: Scalars['String']['output'];
  Type: Type;
  TypeIcon: TypeIcon;
  Vehicle: Vehicle;
};

export type IconResolvers<ContextType = any, ParentType extends ResolversParentTypes['Icon'] = ResolversParentTypes['Icon']> = {
  large?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  medium?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Nation'] = ResolversParentTypes['Nation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icons?: Resolver<ResolversTypes['NationIcon'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NationIconResolvers<ContextType = any, ParentType extends ResolversParentTypes['NationIcon'] = ResolversParentTypes['NationIcon']> = {
  large?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  medium?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  small?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  vehicles?: Resolver<Array<Maybe<ResolversTypes['Vehicle']>>, ParentType, ContextType, RequireFields<QueryVehiclesArgs, 'lang'>>;
};

export type TypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Type'] = ResolversParentTypes['Type']> = {
  icons?: Resolver<ResolversTypes['TypeIcon'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeIconResolvers<ContextType = any, ParentType extends ResolversParentTypes['TypeIcon'] = ResolversParentTypes['TypeIcon']> = {
  default?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  icons?: Resolver<ResolversTypes['Icon'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nation?: Resolver<ResolversTypes['Nation'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Icon?: IconResolvers<ContextType>;
  Nation?: NationResolvers<ContextType>;
  NationIcon?: NationIconResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Type?: TypeResolvers<ContextType>;
  TypeIcon?: TypeIconResolvers<ContextType>;
  Vehicle?: VehicleResolvers<ContextType>;
};



export const VehiclesDocument = `
    query Vehicles($languageCode: String = "ru") {
  vehicles(lang: $languageCode) {
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
      title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}
    `;

const injectedRtkApi = baseApiWithGraphql.injectEndpoints({
  endpoints: (build) => ({
    Vehicles: build.query<VehiclesQuery, VehiclesQueryVariables | void>({
      query: (variables) => ({ document: VehiclesDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useVehiclesQuery, useLazyVehiclesQuery } = injectedRtkApi;

