
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model device
 * 
 */
export type device = $Result.DefaultSelection<Prisma.$devicePayload>
/**
 * Model match
 * 
 */
export type match = $Result.DefaultSelection<Prisma.$matchPayload>
/**
 * Model match_move
 * 
 */
export type match_move = $Result.DefaultSelection<Prisma.$match_movePayload>
/**
 * Model match_piece
 * 
 */
export type match_piece = $Result.DefaultSelection<Prisma.$match_piecePayload>
/**
 * Model match_player
 * 
 */
export type match_player = $Result.DefaultSelection<Prisma.$match_playerPayload>
/**
 * Model refresh_token
 * 
 */
export type refresh_token = $Result.DefaultSelection<Prisma.$refresh_tokenPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model match_queue
 * 
 */
export type match_queue = $Result.DefaultSelection<Prisma.$match_queuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const match_status: {
  ONGOING: 'ONGOING',
  FINISHED: 'FINISHED'
};

export type match_status = (typeof match_status)[keyof typeof match_status]


export const match_player_color: {
  WHITE: 'WHITE',
  BLACK: 'BLACK'
};

export type match_player_color = (typeof match_player_color)[keyof typeof match_player_color]


export const match_piece_type: {
  SLEEPLESS_EYE: 'SLEEPLESS_EYE',
  PHANTOM_MATRIARCH: 'PHANTOM_MATRIARCH',
  SHADOW_HUNTER: 'SHADOW_HUNTER',
  DOPPELGANGER: 'DOPPELGANGER',
  PHOBIC_LEAPER: 'PHOBIC_LEAPER',
  PSYCHIC_LARVA: 'PSYCHIC_LARVA'
};

export type match_piece_type = (typeof match_piece_type)[keyof typeof match_piece_type]


export const device_deviceType: {
  desktop: 'desktop',
  mobile: 'mobile',
  tablet: 'tablet',
  bot: 'bot',
  unknown: 'unknown'
};

export type device_deviceType = (typeof device_deviceType)[keyof typeof device_deviceType]


export const match_queue_status: {
  WAITING: 'WAITING',
  MATCHED: 'MATCHED',
  CANCELLED: 'CANCELLED'
};

export type match_queue_status = (typeof match_queue_status)[keyof typeof match_queue_status]

}

export type match_status = $Enums.match_status

export const match_status: typeof $Enums.match_status

export type match_player_color = $Enums.match_player_color

export const match_player_color: typeof $Enums.match_player_color

export type match_piece_type = $Enums.match_piece_type

export const match_piece_type: typeof $Enums.match_piece_type

export type device_deviceType = $Enums.device_deviceType

export const device_deviceType: typeof $Enums.device_deviceType

export type match_queue_status = $Enums.match_queue_status

export const match_queue_status: typeof $Enums.match_queue_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Devices
 * const devices = await prisma.device.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Devices
   * const devices = await prisma.device.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.device`: Exposes CRUD operations for the **device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.deviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.matchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match_move`: Exposes CRUD operations for the **match_move** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Match_moves
    * const match_moves = await prisma.match_move.findMany()
    * ```
    */
  get match_move(): Prisma.match_moveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match_piece`: Exposes CRUD operations for the **match_piece** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Match_pieces
    * const match_pieces = await prisma.match_piece.findMany()
    * ```
    */
  get match_piece(): Prisma.match_pieceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match_player`: Exposes CRUD operations for the **match_player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Match_players
    * const match_players = await prisma.match_player.findMany()
    * ```
    */
  get match_player(): Prisma.match_playerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refresh_token`: Exposes CRUD operations for the **refresh_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refresh_tokens
    * const refresh_tokens = await prisma.refresh_token.findMany()
    * ```
    */
  get refresh_token(): Prisma.refresh_tokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match_queue`: Exposes CRUD operations for the **match_queue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Match_queues
    * const match_queues = await prisma.match_queue.findMany()
    * ```
    */
  get match_queue(): Prisma.match_queueDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    device: 'device',
    match: 'match',
    match_move: 'match_move',
    match_piece: 'match_piece',
    match_player: 'match_player',
    refresh_token: 'refresh_token',
    user: 'user',
    match_queue: 'match_queue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "device" | "match" | "match_move" | "match_piece" | "match_player" | "refresh_token" | "user" | "match_queue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      device: {
        payload: Prisma.$devicePayload<ExtArgs>
        fields: Prisma.deviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          findFirst: {
            args: Prisma.deviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          findMany: {
            args: Prisma.deviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>[]
          }
          create: {
            args: Prisma.deviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          createMany: {
            args: Prisma.deviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.deviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          update: {
            args: Prisma.deviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          deleteMany: {
            args: Prisma.deviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.deviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.deviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.deviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      match: {
        payload: Prisma.$matchPayload<ExtArgs>
        fields: Prisma.matchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.matchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.matchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          findFirst: {
            args: Prisma.matchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.matchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          findMany: {
            args: Prisma.matchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>[]
          }
          create: {
            args: Prisma.matchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          createMany: {
            args: Prisma.matchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.matchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          update: {
            args: Prisma.matchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          deleteMany: {
            args: Prisma.matchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.matchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.matchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.matchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.matchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      match_move: {
        payload: Prisma.$match_movePayload<ExtArgs>
        fields: Prisma.match_moveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.match_moveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_movePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.match_moveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_movePayload>
          }
          findFirst: {
            args: Prisma.match_moveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_movePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.match_moveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_movePayload>
          }
          findMany: {
            args: Prisma.match_moveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_movePayload>[]
          }
          create: {
            args: Prisma.match_moveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_movePayload>
          }
          createMany: {
            args: Prisma.match_moveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.match_moveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_movePayload>
          }
          update: {
            args: Prisma.match_moveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_movePayload>
          }
          deleteMany: {
            args: Prisma.match_moveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.match_moveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.match_moveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_movePayload>
          }
          aggregate: {
            args: Prisma.Match_moveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch_move>
          }
          groupBy: {
            args: Prisma.match_moveGroupByArgs<ExtArgs>
            result: $Utils.Optional<Match_moveGroupByOutputType>[]
          }
          count: {
            args: Prisma.match_moveCountArgs<ExtArgs>
            result: $Utils.Optional<Match_moveCountAggregateOutputType> | number
          }
        }
      }
      match_piece: {
        payload: Prisma.$match_piecePayload<ExtArgs>
        fields: Prisma.match_pieceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.match_pieceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_piecePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.match_pieceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_piecePayload>
          }
          findFirst: {
            args: Prisma.match_pieceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_piecePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.match_pieceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_piecePayload>
          }
          findMany: {
            args: Prisma.match_pieceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_piecePayload>[]
          }
          create: {
            args: Prisma.match_pieceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_piecePayload>
          }
          createMany: {
            args: Prisma.match_pieceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.match_pieceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_piecePayload>
          }
          update: {
            args: Prisma.match_pieceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_piecePayload>
          }
          deleteMany: {
            args: Prisma.match_pieceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.match_pieceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.match_pieceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_piecePayload>
          }
          aggregate: {
            args: Prisma.Match_pieceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch_piece>
          }
          groupBy: {
            args: Prisma.match_pieceGroupByArgs<ExtArgs>
            result: $Utils.Optional<Match_pieceGroupByOutputType>[]
          }
          count: {
            args: Prisma.match_pieceCountArgs<ExtArgs>
            result: $Utils.Optional<Match_pieceCountAggregateOutputType> | number
          }
        }
      }
      match_player: {
        payload: Prisma.$match_playerPayload<ExtArgs>
        fields: Prisma.match_playerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.match_playerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.match_playerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playerPayload>
          }
          findFirst: {
            args: Prisma.match_playerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.match_playerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playerPayload>
          }
          findMany: {
            args: Prisma.match_playerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playerPayload>[]
          }
          create: {
            args: Prisma.match_playerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playerPayload>
          }
          createMany: {
            args: Prisma.match_playerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.match_playerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playerPayload>
          }
          update: {
            args: Prisma.match_playerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playerPayload>
          }
          deleteMany: {
            args: Prisma.match_playerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.match_playerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.match_playerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_playerPayload>
          }
          aggregate: {
            args: Prisma.Match_playerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch_player>
          }
          groupBy: {
            args: Prisma.match_playerGroupByArgs<ExtArgs>
            result: $Utils.Optional<Match_playerGroupByOutputType>[]
          }
          count: {
            args: Prisma.match_playerCountArgs<ExtArgs>
            result: $Utils.Optional<Match_playerCountAggregateOutputType> | number
          }
        }
      }
      refresh_token: {
        payload: Prisma.$refresh_tokenPayload<ExtArgs>
        fields: Prisma.refresh_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.refresh_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.refresh_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          findFirst: {
            args: Prisma.refresh_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.refresh_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          findMany: {
            args: Prisma.refresh_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>[]
          }
          create: {
            args: Prisma.refresh_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          createMany: {
            args: Prisma.refresh_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.refresh_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          update: {
            args: Prisma.refresh_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          deleteMany: {
            args: Prisma.refresh_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.refresh_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.refresh_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokenPayload>
          }
          aggregate: {
            args: Prisma.Refresh_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefresh_token>
          }
          groupBy: {
            args: Prisma.refresh_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Refresh_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.refresh_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<Refresh_tokenCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      match_queue: {
        payload: Prisma.$match_queuePayload<ExtArgs>
        fields: Prisma.match_queueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.match_queueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_queuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.match_queueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_queuePayload>
          }
          findFirst: {
            args: Prisma.match_queueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_queuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.match_queueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_queuePayload>
          }
          findMany: {
            args: Prisma.match_queueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_queuePayload>[]
          }
          create: {
            args: Prisma.match_queueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_queuePayload>
          }
          createMany: {
            args: Prisma.match_queueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.match_queueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_queuePayload>
          }
          update: {
            args: Prisma.match_queueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_queuePayload>
          }
          deleteMany: {
            args: Prisma.match_queueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.match_queueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.match_queueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$match_queuePayload>
          }
          aggregate: {
            args: Prisma.Match_queueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch_queue>
          }
          groupBy: {
            args: Prisma.match_queueGroupByArgs<ExtArgs>
            result: $Utils.Optional<Match_queueGroupByOutputType>[]
          }
          count: {
            args: Prisma.match_queueCountArgs<ExtArgs>
            result: $Utils.Optional<Match_queueCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    device?: deviceOmit
    match?: matchOmit
    match_move?: match_moveOmit
    match_piece?: match_pieceOmit
    match_player?: match_playerOmit
    refresh_token?: refresh_tokenOmit
    user?: userOmit
    match_queue?: match_queueOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    refresh_token: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refresh_token?: boolean | DeviceCountOutputTypeCountRefresh_tokenArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountRefresh_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokenWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    match_move: number
    match_piece: number
    match_player: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match_move?: boolean | MatchCountOutputTypeCountMatch_moveArgs
    match_piece?: boolean | MatchCountOutputTypeCountMatch_pieceArgs
    match_player?: boolean | MatchCountOutputTypeCountMatch_playerArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMatch_moveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_moveWhereInput
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMatch_pieceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_pieceWhereInput
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMatch_playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_playerWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    device: number
    match: number
    match_move: number
    match_piece: number
    match_player: number
    refresh_token: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | UserCountOutputTypeCountDeviceArgs
    match?: boolean | UserCountOutputTypeCountMatchArgs
    match_move?: boolean | UserCountOutputTypeCountMatch_moveArgs
    match_piece?: boolean | UserCountOutputTypeCountMatch_pieceArgs
    match_player?: boolean | UserCountOutputTypeCountMatch_playerArgs
    refresh_token?: boolean | UserCountOutputTypeCountRefresh_tokenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatch_moveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_moveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatch_pieceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_pieceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatch_playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_playerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefresh_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    userAgent: string | null
    deviceType: $Enums.device_deviceType | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    userAgent: string | null
    deviceType: $Enums.device_deviceType | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    userId: number
    userAgent: number
    deviceType: number
    firstSeenAt: number
    lastSeenAt: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    deviceType?: true
    firstSeenAt?: true
    lastSeenAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    deviceType?: true
    firstSeenAt?: true
    lastSeenAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    deviceType?: true
    firstSeenAt?: true
    lastSeenAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device to aggregate.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type deviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deviceWhereInput
    orderBy?: deviceOrderByWithAggregationInput | deviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: deviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    userId: number
    userAgent: string
    deviceType: $Enums.device_deviceType | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends deviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type deviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    deviceType?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    refresh_token?: boolean | device$refresh_tokenArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>



  export type deviceSelectScalar = {
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    deviceType?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
  }

  export type deviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userAgent" | "deviceType" | "firstSeenAt" | "lastSeenAt", ExtArgs["result"]["device"]>
  export type deviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    refresh_token?: boolean | device$refresh_tokenArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $devicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "device"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      refresh_token: Prisma.$refresh_tokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      userAgent: string
      deviceType: $Enums.device_deviceType | null
      firstSeenAt: Date | null
      lastSeenAt: Date | null
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type deviceGetPayload<S extends boolean | null | undefined | deviceDefaultArgs> = $Result.GetResult<Prisma.$devicePayload, S>

  type deviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface deviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['device'], meta: { name: 'device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {deviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deviceFindUniqueArgs>(args: SelectSubset<T, deviceFindUniqueArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deviceFindUniqueOrThrowArgs>(args: SelectSubset<T, deviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deviceFindFirstArgs>(args?: SelectSubset<T, deviceFindFirstArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deviceFindFirstOrThrowArgs>(args?: SelectSubset<T, deviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends deviceFindManyArgs>(args?: SelectSubset<T, deviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {deviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends deviceCreateArgs>(args: SelectSubset<T, deviceCreateArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {deviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deviceCreateManyArgs>(args?: SelectSubset<T, deviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Device.
     * @param {deviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends deviceDeleteArgs>(args: SelectSubset<T, deviceDeleteArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {deviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deviceUpdateArgs>(args: SelectSubset<T, deviceUpdateArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {deviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deviceDeleteManyArgs>(args?: SelectSubset<T, deviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deviceUpdateManyArgs>(args: SelectSubset<T, deviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {deviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends deviceUpsertArgs>(args: SelectSubset<T, deviceUpsertArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends deviceCountArgs>(
      args?: Subset<T, deviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends deviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deviceGroupByArgs['orderBy'] }
        : { orderBy?: deviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, deviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the device model
   */
  readonly fields: deviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    refresh_token<T extends device$refresh_tokenArgs<ExtArgs> = {}>(args?: Subset<T, device$refresh_tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the device model
   */
  interface deviceFieldRefs {
    readonly id: FieldRef<"device", 'Int'>
    readonly userId: FieldRef<"device", 'Int'>
    readonly userAgent: FieldRef<"device", 'String'>
    readonly deviceType: FieldRef<"device", 'device_deviceType'>
    readonly firstSeenAt: FieldRef<"device", 'DateTime'>
    readonly lastSeenAt: FieldRef<"device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * device findUnique
   */
  export type deviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device findUniqueOrThrow
   */
  export type deviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device findFirst
   */
  export type deviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device findFirstOrThrow
   */
  export type deviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device findMany
   */
  export type deviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which devices to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device create
   */
  export type deviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * The data needed to create a device.
     */
    data: XOR<deviceCreateInput, deviceUncheckedCreateInput>
  }

  /**
   * device createMany
   */
  export type deviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many devices.
     */
    data: deviceCreateManyInput | deviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * device update
   */
  export type deviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * The data needed to update a device.
     */
    data: XOR<deviceUpdateInput, deviceUncheckedUpdateInput>
    /**
     * Choose, which device to update.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device updateMany
   */
  export type deviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update devices.
     */
    data: XOR<deviceUpdateManyMutationInput, deviceUncheckedUpdateManyInput>
    /**
     * Filter which devices to update
     */
    where?: deviceWhereInput
    /**
     * Limit how many devices to update.
     */
    limit?: number
  }

  /**
   * device upsert
   */
  export type deviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * The filter to search for the device to update in case it exists.
     */
    where: deviceWhereUniqueInput
    /**
     * In case the device found by the `where` argument doesn't exist, create a new device with this data.
     */
    create: XOR<deviceCreateInput, deviceUncheckedCreateInput>
    /**
     * In case the device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deviceUpdateInput, deviceUncheckedUpdateInput>
  }

  /**
   * device delete
   */
  export type deviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter which device to delete.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device deleteMany
   */
  export type deviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devices to delete
     */
    where?: deviceWhereInput
    /**
     * Limit how many devices to delete.
     */
    limit?: number
  }

  /**
   * device.refresh_token
   */
  export type device$refresh_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    where?: refresh_tokenWhereInput
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    cursor?: refresh_tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Refresh_tokenScalarFieldEnum | Refresh_tokenScalarFieldEnum[]
  }

  /**
   * device without action
   */
  export type deviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
  }


  /**
   * Model match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    id: number | null
    winnerId: number | null
    turn: number | null
  }

  export type MatchSumAggregateOutputType = {
    id: number | null
    winnerId: number | null
    turn: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: number | null
    status: $Enums.match_status | null
    createdAt: Date | null
    winnerId: number | null
    turn: number | null
  }

  export type MatchMaxAggregateOutputType = {
    id: number | null
    status: $Enums.match_status | null
    createdAt: Date | null
    winnerId: number | null
    turn: number | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    winnerId: number
    turn: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    id?: true
    winnerId?: true
    turn?: true
  }

  export type MatchSumAggregateInputType = {
    id?: true
    winnerId?: true
    turn?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    winnerId?: true
    turn?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    winnerId?: true
    turn?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    winnerId?: true
    turn?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match to aggregate.
     */
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchOrderByWithRelationInput | matchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type matchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matchWhereInput
    orderBy?: matchOrderByWithAggregationInput | matchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: matchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: number
    status: $Enums.match_status
    createdAt: Date | null
    winnerId: number | null
    turn: number
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends matchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type matchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    winnerId?: boolean
    turn?: boolean
    user?: boolean | match$userArgs<ExtArgs>
    match_move?: boolean | match$match_moveArgs<ExtArgs>
    match_piece?: boolean | match$match_pieceArgs<ExtArgs>
    match_player?: boolean | match$match_playerArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>



  export type matchSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    winnerId?: boolean
    turn?: boolean
  }

  export type matchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "createdAt" | "winnerId" | "turn", ExtArgs["result"]["match"]>
  export type matchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | match$userArgs<ExtArgs>
    match_move?: boolean | match$match_moveArgs<ExtArgs>
    match_piece?: boolean | match$match_pieceArgs<ExtArgs>
    match_player?: boolean | match$match_playerArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $matchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "match"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      match_move: Prisma.$match_movePayload<ExtArgs>[]
      match_piece: Prisma.$match_piecePayload<ExtArgs>[]
      match_player: Prisma.$match_playerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.match_status
      createdAt: Date | null
      winnerId: number | null
      turn: number
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type matchGetPayload<S extends boolean | null | undefined | matchDefaultArgs> = $Result.GetResult<Prisma.$matchPayload, S>

  type matchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<matchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface matchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['match'], meta: { name: 'match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {matchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends matchFindUniqueArgs>(args: SelectSubset<T, matchFindUniqueArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {matchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends matchFindUniqueOrThrowArgs>(args: SelectSubset<T, matchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends matchFindFirstArgs>(args?: SelectSubset<T, matchFindFirstArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends matchFindFirstOrThrowArgs>(args?: SelectSubset<T, matchFindFirstOrThrowArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends matchFindManyArgs>(args?: SelectSubset<T, matchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {matchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends matchCreateArgs>(args: SelectSubset<T, matchCreateArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {matchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends matchCreateManyArgs>(args?: SelectSubset<T, matchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Match.
     * @param {matchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends matchDeleteArgs>(args: SelectSubset<T, matchDeleteArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {matchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends matchUpdateArgs>(args: SelectSubset<T, matchUpdateArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {matchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends matchDeleteManyArgs>(args?: SelectSubset<T, matchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends matchUpdateManyArgs>(args: SelectSubset<T, matchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Match.
     * @param {matchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends matchUpsertArgs>(args: SelectSubset<T, matchUpsertArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends matchCountArgs>(
      args?: Subset<T, matchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends matchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: matchGroupByArgs['orderBy'] }
        : { orderBy?: matchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, matchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the match model
   */
  readonly fields: matchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__matchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends match$userArgs<ExtArgs> = {}>(args?: Subset<T, match$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    match_move<T extends match$match_moveArgs<ExtArgs> = {}>(args?: Subset<T, match$match_moveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    match_piece<T extends match$match_pieceArgs<ExtArgs> = {}>(args?: Subset<T, match$match_pieceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    match_player<T extends match$match_playerArgs<ExtArgs> = {}>(args?: Subset<T, match$match_playerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the match model
   */
  interface matchFieldRefs {
    readonly id: FieldRef<"match", 'Int'>
    readonly status: FieldRef<"match", 'match_status'>
    readonly createdAt: FieldRef<"match", 'DateTime'>
    readonly winnerId: FieldRef<"match", 'Int'>
    readonly turn: FieldRef<"match", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * match findUnique
   */
  export type matchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
    /**
     * Filter, which match to fetch.
     */
    where: matchWhereUniqueInput
  }

  /**
   * match findUniqueOrThrow
   */
  export type matchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
    /**
     * Filter, which match to fetch.
     */
    where: matchWhereUniqueInput
  }

  /**
   * match findFirst
   */
  export type matchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
    /**
     * Filter, which match to fetch.
     */
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchOrderByWithRelationInput | matchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     */
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * match findFirstOrThrow
   */
  export type matchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
    /**
     * Filter, which match to fetch.
     */
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchOrderByWithRelationInput | matchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matches.
     */
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * match findMany
   */
  export type matchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
    /**
     * Filter, which matches to fetch.
     */
    where?: matchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matches to fetch.
     */
    orderBy?: matchOrderByWithRelationInput | matchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing matches.
     */
    cursor?: matchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * match create
   */
  export type matchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
    /**
     * The data needed to create a match.
     */
    data: XOR<matchCreateInput, matchUncheckedCreateInput>
  }

  /**
   * match createMany
   */
  export type matchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many matches.
     */
    data: matchCreateManyInput | matchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * match update
   */
  export type matchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
    /**
     * The data needed to update a match.
     */
    data: XOR<matchUpdateInput, matchUncheckedUpdateInput>
    /**
     * Choose, which match to update.
     */
    where: matchWhereUniqueInput
  }

  /**
   * match updateMany
   */
  export type matchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update matches.
     */
    data: XOR<matchUpdateManyMutationInput, matchUncheckedUpdateManyInput>
    /**
     * Filter which matches to update
     */
    where?: matchWhereInput
    /**
     * Limit how many matches to update.
     */
    limit?: number
  }

  /**
   * match upsert
   */
  export type matchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
    /**
     * The filter to search for the match to update in case it exists.
     */
    where: matchWhereUniqueInput
    /**
     * In case the match found by the `where` argument doesn't exist, create a new match with this data.
     */
    create: XOR<matchCreateInput, matchUncheckedCreateInput>
    /**
     * In case the match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<matchUpdateInput, matchUncheckedUpdateInput>
  }

  /**
   * match delete
   */
  export type matchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
    /**
     * Filter which match to delete.
     */
    where: matchWhereUniqueInput
  }

  /**
   * match deleteMany
   */
  export type matchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matches to delete
     */
    where?: matchWhereInput
    /**
     * Limit how many matches to delete.
     */
    limit?: number
  }

  /**
   * match.user
   */
  export type match$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * match.match_move
   */
  export type match$match_moveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    where?: match_moveWhereInput
    orderBy?: match_moveOrderByWithRelationInput | match_moveOrderByWithRelationInput[]
    cursor?: match_moveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Match_moveScalarFieldEnum | Match_moveScalarFieldEnum[]
  }

  /**
   * match.match_piece
   */
  export type match$match_pieceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    where?: match_pieceWhereInput
    orderBy?: match_pieceOrderByWithRelationInput | match_pieceOrderByWithRelationInput[]
    cursor?: match_pieceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Match_pieceScalarFieldEnum | Match_pieceScalarFieldEnum[]
  }

  /**
   * match.match_player
   */
  export type match$match_playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    where?: match_playerWhereInput
    orderBy?: match_playerOrderByWithRelationInput | match_playerOrderByWithRelationInput[]
    cursor?: match_playerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Match_playerScalarFieldEnum | Match_playerScalarFieldEnum[]
  }

  /**
   * match without action
   */
  export type matchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
  }


  /**
   * Model match_move
   */

  export type AggregateMatch_move = {
    _count: Match_moveCountAggregateOutputType | null
    _avg: Match_moveAvgAggregateOutputType | null
    _sum: Match_moveSumAggregateOutputType | null
    _min: Match_moveMinAggregateOutputType | null
    _max: Match_moveMaxAggregateOutputType | null
  }

  export type Match_moveAvgAggregateOutputType = {
    id: number | null
    matchId: number | null
    playerId: number | null
    moveNumber: number | null
    fromX: number | null
    fromY: number | null
    toX: number | null
    toY: number | null
    specialAbilityUsed: number | null
  }

  export type Match_moveSumAggregateOutputType = {
    id: number | null
    matchId: number | null
    playerId: number | null
    moveNumber: number | null
    fromX: number | null
    fromY: number | null
    toX: number | null
    toY: number | null
    specialAbilityUsed: number | null
  }

  export type Match_moveMinAggregateOutputType = {
    id: number | null
    matchId: number | null
    playerId: number | null
    moveNumber: number | null
    fromX: number | null
    fromY: number | null
    toX: number | null
    toY: number | null
    pieceType: string | null
    capturedPieceType: string | null
    specialAbilityUsed: number | null
    createdAt: Date | null
  }

  export type Match_moveMaxAggregateOutputType = {
    id: number | null
    matchId: number | null
    playerId: number | null
    moveNumber: number | null
    fromX: number | null
    fromY: number | null
    toX: number | null
    toY: number | null
    pieceType: string | null
    capturedPieceType: string | null
    specialAbilityUsed: number | null
    createdAt: Date | null
  }

  export type Match_moveCountAggregateOutputType = {
    id: number
    matchId: number
    playerId: number
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: number
    capturedPieceType: number
    specialAbilityUsed: number
    createdAt: number
    _all: number
  }


  export type Match_moveAvgAggregateInputType = {
    id?: true
    matchId?: true
    playerId?: true
    moveNumber?: true
    fromX?: true
    fromY?: true
    toX?: true
    toY?: true
    specialAbilityUsed?: true
  }

  export type Match_moveSumAggregateInputType = {
    id?: true
    matchId?: true
    playerId?: true
    moveNumber?: true
    fromX?: true
    fromY?: true
    toX?: true
    toY?: true
    specialAbilityUsed?: true
  }

  export type Match_moveMinAggregateInputType = {
    id?: true
    matchId?: true
    playerId?: true
    moveNumber?: true
    fromX?: true
    fromY?: true
    toX?: true
    toY?: true
    pieceType?: true
    capturedPieceType?: true
    specialAbilityUsed?: true
    createdAt?: true
  }

  export type Match_moveMaxAggregateInputType = {
    id?: true
    matchId?: true
    playerId?: true
    moveNumber?: true
    fromX?: true
    fromY?: true
    toX?: true
    toY?: true
    pieceType?: true
    capturedPieceType?: true
    specialAbilityUsed?: true
    createdAt?: true
  }

  export type Match_moveCountAggregateInputType = {
    id?: true
    matchId?: true
    playerId?: true
    moveNumber?: true
    fromX?: true
    fromY?: true
    toX?: true
    toY?: true
    pieceType?: true
    capturedPieceType?: true
    specialAbilityUsed?: true
    createdAt?: true
    _all?: true
  }

  export type Match_moveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match_move to aggregate.
     */
    where?: match_moveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_moves to fetch.
     */
    orderBy?: match_moveOrderByWithRelationInput | match_moveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: match_moveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned match_moves
    **/
    _count?: true | Match_moveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Match_moveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Match_moveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Match_moveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Match_moveMaxAggregateInputType
  }

  export type GetMatch_moveAggregateType<T extends Match_moveAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch_move]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch_move[P]>
      : GetScalarType<T[P], AggregateMatch_move[P]>
  }




  export type match_moveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_moveWhereInput
    orderBy?: match_moveOrderByWithAggregationInput | match_moveOrderByWithAggregationInput[]
    by: Match_moveScalarFieldEnum[] | Match_moveScalarFieldEnum
    having?: match_moveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Match_moveCountAggregateInputType | true
    _avg?: Match_moveAvgAggregateInputType
    _sum?: Match_moveSumAggregateInputType
    _min?: Match_moveMinAggregateInputType
    _max?: Match_moveMaxAggregateInputType
  }

  export type Match_moveGroupByOutputType = {
    id: number
    matchId: number
    playerId: number | null
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: string
    capturedPieceType: string | null
    specialAbilityUsed: number | null
    createdAt: Date | null
    _count: Match_moveCountAggregateOutputType | null
    _avg: Match_moveAvgAggregateOutputType | null
    _sum: Match_moveSumAggregateOutputType | null
    _min: Match_moveMinAggregateOutputType | null
    _max: Match_moveMaxAggregateOutputType | null
  }

  type GetMatch_moveGroupByPayload<T extends match_moveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Match_moveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Match_moveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Match_moveGroupByOutputType[P]>
            : GetScalarType<T[P], Match_moveGroupByOutputType[P]>
        }
      >
    >


  export type match_moveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    playerId?: boolean
    moveNumber?: boolean
    fromX?: boolean
    fromY?: boolean
    toX?: boolean
    toY?: boolean
    pieceType?: boolean
    capturedPieceType?: boolean
    specialAbilityUsed?: boolean
    createdAt?: boolean
    match?: boolean | matchDefaultArgs<ExtArgs>
    user?: boolean | match_move$userArgs<ExtArgs>
  }, ExtArgs["result"]["match_move"]>



  export type match_moveSelectScalar = {
    id?: boolean
    matchId?: boolean
    playerId?: boolean
    moveNumber?: boolean
    fromX?: boolean
    fromY?: boolean
    toX?: boolean
    toY?: boolean
    pieceType?: boolean
    capturedPieceType?: boolean
    specialAbilityUsed?: boolean
    createdAt?: boolean
  }

  export type match_moveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "playerId" | "moveNumber" | "fromX" | "fromY" | "toX" | "toY" | "pieceType" | "capturedPieceType" | "specialAbilityUsed" | "createdAt", ExtArgs["result"]["match_move"]>
  export type match_moveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | matchDefaultArgs<ExtArgs>
    user?: boolean | match_move$userArgs<ExtArgs>
  }

  export type $match_movePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "match_move"
    objects: {
      match: Prisma.$matchPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      matchId: number
      playerId: number | null
      moveNumber: number
      fromX: number
      fromY: number
      toX: number
      toY: number
      pieceType: string
      capturedPieceType: string | null
      specialAbilityUsed: number | null
      createdAt: Date | null
    }, ExtArgs["result"]["match_move"]>
    composites: {}
  }

  type match_moveGetPayload<S extends boolean | null | undefined | match_moveDefaultArgs> = $Result.GetResult<Prisma.$match_movePayload, S>

  type match_moveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<match_moveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Match_moveCountAggregateInputType | true
    }

  export interface match_moveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['match_move'], meta: { name: 'match_move' } }
    /**
     * Find zero or one Match_move that matches the filter.
     * @param {match_moveFindUniqueArgs} args - Arguments to find a Match_move
     * @example
     * // Get one Match_move
     * const match_move = await prisma.match_move.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends match_moveFindUniqueArgs>(args: SelectSubset<T, match_moveFindUniqueArgs<ExtArgs>>): Prisma__match_moveClient<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match_move that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {match_moveFindUniqueOrThrowArgs} args - Arguments to find a Match_move
     * @example
     * // Get one Match_move
     * const match_move = await prisma.match_move.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends match_moveFindUniqueOrThrowArgs>(args: SelectSubset<T, match_moveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__match_moveClient<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match_move that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_moveFindFirstArgs} args - Arguments to find a Match_move
     * @example
     * // Get one Match_move
     * const match_move = await prisma.match_move.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends match_moveFindFirstArgs>(args?: SelectSubset<T, match_moveFindFirstArgs<ExtArgs>>): Prisma__match_moveClient<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match_move that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_moveFindFirstOrThrowArgs} args - Arguments to find a Match_move
     * @example
     * // Get one Match_move
     * const match_move = await prisma.match_move.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends match_moveFindFirstOrThrowArgs>(args?: SelectSubset<T, match_moveFindFirstOrThrowArgs<ExtArgs>>): Prisma__match_moveClient<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Match_moves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_moveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Match_moves
     * const match_moves = await prisma.match_move.findMany()
     * 
     * // Get first 10 Match_moves
     * const match_moves = await prisma.match_move.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const match_moveWithIdOnly = await prisma.match_move.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends match_moveFindManyArgs>(args?: SelectSubset<T, match_moveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match_move.
     * @param {match_moveCreateArgs} args - Arguments to create a Match_move.
     * @example
     * // Create one Match_move
     * const Match_move = await prisma.match_move.create({
     *   data: {
     *     // ... data to create a Match_move
     *   }
     * })
     * 
     */
    create<T extends match_moveCreateArgs>(args: SelectSubset<T, match_moveCreateArgs<ExtArgs>>): Prisma__match_moveClient<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Match_moves.
     * @param {match_moveCreateManyArgs} args - Arguments to create many Match_moves.
     * @example
     * // Create many Match_moves
     * const match_move = await prisma.match_move.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends match_moveCreateManyArgs>(args?: SelectSubset<T, match_moveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Match_move.
     * @param {match_moveDeleteArgs} args - Arguments to delete one Match_move.
     * @example
     * // Delete one Match_move
     * const Match_move = await prisma.match_move.delete({
     *   where: {
     *     // ... filter to delete one Match_move
     *   }
     * })
     * 
     */
    delete<T extends match_moveDeleteArgs>(args: SelectSubset<T, match_moveDeleteArgs<ExtArgs>>): Prisma__match_moveClient<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match_move.
     * @param {match_moveUpdateArgs} args - Arguments to update one Match_move.
     * @example
     * // Update one Match_move
     * const match_move = await prisma.match_move.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends match_moveUpdateArgs>(args: SelectSubset<T, match_moveUpdateArgs<ExtArgs>>): Prisma__match_moveClient<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Match_moves.
     * @param {match_moveDeleteManyArgs} args - Arguments to filter Match_moves to delete.
     * @example
     * // Delete a few Match_moves
     * const { count } = await prisma.match_move.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends match_moveDeleteManyArgs>(args?: SelectSubset<T, match_moveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Match_moves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_moveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Match_moves
     * const match_move = await prisma.match_move.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends match_moveUpdateManyArgs>(args: SelectSubset<T, match_moveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Match_move.
     * @param {match_moveUpsertArgs} args - Arguments to update or create a Match_move.
     * @example
     * // Update or create a Match_move
     * const match_move = await prisma.match_move.upsert({
     *   create: {
     *     // ... data to create a Match_move
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match_move we want to update
     *   }
     * })
     */
    upsert<T extends match_moveUpsertArgs>(args: SelectSubset<T, match_moveUpsertArgs<ExtArgs>>): Prisma__match_moveClient<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Match_moves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_moveCountArgs} args - Arguments to filter Match_moves to count.
     * @example
     * // Count the number of Match_moves
     * const count = await prisma.match_move.count({
     *   where: {
     *     // ... the filter for the Match_moves we want to count
     *   }
     * })
    **/
    count<T extends match_moveCountArgs>(
      args?: Subset<T, match_moveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Match_moveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match_move.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Match_moveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Match_moveAggregateArgs>(args: Subset<T, Match_moveAggregateArgs>): Prisma.PrismaPromise<GetMatch_moveAggregateType<T>>

    /**
     * Group by Match_move.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_moveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends match_moveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: match_moveGroupByArgs['orderBy'] }
        : { orderBy?: match_moveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, match_moveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatch_moveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the match_move model
   */
  readonly fields: match_moveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for match_move.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__match_moveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends matchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, matchDefaultArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends match_move$userArgs<ExtArgs> = {}>(args?: Subset<T, match_move$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the match_move model
   */
  interface match_moveFieldRefs {
    readonly id: FieldRef<"match_move", 'Int'>
    readonly matchId: FieldRef<"match_move", 'Int'>
    readonly playerId: FieldRef<"match_move", 'Int'>
    readonly moveNumber: FieldRef<"match_move", 'Int'>
    readonly fromX: FieldRef<"match_move", 'Int'>
    readonly fromY: FieldRef<"match_move", 'Int'>
    readonly toX: FieldRef<"match_move", 'Int'>
    readonly toY: FieldRef<"match_move", 'Int'>
    readonly pieceType: FieldRef<"match_move", 'String'>
    readonly capturedPieceType: FieldRef<"match_move", 'String'>
    readonly specialAbilityUsed: FieldRef<"match_move", 'Int'>
    readonly createdAt: FieldRef<"match_move", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * match_move findUnique
   */
  export type match_moveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    /**
     * Filter, which match_move to fetch.
     */
    where: match_moveWhereUniqueInput
  }

  /**
   * match_move findUniqueOrThrow
   */
  export type match_moveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    /**
     * Filter, which match_move to fetch.
     */
    where: match_moveWhereUniqueInput
  }

  /**
   * match_move findFirst
   */
  export type match_moveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    /**
     * Filter, which match_move to fetch.
     */
    where?: match_moveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_moves to fetch.
     */
    orderBy?: match_moveOrderByWithRelationInput | match_moveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_moves.
     */
    cursor?: match_moveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_moves.
     */
    distinct?: Match_moveScalarFieldEnum | Match_moveScalarFieldEnum[]
  }

  /**
   * match_move findFirstOrThrow
   */
  export type match_moveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    /**
     * Filter, which match_move to fetch.
     */
    where?: match_moveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_moves to fetch.
     */
    orderBy?: match_moveOrderByWithRelationInput | match_moveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_moves.
     */
    cursor?: match_moveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_moves.
     */
    distinct?: Match_moveScalarFieldEnum | Match_moveScalarFieldEnum[]
  }

  /**
   * match_move findMany
   */
  export type match_moveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    /**
     * Filter, which match_moves to fetch.
     */
    where?: match_moveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_moves to fetch.
     */
    orderBy?: match_moveOrderByWithRelationInput | match_moveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing match_moves.
     */
    cursor?: match_moveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_moves.
     */
    skip?: number
    distinct?: Match_moveScalarFieldEnum | Match_moveScalarFieldEnum[]
  }

  /**
   * match_move create
   */
  export type match_moveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    /**
     * The data needed to create a match_move.
     */
    data: XOR<match_moveCreateInput, match_moveUncheckedCreateInput>
  }

  /**
   * match_move createMany
   */
  export type match_moveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many match_moves.
     */
    data: match_moveCreateManyInput | match_moveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * match_move update
   */
  export type match_moveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    /**
     * The data needed to update a match_move.
     */
    data: XOR<match_moveUpdateInput, match_moveUncheckedUpdateInput>
    /**
     * Choose, which match_move to update.
     */
    where: match_moveWhereUniqueInput
  }

  /**
   * match_move updateMany
   */
  export type match_moveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update match_moves.
     */
    data: XOR<match_moveUpdateManyMutationInput, match_moveUncheckedUpdateManyInput>
    /**
     * Filter which match_moves to update
     */
    where?: match_moveWhereInput
    /**
     * Limit how many match_moves to update.
     */
    limit?: number
  }

  /**
   * match_move upsert
   */
  export type match_moveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    /**
     * The filter to search for the match_move to update in case it exists.
     */
    where: match_moveWhereUniqueInput
    /**
     * In case the match_move found by the `where` argument doesn't exist, create a new match_move with this data.
     */
    create: XOR<match_moveCreateInput, match_moveUncheckedCreateInput>
    /**
     * In case the match_move was found with the provided `where` argument, update it with this data.
     */
    update: XOR<match_moveUpdateInput, match_moveUncheckedUpdateInput>
  }

  /**
   * match_move delete
   */
  export type match_moveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    /**
     * Filter which match_move to delete.
     */
    where: match_moveWhereUniqueInput
  }

  /**
   * match_move deleteMany
   */
  export type match_moveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match_moves to delete
     */
    where?: match_moveWhereInput
    /**
     * Limit how many match_moves to delete.
     */
    limit?: number
  }

  /**
   * match_move.user
   */
  export type match_move$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * match_move without action
   */
  export type match_moveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
  }


  /**
   * Model match_piece
   */

  export type AggregateMatch_piece = {
    _count: Match_pieceCountAggregateOutputType | null
    _avg: Match_pieceAvgAggregateOutputType | null
    _sum: Match_pieceSumAggregateOutputType | null
    _min: Match_pieceMinAggregateOutputType | null
    _max: Match_pieceMaxAggregateOutputType | null
  }

  export type Match_pieceAvgAggregateOutputType = {
    id: number | null
    matchId: number | null
    playerId: number | null
    posX: number | null
    posY: number | null
    usedAbility: number | null
    captured: number | null
  }

  export type Match_pieceSumAggregateOutputType = {
    id: number | null
    matchId: number | null
    playerId: number | null
    posX: number | null
    posY: number | null
    usedAbility: number | null
    captured: number | null
  }

  export type Match_pieceMinAggregateOutputType = {
    id: number | null
    matchId: number | null
    playerId: number | null
    type: $Enums.match_piece_type | null
    posX: number | null
    posY: number | null
    usedAbility: number | null
    captured: number | null
  }

  export type Match_pieceMaxAggregateOutputType = {
    id: number | null
    matchId: number | null
    playerId: number | null
    type: $Enums.match_piece_type | null
    posX: number | null
    posY: number | null
    usedAbility: number | null
    captured: number | null
  }

  export type Match_pieceCountAggregateOutputType = {
    id: number
    matchId: number
    playerId: number
    type: number
    posX: number
    posY: number
    usedAbility: number
    captured: number
    status: number
    _all: number
  }


  export type Match_pieceAvgAggregateInputType = {
    id?: true
    matchId?: true
    playerId?: true
    posX?: true
    posY?: true
    usedAbility?: true
    captured?: true
  }

  export type Match_pieceSumAggregateInputType = {
    id?: true
    matchId?: true
    playerId?: true
    posX?: true
    posY?: true
    usedAbility?: true
    captured?: true
  }

  export type Match_pieceMinAggregateInputType = {
    id?: true
    matchId?: true
    playerId?: true
    type?: true
    posX?: true
    posY?: true
    usedAbility?: true
    captured?: true
  }

  export type Match_pieceMaxAggregateInputType = {
    id?: true
    matchId?: true
    playerId?: true
    type?: true
    posX?: true
    posY?: true
    usedAbility?: true
    captured?: true
  }

  export type Match_pieceCountAggregateInputType = {
    id?: true
    matchId?: true
    playerId?: true
    type?: true
    posX?: true
    posY?: true
    usedAbility?: true
    captured?: true
    status?: true
    _all?: true
  }

  export type Match_pieceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match_piece to aggregate.
     */
    where?: match_pieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_pieces to fetch.
     */
    orderBy?: match_pieceOrderByWithRelationInput | match_pieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: match_pieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned match_pieces
    **/
    _count?: true | Match_pieceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Match_pieceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Match_pieceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Match_pieceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Match_pieceMaxAggregateInputType
  }

  export type GetMatch_pieceAggregateType<T extends Match_pieceAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch_piece]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch_piece[P]>
      : GetScalarType<T[P], AggregateMatch_piece[P]>
  }




  export type match_pieceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_pieceWhereInput
    orderBy?: match_pieceOrderByWithAggregationInput | match_pieceOrderByWithAggregationInput[]
    by: Match_pieceScalarFieldEnum[] | Match_pieceScalarFieldEnum
    having?: match_pieceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Match_pieceCountAggregateInputType | true
    _avg?: Match_pieceAvgAggregateInputType
    _sum?: Match_pieceSumAggregateInputType
    _min?: Match_pieceMinAggregateInputType
    _max?: Match_pieceMaxAggregateInputType
  }

  export type Match_pieceGroupByOutputType = {
    id: number
    matchId: number
    playerId: number | null
    type: $Enums.match_piece_type
    posX: number | null
    posY: number | null
    usedAbility: number | null
    captured: number | null
    status: JsonValue | null
    _count: Match_pieceCountAggregateOutputType | null
    _avg: Match_pieceAvgAggregateOutputType | null
    _sum: Match_pieceSumAggregateOutputType | null
    _min: Match_pieceMinAggregateOutputType | null
    _max: Match_pieceMaxAggregateOutputType | null
  }

  type GetMatch_pieceGroupByPayload<T extends match_pieceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Match_pieceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Match_pieceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Match_pieceGroupByOutputType[P]>
            : GetScalarType<T[P], Match_pieceGroupByOutputType[P]>
        }
      >
    >


  export type match_pieceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    playerId?: boolean
    type?: boolean
    posX?: boolean
    posY?: boolean
    usedAbility?: boolean
    captured?: boolean
    status?: boolean
    match?: boolean | matchDefaultArgs<ExtArgs>
    user?: boolean | match_piece$userArgs<ExtArgs>
  }, ExtArgs["result"]["match_piece"]>



  export type match_pieceSelectScalar = {
    id?: boolean
    matchId?: boolean
    playerId?: boolean
    type?: boolean
    posX?: boolean
    posY?: boolean
    usedAbility?: boolean
    captured?: boolean
    status?: boolean
  }

  export type match_pieceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "playerId" | "type" | "posX" | "posY" | "usedAbility" | "captured" | "status", ExtArgs["result"]["match_piece"]>
  export type match_pieceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | matchDefaultArgs<ExtArgs>
    user?: boolean | match_piece$userArgs<ExtArgs>
  }

  export type $match_piecePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "match_piece"
    objects: {
      match: Prisma.$matchPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      matchId: number
      playerId: number | null
      type: $Enums.match_piece_type
      posX: number | null
      posY: number | null
      usedAbility: number | null
      captured: number | null
      status: Prisma.JsonValue | null
    }, ExtArgs["result"]["match_piece"]>
    composites: {}
  }

  type match_pieceGetPayload<S extends boolean | null | undefined | match_pieceDefaultArgs> = $Result.GetResult<Prisma.$match_piecePayload, S>

  type match_pieceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<match_pieceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Match_pieceCountAggregateInputType | true
    }

  export interface match_pieceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['match_piece'], meta: { name: 'match_piece' } }
    /**
     * Find zero or one Match_piece that matches the filter.
     * @param {match_pieceFindUniqueArgs} args - Arguments to find a Match_piece
     * @example
     * // Get one Match_piece
     * const match_piece = await prisma.match_piece.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends match_pieceFindUniqueArgs>(args: SelectSubset<T, match_pieceFindUniqueArgs<ExtArgs>>): Prisma__match_pieceClient<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match_piece that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {match_pieceFindUniqueOrThrowArgs} args - Arguments to find a Match_piece
     * @example
     * // Get one Match_piece
     * const match_piece = await prisma.match_piece.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends match_pieceFindUniqueOrThrowArgs>(args: SelectSubset<T, match_pieceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__match_pieceClient<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match_piece that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pieceFindFirstArgs} args - Arguments to find a Match_piece
     * @example
     * // Get one Match_piece
     * const match_piece = await prisma.match_piece.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends match_pieceFindFirstArgs>(args?: SelectSubset<T, match_pieceFindFirstArgs<ExtArgs>>): Prisma__match_pieceClient<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match_piece that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pieceFindFirstOrThrowArgs} args - Arguments to find a Match_piece
     * @example
     * // Get one Match_piece
     * const match_piece = await prisma.match_piece.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends match_pieceFindFirstOrThrowArgs>(args?: SelectSubset<T, match_pieceFindFirstOrThrowArgs<ExtArgs>>): Prisma__match_pieceClient<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Match_pieces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pieceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Match_pieces
     * const match_pieces = await prisma.match_piece.findMany()
     * 
     * // Get first 10 Match_pieces
     * const match_pieces = await prisma.match_piece.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const match_pieceWithIdOnly = await prisma.match_piece.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends match_pieceFindManyArgs>(args?: SelectSubset<T, match_pieceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match_piece.
     * @param {match_pieceCreateArgs} args - Arguments to create a Match_piece.
     * @example
     * // Create one Match_piece
     * const Match_piece = await prisma.match_piece.create({
     *   data: {
     *     // ... data to create a Match_piece
     *   }
     * })
     * 
     */
    create<T extends match_pieceCreateArgs>(args: SelectSubset<T, match_pieceCreateArgs<ExtArgs>>): Prisma__match_pieceClient<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Match_pieces.
     * @param {match_pieceCreateManyArgs} args - Arguments to create many Match_pieces.
     * @example
     * // Create many Match_pieces
     * const match_piece = await prisma.match_piece.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends match_pieceCreateManyArgs>(args?: SelectSubset<T, match_pieceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Match_piece.
     * @param {match_pieceDeleteArgs} args - Arguments to delete one Match_piece.
     * @example
     * // Delete one Match_piece
     * const Match_piece = await prisma.match_piece.delete({
     *   where: {
     *     // ... filter to delete one Match_piece
     *   }
     * })
     * 
     */
    delete<T extends match_pieceDeleteArgs>(args: SelectSubset<T, match_pieceDeleteArgs<ExtArgs>>): Prisma__match_pieceClient<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match_piece.
     * @param {match_pieceUpdateArgs} args - Arguments to update one Match_piece.
     * @example
     * // Update one Match_piece
     * const match_piece = await prisma.match_piece.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends match_pieceUpdateArgs>(args: SelectSubset<T, match_pieceUpdateArgs<ExtArgs>>): Prisma__match_pieceClient<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Match_pieces.
     * @param {match_pieceDeleteManyArgs} args - Arguments to filter Match_pieces to delete.
     * @example
     * // Delete a few Match_pieces
     * const { count } = await prisma.match_piece.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends match_pieceDeleteManyArgs>(args?: SelectSubset<T, match_pieceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Match_pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pieceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Match_pieces
     * const match_piece = await prisma.match_piece.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends match_pieceUpdateManyArgs>(args: SelectSubset<T, match_pieceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Match_piece.
     * @param {match_pieceUpsertArgs} args - Arguments to update or create a Match_piece.
     * @example
     * // Update or create a Match_piece
     * const match_piece = await prisma.match_piece.upsert({
     *   create: {
     *     // ... data to create a Match_piece
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match_piece we want to update
     *   }
     * })
     */
    upsert<T extends match_pieceUpsertArgs>(args: SelectSubset<T, match_pieceUpsertArgs<ExtArgs>>): Prisma__match_pieceClient<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Match_pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pieceCountArgs} args - Arguments to filter Match_pieces to count.
     * @example
     * // Count the number of Match_pieces
     * const count = await prisma.match_piece.count({
     *   where: {
     *     // ... the filter for the Match_pieces we want to count
     *   }
     * })
    **/
    count<T extends match_pieceCountArgs>(
      args?: Subset<T, match_pieceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Match_pieceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match_piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Match_pieceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Match_pieceAggregateArgs>(args: Subset<T, Match_pieceAggregateArgs>): Prisma.PrismaPromise<GetMatch_pieceAggregateType<T>>

    /**
     * Group by Match_piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_pieceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends match_pieceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: match_pieceGroupByArgs['orderBy'] }
        : { orderBy?: match_pieceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, match_pieceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatch_pieceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the match_piece model
   */
  readonly fields: match_pieceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for match_piece.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__match_pieceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends matchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, matchDefaultArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends match_piece$userArgs<ExtArgs> = {}>(args?: Subset<T, match_piece$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the match_piece model
   */
  interface match_pieceFieldRefs {
    readonly id: FieldRef<"match_piece", 'Int'>
    readonly matchId: FieldRef<"match_piece", 'Int'>
    readonly playerId: FieldRef<"match_piece", 'Int'>
    readonly type: FieldRef<"match_piece", 'match_piece_type'>
    readonly posX: FieldRef<"match_piece", 'Int'>
    readonly posY: FieldRef<"match_piece", 'Int'>
    readonly usedAbility: FieldRef<"match_piece", 'Int'>
    readonly captured: FieldRef<"match_piece", 'Int'>
    readonly status: FieldRef<"match_piece", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * match_piece findUnique
   */
  export type match_pieceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    /**
     * Filter, which match_piece to fetch.
     */
    where: match_pieceWhereUniqueInput
  }

  /**
   * match_piece findUniqueOrThrow
   */
  export type match_pieceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    /**
     * Filter, which match_piece to fetch.
     */
    where: match_pieceWhereUniqueInput
  }

  /**
   * match_piece findFirst
   */
  export type match_pieceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    /**
     * Filter, which match_piece to fetch.
     */
    where?: match_pieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_pieces to fetch.
     */
    orderBy?: match_pieceOrderByWithRelationInput | match_pieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_pieces.
     */
    cursor?: match_pieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_pieces.
     */
    distinct?: Match_pieceScalarFieldEnum | Match_pieceScalarFieldEnum[]
  }

  /**
   * match_piece findFirstOrThrow
   */
  export type match_pieceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    /**
     * Filter, which match_piece to fetch.
     */
    where?: match_pieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_pieces to fetch.
     */
    orderBy?: match_pieceOrderByWithRelationInput | match_pieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_pieces.
     */
    cursor?: match_pieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_pieces.
     */
    distinct?: Match_pieceScalarFieldEnum | Match_pieceScalarFieldEnum[]
  }

  /**
   * match_piece findMany
   */
  export type match_pieceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    /**
     * Filter, which match_pieces to fetch.
     */
    where?: match_pieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_pieces to fetch.
     */
    orderBy?: match_pieceOrderByWithRelationInput | match_pieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing match_pieces.
     */
    cursor?: match_pieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_pieces.
     */
    skip?: number
    distinct?: Match_pieceScalarFieldEnum | Match_pieceScalarFieldEnum[]
  }

  /**
   * match_piece create
   */
  export type match_pieceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    /**
     * The data needed to create a match_piece.
     */
    data: XOR<match_pieceCreateInput, match_pieceUncheckedCreateInput>
  }

  /**
   * match_piece createMany
   */
  export type match_pieceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many match_pieces.
     */
    data: match_pieceCreateManyInput | match_pieceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * match_piece update
   */
  export type match_pieceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    /**
     * The data needed to update a match_piece.
     */
    data: XOR<match_pieceUpdateInput, match_pieceUncheckedUpdateInput>
    /**
     * Choose, which match_piece to update.
     */
    where: match_pieceWhereUniqueInput
  }

  /**
   * match_piece updateMany
   */
  export type match_pieceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update match_pieces.
     */
    data: XOR<match_pieceUpdateManyMutationInput, match_pieceUncheckedUpdateManyInput>
    /**
     * Filter which match_pieces to update
     */
    where?: match_pieceWhereInput
    /**
     * Limit how many match_pieces to update.
     */
    limit?: number
  }

  /**
   * match_piece upsert
   */
  export type match_pieceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    /**
     * The filter to search for the match_piece to update in case it exists.
     */
    where: match_pieceWhereUniqueInput
    /**
     * In case the match_piece found by the `where` argument doesn't exist, create a new match_piece with this data.
     */
    create: XOR<match_pieceCreateInput, match_pieceUncheckedCreateInput>
    /**
     * In case the match_piece was found with the provided `where` argument, update it with this data.
     */
    update: XOR<match_pieceUpdateInput, match_pieceUncheckedUpdateInput>
  }

  /**
   * match_piece delete
   */
  export type match_pieceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    /**
     * Filter which match_piece to delete.
     */
    where: match_pieceWhereUniqueInput
  }

  /**
   * match_piece deleteMany
   */
  export type match_pieceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match_pieces to delete
     */
    where?: match_pieceWhereInput
    /**
     * Limit how many match_pieces to delete.
     */
    limit?: number
  }

  /**
   * match_piece.user
   */
  export type match_piece$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * match_piece without action
   */
  export type match_pieceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
  }


  /**
   * Model match_player
   */

  export type AggregateMatch_player = {
    _count: Match_playerCountAggregateOutputType | null
    _avg: Match_playerAvgAggregateOutputType | null
    _sum: Match_playerSumAggregateOutputType | null
    _min: Match_playerMinAggregateOutputType | null
    _max: Match_playerMaxAggregateOutputType | null
  }

  export type Match_playerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    matchId: number | null
    dreamEnergy: number | null
  }

  export type Match_playerSumAggregateOutputType = {
    id: number | null
    userId: number | null
    matchId: number | null
    dreamEnergy: number | null
  }

  export type Match_playerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    matchId: number | null
    color: $Enums.match_player_color | null
    dreamEnergy: number | null
  }

  export type Match_playerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    matchId: number | null
    color: $Enums.match_player_color | null
    dreamEnergy: number | null
  }

  export type Match_playerCountAggregateOutputType = {
    id: number
    userId: number
    matchId: number
    color: number
    dreamEnergy: number
    _all: number
  }


  export type Match_playerAvgAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    dreamEnergy?: true
  }

  export type Match_playerSumAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    dreamEnergy?: true
  }

  export type Match_playerMinAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    color?: true
    dreamEnergy?: true
  }

  export type Match_playerMaxAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    color?: true
    dreamEnergy?: true
  }

  export type Match_playerCountAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    color?: true
    dreamEnergy?: true
    _all?: true
  }

  export type Match_playerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match_player to aggregate.
     */
    where?: match_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_players to fetch.
     */
    orderBy?: match_playerOrderByWithRelationInput | match_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: match_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned match_players
    **/
    _count?: true | Match_playerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Match_playerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Match_playerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Match_playerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Match_playerMaxAggregateInputType
  }

  export type GetMatch_playerAggregateType<T extends Match_playerAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch_player]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch_player[P]>
      : GetScalarType<T[P], AggregateMatch_player[P]>
  }




  export type match_playerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_playerWhereInput
    orderBy?: match_playerOrderByWithAggregationInput | match_playerOrderByWithAggregationInput[]
    by: Match_playerScalarFieldEnum[] | Match_playerScalarFieldEnum
    having?: match_playerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Match_playerCountAggregateInputType | true
    _avg?: Match_playerAvgAggregateInputType
    _sum?: Match_playerSumAggregateInputType
    _min?: Match_playerMinAggregateInputType
    _max?: Match_playerMaxAggregateInputType
  }

  export type Match_playerGroupByOutputType = {
    id: number
    userId: number | null
    matchId: number
    color: $Enums.match_player_color
    dreamEnergy: number
    _count: Match_playerCountAggregateOutputType | null
    _avg: Match_playerAvgAggregateOutputType | null
    _sum: Match_playerSumAggregateOutputType | null
    _min: Match_playerMinAggregateOutputType | null
    _max: Match_playerMaxAggregateOutputType | null
  }

  type GetMatch_playerGroupByPayload<T extends match_playerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Match_playerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Match_playerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Match_playerGroupByOutputType[P]>
            : GetScalarType<T[P], Match_playerGroupByOutputType[P]>
        }
      >
    >


  export type match_playerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchId?: boolean
    color?: boolean
    dreamEnergy?: boolean
    user?: boolean | match_player$userArgs<ExtArgs>
    match?: boolean | matchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match_player"]>



  export type match_playerSelectScalar = {
    id?: boolean
    userId?: boolean
    matchId?: boolean
    color?: boolean
    dreamEnergy?: boolean
  }

  export type match_playerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "matchId" | "color" | "dreamEnergy", ExtArgs["result"]["match_player"]>
  export type match_playerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | match_player$userArgs<ExtArgs>
    match?: boolean | matchDefaultArgs<ExtArgs>
  }

  export type $match_playerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "match_player"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      match: Prisma.$matchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      matchId: number
      color: $Enums.match_player_color
      dreamEnergy: number
    }, ExtArgs["result"]["match_player"]>
    composites: {}
  }

  type match_playerGetPayload<S extends boolean | null | undefined | match_playerDefaultArgs> = $Result.GetResult<Prisma.$match_playerPayload, S>

  type match_playerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<match_playerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Match_playerCountAggregateInputType | true
    }

  export interface match_playerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['match_player'], meta: { name: 'match_player' } }
    /**
     * Find zero or one Match_player that matches the filter.
     * @param {match_playerFindUniqueArgs} args - Arguments to find a Match_player
     * @example
     * // Get one Match_player
     * const match_player = await prisma.match_player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends match_playerFindUniqueArgs>(args: SelectSubset<T, match_playerFindUniqueArgs<ExtArgs>>): Prisma__match_playerClient<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match_player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {match_playerFindUniqueOrThrowArgs} args - Arguments to find a Match_player
     * @example
     * // Get one Match_player
     * const match_player = await prisma.match_player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends match_playerFindUniqueOrThrowArgs>(args: SelectSubset<T, match_playerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__match_playerClient<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match_player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playerFindFirstArgs} args - Arguments to find a Match_player
     * @example
     * // Get one Match_player
     * const match_player = await prisma.match_player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends match_playerFindFirstArgs>(args?: SelectSubset<T, match_playerFindFirstArgs<ExtArgs>>): Prisma__match_playerClient<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match_player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playerFindFirstOrThrowArgs} args - Arguments to find a Match_player
     * @example
     * // Get one Match_player
     * const match_player = await prisma.match_player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends match_playerFindFirstOrThrowArgs>(args?: SelectSubset<T, match_playerFindFirstOrThrowArgs<ExtArgs>>): Prisma__match_playerClient<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Match_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Match_players
     * const match_players = await prisma.match_player.findMany()
     * 
     * // Get first 10 Match_players
     * const match_players = await prisma.match_player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const match_playerWithIdOnly = await prisma.match_player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends match_playerFindManyArgs>(args?: SelectSubset<T, match_playerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match_player.
     * @param {match_playerCreateArgs} args - Arguments to create a Match_player.
     * @example
     * // Create one Match_player
     * const Match_player = await prisma.match_player.create({
     *   data: {
     *     // ... data to create a Match_player
     *   }
     * })
     * 
     */
    create<T extends match_playerCreateArgs>(args: SelectSubset<T, match_playerCreateArgs<ExtArgs>>): Prisma__match_playerClient<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Match_players.
     * @param {match_playerCreateManyArgs} args - Arguments to create many Match_players.
     * @example
     * // Create many Match_players
     * const match_player = await prisma.match_player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends match_playerCreateManyArgs>(args?: SelectSubset<T, match_playerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Match_player.
     * @param {match_playerDeleteArgs} args - Arguments to delete one Match_player.
     * @example
     * // Delete one Match_player
     * const Match_player = await prisma.match_player.delete({
     *   where: {
     *     // ... filter to delete one Match_player
     *   }
     * })
     * 
     */
    delete<T extends match_playerDeleteArgs>(args: SelectSubset<T, match_playerDeleteArgs<ExtArgs>>): Prisma__match_playerClient<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match_player.
     * @param {match_playerUpdateArgs} args - Arguments to update one Match_player.
     * @example
     * // Update one Match_player
     * const match_player = await prisma.match_player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends match_playerUpdateArgs>(args: SelectSubset<T, match_playerUpdateArgs<ExtArgs>>): Prisma__match_playerClient<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Match_players.
     * @param {match_playerDeleteManyArgs} args - Arguments to filter Match_players to delete.
     * @example
     * // Delete a few Match_players
     * const { count } = await prisma.match_player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends match_playerDeleteManyArgs>(args?: SelectSubset<T, match_playerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Match_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Match_players
     * const match_player = await prisma.match_player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends match_playerUpdateManyArgs>(args: SelectSubset<T, match_playerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Match_player.
     * @param {match_playerUpsertArgs} args - Arguments to update or create a Match_player.
     * @example
     * // Update or create a Match_player
     * const match_player = await prisma.match_player.upsert({
     *   create: {
     *     // ... data to create a Match_player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match_player we want to update
     *   }
     * })
     */
    upsert<T extends match_playerUpsertArgs>(args: SelectSubset<T, match_playerUpsertArgs<ExtArgs>>): Prisma__match_playerClient<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Match_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playerCountArgs} args - Arguments to filter Match_players to count.
     * @example
     * // Count the number of Match_players
     * const count = await prisma.match_player.count({
     *   where: {
     *     // ... the filter for the Match_players we want to count
     *   }
     * })
    **/
    count<T extends match_playerCountArgs>(
      args?: Subset<T, match_playerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Match_playerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match_player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Match_playerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Match_playerAggregateArgs>(args: Subset<T, Match_playerAggregateArgs>): Prisma.PrismaPromise<GetMatch_playerAggregateType<T>>

    /**
     * Group by Match_player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_playerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends match_playerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: match_playerGroupByArgs['orderBy'] }
        : { orderBy?: match_playerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, match_playerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatch_playerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the match_player model
   */
  readonly fields: match_playerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for match_player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__match_playerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends match_player$userArgs<ExtArgs> = {}>(args?: Subset<T, match_player$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    match<T extends matchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, matchDefaultArgs<ExtArgs>>): Prisma__matchClient<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the match_player model
   */
  interface match_playerFieldRefs {
    readonly id: FieldRef<"match_player", 'Int'>
    readonly userId: FieldRef<"match_player", 'Int'>
    readonly matchId: FieldRef<"match_player", 'Int'>
    readonly color: FieldRef<"match_player", 'match_player_color'>
    readonly dreamEnergy: FieldRef<"match_player", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * match_player findUnique
   */
  export type match_playerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    /**
     * Filter, which match_player to fetch.
     */
    where: match_playerWhereUniqueInput
  }

  /**
   * match_player findUniqueOrThrow
   */
  export type match_playerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    /**
     * Filter, which match_player to fetch.
     */
    where: match_playerWhereUniqueInput
  }

  /**
   * match_player findFirst
   */
  export type match_playerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    /**
     * Filter, which match_player to fetch.
     */
    where?: match_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_players to fetch.
     */
    orderBy?: match_playerOrderByWithRelationInput | match_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_players.
     */
    cursor?: match_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_players.
     */
    distinct?: Match_playerScalarFieldEnum | Match_playerScalarFieldEnum[]
  }

  /**
   * match_player findFirstOrThrow
   */
  export type match_playerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    /**
     * Filter, which match_player to fetch.
     */
    where?: match_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_players to fetch.
     */
    orderBy?: match_playerOrderByWithRelationInput | match_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_players.
     */
    cursor?: match_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_players.
     */
    distinct?: Match_playerScalarFieldEnum | Match_playerScalarFieldEnum[]
  }

  /**
   * match_player findMany
   */
  export type match_playerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    /**
     * Filter, which match_players to fetch.
     */
    where?: match_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_players to fetch.
     */
    orderBy?: match_playerOrderByWithRelationInput | match_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing match_players.
     */
    cursor?: match_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_players.
     */
    skip?: number
    distinct?: Match_playerScalarFieldEnum | Match_playerScalarFieldEnum[]
  }

  /**
   * match_player create
   */
  export type match_playerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    /**
     * The data needed to create a match_player.
     */
    data: XOR<match_playerCreateInput, match_playerUncheckedCreateInput>
  }

  /**
   * match_player createMany
   */
  export type match_playerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many match_players.
     */
    data: match_playerCreateManyInput | match_playerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * match_player update
   */
  export type match_playerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    /**
     * The data needed to update a match_player.
     */
    data: XOR<match_playerUpdateInput, match_playerUncheckedUpdateInput>
    /**
     * Choose, which match_player to update.
     */
    where: match_playerWhereUniqueInput
  }

  /**
   * match_player updateMany
   */
  export type match_playerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update match_players.
     */
    data: XOR<match_playerUpdateManyMutationInput, match_playerUncheckedUpdateManyInput>
    /**
     * Filter which match_players to update
     */
    where?: match_playerWhereInput
    /**
     * Limit how many match_players to update.
     */
    limit?: number
  }

  /**
   * match_player upsert
   */
  export type match_playerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    /**
     * The filter to search for the match_player to update in case it exists.
     */
    where: match_playerWhereUniqueInput
    /**
     * In case the match_player found by the `where` argument doesn't exist, create a new match_player with this data.
     */
    create: XOR<match_playerCreateInput, match_playerUncheckedCreateInput>
    /**
     * In case the match_player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<match_playerUpdateInput, match_playerUncheckedUpdateInput>
  }

  /**
   * match_player delete
   */
  export type match_playerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    /**
     * Filter which match_player to delete.
     */
    where: match_playerWhereUniqueInput
  }

  /**
   * match_player deleteMany
   */
  export type match_playerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match_players to delete
     */
    where?: match_playerWhereInput
    /**
     * Limit how many match_players to delete.
     */
    limit?: number
  }

  /**
   * match_player.user
   */
  export type match_player$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * match_player without action
   */
  export type match_playerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
  }


  /**
   * Model refresh_token
   */

  export type AggregateRefresh_token = {
    _count: Refresh_tokenCountAggregateOutputType | null
    _avg: Refresh_tokenAvgAggregateOutputType | null
    _sum: Refresh_tokenSumAggregateOutputType | null
    _min: Refresh_tokenMinAggregateOutputType | null
    _max: Refresh_tokenMaxAggregateOutputType | null
  }

  export type Refresh_tokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    deviceId: number | null
  }

  export type Refresh_tokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
    deviceId: number | null
  }

  export type Refresh_tokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    deviceId: number | null
    token: string | null
    ipAddress: string | null
    country: string | null
    region: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type Refresh_tokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    deviceId: number | null
    token: string | null
    ipAddress: string | null
    country: string | null
    region: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type Refresh_tokenCountAggregateOutputType = {
    id: number
    userId: number
    deviceId: number
    token: number
    ipAddress: number
    country: number
    region: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type Refresh_tokenAvgAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
  }

  export type Refresh_tokenSumAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
  }

  export type Refresh_tokenMinAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    token?: true
    ipAddress?: true
    country?: true
    region?: true
    createdAt?: true
    expiresAt?: true
  }

  export type Refresh_tokenMaxAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    token?: true
    ipAddress?: true
    country?: true
    region?: true
    createdAt?: true
    expiresAt?: true
  }

  export type Refresh_tokenCountAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    token?: true
    ipAddress?: true
    country?: true
    region?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type Refresh_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refresh_token to aggregate.
     */
    where?: refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refresh_tokens
    **/
    _count?: true | Refresh_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Refresh_tokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Refresh_tokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Refresh_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Refresh_tokenMaxAggregateInputType
  }

  export type GetRefresh_tokenAggregateType<T extends Refresh_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefresh_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefresh_token[P]>
      : GetScalarType<T[P], AggregateRefresh_token[P]>
  }




  export type refresh_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokenWhereInput
    orderBy?: refresh_tokenOrderByWithAggregationInput | refresh_tokenOrderByWithAggregationInput[]
    by: Refresh_tokenScalarFieldEnum[] | Refresh_tokenScalarFieldEnum
    having?: refresh_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Refresh_tokenCountAggregateInputType | true
    _avg?: Refresh_tokenAvgAggregateInputType
    _sum?: Refresh_tokenSumAggregateInputType
    _min?: Refresh_tokenMinAggregateInputType
    _max?: Refresh_tokenMaxAggregateInputType
  }

  export type Refresh_tokenGroupByOutputType = {
    id: number
    userId: number
    deviceId: number
    token: string | null
    ipAddress: string | null
    country: string | null
    region: string | null
    createdAt: Date | null
    expiresAt: Date | null
    _count: Refresh_tokenCountAggregateOutputType | null
    _avg: Refresh_tokenAvgAggregateOutputType | null
    _sum: Refresh_tokenSumAggregateOutputType | null
    _min: Refresh_tokenMinAggregateOutputType | null
    _max: Refresh_tokenMaxAggregateOutputType | null
  }

  type GetRefresh_tokenGroupByPayload<T extends refresh_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Refresh_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Refresh_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Refresh_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], Refresh_tokenGroupByOutputType[P]>
        }
      >
    >


  export type refresh_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceId?: boolean
    token?: boolean
    ipAddress?: boolean
    country?: boolean
    region?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refresh_token"]>



  export type refresh_tokenSelectScalar = {
    id?: boolean
    userId?: boolean
    deviceId?: boolean
    token?: boolean
    ipAddress?: boolean
    country?: boolean
    region?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type refresh_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deviceId" | "token" | "ipAddress" | "country" | "region" | "createdAt" | "expiresAt", ExtArgs["result"]["refresh_token"]>
  export type refresh_tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    device?: boolean | deviceDefaultArgs<ExtArgs>
  }

  export type $refresh_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "refresh_token"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      device: Prisma.$devicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      deviceId: number
      token: string | null
      ipAddress: string | null
      country: string | null
      region: string | null
      createdAt: Date | null
      expiresAt: Date | null
    }, ExtArgs["result"]["refresh_token"]>
    composites: {}
  }

  type refresh_tokenGetPayload<S extends boolean | null | undefined | refresh_tokenDefaultArgs> = $Result.GetResult<Prisma.$refresh_tokenPayload, S>

  type refresh_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<refresh_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Refresh_tokenCountAggregateInputType | true
    }

  export interface refresh_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['refresh_token'], meta: { name: 'refresh_token' } }
    /**
     * Find zero or one Refresh_token that matches the filter.
     * @param {refresh_tokenFindUniqueArgs} args - Arguments to find a Refresh_token
     * @example
     * // Get one Refresh_token
     * const refresh_token = await prisma.refresh_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends refresh_tokenFindUniqueArgs>(args: SelectSubset<T, refresh_tokenFindUniqueArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refresh_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {refresh_tokenFindUniqueOrThrowArgs} args - Arguments to find a Refresh_token
     * @example
     * // Get one Refresh_token
     * const refresh_token = await prisma.refresh_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends refresh_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, refresh_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refresh_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenFindFirstArgs} args - Arguments to find a Refresh_token
     * @example
     * // Get one Refresh_token
     * const refresh_token = await prisma.refresh_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends refresh_tokenFindFirstArgs>(args?: SelectSubset<T, refresh_tokenFindFirstArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refresh_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenFindFirstOrThrowArgs} args - Arguments to find a Refresh_token
     * @example
     * // Get one Refresh_token
     * const refresh_token = await prisma.refresh_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends refresh_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, refresh_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refresh_tokens
     * const refresh_tokens = await prisma.refresh_token.findMany()
     * 
     * // Get first 10 Refresh_tokens
     * const refresh_tokens = await prisma.refresh_token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refresh_tokenWithIdOnly = await prisma.refresh_token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends refresh_tokenFindManyArgs>(args?: SelectSubset<T, refresh_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refresh_token.
     * @param {refresh_tokenCreateArgs} args - Arguments to create a Refresh_token.
     * @example
     * // Create one Refresh_token
     * const Refresh_token = await prisma.refresh_token.create({
     *   data: {
     *     // ... data to create a Refresh_token
     *   }
     * })
     * 
     */
    create<T extends refresh_tokenCreateArgs>(args: SelectSubset<T, refresh_tokenCreateArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refresh_tokens.
     * @param {refresh_tokenCreateManyArgs} args - Arguments to create many Refresh_tokens.
     * @example
     * // Create many Refresh_tokens
     * const refresh_token = await prisma.refresh_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends refresh_tokenCreateManyArgs>(args?: SelectSubset<T, refresh_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Refresh_token.
     * @param {refresh_tokenDeleteArgs} args - Arguments to delete one Refresh_token.
     * @example
     * // Delete one Refresh_token
     * const Refresh_token = await prisma.refresh_token.delete({
     *   where: {
     *     // ... filter to delete one Refresh_token
     *   }
     * })
     * 
     */
    delete<T extends refresh_tokenDeleteArgs>(args: SelectSubset<T, refresh_tokenDeleteArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refresh_token.
     * @param {refresh_tokenUpdateArgs} args - Arguments to update one Refresh_token.
     * @example
     * // Update one Refresh_token
     * const refresh_token = await prisma.refresh_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends refresh_tokenUpdateArgs>(args: SelectSubset<T, refresh_tokenUpdateArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refresh_tokens.
     * @param {refresh_tokenDeleteManyArgs} args - Arguments to filter Refresh_tokens to delete.
     * @example
     * // Delete a few Refresh_tokens
     * const { count } = await prisma.refresh_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends refresh_tokenDeleteManyArgs>(args?: SelectSubset<T, refresh_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refresh_tokens
     * const refresh_token = await prisma.refresh_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends refresh_tokenUpdateManyArgs>(args: SelectSubset<T, refresh_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refresh_token.
     * @param {refresh_tokenUpsertArgs} args - Arguments to update or create a Refresh_token.
     * @example
     * // Update or create a Refresh_token
     * const refresh_token = await prisma.refresh_token.upsert({
     *   create: {
     *     // ... data to create a Refresh_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refresh_token we want to update
     *   }
     * })
     */
    upsert<T extends refresh_tokenUpsertArgs>(args: SelectSubset<T, refresh_tokenUpsertArgs<ExtArgs>>): Prisma__refresh_tokenClient<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenCountArgs} args - Arguments to filter Refresh_tokens to count.
     * @example
     * // Count the number of Refresh_tokens
     * const count = await prisma.refresh_token.count({
     *   where: {
     *     // ... the filter for the Refresh_tokens we want to count
     *   }
     * })
    **/
    count<T extends refresh_tokenCountArgs>(
      args?: Subset<T, refresh_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Refresh_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refresh_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Refresh_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Refresh_tokenAggregateArgs>(args: Subset<T, Refresh_tokenAggregateArgs>): Prisma.PrismaPromise<GetRefresh_tokenAggregateType<T>>

    /**
     * Group by Refresh_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends refresh_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: refresh_tokenGroupByArgs['orderBy'] }
        : { orderBy?: refresh_tokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, refresh_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefresh_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the refresh_token model
   */
  readonly fields: refresh_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for refresh_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__refresh_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    device<T extends deviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, deviceDefaultArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the refresh_token model
   */
  interface refresh_tokenFieldRefs {
    readonly id: FieldRef<"refresh_token", 'Int'>
    readonly userId: FieldRef<"refresh_token", 'Int'>
    readonly deviceId: FieldRef<"refresh_token", 'Int'>
    readonly token: FieldRef<"refresh_token", 'String'>
    readonly ipAddress: FieldRef<"refresh_token", 'String'>
    readonly country: FieldRef<"refresh_token", 'String'>
    readonly region: FieldRef<"refresh_token", 'String'>
    readonly createdAt: FieldRef<"refresh_token", 'DateTime'>
    readonly expiresAt: FieldRef<"refresh_token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * refresh_token findUnique
   */
  export type refresh_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter, which refresh_token to fetch.
     */
    where: refresh_tokenWhereUniqueInput
  }

  /**
   * refresh_token findUniqueOrThrow
   */
  export type refresh_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter, which refresh_token to fetch.
     */
    where: refresh_tokenWhereUniqueInput
  }

  /**
   * refresh_token findFirst
   */
  export type refresh_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter, which refresh_token to fetch.
     */
    where?: refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Refresh_tokenScalarFieldEnum | Refresh_tokenScalarFieldEnum[]
  }

  /**
   * refresh_token findFirstOrThrow
   */
  export type refresh_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter, which refresh_token to fetch.
     */
    where?: refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Refresh_tokenScalarFieldEnum | Refresh_tokenScalarFieldEnum[]
  }

  /**
   * refresh_token findMany
   */
  export type refresh_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refresh_tokens.
     */
    cursor?: refresh_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    distinct?: Refresh_tokenScalarFieldEnum | Refresh_tokenScalarFieldEnum[]
  }

  /**
   * refresh_token create
   */
  export type refresh_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a refresh_token.
     */
    data: XOR<refresh_tokenCreateInput, refresh_tokenUncheckedCreateInput>
  }

  /**
   * refresh_token createMany
   */
  export type refresh_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many refresh_tokens.
     */
    data: refresh_tokenCreateManyInput | refresh_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * refresh_token update
   */
  export type refresh_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a refresh_token.
     */
    data: XOR<refresh_tokenUpdateInput, refresh_tokenUncheckedUpdateInput>
    /**
     * Choose, which refresh_token to update.
     */
    where: refresh_tokenWhereUniqueInput
  }

  /**
   * refresh_token updateMany
   */
  export type refresh_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update refresh_tokens.
     */
    data: XOR<refresh_tokenUpdateManyMutationInput, refresh_tokenUncheckedUpdateManyInput>
    /**
     * Filter which refresh_tokens to update
     */
    where?: refresh_tokenWhereInput
    /**
     * Limit how many refresh_tokens to update.
     */
    limit?: number
  }

  /**
   * refresh_token upsert
   */
  export type refresh_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the refresh_token to update in case it exists.
     */
    where: refresh_tokenWhereUniqueInput
    /**
     * In case the refresh_token found by the `where` argument doesn't exist, create a new refresh_token with this data.
     */
    create: XOR<refresh_tokenCreateInput, refresh_tokenUncheckedCreateInput>
    /**
     * In case the refresh_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refresh_tokenUpdateInput, refresh_tokenUncheckedUpdateInput>
  }

  /**
   * refresh_token delete
   */
  export type refresh_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    /**
     * Filter which refresh_token to delete.
     */
    where: refresh_tokenWhereUniqueInput
  }

  /**
   * refresh_token deleteMany
   */
  export type refresh_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refresh_tokens to delete
     */
    where?: refresh_tokenWhereInput
    /**
     * Limit how many refresh_tokens to delete.
     */
    limit?: number
  }

  /**
   * refresh_token without action
   */
  export type refresh_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    passwordHash: string | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    passwordHash: string | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordHash: number
    isEmailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string | null
    username: string
    passwordHash: string
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    device?: boolean | user$deviceArgs<ExtArgs>
    match?: boolean | user$matchArgs<ExtArgs>
    match_move?: boolean | user$match_moveArgs<ExtArgs>
    match_piece?: boolean | user$match_pieceArgs<ExtArgs>
    match_player?: boolean | user$match_playerArgs<ExtArgs>
    match_queue?: boolean | user$match_queueArgs<ExtArgs>
    refresh_token?: boolean | user$refresh_tokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordHash" | "isEmailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | user$deviceArgs<ExtArgs>
    match?: boolean | user$matchArgs<ExtArgs>
    match_move?: boolean | user$match_moveArgs<ExtArgs>
    match_piece?: boolean | user$match_pieceArgs<ExtArgs>
    match_player?: boolean | user$match_playerArgs<ExtArgs>
    match_queue?: boolean | user$match_queueArgs<ExtArgs>
    refresh_token?: boolean | user$refresh_tokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      device: Prisma.$devicePayload<ExtArgs>[]
      match: Prisma.$matchPayload<ExtArgs>[]
      match_move: Prisma.$match_movePayload<ExtArgs>[]
      match_piece: Prisma.$match_piecePayload<ExtArgs>[]
      match_player: Prisma.$match_playerPayload<ExtArgs>[]
      match_queue: Prisma.$match_queuePayload<ExtArgs> | null
      refresh_token: Prisma.$refresh_tokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      username: string
      passwordHash: string
      isEmailVerified: boolean | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends user$deviceArgs<ExtArgs> = {}>(args?: Subset<T, user$deviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    match<T extends user$matchArgs<ExtArgs> = {}>(args?: Subset<T, user$matchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    match_move<T extends user$match_moveArgs<ExtArgs> = {}>(args?: Subset<T, user$match_moveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_movePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    match_piece<T extends user$match_pieceArgs<ExtArgs> = {}>(args?: Subset<T, user$match_pieceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_piecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    match_player<T extends user$match_playerArgs<ExtArgs> = {}>(args?: Subset<T, user$match_playerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_playerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    match_queue<T extends user$match_queueArgs<ExtArgs> = {}>(args?: Subset<T, user$match_queueArgs<ExtArgs>>): Prisma__match_queueClient<$Result.GetResult<Prisma.$match_queuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    refresh_token<T extends user$refresh_tokenArgs<ExtArgs> = {}>(args?: Subset<T, user$refresh_tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly email: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly passwordHash: FieldRef<"user", 'String'>
    readonly isEmailVerified: FieldRef<"user", 'Boolean'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.device
   */
  export type user$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    where?: deviceWhereInput
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    cursor?: deviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * user.match
   */
  export type user$matchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match
     */
    select?: matchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match
     */
    omit?: matchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matchInclude<ExtArgs> | null
    where?: matchWhereInput
    orderBy?: matchOrderByWithRelationInput | matchOrderByWithRelationInput[]
    cursor?: matchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * user.match_move
   */
  export type user$match_moveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_move
     */
    select?: match_moveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_move
     */
    omit?: match_moveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_moveInclude<ExtArgs> | null
    where?: match_moveWhereInput
    orderBy?: match_moveOrderByWithRelationInput | match_moveOrderByWithRelationInput[]
    cursor?: match_moveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Match_moveScalarFieldEnum | Match_moveScalarFieldEnum[]
  }

  /**
   * user.match_piece
   */
  export type user$match_pieceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_piece
     */
    select?: match_pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_piece
     */
    omit?: match_pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_pieceInclude<ExtArgs> | null
    where?: match_pieceWhereInput
    orderBy?: match_pieceOrderByWithRelationInput | match_pieceOrderByWithRelationInput[]
    cursor?: match_pieceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Match_pieceScalarFieldEnum | Match_pieceScalarFieldEnum[]
  }

  /**
   * user.match_player
   */
  export type user$match_playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_player
     */
    select?: match_playerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_player
     */
    omit?: match_playerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_playerInclude<ExtArgs> | null
    where?: match_playerWhereInput
    orderBy?: match_playerOrderByWithRelationInput | match_playerOrderByWithRelationInput[]
    cursor?: match_playerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Match_playerScalarFieldEnum | Match_playerScalarFieldEnum[]
  }

  /**
   * user.match_queue
   */
  export type user$match_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
    where?: match_queueWhereInput
  }

  /**
   * user.refresh_token
   */
  export type user$refresh_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_token
     */
    select?: refresh_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_token
     */
    omit?: refresh_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokenInclude<ExtArgs> | null
    where?: refresh_tokenWhereInput
    orderBy?: refresh_tokenOrderByWithRelationInput | refresh_tokenOrderByWithRelationInput[]
    cursor?: refresh_tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Refresh_tokenScalarFieldEnum | Refresh_tokenScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model match_queue
   */

  export type AggregateMatch_queue = {
    _count: Match_queueCountAggregateOutputType | null
    _avg: Match_queueAvgAggregateOutputType | null
    _sum: Match_queueSumAggregateOutputType | null
    _min: Match_queueMinAggregateOutputType | null
    _max: Match_queueMaxAggregateOutputType | null
  }

  export type Match_queueAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Match_queueSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Match_queueMinAggregateOutputType = {
    id: number | null
    userId: number | null
    status: $Enums.match_queue_status | null
    joinedAt: Date | null
  }

  export type Match_queueMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    status: $Enums.match_queue_status | null
    joinedAt: Date | null
  }

  export type Match_queueCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    joinedAt: number
    _all: number
  }


  export type Match_queueAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Match_queueSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Match_queueMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    joinedAt?: true
  }

  export type Match_queueMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    joinedAt?: true
  }

  export type Match_queueCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    joinedAt?: true
    _all?: true
  }

  export type Match_queueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match_queue to aggregate.
     */
    where?: match_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_queues to fetch.
     */
    orderBy?: match_queueOrderByWithRelationInput | match_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: match_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned match_queues
    **/
    _count?: true | Match_queueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Match_queueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Match_queueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Match_queueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Match_queueMaxAggregateInputType
  }

  export type GetMatch_queueAggregateType<T extends Match_queueAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch_queue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch_queue[P]>
      : GetScalarType<T[P], AggregateMatch_queue[P]>
  }




  export type match_queueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: match_queueWhereInput
    orderBy?: match_queueOrderByWithAggregationInput | match_queueOrderByWithAggregationInput[]
    by: Match_queueScalarFieldEnum[] | Match_queueScalarFieldEnum
    having?: match_queueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Match_queueCountAggregateInputType | true
    _avg?: Match_queueAvgAggregateInputType
    _sum?: Match_queueSumAggregateInputType
    _min?: Match_queueMinAggregateInputType
    _max?: Match_queueMaxAggregateInputType
  }

  export type Match_queueGroupByOutputType = {
    id: number
    userId: number
    status: $Enums.match_queue_status
    joinedAt: Date | null
    _count: Match_queueCountAggregateOutputType | null
    _avg: Match_queueAvgAggregateOutputType | null
    _sum: Match_queueSumAggregateOutputType | null
    _min: Match_queueMinAggregateOutputType | null
    _max: Match_queueMaxAggregateOutputType | null
  }

  type GetMatch_queueGroupByPayload<T extends match_queueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Match_queueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Match_queueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Match_queueGroupByOutputType[P]>
            : GetScalarType<T[P], Match_queueGroupByOutputType[P]>
        }
      >
    >


  export type match_queueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    joinedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match_queue"]>



  export type match_queueSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    joinedAt?: boolean
  }

  export type match_queueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "joinedAt", ExtArgs["result"]["match_queue"]>
  export type match_queueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $match_queuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "match_queue"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      status: $Enums.match_queue_status
      joinedAt: Date | null
    }, ExtArgs["result"]["match_queue"]>
    composites: {}
  }

  type match_queueGetPayload<S extends boolean | null | undefined | match_queueDefaultArgs> = $Result.GetResult<Prisma.$match_queuePayload, S>

  type match_queueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<match_queueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Match_queueCountAggregateInputType | true
    }

  export interface match_queueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['match_queue'], meta: { name: 'match_queue' } }
    /**
     * Find zero or one Match_queue that matches the filter.
     * @param {match_queueFindUniqueArgs} args - Arguments to find a Match_queue
     * @example
     * // Get one Match_queue
     * const match_queue = await prisma.match_queue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends match_queueFindUniqueArgs>(args: SelectSubset<T, match_queueFindUniqueArgs<ExtArgs>>): Prisma__match_queueClient<$Result.GetResult<Prisma.$match_queuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match_queue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {match_queueFindUniqueOrThrowArgs} args - Arguments to find a Match_queue
     * @example
     * // Get one Match_queue
     * const match_queue = await prisma.match_queue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends match_queueFindUniqueOrThrowArgs>(args: SelectSubset<T, match_queueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__match_queueClient<$Result.GetResult<Prisma.$match_queuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match_queue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_queueFindFirstArgs} args - Arguments to find a Match_queue
     * @example
     * // Get one Match_queue
     * const match_queue = await prisma.match_queue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends match_queueFindFirstArgs>(args?: SelectSubset<T, match_queueFindFirstArgs<ExtArgs>>): Prisma__match_queueClient<$Result.GetResult<Prisma.$match_queuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match_queue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_queueFindFirstOrThrowArgs} args - Arguments to find a Match_queue
     * @example
     * // Get one Match_queue
     * const match_queue = await prisma.match_queue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends match_queueFindFirstOrThrowArgs>(args?: SelectSubset<T, match_queueFindFirstOrThrowArgs<ExtArgs>>): Prisma__match_queueClient<$Result.GetResult<Prisma.$match_queuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Match_queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_queueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Match_queues
     * const match_queues = await prisma.match_queue.findMany()
     * 
     * // Get first 10 Match_queues
     * const match_queues = await prisma.match_queue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const match_queueWithIdOnly = await prisma.match_queue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends match_queueFindManyArgs>(args?: SelectSubset<T, match_queueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$match_queuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match_queue.
     * @param {match_queueCreateArgs} args - Arguments to create a Match_queue.
     * @example
     * // Create one Match_queue
     * const Match_queue = await prisma.match_queue.create({
     *   data: {
     *     // ... data to create a Match_queue
     *   }
     * })
     * 
     */
    create<T extends match_queueCreateArgs>(args: SelectSubset<T, match_queueCreateArgs<ExtArgs>>): Prisma__match_queueClient<$Result.GetResult<Prisma.$match_queuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Match_queues.
     * @param {match_queueCreateManyArgs} args - Arguments to create many Match_queues.
     * @example
     * // Create many Match_queues
     * const match_queue = await prisma.match_queue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends match_queueCreateManyArgs>(args?: SelectSubset<T, match_queueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Match_queue.
     * @param {match_queueDeleteArgs} args - Arguments to delete one Match_queue.
     * @example
     * // Delete one Match_queue
     * const Match_queue = await prisma.match_queue.delete({
     *   where: {
     *     // ... filter to delete one Match_queue
     *   }
     * })
     * 
     */
    delete<T extends match_queueDeleteArgs>(args: SelectSubset<T, match_queueDeleteArgs<ExtArgs>>): Prisma__match_queueClient<$Result.GetResult<Prisma.$match_queuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match_queue.
     * @param {match_queueUpdateArgs} args - Arguments to update one Match_queue.
     * @example
     * // Update one Match_queue
     * const match_queue = await prisma.match_queue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends match_queueUpdateArgs>(args: SelectSubset<T, match_queueUpdateArgs<ExtArgs>>): Prisma__match_queueClient<$Result.GetResult<Prisma.$match_queuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Match_queues.
     * @param {match_queueDeleteManyArgs} args - Arguments to filter Match_queues to delete.
     * @example
     * // Delete a few Match_queues
     * const { count } = await prisma.match_queue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends match_queueDeleteManyArgs>(args?: SelectSubset<T, match_queueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Match_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_queueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Match_queues
     * const match_queue = await prisma.match_queue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends match_queueUpdateManyArgs>(args: SelectSubset<T, match_queueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Match_queue.
     * @param {match_queueUpsertArgs} args - Arguments to update or create a Match_queue.
     * @example
     * // Update or create a Match_queue
     * const match_queue = await prisma.match_queue.upsert({
     *   create: {
     *     // ... data to create a Match_queue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match_queue we want to update
     *   }
     * })
     */
    upsert<T extends match_queueUpsertArgs>(args: SelectSubset<T, match_queueUpsertArgs<ExtArgs>>): Prisma__match_queueClient<$Result.GetResult<Prisma.$match_queuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Match_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_queueCountArgs} args - Arguments to filter Match_queues to count.
     * @example
     * // Count the number of Match_queues
     * const count = await prisma.match_queue.count({
     *   where: {
     *     // ... the filter for the Match_queues we want to count
     *   }
     * })
    **/
    count<T extends match_queueCountArgs>(
      args?: Subset<T, match_queueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Match_queueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Match_queueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Match_queueAggregateArgs>(args: Subset<T, Match_queueAggregateArgs>): Prisma.PrismaPromise<GetMatch_queueAggregateType<T>>

    /**
     * Group by Match_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {match_queueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends match_queueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: match_queueGroupByArgs['orderBy'] }
        : { orderBy?: match_queueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, match_queueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatch_queueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the match_queue model
   */
  readonly fields: match_queueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for match_queue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__match_queueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the match_queue model
   */
  interface match_queueFieldRefs {
    readonly id: FieldRef<"match_queue", 'Int'>
    readonly userId: FieldRef<"match_queue", 'Int'>
    readonly status: FieldRef<"match_queue", 'match_queue_status'>
    readonly joinedAt: FieldRef<"match_queue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * match_queue findUnique
   */
  export type match_queueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
    /**
     * Filter, which match_queue to fetch.
     */
    where: match_queueWhereUniqueInput
  }

  /**
   * match_queue findUniqueOrThrow
   */
  export type match_queueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
    /**
     * Filter, which match_queue to fetch.
     */
    where: match_queueWhereUniqueInput
  }

  /**
   * match_queue findFirst
   */
  export type match_queueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
    /**
     * Filter, which match_queue to fetch.
     */
    where?: match_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_queues to fetch.
     */
    orderBy?: match_queueOrderByWithRelationInput | match_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_queues.
     */
    cursor?: match_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_queues.
     */
    distinct?: Match_queueScalarFieldEnum | Match_queueScalarFieldEnum[]
  }

  /**
   * match_queue findFirstOrThrow
   */
  export type match_queueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
    /**
     * Filter, which match_queue to fetch.
     */
    where?: match_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_queues to fetch.
     */
    orderBy?: match_queueOrderByWithRelationInput | match_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for match_queues.
     */
    cursor?: match_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of match_queues.
     */
    distinct?: Match_queueScalarFieldEnum | Match_queueScalarFieldEnum[]
  }

  /**
   * match_queue findMany
   */
  export type match_queueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
    /**
     * Filter, which match_queues to fetch.
     */
    where?: match_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of match_queues to fetch.
     */
    orderBy?: match_queueOrderByWithRelationInput | match_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing match_queues.
     */
    cursor?: match_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` match_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` match_queues.
     */
    skip?: number
    distinct?: Match_queueScalarFieldEnum | Match_queueScalarFieldEnum[]
  }

  /**
   * match_queue create
   */
  export type match_queueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
    /**
     * The data needed to create a match_queue.
     */
    data: XOR<match_queueCreateInput, match_queueUncheckedCreateInput>
  }

  /**
   * match_queue createMany
   */
  export type match_queueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many match_queues.
     */
    data: match_queueCreateManyInput | match_queueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * match_queue update
   */
  export type match_queueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
    /**
     * The data needed to update a match_queue.
     */
    data: XOR<match_queueUpdateInput, match_queueUncheckedUpdateInput>
    /**
     * Choose, which match_queue to update.
     */
    where: match_queueWhereUniqueInput
  }

  /**
   * match_queue updateMany
   */
  export type match_queueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update match_queues.
     */
    data: XOR<match_queueUpdateManyMutationInput, match_queueUncheckedUpdateManyInput>
    /**
     * Filter which match_queues to update
     */
    where?: match_queueWhereInput
    /**
     * Limit how many match_queues to update.
     */
    limit?: number
  }

  /**
   * match_queue upsert
   */
  export type match_queueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
    /**
     * The filter to search for the match_queue to update in case it exists.
     */
    where: match_queueWhereUniqueInput
    /**
     * In case the match_queue found by the `where` argument doesn't exist, create a new match_queue with this data.
     */
    create: XOR<match_queueCreateInput, match_queueUncheckedCreateInput>
    /**
     * In case the match_queue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<match_queueUpdateInput, match_queueUncheckedUpdateInput>
  }

  /**
   * match_queue delete
   */
  export type match_queueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
    /**
     * Filter which match_queue to delete.
     */
    where: match_queueWhereUniqueInput
  }

  /**
   * match_queue deleteMany
   */
  export type match_queueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which match_queues to delete
     */
    where?: match_queueWhereInput
    /**
     * Limit how many match_queues to delete.
     */
    limit?: number
  }

  /**
   * match_queue without action
   */
  export type match_queueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the match_queue
     */
    select?: match_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the match_queue
     */
    omit?: match_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: match_queueInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userAgent: 'userAgent',
    deviceType: 'deviceType',
    firstSeenAt: 'firstSeenAt',
    lastSeenAt: 'lastSeenAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    winnerId: 'winnerId',
    turn: 'turn'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const Match_moveScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    playerId: 'playerId',
    moveNumber: 'moveNumber',
    fromX: 'fromX',
    fromY: 'fromY',
    toX: 'toX',
    toY: 'toY',
    pieceType: 'pieceType',
    capturedPieceType: 'capturedPieceType',
    specialAbilityUsed: 'specialAbilityUsed',
    createdAt: 'createdAt'
  };

  export type Match_moveScalarFieldEnum = (typeof Match_moveScalarFieldEnum)[keyof typeof Match_moveScalarFieldEnum]


  export const Match_pieceScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    playerId: 'playerId',
    type: 'type',
    posX: 'posX',
    posY: 'posY',
    usedAbility: 'usedAbility',
    captured: 'captured',
    status: 'status'
  };

  export type Match_pieceScalarFieldEnum = (typeof Match_pieceScalarFieldEnum)[keyof typeof Match_pieceScalarFieldEnum]


  export const Match_playerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    matchId: 'matchId',
    color: 'color',
    dreamEnergy: 'dreamEnergy'
  };

  export type Match_playerScalarFieldEnum = (typeof Match_playerScalarFieldEnum)[keyof typeof Match_playerScalarFieldEnum]


  export const Refresh_tokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deviceId: 'deviceId',
    token: 'token',
    ipAddress: 'ipAddress',
    country: 'country',
    region: 'region',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type Refresh_tokenScalarFieldEnum = (typeof Refresh_tokenScalarFieldEnum)[keyof typeof Refresh_tokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    isEmailVerified: 'isEmailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Match_queueScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    joinedAt: 'joinedAt'
  };

  export type Match_queueScalarFieldEnum = (typeof Match_queueScalarFieldEnum)[keyof typeof Match_queueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const deviceOrderByRelevanceFieldEnum: {
    userAgent: 'userAgent'
  };

  export type deviceOrderByRelevanceFieldEnum = (typeof deviceOrderByRelevanceFieldEnum)[keyof typeof deviceOrderByRelevanceFieldEnum]


  export const match_moveOrderByRelevanceFieldEnum: {
    pieceType: 'pieceType',
    capturedPieceType: 'capturedPieceType'
  };

  export type match_moveOrderByRelevanceFieldEnum = (typeof match_moveOrderByRelevanceFieldEnum)[keyof typeof match_moveOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const refresh_tokenOrderByRelevanceFieldEnum: {
    token: 'token',
    ipAddress: 'ipAddress',
    country: 'country',
    region: 'region'
  };

  export type refresh_tokenOrderByRelevanceFieldEnum = (typeof refresh_tokenOrderByRelevanceFieldEnum)[keyof typeof refresh_tokenOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'device_deviceType'
   */
  export type Enumdevice_deviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'device_deviceType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'match_status'
   */
  export type Enummatch_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'match_status'>
    


  /**
   * Reference to a field of type 'match_piece_type'
   */
  export type Enummatch_piece_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'match_piece_type'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'match_player_color'
   */
  export type Enummatch_player_colorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'match_player_color'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'match_queue_status'
   */
  export type Enummatch_queue_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'match_queue_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type deviceWhereInput = {
    AND?: deviceWhereInput | deviceWhereInput[]
    OR?: deviceWhereInput[]
    NOT?: deviceWhereInput | deviceWhereInput[]
    id?: IntFilter<"device"> | number
    userId?: IntFilter<"device"> | number
    userAgent?: StringFilter<"device"> | string
    deviceType?: Enumdevice_deviceTypeNullableFilter<"device"> | $Enums.device_deviceType | null
    firstSeenAt?: DateTimeNullableFilter<"device"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"device"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    refresh_token?: Refresh_tokenListRelationFilter
  }

  export type deviceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrderInput | SortOrder
    firstSeenAt?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    refresh_token?: refresh_tokenOrderByRelationAggregateInput
    _relevance?: deviceOrderByRelevanceInput
  }

  export type deviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: deviceWhereInput | deviceWhereInput[]
    OR?: deviceWhereInput[]
    NOT?: deviceWhereInput | deviceWhereInput[]
    userId?: IntFilter<"device"> | number
    userAgent?: StringFilter<"device"> | string
    deviceType?: Enumdevice_deviceTypeNullableFilter<"device"> | $Enums.device_deviceType | null
    firstSeenAt?: DateTimeNullableFilter<"device"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"device"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    refresh_token?: Refresh_tokenListRelationFilter
  }, "id">

  export type deviceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrderInput | SortOrder
    firstSeenAt?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    _count?: deviceCountOrderByAggregateInput
    _avg?: deviceAvgOrderByAggregateInput
    _max?: deviceMaxOrderByAggregateInput
    _min?: deviceMinOrderByAggregateInput
    _sum?: deviceSumOrderByAggregateInput
  }

  export type deviceScalarWhereWithAggregatesInput = {
    AND?: deviceScalarWhereWithAggregatesInput | deviceScalarWhereWithAggregatesInput[]
    OR?: deviceScalarWhereWithAggregatesInput[]
    NOT?: deviceScalarWhereWithAggregatesInput | deviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"device"> | number
    userId?: IntWithAggregatesFilter<"device"> | number
    userAgent?: StringWithAggregatesFilter<"device"> | string
    deviceType?: Enumdevice_deviceTypeNullableWithAggregatesFilter<"device"> | $Enums.device_deviceType | null
    firstSeenAt?: DateTimeNullableWithAggregatesFilter<"device"> | Date | string | null
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"device"> | Date | string | null
  }

  export type matchWhereInput = {
    AND?: matchWhereInput | matchWhereInput[]
    OR?: matchWhereInput[]
    NOT?: matchWhereInput | matchWhereInput[]
    id?: IntFilter<"match"> | number
    status?: Enummatch_statusFilter<"match"> | $Enums.match_status
    createdAt?: DateTimeNullableFilter<"match"> | Date | string | null
    winnerId?: IntNullableFilter<"match"> | number | null
    turn?: IntFilter<"match"> | number
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    match_move?: Match_moveListRelationFilter
    match_piece?: Match_pieceListRelationFilter
    match_player?: Match_playerListRelationFilter
  }

  export type matchOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    turn?: SortOrder
    user?: userOrderByWithRelationInput
    match_move?: match_moveOrderByRelationAggregateInput
    match_piece?: match_pieceOrderByRelationAggregateInput
    match_player?: match_playerOrderByRelationAggregateInput
  }

  export type matchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: matchWhereInput | matchWhereInput[]
    OR?: matchWhereInput[]
    NOT?: matchWhereInput | matchWhereInput[]
    status?: Enummatch_statusFilter<"match"> | $Enums.match_status
    createdAt?: DateTimeNullableFilter<"match"> | Date | string | null
    winnerId?: IntNullableFilter<"match"> | number | null
    turn?: IntFilter<"match"> | number
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    match_move?: Match_moveListRelationFilter
    match_piece?: Match_pieceListRelationFilter
    match_player?: Match_playerListRelationFilter
  }, "id">

  export type matchOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    turn?: SortOrder
    _count?: matchCountOrderByAggregateInput
    _avg?: matchAvgOrderByAggregateInput
    _max?: matchMaxOrderByAggregateInput
    _min?: matchMinOrderByAggregateInput
    _sum?: matchSumOrderByAggregateInput
  }

  export type matchScalarWhereWithAggregatesInput = {
    AND?: matchScalarWhereWithAggregatesInput | matchScalarWhereWithAggregatesInput[]
    OR?: matchScalarWhereWithAggregatesInput[]
    NOT?: matchScalarWhereWithAggregatesInput | matchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"match"> | number
    status?: Enummatch_statusWithAggregatesFilter<"match"> | $Enums.match_status
    createdAt?: DateTimeNullableWithAggregatesFilter<"match"> | Date | string | null
    winnerId?: IntNullableWithAggregatesFilter<"match"> | number | null
    turn?: IntWithAggregatesFilter<"match"> | number
  }

  export type match_moveWhereInput = {
    AND?: match_moveWhereInput | match_moveWhereInput[]
    OR?: match_moveWhereInput[]
    NOT?: match_moveWhereInput | match_moveWhereInput[]
    id?: IntFilter<"match_move"> | number
    matchId?: IntFilter<"match_move"> | number
    playerId?: IntNullableFilter<"match_move"> | number | null
    moveNumber?: IntFilter<"match_move"> | number
    fromX?: IntFilter<"match_move"> | number
    fromY?: IntFilter<"match_move"> | number
    toX?: IntFilter<"match_move"> | number
    toY?: IntFilter<"match_move"> | number
    pieceType?: StringFilter<"match_move"> | string
    capturedPieceType?: StringNullableFilter<"match_move"> | string | null
    specialAbilityUsed?: IntNullableFilter<"match_move"> | number | null
    createdAt?: DateTimeNullableFilter<"match_move"> | Date | string | null
    match?: XOR<MatchScalarRelationFilter, matchWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type match_moveOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrderInput | SortOrder
    moveNumber?: SortOrder
    fromX?: SortOrder
    fromY?: SortOrder
    toX?: SortOrder
    toY?: SortOrder
    pieceType?: SortOrder
    capturedPieceType?: SortOrderInput | SortOrder
    specialAbilityUsed?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    match?: matchOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: match_moveOrderByRelevanceInput
  }

  export type match_moveWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: match_moveWhereInput | match_moveWhereInput[]
    OR?: match_moveWhereInput[]
    NOT?: match_moveWhereInput | match_moveWhereInput[]
    matchId?: IntFilter<"match_move"> | number
    playerId?: IntNullableFilter<"match_move"> | number | null
    moveNumber?: IntFilter<"match_move"> | number
    fromX?: IntFilter<"match_move"> | number
    fromY?: IntFilter<"match_move"> | number
    toX?: IntFilter<"match_move"> | number
    toY?: IntFilter<"match_move"> | number
    pieceType?: StringFilter<"match_move"> | string
    capturedPieceType?: StringNullableFilter<"match_move"> | string | null
    specialAbilityUsed?: IntNullableFilter<"match_move"> | number | null
    createdAt?: DateTimeNullableFilter<"match_move"> | Date | string | null
    match?: XOR<MatchScalarRelationFilter, matchWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id">

  export type match_moveOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrderInput | SortOrder
    moveNumber?: SortOrder
    fromX?: SortOrder
    fromY?: SortOrder
    toX?: SortOrder
    toY?: SortOrder
    pieceType?: SortOrder
    capturedPieceType?: SortOrderInput | SortOrder
    specialAbilityUsed?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: match_moveCountOrderByAggregateInput
    _avg?: match_moveAvgOrderByAggregateInput
    _max?: match_moveMaxOrderByAggregateInput
    _min?: match_moveMinOrderByAggregateInput
    _sum?: match_moveSumOrderByAggregateInput
  }

  export type match_moveScalarWhereWithAggregatesInput = {
    AND?: match_moveScalarWhereWithAggregatesInput | match_moveScalarWhereWithAggregatesInput[]
    OR?: match_moveScalarWhereWithAggregatesInput[]
    NOT?: match_moveScalarWhereWithAggregatesInput | match_moveScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"match_move"> | number
    matchId?: IntWithAggregatesFilter<"match_move"> | number
    playerId?: IntNullableWithAggregatesFilter<"match_move"> | number | null
    moveNumber?: IntWithAggregatesFilter<"match_move"> | number
    fromX?: IntWithAggregatesFilter<"match_move"> | number
    fromY?: IntWithAggregatesFilter<"match_move"> | number
    toX?: IntWithAggregatesFilter<"match_move"> | number
    toY?: IntWithAggregatesFilter<"match_move"> | number
    pieceType?: StringWithAggregatesFilter<"match_move"> | string
    capturedPieceType?: StringNullableWithAggregatesFilter<"match_move"> | string | null
    specialAbilityUsed?: IntNullableWithAggregatesFilter<"match_move"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"match_move"> | Date | string | null
  }

  export type match_pieceWhereInput = {
    AND?: match_pieceWhereInput | match_pieceWhereInput[]
    OR?: match_pieceWhereInput[]
    NOT?: match_pieceWhereInput | match_pieceWhereInput[]
    id?: IntFilter<"match_piece"> | number
    matchId?: IntFilter<"match_piece"> | number
    playerId?: IntNullableFilter<"match_piece"> | number | null
    type?: Enummatch_piece_typeFilter<"match_piece"> | $Enums.match_piece_type
    posX?: IntNullableFilter<"match_piece"> | number | null
    posY?: IntNullableFilter<"match_piece"> | number | null
    usedAbility?: IntNullableFilter<"match_piece"> | number | null
    captured?: IntNullableFilter<"match_piece"> | number | null
    status?: JsonNullableFilter<"match_piece">
    match?: XOR<MatchScalarRelationFilter, matchWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type match_pieceOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrderInput | SortOrder
    type?: SortOrder
    posX?: SortOrderInput | SortOrder
    posY?: SortOrderInput | SortOrder
    usedAbility?: SortOrderInput | SortOrder
    captured?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    match?: matchOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type match_pieceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: match_pieceWhereInput | match_pieceWhereInput[]
    OR?: match_pieceWhereInput[]
    NOT?: match_pieceWhereInput | match_pieceWhereInput[]
    matchId?: IntFilter<"match_piece"> | number
    playerId?: IntNullableFilter<"match_piece"> | number | null
    type?: Enummatch_piece_typeFilter<"match_piece"> | $Enums.match_piece_type
    posX?: IntNullableFilter<"match_piece"> | number | null
    posY?: IntNullableFilter<"match_piece"> | number | null
    usedAbility?: IntNullableFilter<"match_piece"> | number | null
    captured?: IntNullableFilter<"match_piece"> | number | null
    status?: JsonNullableFilter<"match_piece">
    match?: XOR<MatchScalarRelationFilter, matchWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id">

  export type match_pieceOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrderInput | SortOrder
    type?: SortOrder
    posX?: SortOrderInput | SortOrder
    posY?: SortOrderInput | SortOrder
    usedAbility?: SortOrderInput | SortOrder
    captured?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: match_pieceCountOrderByAggregateInput
    _avg?: match_pieceAvgOrderByAggregateInput
    _max?: match_pieceMaxOrderByAggregateInput
    _min?: match_pieceMinOrderByAggregateInput
    _sum?: match_pieceSumOrderByAggregateInput
  }

  export type match_pieceScalarWhereWithAggregatesInput = {
    AND?: match_pieceScalarWhereWithAggregatesInput | match_pieceScalarWhereWithAggregatesInput[]
    OR?: match_pieceScalarWhereWithAggregatesInput[]
    NOT?: match_pieceScalarWhereWithAggregatesInput | match_pieceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"match_piece"> | number
    matchId?: IntWithAggregatesFilter<"match_piece"> | number
    playerId?: IntNullableWithAggregatesFilter<"match_piece"> | number | null
    type?: Enummatch_piece_typeWithAggregatesFilter<"match_piece"> | $Enums.match_piece_type
    posX?: IntNullableWithAggregatesFilter<"match_piece"> | number | null
    posY?: IntNullableWithAggregatesFilter<"match_piece"> | number | null
    usedAbility?: IntNullableWithAggregatesFilter<"match_piece"> | number | null
    captured?: IntNullableWithAggregatesFilter<"match_piece"> | number | null
    status?: JsonNullableWithAggregatesFilter<"match_piece">
  }

  export type match_playerWhereInput = {
    AND?: match_playerWhereInput | match_playerWhereInput[]
    OR?: match_playerWhereInput[]
    NOT?: match_playerWhereInput | match_playerWhereInput[]
    id?: IntFilter<"match_player"> | number
    userId?: IntNullableFilter<"match_player"> | number | null
    matchId?: IntFilter<"match_player"> | number
    color?: Enummatch_player_colorFilter<"match_player"> | $Enums.match_player_color
    dreamEnergy?: IntFilter<"match_player"> | number
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    match?: XOR<MatchScalarRelationFilter, matchWhereInput>
  }

  export type match_playerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    matchId?: SortOrder
    color?: SortOrder
    dreamEnergy?: SortOrder
    user?: userOrderByWithRelationInput
    match?: matchOrderByWithRelationInput
  }

  export type match_playerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: match_playerWhereInput | match_playerWhereInput[]
    OR?: match_playerWhereInput[]
    NOT?: match_playerWhereInput | match_playerWhereInput[]
    userId?: IntNullableFilter<"match_player"> | number | null
    matchId?: IntFilter<"match_player"> | number
    color?: Enummatch_player_colorFilter<"match_player"> | $Enums.match_player_color
    dreamEnergy?: IntFilter<"match_player"> | number
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    match?: XOR<MatchScalarRelationFilter, matchWhereInput>
  }, "id">

  export type match_playerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    matchId?: SortOrder
    color?: SortOrder
    dreamEnergy?: SortOrder
    _count?: match_playerCountOrderByAggregateInput
    _avg?: match_playerAvgOrderByAggregateInput
    _max?: match_playerMaxOrderByAggregateInput
    _min?: match_playerMinOrderByAggregateInput
    _sum?: match_playerSumOrderByAggregateInput
  }

  export type match_playerScalarWhereWithAggregatesInput = {
    AND?: match_playerScalarWhereWithAggregatesInput | match_playerScalarWhereWithAggregatesInput[]
    OR?: match_playerScalarWhereWithAggregatesInput[]
    NOT?: match_playerScalarWhereWithAggregatesInput | match_playerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"match_player"> | number
    userId?: IntNullableWithAggregatesFilter<"match_player"> | number | null
    matchId?: IntWithAggregatesFilter<"match_player"> | number
    color?: Enummatch_player_colorWithAggregatesFilter<"match_player"> | $Enums.match_player_color
    dreamEnergy?: IntWithAggregatesFilter<"match_player"> | number
  }

  export type refresh_tokenWhereInput = {
    AND?: refresh_tokenWhereInput | refresh_tokenWhereInput[]
    OR?: refresh_tokenWhereInput[]
    NOT?: refresh_tokenWhereInput | refresh_tokenWhereInput[]
    id?: IntFilter<"refresh_token"> | number
    userId?: IntFilter<"refresh_token"> | number
    deviceId?: IntFilter<"refresh_token"> | number
    token?: StringNullableFilter<"refresh_token"> | string | null
    ipAddress?: StringNullableFilter<"refresh_token"> | string | null
    country?: StringNullableFilter<"refresh_token"> | string | null
    region?: StringNullableFilter<"refresh_token"> | string | null
    createdAt?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    device?: XOR<DeviceScalarRelationFilter, deviceWhereInput>
  }

  export type refresh_tokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    token?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    device?: deviceOrderByWithRelationInput
    _relevance?: refresh_tokenOrderByRelevanceInput
  }

  export type refresh_tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: refresh_tokenWhereInput | refresh_tokenWhereInput[]
    OR?: refresh_tokenWhereInput[]
    NOT?: refresh_tokenWhereInput | refresh_tokenWhereInput[]
    userId?: IntFilter<"refresh_token"> | number
    deviceId?: IntFilter<"refresh_token"> | number
    ipAddress?: StringNullableFilter<"refresh_token"> | string | null
    country?: StringNullableFilter<"refresh_token"> | string | null
    region?: StringNullableFilter<"refresh_token"> | string | null
    createdAt?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    device?: XOR<DeviceScalarRelationFilter, deviceWhereInput>
  }, "id" | "token">

  export type refresh_tokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    token?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: refresh_tokenCountOrderByAggregateInput
    _avg?: refresh_tokenAvgOrderByAggregateInput
    _max?: refresh_tokenMaxOrderByAggregateInput
    _min?: refresh_tokenMinOrderByAggregateInput
    _sum?: refresh_tokenSumOrderByAggregateInput
  }

  export type refresh_tokenScalarWhereWithAggregatesInput = {
    AND?: refresh_tokenScalarWhereWithAggregatesInput | refresh_tokenScalarWhereWithAggregatesInput[]
    OR?: refresh_tokenScalarWhereWithAggregatesInput[]
    NOT?: refresh_tokenScalarWhereWithAggregatesInput | refresh_tokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"refresh_token"> | number
    userId?: IntWithAggregatesFilter<"refresh_token"> | number
    deviceId?: IntWithAggregatesFilter<"refresh_token"> | number
    token?: StringNullableWithAggregatesFilter<"refresh_token"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"refresh_token"> | string | null
    country?: StringNullableWithAggregatesFilter<"refresh_token"> | string | null
    region?: StringNullableWithAggregatesFilter<"refresh_token"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"refresh_token"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"refresh_token"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    email?: StringNullableFilter<"user"> | string | null
    username?: StringFilter<"user"> | string
    passwordHash?: StringFilter<"user"> | string
    isEmailVerified?: BoolNullableFilter<"user"> | boolean | null
    createdAt?: DateTimeNullableFilter<"user"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"user"> | Date | string | null
    device?: DeviceListRelationFilter
    match?: MatchListRelationFilter
    match_move?: Match_moveListRelationFilter
    match_piece?: Match_pieceListRelationFilter
    match_player?: Match_playerListRelationFilter
    match_queue?: XOR<Match_queueNullableScalarRelationFilter, match_queueWhereInput> | null
    refresh_token?: Refresh_tokenListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    device?: deviceOrderByRelationAggregateInput
    match?: matchOrderByRelationAggregateInput
    match_move?: match_moveOrderByRelationAggregateInput
    match_piece?: match_pieceOrderByRelationAggregateInput
    match_player?: match_playerOrderByRelationAggregateInput
    match_queue?: match_queueOrderByWithRelationInput
    refresh_token?: refresh_tokenOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringFilter<"user"> | string
    passwordHash?: StringFilter<"user"> | string
    isEmailVerified?: BoolNullableFilter<"user"> | boolean | null
    createdAt?: DateTimeNullableFilter<"user"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"user"> | Date | string | null
    device?: DeviceListRelationFilter
    match?: MatchListRelationFilter
    match_move?: Match_moveListRelationFilter
    match_piece?: Match_pieceListRelationFilter
    match_player?: Match_playerListRelationFilter
    match_queue?: XOR<Match_queueNullableScalarRelationFilter, match_queueWhereInput> | null
    refresh_token?: Refresh_tokenListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    email?: StringNullableWithAggregatesFilter<"user"> | string | null
    username?: StringWithAggregatesFilter<"user"> | string
    passwordHash?: StringWithAggregatesFilter<"user"> | string
    isEmailVerified?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type match_queueWhereInput = {
    AND?: match_queueWhereInput | match_queueWhereInput[]
    OR?: match_queueWhereInput[]
    NOT?: match_queueWhereInput | match_queueWhereInput[]
    id?: IntFilter<"match_queue"> | number
    userId?: IntFilter<"match_queue"> | number
    status?: Enummatch_queue_statusFilter<"match_queue"> | $Enums.match_queue_status
    joinedAt?: DateTimeNullableFilter<"match_queue"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type match_queueOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type match_queueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: match_queueWhereInput | match_queueWhereInput[]
    OR?: match_queueWhereInput[]
    NOT?: match_queueWhereInput | match_queueWhereInput[]
    status?: Enummatch_queue_statusFilter<"match_queue"> | $Enums.match_queue_status
    joinedAt?: DateTimeNullableFilter<"match_queue"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "userId">

  export type match_queueOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrderInput | SortOrder
    _count?: match_queueCountOrderByAggregateInput
    _avg?: match_queueAvgOrderByAggregateInput
    _max?: match_queueMaxOrderByAggregateInput
    _min?: match_queueMinOrderByAggregateInput
    _sum?: match_queueSumOrderByAggregateInput
  }

  export type match_queueScalarWhereWithAggregatesInput = {
    AND?: match_queueScalarWhereWithAggregatesInput | match_queueScalarWhereWithAggregatesInput[]
    OR?: match_queueScalarWhereWithAggregatesInput[]
    NOT?: match_queueScalarWhereWithAggregatesInput | match_queueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"match_queue"> | number
    userId?: IntWithAggregatesFilter<"match_queue"> | number
    status?: Enummatch_queue_statusWithAggregatesFilter<"match_queue"> | $Enums.match_queue_status
    joinedAt?: DateTimeNullableWithAggregatesFilter<"match_queue"> | Date | string | null
  }

  export type deviceCreateInput = {
    userAgent: string
    deviceType?: $Enums.device_deviceType | null
    firstSeenAt?: Date | string | null
    lastSeenAt?: Date | string | null
    user: userCreateNestedOneWithoutDeviceInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutDeviceInput
  }

  export type deviceUncheckedCreateInput = {
    id?: number
    userId: number
    userAgent: string
    deviceType?: $Enums.device_deviceType | null
    firstSeenAt?: Date | string | null
    lastSeenAt?: Date | string | null
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type deviceUpdateInput = {
    userAgent?: StringFieldUpdateOperationsInput | string
    deviceType?: NullableEnumdevice_deviceTypeFieldUpdateOperationsInput | $Enums.device_deviceType | null
    firstSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutDeviceNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    deviceType?: NullableEnumdevice_deviceTypeFieldUpdateOperationsInput | $Enums.device_deviceType | null
    firstSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type deviceCreateManyInput = {
    id?: number
    userId: number
    userAgent: string
    deviceType?: $Enums.device_deviceType | null
    firstSeenAt?: Date | string | null
    lastSeenAt?: Date | string | null
  }

  export type deviceUpdateManyMutationInput = {
    userAgent?: StringFieldUpdateOperationsInput | string
    deviceType?: NullableEnumdevice_deviceTypeFieldUpdateOperationsInput | $Enums.device_deviceType | null
    firstSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    deviceType?: NullableEnumdevice_deviceTypeFieldUpdateOperationsInput | $Enums.device_deviceType | null
    firstSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type matchCreateInput = {
    status: $Enums.match_status
    createdAt?: Date | string | null
    turn?: number
    user?: userCreateNestedOneWithoutMatchInput
    match_move?: match_moveCreateNestedManyWithoutMatchInput
    match_piece?: match_pieceCreateNestedManyWithoutMatchInput
    match_player?: match_playerCreateNestedManyWithoutMatchInput
  }

  export type matchUncheckedCreateInput = {
    id?: number
    status: $Enums.match_status
    createdAt?: Date | string | null
    winnerId?: number | null
    turn?: number
    match_move?: match_moveUncheckedCreateNestedManyWithoutMatchInput
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutMatchInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutMatchInput
  }

  export type matchUpdateInput = {
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    turn?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneWithoutMatchNestedInput
    match_move?: match_moveUpdateManyWithoutMatchNestedInput
    match_piece?: match_pieceUpdateManyWithoutMatchNestedInput
    match_player?: match_playerUpdateManyWithoutMatchNestedInput
  }

  export type matchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    turn?: IntFieldUpdateOperationsInput | number
    match_move?: match_moveUncheckedUpdateManyWithoutMatchNestedInput
    match_piece?: match_pieceUncheckedUpdateManyWithoutMatchNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type matchCreateManyInput = {
    id?: number
    status: $Enums.match_status
    createdAt?: Date | string | null
    winnerId?: number | null
    turn?: number
  }

  export type matchUpdateManyMutationInput = {
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    turn?: IntFieldUpdateOperationsInput | number
  }

  export type matchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    turn?: IntFieldUpdateOperationsInput | number
  }

  export type match_moveCreateInput = {
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: string
    capturedPieceType?: string | null
    specialAbilityUsed?: number | null
    createdAt?: Date | string | null
    match: matchCreateNestedOneWithoutMatch_moveInput
    user?: userCreateNestedOneWithoutMatch_moveInput
  }

  export type match_moveUncheckedCreateInput = {
    id?: number
    matchId: number
    playerId?: number | null
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: string
    capturedPieceType?: string | null
    specialAbilityUsed?: number | null
    createdAt?: Date | string | null
  }

  export type match_moveUpdateInput = {
    moveNumber?: IntFieldUpdateOperationsInput | number
    fromX?: IntFieldUpdateOperationsInput | number
    fromY?: IntFieldUpdateOperationsInput | number
    toX?: IntFieldUpdateOperationsInput | number
    toY?: IntFieldUpdateOperationsInput | number
    pieceType?: StringFieldUpdateOperationsInput | string
    capturedPieceType?: NullableStringFieldUpdateOperationsInput | string | null
    specialAbilityUsed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    match?: matchUpdateOneRequiredWithoutMatch_moveNestedInput
    user?: userUpdateOneWithoutMatch_moveNestedInput
  }

  export type match_moveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    playerId?: NullableIntFieldUpdateOperationsInput | number | null
    moveNumber?: IntFieldUpdateOperationsInput | number
    fromX?: IntFieldUpdateOperationsInput | number
    fromY?: IntFieldUpdateOperationsInput | number
    toX?: IntFieldUpdateOperationsInput | number
    toY?: IntFieldUpdateOperationsInput | number
    pieceType?: StringFieldUpdateOperationsInput | string
    capturedPieceType?: NullableStringFieldUpdateOperationsInput | string | null
    specialAbilityUsed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_moveCreateManyInput = {
    id?: number
    matchId: number
    playerId?: number | null
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: string
    capturedPieceType?: string | null
    specialAbilityUsed?: number | null
    createdAt?: Date | string | null
  }

  export type match_moveUpdateManyMutationInput = {
    moveNumber?: IntFieldUpdateOperationsInput | number
    fromX?: IntFieldUpdateOperationsInput | number
    fromY?: IntFieldUpdateOperationsInput | number
    toX?: IntFieldUpdateOperationsInput | number
    toY?: IntFieldUpdateOperationsInput | number
    pieceType?: StringFieldUpdateOperationsInput | string
    capturedPieceType?: NullableStringFieldUpdateOperationsInput | string | null
    specialAbilityUsed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_moveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    playerId?: NullableIntFieldUpdateOperationsInput | number | null
    moveNumber?: IntFieldUpdateOperationsInput | number
    fromX?: IntFieldUpdateOperationsInput | number
    fromY?: IntFieldUpdateOperationsInput | number
    toX?: IntFieldUpdateOperationsInput | number
    toY?: IntFieldUpdateOperationsInput | number
    pieceType?: StringFieldUpdateOperationsInput | string
    capturedPieceType?: NullableStringFieldUpdateOperationsInput | string | null
    specialAbilityUsed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_pieceCreateInput = {
    type: $Enums.match_piece_type
    posX?: number | null
    posY?: number | null
    usedAbility?: number | null
    captured?: number | null
    status?: NullableJsonNullValueInput | InputJsonValue
    match: matchCreateNestedOneWithoutMatch_pieceInput
    user?: userCreateNestedOneWithoutMatch_pieceInput
  }

  export type match_pieceUncheckedCreateInput = {
    id?: number
    matchId: number
    playerId?: number | null
    type: $Enums.match_piece_type
    posX?: number | null
    posY?: number | null
    usedAbility?: number | null
    captured?: number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_pieceUpdateInput = {
    type?: Enummatch_piece_typeFieldUpdateOperationsInput | $Enums.match_piece_type
    posX?: NullableIntFieldUpdateOperationsInput | number | null
    posY?: NullableIntFieldUpdateOperationsInput | number | null
    usedAbility?: NullableIntFieldUpdateOperationsInput | number | null
    captured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableJsonNullValueInput | InputJsonValue
    match?: matchUpdateOneRequiredWithoutMatch_pieceNestedInput
    user?: userUpdateOneWithoutMatch_pieceNestedInput
  }

  export type match_pieceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    playerId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enummatch_piece_typeFieldUpdateOperationsInput | $Enums.match_piece_type
    posX?: NullableIntFieldUpdateOperationsInput | number | null
    posY?: NullableIntFieldUpdateOperationsInput | number | null
    usedAbility?: NullableIntFieldUpdateOperationsInput | number | null
    captured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_pieceCreateManyInput = {
    id?: number
    matchId: number
    playerId?: number | null
    type: $Enums.match_piece_type
    posX?: number | null
    posY?: number | null
    usedAbility?: number | null
    captured?: number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_pieceUpdateManyMutationInput = {
    type?: Enummatch_piece_typeFieldUpdateOperationsInput | $Enums.match_piece_type
    posX?: NullableIntFieldUpdateOperationsInput | number | null
    posY?: NullableIntFieldUpdateOperationsInput | number | null
    usedAbility?: NullableIntFieldUpdateOperationsInput | number | null
    captured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_pieceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    playerId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enummatch_piece_typeFieldUpdateOperationsInput | $Enums.match_piece_type
    posX?: NullableIntFieldUpdateOperationsInput | number | null
    posY?: NullableIntFieldUpdateOperationsInput | number | null
    usedAbility?: NullableIntFieldUpdateOperationsInput | number | null
    captured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_playerCreateInput = {
    color: $Enums.match_player_color
    dreamEnergy?: number
    user?: userCreateNestedOneWithoutMatch_playerInput
    match: matchCreateNestedOneWithoutMatch_playerInput
  }

  export type match_playerUncheckedCreateInput = {
    id?: number
    userId?: number | null
    matchId: number
    color: $Enums.match_player_color
    dreamEnergy?: number
  }

  export type match_playerUpdateInput = {
    color?: Enummatch_player_colorFieldUpdateOperationsInput | $Enums.match_player_color
    dreamEnergy?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneWithoutMatch_playerNestedInput
    match?: matchUpdateOneRequiredWithoutMatch_playerNestedInput
  }

  export type match_playerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    matchId?: IntFieldUpdateOperationsInput | number
    color?: Enummatch_player_colorFieldUpdateOperationsInput | $Enums.match_player_color
    dreamEnergy?: IntFieldUpdateOperationsInput | number
  }

  export type match_playerCreateManyInput = {
    id?: number
    userId?: number | null
    matchId: number
    color: $Enums.match_player_color
    dreamEnergy?: number
  }

  export type match_playerUpdateManyMutationInput = {
    color?: Enummatch_player_colorFieldUpdateOperationsInput | $Enums.match_player_color
    dreamEnergy?: IntFieldUpdateOperationsInput | number
  }

  export type match_playerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    matchId?: IntFieldUpdateOperationsInput | number
    color?: Enummatch_player_colorFieldUpdateOperationsInput | $Enums.match_player_color
    dreamEnergy?: IntFieldUpdateOperationsInput | number
  }

  export type refresh_tokenCreateInput = {
    token?: string | null
    ipAddress?: string | null
    country?: string | null
    region?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    user: userCreateNestedOneWithoutRefresh_tokenInput
    device: deviceCreateNestedOneWithoutRefresh_tokenInput
  }

  export type refresh_tokenUncheckedCreateInput = {
    id?: number
    userId: number
    deviceId: number
    token?: string | null
    ipAddress?: string | null
    country?: string | null
    region?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type refresh_tokenUpdateInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutRefresh_tokenNestedInput
    device?: deviceUpdateOneRequiredWithoutRefresh_tokenNestedInput
  }

  export type refresh_tokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokenCreateManyInput = {
    id?: number
    userId: number
    deviceId: number
    token?: string | null
    ipAddress?: string | null
    country?: string | null
    region?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type refresh_tokenUpdateManyMutationInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceCreateNestedManyWithoutUserInput
    match?: matchCreateNestedManyWithoutUserInput
    match_move?: match_moveCreateNestedManyWithoutUserInput
    match_piece?: match_pieceCreateNestedManyWithoutUserInput
    match_player?: match_playerCreateNestedManyWithoutUserInput
    match_queue?: match_queueCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceUncheckedCreateNestedManyWithoutUserInput
    match?: matchUncheckedCreateNestedManyWithoutUserInput
    match_move?: match_moveUncheckedCreateNestedManyWithoutUserInput
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutUserInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutUserInput
    match_queue?: match_queueUncheckedCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUpdateManyWithoutUserNestedInput
    match?: matchUpdateManyWithoutUserNestedInput
    match_move?: match_moveUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUpdateManyWithoutUserNestedInput
    match_player?: match_playerUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUncheckedUpdateManyWithoutUserNestedInput
    match?: matchUncheckedUpdateManyWithoutUserNestedInput
    match_move?: match_moveUncheckedUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUncheckedUpdateManyWithoutUserNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUncheckedUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_queueCreateInput = {
    status?: $Enums.match_queue_status
    joinedAt?: Date | string | null
    user: userCreateNestedOneWithoutMatch_queueInput
  }

  export type match_queueUncheckedCreateInput = {
    id?: number
    userId: number
    status?: $Enums.match_queue_status
    joinedAt?: Date | string | null
  }

  export type match_queueUpdateInput = {
    status?: Enummatch_queue_statusFieldUpdateOperationsInput | $Enums.match_queue_status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutMatch_queueNestedInput
  }

  export type match_queueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: Enummatch_queue_statusFieldUpdateOperationsInput | $Enums.match_queue_status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_queueCreateManyInput = {
    id?: number
    userId: number
    status?: $Enums.match_queue_status
    joinedAt?: Date | string | null
  }

  export type match_queueUpdateManyMutationInput = {
    status?: Enummatch_queue_statusFieldUpdateOperationsInput | $Enums.match_queue_status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_queueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: Enummatch_queue_statusFieldUpdateOperationsInput | $Enums.match_queue_status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumdevice_deviceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.device_deviceType | Enumdevice_deviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.device_deviceType[] | null
    notIn?: $Enums.device_deviceType[] | null
    not?: NestedEnumdevice_deviceTypeNullableFilter<$PrismaModel> | $Enums.device_deviceType | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type Refresh_tokenListRelationFilter = {
    every?: refresh_tokenWhereInput
    some?: refresh_tokenWhereInput
    none?: refresh_tokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type refresh_tokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type deviceOrderByRelevanceInput = {
    fields: deviceOrderByRelevanceFieldEnum | deviceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type deviceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type deviceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type deviceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type deviceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    deviceType?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type deviceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumdevice_deviceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.device_deviceType | Enumdevice_deviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.device_deviceType[] | null
    notIn?: $Enums.device_deviceType[] | null
    not?: NestedEnumdevice_deviceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.device_deviceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdevice_deviceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumdevice_deviceTypeNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enummatch_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.match_status | Enummatch_statusFieldRefInput<$PrismaModel>
    in?: $Enums.match_status[]
    notIn?: $Enums.match_status[]
    not?: NestedEnummatch_statusFilter<$PrismaModel> | $Enums.match_status
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type Match_moveListRelationFilter = {
    every?: match_moveWhereInput
    some?: match_moveWhereInput
    none?: match_moveWhereInput
  }

  export type Match_pieceListRelationFilter = {
    every?: match_pieceWhereInput
    some?: match_pieceWhereInput
    none?: match_pieceWhereInput
  }

  export type Match_playerListRelationFilter = {
    every?: match_playerWhereInput
    some?: match_playerWhereInput
    none?: match_playerWhereInput
  }

  export type match_moveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type match_pieceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type match_playerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type matchCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    winnerId?: SortOrder
    turn?: SortOrder
  }

  export type matchAvgOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    turn?: SortOrder
  }

  export type matchMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    winnerId?: SortOrder
    turn?: SortOrder
  }

  export type matchMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    winnerId?: SortOrder
    turn?: SortOrder
  }

  export type matchSumOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    turn?: SortOrder
  }

  export type Enummatch_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.match_status | Enummatch_statusFieldRefInput<$PrismaModel>
    in?: $Enums.match_status[]
    notIn?: $Enums.match_status[]
    not?: NestedEnummatch_statusWithAggregatesFilter<$PrismaModel> | $Enums.match_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummatch_statusFilter<$PrismaModel>
    _max?: NestedEnummatch_statusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MatchScalarRelationFilter = {
    is?: matchWhereInput
    isNot?: matchWhereInput
  }

  export type match_moveOrderByRelevanceInput = {
    fields: match_moveOrderByRelevanceFieldEnum | match_moveOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type match_moveCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    moveNumber?: SortOrder
    fromX?: SortOrder
    fromY?: SortOrder
    toX?: SortOrder
    toY?: SortOrder
    pieceType?: SortOrder
    capturedPieceType?: SortOrder
    specialAbilityUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type match_moveAvgOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    moveNumber?: SortOrder
    fromX?: SortOrder
    fromY?: SortOrder
    toX?: SortOrder
    toY?: SortOrder
    specialAbilityUsed?: SortOrder
  }

  export type match_moveMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    moveNumber?: SortOrder
    fromX?: SortOrder
    fromY?: SortOrder
    toX?: SortOrder
    toY?: SortOrder
    pieceType?: SortOrder
    capturedPieceType?: SortOrder
    specialAbilityUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type match_moveMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    moveNumber?: SortOrder
    fromX?: SortOrder
    fromY?: SortOrder
    toX?: SortOrder
    toY?: SortOrder
    pieceType?: SortOrder
    capturedPieceType?: SortOrder
    specialAbilityUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type match_moveSumOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    moveNumber?: SortOrder
    fromX?: SortOrder
    fromY?: SortOrder
    toX?: SortOrder
    toY?: SortOrder
    specialAbilityUsed?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enummatch_piece_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.match_piece_type | Enummatch_piece_typeFieldRefInput<$PrismaModel>
    in?: $Enums.match_piece_type[]
    notIn?: $Enums.match_piece_type[]
    not?: NestedEnummatch_piece_typeFilter<$PrismaModel> | $Enums.match_piece_type
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type match_pieceCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    posX?: SortOrder
    posY?: SortOrder
    usedAbility?: SortOrder
    captured?: SortOrder
    status?: SortOrder
  }

  export type match_pieceAvgOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    posX?: SortOrder
    posY?: SortOrder
    usedAbility?: SortOrder
    captured?: SortOrder
  }

  export type match_pieceMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    posX?: SortOrder
    posY?: SortOrder
    usedAbility?: SortOrder
    captured?: SortOrder
  }

  export type match_pieceMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    posX?: SortOrder
    posY?: SortOrder
    usedAbility?: SortOrder
    captured?: SortOrder
  }

  export type match_pieceSumOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    posX?: SortOrder
    posY?: SortOrder
    usedAbility?: SortOrder
    captured?: SortOrder
  }

  export type Enummatch_piece_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.match_piece_type | Enummatch_piece_typeFieldRefInput<$PrismaModel>
    in?: $Enums.match_piece_type[]
    notIn?: $Enums.match_piece_type[]
    not?: NestedEnummatch_piece_typeWithAggregatesFilter<$PrismaModel> | $Enums.match_piece_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummatch_piece_typeFilter<$PrismaModel>
    _max?: NestedEnummatch_piece_typeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type Enummatch_player_colorFilter<$PrismaModel = never> = {
    equals?: $Enums.match_player_color | Enummatch_player_colorFieldRefInput<$PrismaModel>
    in?: $Enums.match_player_color[]
    notIn?: $Enums.match_player_color[]
    not?: NestedEnummatch_player_colorFilter<$PrismaModel> | $Enums.match_player_color
  }

  export type match_playerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    color?: SortOrder
    dreamEnergy?: SortOrder
  }

  export type match_playerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    dreamEnergy?: SortOrder
  }

  export type match_playerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    color?: SortOrder
    dreamEnergy?: SortOrder
  }

  export type match_playerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    color?: SortOrder
    dreamEnergy?: SortOrder
  }

  export type match_playerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    dreamEnergy?: SortOrder
  }

  export type Enummatch_player_colorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.match_player_color | Enummatch_player_colorFieldRefInput<$PrismaModel>
    in?: $Enums.match_player_color[]
    notIn?: $Enums.match_player_color[]
    not?: NestedEnummatch_player_colorWithAggregatesFilter<$PrismaModel> | $Enums.match_player_color
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummatch_player_colorFilter<$PrismaModel>
    _max?: NestedEnummatch_player_colorFilter<$PrismaModel>
  }

  export type DeviceScalarRelationFilter = {
    is?: deviceWhereInput
    isNot?: deviceWhereInput
  }

  export type refresh_tokenOrderByRelevanceInput = {
    fields: refresh_tokenOrderByRelevanceFieldEnum | refresh_tokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type refresh_tokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    country?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type refresh_tokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
  }

  export type refresh_tokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    country?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type refresh_tokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    country?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type refresh_tokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DeviceListRelationFilter = {
    every?: deviceWhereInput
    some?: deviceWhereInput
    none?: deviceWhereInput
  }

  export type MatchListRelationFilter = {
    every?: matchWhereInput
    some?: matchWhereInput
    none?: matchWhereInput
  }

  export type Match_queueNullableScalarRelationFilter = {
    is?: match_queueWhereInput | null
    isNot?: match_queueWhereInput | null
  }

  export type deviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type matchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enummatch_queue_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.match_queue_status | Enummatch_queue_statusFieldRefInput<$PrismaModel>
    in?: $Enums.match_queue_status[]
    notIn?: $Enums.match_queue_status[]
    not?: NestedEnummatch_queue_statusFilter<$PrismaModel> | $Enums.match_queue_status
  }

  export type match_queueCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type match_queueAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type match_queueMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type match_queueMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    joinedAt?: SortOrder
  }

  export type match_queueSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Enummatch_queue_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.match_queue_status | Enummatch_queue_statusFieldRefInput<$PrismaModel>
    in?: $Enums.match_queue_status[]
    notIn?: $Enums.match_queue_status[]
    not?: NestedEnummatch_queue_statusWithAggregatesFilter<$PrismaModel> | $Enums.match_queue_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummatch_queue_statusFilter<$PrismaModel>
    _max?: NestedEnummatch_queue_statusFilter<$PrismaModel>
  }

  export type userCreateNestedOneWithoutDeviceInput = {
    create?: XOR<userCreateWithoutDeviceInput, userUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: userCreateOrConnectWithoutDeviceInput
    connect?: userWhereUniqueInput
  }

  export type refresh_tokenCreateNestedManyWithoutDeviceInput = {
    create?: XOR<refresh_tokenCreateWithoutDeviceInput, refresh_tokenUncheckedCreateWithoutDeviceInput> | refresh_tokenCreateWithoutDeviceInput[] | refresh_tokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutDeviceInput | refresh_tokenCreateOrConnectWithoutDeviceInput[]
    createMany?: refresh_tokenCreateManyDeviceInputEnvelope
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
  }

  export type refresh_tokenUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<refresh_tokenCreateWithoutDeviceInput, refresh_tokenUncheckedCreateWithoutDeviceInput> | refresh_tokenCreateWithoutDeviceInput[] | refresh_tokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutDeviceInput | refresh_tokenCreateOrConnectWithoutDeviceInput[]
    createMany?: refresh_tokenCreateManyDeviceInputEnvelope
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumdevice_deviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.device_deviceType | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutDeviceNestedInput = {
    create?: XOR<userCreateWithoutDeviceInput, userUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: userCreateOrConnectWithoutDeviceInput
    upsert?: userUpsertWithoutDeviceInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutDeviceInput, userUpdateWithoutDeviceInput>, userUncheckedUpdateWithoutDeviceInput>
  }

  export type refresh_tokenUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<refresh_tokenCreateWithoutDeviceInput, refresh_tokenUncheckedCreateWithoutDeviceInput> | refresh_tokenCreateWithoutDeviceInput[] | refresh_tokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutDeviceInput | refresh_tokenCreateOrConnectWithoutDeviceInput[]
    upsert?: refresh_tokenUpsertWithWhereUniqueWithoutDeviceInput | refresh_tokenUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: refresh_tokenCreateManyDeviceInputEnvelope
    set?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    disconnect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    delete?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    update?: refresh_tokenUpdateWithWhereUniqueWithoutDeviceInput | refresh_tokenUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: refresh_tokenUpdateManyWithWhereWithoutDeviceInput | refresh_tokenUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: refresh_tokenScalarWhereInput | refresh_tokenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type refresh_tokenUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<refresh_tokenCreateWithoutDeviceInput, refresh_tokenUncheckedCreateWithoutDeviceInput> | refresh_tokenCreateWithoutDeviceInput[] | refresh_tokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutDeviceInput | refresh_tokenCreateOrConnectWithoutDeviceInput[]
    upsert?: refresh_tokenUpsertWithWhereUniqueWithoutDeviceInput | refresh_tokenUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: refresh_tokenCreateManyDeviceInputEnvelope
    set?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    disconnect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    delete?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    update?: refresh_tokenUpdateWithWhereUniqueWithoutDeviceInput | refresh_tokenUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: refresh_tokenUpdateManyWithWhereWithoutDeviceInput | refresh_tokenUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: refresh_tokenScalarWhereInput | refresh_tokenScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutMatchInput = {
    create?: XOR<userCreateWithoutMatchInput, userUncheckedCreateWithoutMatchInput>
    connectOrCreate?: userCreateOrConnectWithoutMatchInput
    connect?: userWhereUniqueInput
  }

  export type match_moveCreateNestedManyWithoutMatchInput = {
    create?: XOR<match_moveCreateWithoutMatchInput, match_moveUncheckedCreateWithoutMatchInput> | match_moveCreateWithoutMatchInput[] | match_moveUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_moveCreateOrConnectWithoutMatchInput | match_moveCreateOrConnectWithoutMatchInput[]
    createMany?: match_moveCreateManyMatchInputEnvelope
    connect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
  }

  export type match_pieceCreateNestedManyWithoutMatchInput = {
    create?: XOR<match_pieceCreateWithoutMatchInput, match_pieceUncheckedCreateWithoutMatchInput> | match_pieceCreateWithoutMatchInput[] | match_pieceUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_pieceCreateOrConnectWithoutMatchInput | match_pieceCreateOrConnectWithoutMatchInput[]
    createMany?: match_pieceCreateManyMatchInputEnvelope
    connect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
  }

  export type match_playerCreateNestedManyWithoutMatchInput = {
    create?: XOR<match_playerCreateWithoutMatchInput, match_playerUncheckedCreateWithoutMatchInput> | match_playerCreateWithoutMatchInput[] | match_playerUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_playerCreateOrConnectWithoutMatchInput | match_playerCreateOrConnectWithoutMatchInput[]
    createMany?: match_playerCreateManyMatchInputEnvelope
    connect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
  }

  export type match_moveUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<match_moveCreateWithoutMatchInput, match_moveUncheckedCreateWithoutMatchInput> | match_moveCreateWithoutMatchInput[] | match_moveUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_moveCreateOrConnectWithoutMatchInput | match_moveCreateOrConnectWithoutMatchInput[]
    createMany?: match_moveCreateManyMatchInputEnvelope
    connect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
  }

  export type match_pieceUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<match_pieceCreateWithoutMatchInput, match_pieceUncheckedCreateWithoutMatchInput> | match_pieceCreateWithoutMatchInput[] | match_pieceUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_pieceCreateOrConnectWithoutMatchInput | match_pieceCreateOrConnectWithoutMatchInput[]
    createMany?: match_pieceCreateManyMatchInputEnvelope
    connect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
  }

  export type match_playerUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<match_playerCreateWithoutMatchInput, match_playerUncheckedCreateWithoutMatchInput> | match_playerCreateWithoutMatchInput[] | match_playerUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_playerCreateOrConnectWithoutMatchInput | match_playerCreateOrConnectWithoutMatchInput[]
    createMany?: match_playerCreateManyMatchInputEnvelope
    connect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
  }

  export type Enummatch_statusFieldUpdateOperationsInput = {
    set?: $Enums.match_status
  }

  export type userUpdateOneWithoutMatchNestedInput = {
    create?: XOR<userCreateWithoutMatchInput, userUncheckedCreateWithoutMatchInput>
    connectOrCreate?: userCreateOrConnectWithoutMatchInput
    upsert?: userUpsertWithoutMatchInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMatchInput, userUpdateWithoutMatchInput>, userUncheckedUpdateWithoutMatchInput>
  }

  export type match_moveUpdateManyWithoutMatchNestedInput = {
    create?: XOR<match_moveCreateWithoutMatchInput, match_moveUncheckedCreateWithoutMatchInput> | match_moveCreateWithoutMatchInput[] | match_moveUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_moveCreateOrConnectWithoutMatchInput | match_moveCreateOrConnectWithoutMatchInput[]
    upsert?: match_moveUpsertWithWhereUniqueWithoutMatchInput | match_moveUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: match_moveCreateManyMatchInputEnvelope
    set?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    disconnect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    delete?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    connect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    update?: match_moveUpdateWithWhereUniqueWithoutMatchInput | match_moveUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: match_moveUpdateManyWithWhereWithoutMatchInput | match_moveUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: match_moveScalarWhereInput | match_moveScalarWhereInput[]
  }

  export type match_pieceUpdateManyWithoutMatchNestedInput = {
    create?: XOR<match_pieceCreateWithoutMatchInput, match_pieceUncheckedCreateWithoutMatchInput> | match_pieceCreateWithoutMatchInput[] | match_pieceUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_pieceCreateOrConnectWithoutMatchInput | match_pieceCreateOrConnectWithoutMatchInput[]
    upsert?: match_pieceUpsertWithWhereUniqueWithoutMatchInput | match_pieceUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: match_pieceCreateManyMatchInputEnvelope
    set?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    disconnect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    delete?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    connect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    update?: match_pieceUpdateWithWhereUniqueWithoutMatchInput | match_pieceUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: match_pieceUpdateManyWithWhereWithoutMatchInput | match_pieceUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: match_pieceScalarWhereInput | match_pieceScalarWhereInput[]
  }

  export type match_playerUpdateManyWithoutMatchNestedInput = {
    create?: XOR<match_playerCreateWithoutMatchInput, match_playerUncheckedCreateWithoutMatchInput> | match_playerCreateWithoutMatchInput[] | match_playerUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_playerCreateOrConnectWithoutMatchInput | match_playerCreateOrConnectWithoutMatchInput[]
    upsert?: match_playerUpsertWithWhereUniqueWithoutMatchInput | match_playerUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: match_playerCreateManyMatchInputEnvelope
    set?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    disconnect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    delete?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    connect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    update?: match_playerUpdateWithWhereUniqueWithoutMatchInput | match_playerUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: match_playerUpdateManyWithWhereWithoutMatchInput | match_playerUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: match_playerScalarWhereInput | match_playerScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type match_moveUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<match_moveCreateWithoutMatchInput, match_moveUncheckedCreateWithoutMatchInput> | match_moveCreateWithoutMatchInput[] | match_moveUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_moveCreateOrConnectWithoutMatchInput | match_moveCreateOrConnectWithoutMatchInput[]
    upsert?: match_moveUpsertWithWhereUniqueWithoutMatchInput | match_moveUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: match_moveCreateManyMatchInputEnvelope
    set?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    disconnect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    delete?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    connect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    update?: match_moveUpdateWithWhereUniqueWithoutMatchInput | match_moveUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: match_moveUpdateManyWithWhereWithoutMatchInput | match_moveUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: match_moveScalarWhereInput | match_moveScalarWhereInput[]
  }

  export type match_pieceUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<match_pieceCreateWithoutMatchInput, match_pieceUncheckedCreateWithoutMatchInput> | match_pieceCreateWithoutMatchInput[] | match_pieceUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_pieceCreateOrConnectWithoutMatchInput | match_pieceCreateOrConnectWithoutMatchInput[]
    upsert?: match_pieceUpsertWithWhereUniqueWithoutMatchInput | match_pieceUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: match_pieceCreateManyMatchInputEnvelope
    set?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    disconnect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    delete?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    connect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    update?: match_pieceUpdateWithWhereUniqueWithoutMatchInput | match_pieceUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: match_pieceUpdateManyWithWhereWithoutMatchInput | match_pieceUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: match_pieceScalarWhereInput | match_pieceScalarWhereInput[]
  }

  export type match_playerUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<match_playerCreateWithoutMatchInput, match_playerUncheckedCreateWithoutMatchInput> | match_playerCreateWithoutMatchInput[] | match_playerUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: match_playerCreateOrConnectWithoutMatchInput | match_playerCreateOrConnectWithoutMatchInput[]
    upsert?: match_playerUpsertWithWhereUniqueWithoutMatchInput | match_playerUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: match_playerCreateManyMatchInputEnvelope
    set?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    disconnect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    delete?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    connect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    update?: match_playerUpdateWithWhereUniqueWithoutMatchInput | match_playerUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: match_playerUpdateManyWithWhereWithoutMatchInput | match_playerUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: match_playerScalarWhereInput | match_playerScalarWhereInput[]
  }

  export type matchCreateNestedOneWithoutMatch_moveInput = {
    create?: XOR<matchCreateWithoutMatch_moveInput, matchUncheckedCreateWithoutMatch_moveInput>
    connectOrCreate?: matchCreateOrConnectWithoutMatch_moveInput
    connect?: matchWhereUniqueInput
  }

  export type userCreateNestedOneWithoutMatch_moveInput = {
    create?: XOR<userCreateWithoutMatch_moveInput, userUncheckedCreateWithoutMatch_moveInput>
    connectOrCreate?: userCreateOrConnectWithoutMatch_moveInput
    connect?: userWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type matchUpdateOneRequiredWithoutMatch_moveNestedInput = {
    create?: XOR<matchCreateWithoutMatch_moveInput, matchUncheckedCreateWithoutMatch_moveInput>
    connectOrCreate?: matchCreateOrConnectWithoutMatch_moveInput
    upsert?: matchUpsertWithoutMatch_moveInput
    connect?: matchWhereUniqueInput
    update?: XOR<XOR<matchUpdateToOneWithWhereWithoutMatch_moveInput, matchUpdateWithoutMatch_moveInput>, matchUncheckedUpdateWithoutMatch_moveInput>
  }

  export type userUpdateOneWithoutMatch_moveNestedInput = {
    create?: XOR<userCreateWithoutMatch_moveInput, userUncheckedCreateWithoutMatch_moveInput>
    connectOrCreate?: userCreateOrConnectWithoutMatch_moveInput
    upsert?: userUpsertWithoutMatch_moveInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMatch_moveInput, userUpdateWithoutMatch_moveInput>, userUncheckedUpdateWithoutMatch_moveInput>
  }

  export type matchCreateNestedOneWithoutMatch_pieceInput = {
    create?: XOR<matchCreateWithoutMatch_pieceInput, matchUncheckedCreateWithoutMatch_pieceInput>
    connectOrCreate?: matchCreateOrConnectWithoutMatch_pieceInput
    connect?: matchWhereUniqueInput
  }

  export type userCreateNestedOneWithoutMatch_pieceInput = {
    create?: XOR<userCreateWithoutMatch_pieceInput, userUncheckedCreateWithoutMatch_pieceInput>
    connectOrCreate?: userCreateOrConnectWithoutMatch_pieceInput
    connect?: userWhereUniqueInput
  }

  export type Enummatch_piece_typeFieldUpdateOperationsInput = {
    set?: $Enums.match_piece_type
  }

  export type matchUpdateOneRequiredWithoutMatch_pieceNestedInput = {
    create?: XOR<matchCreateWithoutMatch_pieceInput, matchUncheckedCreateWithoutMatch_pieceInput>
    connectOrCreate?: matchCreateOrConnectWithoutMatch_pieceInput
    upsert?: matchUpsertWithoutMatch_pieceInput
    connect?: matchWhereUniqueInput
    update?: XOR<XOR<matchUpdateToOneWithWhereWithoutMatch_pieceInput, matchUpdateWithoutMatch_pieceInput>, matchUncheckedUpdateWithoutMatch_pieceInput>
  }

  export type userUpdateOneWithoutMatch_pieceNestedInput = {
    create?: XOR<userCreateWithoutMatch_pieceInput, userUncheckedCreateWithoutMatch_pieceInput>
    connectOrCreate?: userCreateOrConnectWithoutMatch_pieceInput
    upsert?: userUpsertWithoutMatch_pieceInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMatch_pieceInput, userUpdateWithoutMatch_pieceInput>, userUncheckedUpdateWithoutMatch_pieceInput>
  }

  export type userCreateNestedOneWithoutMatch_playerInput = {
    create?: XOR<userCreateWithoutMatch_playerInput, userUncheckedCreateWithoutMatch_playerInput>
    connectOrCreate?: userCreateOrConnectWithoutMatch_playerInput
    connect?: userWhereUniqueInput
  }

  export type matchCreateNestedOneWithoutMatch_playerInput = {
    create?: XOR<matchCreateWithoutMatch_playerInput, matchUncheckedCreateWithoutMatch_playerInput>
    connectOrCreate?: matchCreateOrConnectWithoutMatch_playerInput
    connect?: matchWhereUniqueInput
  }

  export type Enummatch_player_colorFieldUpdateOperationsInput = {
    set?: $Enums.match_player_color
  }

  export type userUpdateOneWithoutMatch_playerNestedInput = {
    create?: XOR<userCreateWithoutMatch_playerInput, userUncheckedCreateWithoutMatch_playerInput>
    connectOrCreate?: userCreateOrConnectWithoutMatch_playerInput
    upsert?: userUpsertWithoutMatch_playerInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMatch_playerInput, userUpdateWithoutMatch_playerInput>, userUncheckedUpdateWithoutMatch_playerInput>
  }

  export type matchUpdateOneRequiredWithoutMatch_playerNestedInput = {
    create?: XOR<matchCreateWithoutMatch_playerInput, matchUncheckedCreateWithoutMatch_playerInput>
    connectOrCreate?: matchCreateOrConnectWithoutMatch_playerInput
    upsert?: matchUpsertWithoutMatch_playerInput
    connect?: matchWhereUniqueInput
    update?: XOR<XOR<matchUpdateToOneWithWhereWithoutMatch_playerInput, matchUpdateWithoutMatch_playerInput>, matchUncheckedUpdateWithoutMatch_playerInput>
  }

  export type userCreateNestedOneWithoutRefresh_tokenInput = {
    create?: XOR<userCreateWithoutRefresh_tokenInput, userUncheckedCreateWithoutRefresh_tokenInput>
    connectOrCreate?: userCreateOrConnectWithoutRefresh_tokenInput
    connect?: userWhereUniqueInput
  }

  export type deviceCreateNestedOneWithoutRefresh_tokenInput = {
    create?: XOR<deviceCreateWithoutRefresh_tokenInput, deviceUncheckedCreateWithoutRefresh_tokenInput>
    connectOrCreate?: deviceCreateOrConnectWithoutRefresh_tokenInput
    connect?: deviceWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutRefresh_tokenNestedInput = {
    create?: XOR<userCreateWithoutRefresh_tokenInput, userUncheckedCreateWithoutRefresh_tokenInput>
    connectOrCreate?: userCreateOrConnectWithoutRefresh_tokenInput
    upsert?: userUpsertWithoutRefresh_tokenInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRefresh_tokenInput, userUpdateWithoutRefresh_tokenInput>, userUncheckedUpdateWithoutRefresh_tokenInput>
  }

  export type deviceUpdateOneRequiredWithoutRefresh_tokenNestedInput = {
    create?: XOR<deviceCreateWithoutRefresh_tokenInput, deviceUncheckedCreateWithoutRefresh_tokenInput>
    connectOrCreate?: deviceCreateOrConnectWithoutRefresh_tokenInput
    upsert?: deviceUpsertWithoutRefresh_tokenInput
    connect?: deviceWhereUniqueInput
    update?: XOR<XOR<deviceUpdateToOneWithWhereWithoutRefresh_tokenInput, deviceUpdateWithoutRefresh_tokenInput>, deviceUncheckedUpdateWithoutRefresh_tokenInput>
  }

  export type deviceCreateNestedManyWithoutUserInput = {
    create?: XOR<deviceCreateWithoutUserInput, deviceUncheckedCreateWithoutUserInput> | deviceCreateWithoutUserInput[] | deviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: deviceCreateOrConnectWithoutUserInput | deviceCreateOrConnectWithoutUserInput[]
    createMany?: deviceCreateManyUserInputEnvelope
    connect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
  }

  export type matchCreateNestedManyWithoutUserInput = {
    create?: XOR<matchCreateWithoutUserInput, matchUncheckedCreateWithoutUserInput> | matchCreateWithoutUserInput[] | matchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: matchCreateOrConnectWithoutUserInput | matchCreateOrConnectWithoutUserInput[]
    createMany?: matchCreateManyUserInputEnvelope
    connect?: matchWhereUniqueInput | matchWhereUniqueInput[]
  }

  export type match_moveCreateNestedManyWithoutUserInput = {
    create?: XOR<match_moveCreateWithoutUserInput, match_moveUncheckedCreateWithoutUserInput> | match_moveCreateWithoutUserInput[] | match_moveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_moveCreateOrConnectWithoutUserInput | match_moveCreateOrConnectWithoutUserInput[]
    createMany?: match_moveCreateManyUserInputEnvelope
    connect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
  }

  export type match_pieceCreateNestedManyWithoutUserInput = {
    create?: XOR<match_pieceCreateWithoutUserInput, match_pieceUncheckedCreateWithoutUserInput> | match_pieceCreateWithoutUserInput[] | match_pieceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_pieceCreateOrConnectWithoutUserInput | match_pieceCreateOrConnectWithoutUserInput[]
    createMany?: match_pieceCreateManyUserInputEnvelope
    connect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
  }

  export type match_playerCreateNestedManyWithoutUserInput = {
    create?: XOR<match_playerCreateWithoutUserInput, match_playerUncheckedCreateWithoutUserInput> | match_playerCreateWithoutUserInput[] | match_playerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_playerCreateOrConnectWithoutUserInput | match_playerCreateOrConnectWithoutUserInput[]
    createMany?: match_playerCreateManyUserInputEnvelope
    connect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
  }

  export type match_queueCreateNestedOneWithoutUserInput = {
    create?: XOR<match_queueCreateWithoutUserInput, match_queueUncheckedCreateWithoutUserInput>
    connectOrCreate?: match_queueCreateOrConnectWithoutUserInput
    connect?: match_queueWhereUniqueInput
  }

  export type refresh_tokenCreateNestedManyWithoutUserInput = {
    create?: XOR<refresh_tokenCreateWithoutUserInput, refresh_tokenUncheckedCreateWithoutUserInput> | refresh_tokenCreateWithoutUserInput[] | refresh_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutUserInput | refresh_tokenCreateOrConnectWithoutUserInput[]
    createMany?: refresh_tokenCreateManyUserInputEnvelope
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
  }

  export type deviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<deviceCreateWithoutUserInput, deviceUncheckedCreateWithoutUserInput> | deviceCreateWithoutUserInput[] | deviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: deviceCreateOrConnectWithoutUserInput | deviceCreateOrConnectWithoutUserInput[]
    createMany?: deviceCreateManyUserInputEnvelope
    connect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
  }

  export type matchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<matchCreateWithoutUserInput, matchUncheckedCreateWithoutUserInput> | matchCreateWithoutUserInput[] | matchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: matchCreateOrConnectWithoutUserInput | matchCreateOrConnectWithoutUserInput[]
    createMany?: matchCreateManyUserInputEnvelope
    connect?: matchWhereUniqueInput | matchWhereUniqueInput[]
  }

  export type match_moveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<match_moveCreateWithoutUserInput, match_moveUncheckedCreateWithoutUserInput> | match_moveCreateWithoutUserInput[] | match_moveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_moveCreateOrConnectWithoutUserInput | match_moveCreateOrConnectWithoutUserInput[]
    createMany?: match_moveCreateManyUserInputEnvelope
    connect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
  }

  export type match_pieceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<match_pieceCreateWithoutUserInput, match_pieceUncheckedCreateWithoutUserInput> | match_pieceCreateWithoutUserInput[] | match_pieceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_pieceCreateOrConnectWithoutUserInput | match_pieceCreateOrConnectWithoutUserInput[]
    createMany?: match_pieceCreateManyUserInputEnvelope
    connect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
  }

  export type match_playerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<match_playerCreateWithoutUserInput, match_playerUncheckedCreateWithoutUserInput> | match_playerCreateWithoutUserInput[] | match_playerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_playerCreateOrConnectWithoutUserInput | match_playerCreateOrConnectWithoutUserInput[]
    createMany?: match_playerCreateManyUserInputEnvelope
    connect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
  }

  export type match_queueUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<match_queueCreateWithoutUserInput, match_queueUncheckedCreateWithoutUserInput>
    connectOrCreate?: match_queueCreateOrConnectWithoutUserInput
    connect?: match_queueWhereUniqueInput
  }

  export type refresh_tokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<refresh_tokenCreateWithoutUserInput, refresh_tokenUncheckedCreateWithoutUserInput> | refresh_tokenCreateWithoutUserInput[] | refresh_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutUserInput | refresh_tokenCreateOrConnectWithoutUserInput[]
    createMany?: refresh_tokenCreateManyUserInputEnvelope
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type deviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<deviceCreateWithoutUserInput, deviceUncheckedCreateWithoutUserInput> | deviceCreateWithoutUserInput[] | deviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: deviceCreateOrConnectWithoutUserInput | deviceCreateOrConnectWithoutUserInput[]
    upsert?: deviceUpsertWithWhereUniqueWithoutUserInput | deviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: deviceCreateManyUserInputEnvelope
    set?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    disconnect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    delete?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    connect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    update?: deviceUpdateWithWhereUniqueWithoutUserInput | deviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: deviceUpdateManyWithWhereWithoutUserInput | deviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: deviceScalarWhereInput | deviceScalarWhereInput[]
  }

  export type matchUpdateManyWithoutUserNestedInput = {
    create?: XOR<matchCreateWithoutUserInput, matchUncheckedCreateWithoutUserInput> | matchCreateWithoutUserInput[] | matchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: matchCreateOrConnectWithoutUserInput | matchCreateOrConnectWithoutUserInput[]
    upsert?: matchUpsertWithWhereUniqueWithoutUserInput | matchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: matchCreateManyUserInputEnvelope
    set?: matchWhereUniqueInput | matchWhereUniqueInput[]
    disconnect?: matchWhereUniqueInput | matchWhereUniqueInput[]
    delete?: matchWhereUniqueInput | matchWhereUniqueInput[]
    connect?: matchWhereUniqueInput | matchWhereUniqueInput[]
    update?: matchUpdateWithWhereUniqueWithoutUserInput | matchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: matchUpdateManyWithWhereWithoutUserInput | matchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: matchScalarWhereInput | matchScalarWhereInput[]
  }

  export type match_moveUpdateManyWithoutUserNestedInput = {
    create?: XOR<match_moveCreateWithoutUserInput, match_moveUncheckedCreateWithoutUserInput> | match_moveCreateWithoutUserInput[] | match_moveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_moveCreateOrConnectWithoutUserInput | match_moveCreateOrConnectWithoutUserInput[]
    upsert?: match_moveUpsertWithWhereUniqueWithoutUserInput | match_moveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: match_moveCreateManyUserInputEnvelope
    set?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    disconnect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    delete?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    connect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    update?: match_moveUpdateWithWhereUniqueWithoutUserInput | match_moveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: match_moveUpdateManyWithWhereWithoutUserInput | match_moveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: match_moveScalarWhereInput | match_moveScalarWhereInput[]
  }

  export type match_pieceUpdateManyWithoutUserNestedInput = {
    create?: XOR<match_pieceCreateWithoutUserInput, match_pieceUncheckedCreateWithoutUserInput> | match_pieceCreateWithoutUserInput[] | match_pieceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_pieceCreateOrConnectWithoutUserInput | match_pieceCreateOrConnectWithoutUserInput[]
    upsert?: match_pieceUpsertWithWhereUniqueWithoutUserInput | match_pieceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: match_pieceCreateManyUserInputEnvelope
    set?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    disconnect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    delete?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    connect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    update?: match_pieceUpdateWithWhereUniqueWithoutUserInput | match_pieceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: match_pieceUpdateManyWithWhereWithoutUserInput | match_pieceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: match_pieceScalarWhereInput | match_pieceScalarWhereInput[]
  }

  export type match_playerUpdateManyWithoutUserNestedInput = {
    create?: XOR<match_playerCreateWithoutUserInput, match_playerUncheckedCreateWithoutUserInput> | match_playerCreateWithoutUserInput[] | match_playerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_playerCreateOrConnectWithoutUserInput | match_playerCreateOrConnectWithoutUserInput[]
    upsert?: match_playerUpsertWithWhereUniqueWithoutUserInput | match_playerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: match_playerCreateManyUserInputEnvelope
    set?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    disconnect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    delete?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    connect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    update?: match_playerUpdateWithWhereUniqueWithoutUserInput | match_playerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: match_playerUpdateManyWithWhereWithoutUserInput | match_playerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: match_playerScalarWhereInput | match_playerScalarWhereInput[]
  }

  export type match_queueUpdateOneWithoutUserNestedInput = {
    create?: XOR<match_queueCreateWithoutUserInput, match_queueUncheckedCreateWithoutUserInput>
    connectOrCreate?: match_queueCreateOrConnectWithoutUserInput
    upsert?: match_queueUpsertWithoutUserInput
    disconnect?: match_queueWhereInput | boolean
    delete?: match_queueWhereInput | boolean
    connect?: match_queueWhereUniqueInput
    update?: XOR<XOR<match_queueUpdateToOneWithWhereWithoutUserInput, match_queueUpdateWithoutUserInput>, match_queueUncheckedUpdateWithoutUserInput>
  }

  export type refresh_tokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<refresh_tokenCreateWithoutUserInput, refresh_tokenUncheckedCreateWithoutUserInput> | refresh_tokenCreateWithoutUserInput[] | refresh_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutUserInput | refresh_tokenCreateOrConnectWithoutUserInput[]
    upsert?: refresh_tokenUpsertWithWhereUniqueWithoutUserInput | refresh_tokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: refresh_tokenCreateManyUserInputEnvelope
    set?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    disconnect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    delete?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    update?: refresh_tokenUpdateWithWhereUniqueWithoutUserInput | refresh_tokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: refresh_tokenUpdateManyWithWhereWithoutUserInput | refresh_tokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: refresh_tokenScalarWhereInput | refresh_tokenScalarWhereInput[]
  }

  export type deviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<deviceCreateWithoutUserInput, deviceUncheckedCreateWithoutUserInput> | deviceCreateWithoutUserInput[] | deviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: deviceCreateOrConnectWithoutUserInput | deviceCreateOrConnectWithoutUserInput[]
    upsert?: deviceUpsertWithWhereUniqueWithoutUserInput | deviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: deviceCreateManyUserInputEnvelope
    set?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    disconnect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    delete?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    connect?: deviceWhereUniqueInput | deviceWhereUniqueInput[]
    update?: deviceUpdateWithWhereUniqueWithoutUserInput | deviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: deviceUpdateManyWithWhereWithoutUserInput | deviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: deviceScalarWhereInput | deviceScalarWhereInput[]
  }

  export type matchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<matchCreateWithoutUserInput, matchUncheckedCreateWithoutUserInput> | matchCreateWithoutUserInput[] | matchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: matchCreateOrConnectWithoutUserInput | matchCreateOrConnectWithoutUserInput[]
    upsert?: matchUpsertWithWhereUniqueWithoutUserInput | matchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: matchCreateManyUserInputEnvelope
    set?: matchWhereUniqueInput | matchWhereUniqueInput[]
    disconnect?: matchWhereUniqueInput | matchWhereUniqueInput[]
    delete?: matchWhereUniqueInput | matchWhereUniqueInput[]
    connect?: matchWhereUniqueInput | matchWhereUniqueInput[]
    update?: matchUpdateWithWhereUniqueWithoutUserInput | matchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: matchUpdateManyWithWhereWithoutUserInput | matchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: matchScalarWhereInput | matchScalarWhereInput[]
  }

  export type match_moveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<match_moveCreateWithoutUserInput, match_moveUncheckedCreateWithoutUserInput> | match_moveCreateWithoutUserInput[] | match_moveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_moveCreateOrConnectWithoutUserInput | match_moveCreateOrConnectWithoutUserInput[]
    upsert?: match_moveUpsertWithWhereUniqueWithoutUserInput | match_moveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: match_moveCreateManyUserInputEnvelope
    set?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    disconnect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    delete?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    connect?: match_moveWhereUniqueInput | match_moveWhereUniqueInput[]
    update?: match_moveUpdateWithWhereUniqueWithoutUserInput | match_moveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: match_moveUpdateManyWithWhereWithoutUserInput | match_moveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: match_moveScalarWhereInput | match_moveScalarWhereInput[]
  }

  export type match_pieceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<match_pieceCreateWithoutUserInput, match_pieceUncheckedCreateWithoutUserInput> | match_pieceCreateWithoutUserInput[] | match_pieceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_pieceCreateOrConnectWithoutUserInput | match_pieceCreateOrConnectWithoutUserInput[]
    upsert?: match_pieceUpsertWithWhereUniqueWithoutUserInput | match_pieceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: match_pieceCreateManyUserInputEnvelope
    set?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    disconnect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    delete?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    connect?: match_pieceWhereUniqueInput | match_pieceWhereUniqueInput[]
    update?: match_pieceUpdateWithWhereUniqueWithoutUserInput | match_pieceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: match_pieceUpdateManyWithWhereWithoutUserInput | match_pieceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: match_pieceScalarWhereInput | match_pieceScalarWhereInput[]
  }

  export type match_playerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<match_playerCreateWithoutUserInput, match_playerUncheckedCreateWithoutUserInput> | match_playerCreateWithoutUserInput[] | match_playerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: match_playerCreateOrConnectWithoutUserInput | match_playerCreateOrConnectWithoutUserInput[]
    upsert?: match_playerUpsertWithWhereUniqueWithoutUserInput | match_playerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: match_playerCreateManyUserInputEnvelope
    set?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    disconnect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    delete?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    connect?: match_playerWhereUniqueInput | match_playerWhereUniqueInput[]
    update?: match_playerUpdateWithWhereUniqueWithoutUserInput | match_playerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: match_playerUpdateManyWithWhereWithoutUserInput | match_playerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: match_playerScalarWhereInput | match_playerScalarWhereInput[]
  }

  export type match_queueUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<match_queueCreateWithoutUserInput, match_queueUncheckedCreateWithoutUserInput>
    connectOrCreate?: match_queueCreateOrConnectWithoutUserInput
    upsert?: match_queueUpsertWithoutUserInput
    disconnect?: match_queueWhereInput | boolean
    delete?: match_queueWhereInput | boolean
    connect?: match_queueWhereUniqueInput
    update?: XOR<XOR<match_queueUpdateToOneWithWhereWithoutUserInput, match_queueUpdateWithoutUserInput>, match_queueUncheckedUpdateWithoutUserInput>
  }

  export type refresh_tokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<refresh_tokenCreateWithoutUserInput, refresh_tokenUncheckedCreateWithoutUserInput> | refresh_tokenCreateWithoutUserInput[] | refresh_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: refresh_tokenCreateOrConnectWithoutUserInput | refresh_tokenCreateOrConnectWithoutUserInput[]
    upsert?: refresh_tokenUpsertWithWhereUniqueWithoutUserInput | refresh_tokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: refresh_tokenCreateManyUserInputEnvelope
    set?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    disconnect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    delete?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    connect?: refresh_tokenWhereUniqueInput | refresh_tokenWhereUniqueInput[]
    update?: refresh_tokenUpdateWithWhereUniqueWithoutUserInput | refresh_tokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: refresh_tokenUpdateManyWithWhereWithoutUserInput | refresh_tokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: refresh_tokenScalarWhereInput | refresh_tokenScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutMatch_queueInput = {
    create?: XOR<userCreateWithoutMatch_queueInput, userUncheckedCreateWithoutMatch_queueInput>
    connectOrCreate?: userCreateOrConnectWithoutMatch_queueInput
    connect?: userWhereUniqueInput
  }

  export type Enummatch_queue_statusFieldUpdateOperationsInput = {
    set?: $Enums.match_queue_status
  }

  export type userUpdateOneRequiredWithoutMatch_queueNestedInput = {
    create?: XOR<userCreateWithoutMatch_queueInput, userUncheckedCreateWithoutMatch_queueInput>
    connectOrCreate?: userCreateOrConnectWithoutMatch_queueInput
    upsert?: userUpsertWithoutMatch_queueInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMatch_queueInput, userUpdateWithoutMatch_queueInput>, userUncheckedUpdateWithoutMatch_queueInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumdevice_deviceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.device_deviceType | Enumdevice_deviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.device_deviceType[] | null
    notIn?: $Enums.device_deviceType[] | null
    not?: NestedEnumdevice_deviceTypeNullableFilter<$PrismaModel> | $Enums.device_deviceType | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumdevice_deviceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.device_deviceType | Enumdevice_deviceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.device_deviceType[] | null
    notIn?: $Enums.device_deviceType[] | null
    not?: NestedEnumdevice_deviceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.device_deviceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdevice_deviceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumdevice_deviceTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnummatch_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.match_status | Enummatch_statusFieldRefInput<$PrismaModel>
    in?: $Enums.match_status[]
    notIn?: $Enums.match_status[]
    not?: NestedEnummatch_statusFilter<$PrismaModel> | $Enums.match_status
  }

  export type NestedEnummatch_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.match_status | Enummatch_statusFieldRefInput<$PrismaModel>
    in?: $Enums.match_status[]
    notIn?: $Enums.match_status[]
    not?: NestedEnummatch_statusWithAggregatesFilter<$PrismaModel> | $Enums.match_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummatch_statusFilter<$PrismaModel>
    _max?: NestedEnummatch_statusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnummatch_piece_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.match_piece_type | Enummatch_piece_typeFieldRefInput<$PrismaModel>
    in?: $Enums.match_piece_type[]
    notIn?: $Enums.match_piece_type[]
    not?: NestedEnummatch_piece_typeFilter<$PrismaModel> | $Enums.match_piece_type
  }

  export type NestedEnummatch_piece_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.match_piece_type | Enummatch_piece_typeFieldRefInput<$PrismaModel>
    in?: $Enums.match_piece_type[]
    notIn?: $Enums.match_piece_type[]
    not?: NestedEnummatch_piece_typeWithAggregatesFilter<$PrismaModel> | $Enums.match_piece_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummatch_piece_typeFilter<$PrismaModel>
    _max?: NestedEnummatch_piece_typeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnummatch_player_colorFilter<$PrismaModel = never> = {
    equals?: $Enums.match_player_color | Enummatch_player_colorFieldRefInput<$PrismaModel>
    in?: $Enums.match_player_color[]
    notIn?: $Enums.match_player_color[]
    not?: NestedEnummatch_player_colorFilter<$PrismaModel> | $Enums.match_player_color
  }

  export type NestedEnummatch_player_colorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.match_player_color | Enummatch_player_colorFieldRefInput<$PrismaModel>
    in?: $Enums.match_player_color[]
    notIn?: $Enums.match_player_color[]
    not?: NestedEnummatch_player_colorWithAggregatesFilter<$PrismaModel> | $Enums.match_player_color
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummatch_player_colorFilter<$PrismaModel>
    _max?: NestedEnummatch_player_colorFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnummatch_queue_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.match_queue_status | Enummatch_queue_statusFieldRefInput<$PrismaModel>
    in?: $Enums.match_queue_status[]
    notIn?: $Enums.match_queue_status[]
    not?: NestedEnummatch_queue_statusFilter<$PrismaModel> | $Enums.match_queue_status
  }

  export type NestedEnummatch_queue_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.match_queue_status | Enummatch_queue_statusFieldRefInput<$PrismaModel>
    in?: $Enums.match_queue_status[]
    notIn?: $Enums.match_queue_status[]
    not?: NestedEnummatch_queue_statusWithAggregatesFilter<$PrismaModel> | $Enums.match_queue_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummatch_queue_statusFilter<$PrismaModel>
    _max?: NestedEnummatch_queue_statusFilter<$PrismaModel>
  }

  export type userCreateWithoutDeviceInput = {
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    match?: matchCreateNestedManyWithoutUserInput
    match_move?: match_moveCreateNestedManyWithoutUserInput
    match_piece?: match_pieceCreateNestedManyWithoutUserInput
    match_player?: match_playerCreateNestedManyWithoutUserInput
    match_queue?: match_queueCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutDeviceInput = {
    id?: number
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    match?: matchUncheckedCreateNestedManyWithoutUserInput
    match_move?: match_moveUncheckedCreateNestedManyWithoutUserInput
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutUserInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutUserInput
    match_queue?: match_queueUncheckedCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutDeviceInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDeviceInput, userUncheckedCreateWithoutDeviceInput>
  }

  export type refresh_tokenCreateWithoutDeviceInput = {
    token?: string | null
    ipAddress?: string | null
    country?: string | null
    region?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    user: userCreateNestedOneWithoutRefresh_tokenInput
  }

  export type refresh_tokenUncheckedCreateWithoutDeviceInput = {
    id?: number
    userId: number
    token?: string | null
    ipAddress?: string | null
    country?: string | null
    region?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type refresh_tokenCreateOrConnectWithoutDeviceInput = {
    where: refresh_tokenWhereUniqueInput
    create: XOR<refresh_tokenCreateWithoutDeviceInput, refresh_tokenUncheckedCreateWithoutDeviceInput>
  }

  export type refresh_tokenCreateManyDeviceInputEnvelope = {
    data: refresh_tokenCreateManyDeviceInput | refresh_tokenCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutDeviceInput = {
    update: XOR<userUpdateWithoutDeviceInput, userUncheckedUpdateWithoutDeviceInput>
    create: XOR<userCreateWithoutDeviceInput, userUncheckedCreateWithoutDeviceInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutDeviceInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutDeviceInput, userUncheckedUpdateWithoutDeviceInput>
  }

  export type userUpdateWithoutDeviceInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    match?: matchUpdateManyWithoutUserNestedInput
    match_move?: match_moveUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUpdateManyWithoutUserNestedInput
    match_player?: match_playerUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    match?: matchUncheckedUpdateManyWithoutUserNestedInput
    match_move?: match_moveUncheckedUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUncheckedUpdateManyWithoutUserNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUncheckedUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type refresh_tokenUpsertWithWhereUniqueWithoutDeviceInput = {
    where: refresh_tokenWhereUniqueInput
    update: XOR<refresh_tokenUpdateWithoutDeviceInput, refresh_tokenUncheckedUpdateWithoutDeviceInput>
    create: XOR<refresh_tokenCreateWithoutDeviceInput, refresh_tokenUncheckedCreateWithoutDeviceInput>
  }

  export type refresh_tokenUpdateWithWhereUniqueWithoutDeviceInput = {
    where: refresh_tokenWhereUniqueInput
    data: XOR<refresh_tokenUpdateWithoutDeviceInput, refresh_tokenUncheckedUpdateWithoutDeviceInput>
  }

  export type refresh_tokenUpdateManyWithWhereWithoutDeviceInput = {
    where: refresh_tokenScalarWhereInput
    data: XOR<refresh_tokenUpdateManyMutationInput, refresh_tokenUncheckedUpdateManyWithoutDeviceInput>
  }

  export type refresh_tokenScalarWhereInput = {
    AND?: refresh_tokenScalarWhereInput | refresh_tokenScalarWhereInput[]
    OR?: refresh_tokenScalarWhereInput[]
    NOT?: refresh_tokenScalarWhereInput | refresh_tokenScalarWhereInput[]
    id?: IntFilter<"refresh_token"> | number
    userId?: IntFilter<"refresh_token"> | number
    deviceId?: IntFilter<"refresh_token"> | number
    token?: StringNullableFilter<"refresh_token"> | string | null
    ipAddress?: StringNullableFilter<"refresh_token"> | string | null
    country?: StringNullableFilter<"refresh_token"> | string | null
    region?: StringNullableFilter<"refresh_token"> | string | null
    createdAt?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"refresh_token"> | Date | string | null
  }

  export type userCreateWithoutMatchInput = {
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceCreateNestedManyWithoutUserInput
    match_move?: match_moveCreateNestedManyWithoutUserInput
    match_piece?: match_pieceCreateNestedManyWithoutUserInput
    match_player?: match_playerCreateNestedManyWithoutUserInput
    match_queue?: match_queueCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutMatchInput = {
    id?: number
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceUncheckedCreateNestedManyWithoutUserInput
    match_move?: match_moveUncheckedCreateNestedManyWithoutUserInput
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutUserInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutUserInput
    match_queue?: match_queueUncheckedCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutMatchInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMatchInput, userUncheckedCreateWithoutMatchInput>
  }

  export type match_moveCreateWithoutMatchInput = {
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: string
    capturedPieceType?: string | null
    specialAbilityUsed?: number | null
    createdAt?: Date | string | null
    user?: userCreateNestedOneWithoutMatch_moveInput
  }

  export type match_moveUncheckedCreateWithoutMatchInput = {
    id?: number
    playerId?: number | null
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: string
    capturedPieceType?: string | null
    specialAbilityUsed?: number | null
    createdAt?: Date | string | null
  }

  export type match_moveCreateOrConnectWithoutMatchInput = {
    where: match_moveWhereUniqueInput
    create: XOR<match_moveCreateWithoutMatchInput, match_moveUncheckedCreateWithoutMatchInput>
  }

  export type match_moveCreateManyMatchInputEnvelope = {
    data: match_moveCreateManyMatchInput | match_moveCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type match_pieceCreateWithoutMatchInput = {
    type: $Enums.match_piece_type
    posX?: number | null
    posY?: number | null
    usedAbility?: number | null
    captured?: number | null
    status?: NullableJsonNullValueInput | InputJsonValue
    user?: userCreateNestedOneWithoutMatch_pieceInput
  }

  export type match_pieceUncheckedCreateWithoutMatchInput = {
    id?: number
    playerId?: number | null
    type: $Enums.match_piece_type
    posX?: number | null
    posY?: number | null
    usedAbility?: number | null
    captured?: number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_pieceCreateOrConnectWithoutMatchInput = {
    where: match_pieceWhereUniqueInput
    create: XOR<match_pieceCreateWithoutMatchInput, match_pieceUncheckedCreateWithoutMatchInput>
  }

  export type match_pieceCreateManyMatchInputEnvelope = {
    data: match_pieceCreateManyMatchInput | match_pieceCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type match_playerCreateWithoutMatchInput = {
    color: $Enums.match_player_color
    dreamEnergy?: number
    user?: userCreateNestedOneWithoutMatch_playerInput
  }

  export type match_playerUncheckedCreateWithoutMatchInput = {
    id?: number
    userId?: number | null
    color: $Enums.match_player_color
    dreamEnergy?: number
  }

  export type match_playerCreateOrConnectWithoutMatchInput = {
    where: match_playerWhereUniqueInput
    create: XOR<match_playerCreateWithoutMatchInput, match_playerUncheckedCreateWithoutMatchInput>
  }

  export type match_playerCreateManyMatchInputEnvelope = {
    data: match_playerCreateManyMatchInput | match_playerCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutMatchInput = {
    update: XOR<userUpdateWithoutMatchInput, userUncheckedUpdateWithoutMatchInput>
    create: XOR<userCreateWithoutMatchInput, userUncheckedCreateWithoutMatchInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMatchInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMatchInput, userUncheckedUpdateWithoutMatchInput>
  }

  export type userUpdateWithoutMatchInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUpdateManyWithoutUserNestedInput
    match_move?: match_moveUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUpdateManyWithoutUserNestedInput
    match_player?: match_playerUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUncheckedUpdateManyWithoutUserNestedInput
    match_move?: match_moveUncheckedUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUncheckedUpdateManyWithoutUserNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUncheckedUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type match_moveUpsertWithWhereUniqueWithoutMatchInput = {
    where: match_moveWhereUniqueInput
    update: XOR<match_moveUpdateWithoutMatchInput, match_moveUncheckedUpdateWithoutMatchInput>
    create: XOR<match_moveCreateWithoutMatchInput, match_moveUncheckedCreateWithoutMatchInput>
  }

  export type match_moveUpdateWithWhereUniqueWithoutMatchInput = {
    where: match_moveWhereUniqueInput
    data: XOR<match_moveUpdateWithoutMatchInput, match_moveUncheckedUpdateWithoutMatchInput>
  }

  export type match_moveUpdateManyWithWhereWithoutMatchInput = {
    where: match_moveScalarWhereInput
    data: XOR<match_moveUpdateManyMutationInput, match_moveUncheckedUpdateManyWithoutMatchInput>
  }

  export type match_moveScalarWhereInput = {
    AND?: match_moveScalarWhereInput | match_moveScalarWhereInput[]
    OR?: match_moveScalarWhereInput[]
    NOT?: match_moveScalarWhereInput | match_moveScalarWhereInput[]
    id?: IntFilter<"match_move"> | number
    matchId?: IntFilter<"match_move"> | number
    playerId?: IntNullableFilter<"match_move"> | number | null
    moveNumber?: IntFilter<"match_move"> | number
    fromX?: IntFilter<"match_move"> | number
    fromY?: IntFilter<"match_move"> | number
    toX?: IntFilter<"match_move"> | number
    toY?: IntFilter<"match_move"> | number
    pieceType?: StringFilter<"match_move"> | string
    capturedPieceType?: StringNullableFilter<"match_move"> | string | null
    specialAbilityUsed?: IntNullableFilter<"match_move"> | number | null
    createdAt?: DateTimeNullableFilter<"match_move"> | Date | string | null
  }

  export type match_pieceUpsertWithWhereUniqueWithoutMatchInput = {
    where: match_pieceWhereUniqueInput
    update: XOR<match_pieceUpdateWithoutMatchInput, match_pieceUncheckedUpdateWithoutMatchInput>
    create: XOR<match_pieceCreateWithoutMatchInput, match_pieceUncheckedCreateWithoutMatchInput>
  }

  export type match_pieceUpdateWithWhereUniqueWithoutMatchInput = {
    where: match_pieceWhereUniqueInput
    data: XOR<match_pieceUpdateWithoutMatchInput, match_pieceUncheckedUpdateWithoutMatchInput>
  }

  export type match_pieceUpdateManyWithWhereWithoutMatchInput = {
    where: match_pieceScalarWhereInput
    data: XOR<match_pieceUpdateManyMutationInput, match_pieceUncheckedUpdateManyWithoutMatchInput>
  }

  export type match_pieceScalarWhereInput = {
    AND?: match_pieceScalarWhereInput | match_pieceScalarWhereInput[]
    OR?: match_pieceScalarWhereInput[]
    NOT?: match_pieceScalarWhereInput | match_pieceScalarWhereInput[]
    id?: IntFilter<"match_piece"> | number
    matchId?: IntFilter<"match_piece"> | number
    playerId?: IntNullableFilter<"match_piece"> | number | null
    type?: Enummatch_piece_typeFilter<"match_piece"> | $Enums.match_piece_type
    posX?: IntNullableFilter<"match_piece"> | number | null
    posY?: IntNullableFilter<"match_piece"> | number | null
    usedAbility?: IntNullableFilter<"match_piece"> | number | null
    captured?: IntNullableFilter<"match_piece"> | number | null
    status?: JsonNullableFilter<"match_piece">
  }

  export type match_playerUpsertWithWhereUniqueWithoutMatchInput = {
    where: match_playerWhereUniqueInput
    update: XOR<match_playerUpdateWithoutMatchInput, match_playerUncheckedUpdateWithoutMatchInput>
    create: XOR<match_playerCreateWithoutMatchInput, match_playerUncheckedCreateWithoutMatchInput>
  }

  export type match_playerUpdateWithWhereUniqueWithoutMatchInput = {
    where: match_playerWhereUniqueInput
    data: XOR<match_playerUpdateWithoutMatchInput, match_playerUncheckedUpdateWithoutMatchInput>
  }

  export type match_playerUpdateManyWithWhereWithoutMatchInput = {
    where: match_playerScalarWhereInput
    data: XOR<match_playerUpdateManyMutationInput, match_playerUncheckedUpdateManyWithoutMatchInput>
  }

  export type match_playerScalarWhereInput = {
    AND?: match_playerScalarWhereInput | match_playerScalarWhereInput[]
    OR?: match_playerScalarWhereInput[]
    NOT?: match_playerScalarWhereInput | match_playerScalarWhereInput[]
    id?: IntFilter<"match_player"> | number
    userId?: IntNullableFilter<"match_player"> | number | null
    matchId?: IntFilter<"match_player"> | number
    color?: Enummatch_player_colorFilter<"match_player"> | $Enums.match_player_color
    dreamEnergy?: IntFilter<"match_player"> | number
  }

  export type matchCreateWithoutMatch_moveInput = {
    status: $Enums.match_status
    createdAt?: Date | string | null
    turn?: number
    user?: userCreateNestedOneWithoutMatchInput
    match_piece?: match_pieceCreateNestedManyWithoutMatchInput
    match_player?: match_playerCreateNestedManyWithoutMatchInput
  }

  export type matchUncheckedCreateWithoutMatch_moveInput = {
    id?: number
    status: $Enums.match_status
    createdAt?: Date | string | null
    winnerId?: number | null
    turn?: number
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutMatchInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutMatchInput
  }

  export type matchCreateOrConnectWithoutMatch_moveInput = {
    where: matchWhereUniqueInput
    create: XOR<matchCreateWithoutMatch_moveInput, matchUncheckedCreateWithoutMatch_moveInput>
  }

  export type userCreateWithoutMatch_moveInput = {
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceCreateNestedManyWithoutUserInput
    match?: matchCreateNestedManyWithoutUserInput
    match_piece?: match_pieceCreateNestedManyWithoutUserInput
    match_player?: match_playerCreateNestedManyWithoutUserInput
    match_queue?: match_queueCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutMatch_moveInput = {
    id?: number
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceUncheckedCreateNestedManyWithoutUserInput
    match?: matchUncheckedCreateNestedManyWithoutUserInput
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutUserInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutUserInput
    match_queue?: match_queueUncheckedCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutMatch_moveInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMatch_moveInput, userUncheckedCreateWithoutMatch_moveInput>
  }

  export type matchUpsertWithoutMatch_moveInput = {
    update: XOR<matchUpdateWithoutMatch_moveInput, matchUncheckedUpdateWithoutMatch_moveInput>
    create: XOR<matchCreateWithoutMatch_moveInput, matchUncheckedCreateWithoutMatch_moveInput>
    where?: matchWhereInput
  }

  export type matchUpdateToOneWithWhereWithoutMatch_moveInput = {
    where?: matchWhereInput
    data: XOR<matchUpdateWithoutMatch_moveInput, matchUncheckedUpdateWithoutMatch_moveInput>
  }

  export type matchUpdateWithoutMatch_moveInput = {
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    turn?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneWithoutMatchNestedInput
    match_piece?: match_pieceUpdateManyWithoutMatchNestedInput
    match_player?: match_playerUpdateManyWithoutMatchNestedInput
  }

  export type matchUncheckedUpdateWithoutMatch_moveInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    turn?: IntFieldUpdateOperationsInput | number
    match_piece?: match_pieceUncheckedUpdateManyWithoutMatchNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type userUpsertWithoutMatch_moveInput = {
    update: XOR<userUpdateWithoutMatch_moveInput, userUncheckedUpdateWithoutMatch_moveInput>
    create: XOR<userCreateWithoutMatch_moveInput, userUncheckedCreateWithoutMatch_moveInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMatch_moveInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMatch_moveInput, userUncheckedUpdateWithoutMatch_moveInput>
  }

  export type userUpdateWithoutMatch_moveInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUpdateManyWithoutUserNestedInput
    match?: matchUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUpdateManyWithoutUserNestedInput
    match_player?: match_playerUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMatch_moveInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUncheckedUpdateManyWithoutUserNestedInput
    match?: matchUncheckedUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUncheckedUpdateManyWithoutUserNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUncheckedUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type matchCreateWithoutMatch_pieceInput = {
    status: $Enums.match_status
    createdAt?: Date | string | null
    turn?: number
    user?: userCreateNestedOneWithoutMatchInput
    match_move?: match_moveCreateNestedManyWithoutMatchInput
    match_player?: match_playerCreateNestedManyWithoutMatchInput
  }

  export type matchUncheckedCreateWithoutMatch_pieceInput = {
    id?: number
    status: $Enums.match_status
    createdAt?: Date | string | null
    winnerId?: number | null
    turn?: number
    match_move?: match_moveUncheckedCreateNestedManyWithoutMatchInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutMatchInput
  }

  export type matchCreateOrConnectWithoutMatch_pieceInput = {
    where: matchWhereUniqueInput
    create: XOR<matchCreateWithoutMatch_pieceInput, matchUncheckedCreateWithoutMatch_pieceInput>
  }

  export type userCreateWithoutMatch_pieceInput = {
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceCreateNestedManyWithoutUserInput
    match?: matchCreateNestedManyWithoutUserInput
    match_move?: match_moveCreateNestedManyWithoutUserInput
    match_player?: match_playerCreateNestedManyWithoutUserInput
    match_queue?: match_queueCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutMatch_pieceInput = {
    id?: number
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceUncheckedCreateNestedManyWithoutUserInput
    match?: matchUncheckedCreateNestedManyWithoutUserInput
    match_move?: match_moveUncheckedCreateNestedManyWithoutUserInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutUserInput
    match_queue?: match_queueUncheckedCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutMatch_pieceInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMatch_pieceInput, userUncheckedCreateWithoutMatch_pieceInput>
  }

  export type matchUpsertWithoutMatch_pieceInput = {
    update: XOR<matchUpdateWithoutMatch_pieceInput, matchUncheckedUpdateWithoutMatch_pieceInput>
    create: XOR<matchCreateWithoutMatch_pieceInput, matchUncheckedCreateWithoutMatch_pieceInput>
    where?: matchWhereInput
  }

  export type matchUpdateToOneWithWhereWithoutMatch_pieceInput = {
    where?: matchWhereInput
    data: XOR<matchUpdateWithoutMatch_pieceInput, matchUncheckedUpdateWithoutMatch_pieceInput>
  }

  export type matchUpdateWithoutMatch_pieceInput = {
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    turn?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneWithoutMatchNestedInput
    match_move?: match_moveUpdateManyWithoutMatchNestedInput
    match_player?: match_playerUpdateManyWithoutMatchNestedInput
  }

  export type matchUncheckedUpdateWithoutMatch_pieceInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    turn?: IntFieldUpdateOperationsInput | number
    match_move?: match_moveUncheckedUpdateManyWithoutMatchNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type userUpsertWithoutMatch_pieceInput = {
    update: XOR<userUpdateWithoutMatch_pieceInput, userUncheckedUpdateWithoutMatch_pieceInput>
    create: XOR<userCreateWithoutMatch_pieceInput, userUncheckedCreateWithoutMatch_pieceInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMatch_pieceInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMatch_pieceInput, userUncheckedUpdateWithoutMatch_pieceInput>
  }

  export type userUpdateWithoutMatch_pieceInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUpdateManyWithoutUserNestedInput
    match?: matchUpdateManyWithoutUserNestedInput
    match_move?: match_moveUpdateManyWithoutUserNestedInput
    match_player?: match_playerUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMatch_pieceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUncheckedUpdateManyWithoutUserNestedInput
    match?: matchUncheckedUpdateManyWithoutUserNestedInput
    match_move?: match_moveUncheckedUpdateManyWithoutUserNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUncheckedUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutMatch_playerInput = {
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceCreateNestedManyWithoutUserInput
    match?: matchCreateNestedManyWithoutUserInput
    match_move?: match_moveCreateNestedManyWithoutUserInput
    match_piece?: match_pieceCreateNestedManyWithoutUserInput
    match_queue?: match_queueCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutMatch_playerInput = {
    id?: number
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceUncheckedCreateNestedManyWithoutUserInput
    match?: matchUncheckedCreateNestedManyWithoutUserInput
    match_move?: match_moveUncheckedCreateNestedManyWithoutUserInput
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutUserInput
    match_queue?: match_queueUncheckedCreateNestedOneWithoutUserInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutMatch_playerInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMatch_playerInput, userUncheckedCreateWithoutMatch_playerInput>
  }

  export type matchCreateWithoutMatch_playerInput = {
    status: $Enums.match_status
    createdAt?: Date | string | null
    turn?: number
    user?: userCreateNestedOneWithoutMatchInput
    match_move?: match_moveCreateNestedManyWithoutMatchInput
    match_piece?: match_pieceCreateNestedManyWithoutMatchInput
  }

  export type matchUncheckedCreateWithoutMatch_playerInput = {
    id?: number
    status: $Enums.match_status
    createdAt?: Date | string | null
    winnerId?: number | null
    turn?: number
    match_move?: match_moveUncheckedCreateNestedManyWithoutMatchInput
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutMatchInput
  }

  export type matchCreateOrConnectWithoutMatch_playerInput = {
    where: matchWhereUniqueInput
    create: XOR<matchCreateWithoutMatch_playerInput, matchUncheckedCreateWithoutMatch_playerInput>
  }

  export type userUpsertWithoutMatch_playerInput = {
    update: XOR<userUpdateWithoutMatch_playerInput, userUncheckedUpdateWithoutMatch_playerInput>
    create: XOR<userCreateWithoutMatch_playerInput, userUncheckedCreateWithoutMatch_playerInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMatch_playerInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMatch_playerInput, userUncheckedUpdateWithoutMatch_playerInput>
  }

  export type userUpdateWithoutMatch_playerInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUpdateManyWithoutUserNestedInput
    match?: matchUpdateManyWithoutUserNestedInput
    match_move?: match_moveUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMatch_playerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUncheckedUpdateManyWithoutUserNestedInput
    match?: matchUncheckedUpdateManyWithoutUserNestedInput
    match_move?: match_moveUncheckedUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUncheckedUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUncheckedUpdateOneWithoutUserNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type matchUpsertWithoutMatch_playerInput = {
    update: XOR<matchUpdateWithoutMatch_playerInput, matchUncheckedUpdateWithoutMatch_playerInput>
    create: XOR<matchCreateWithoutMatch_playerInput, matchUncheckedCreateWithoutMatch_playerInput>
    where?: matchWhereInput
  }

  export type matchUpdateToOneWithWhereWithoutMatch_playerInput = {
    where?: matchWhereInput
    data: XOR<matchUpdateWithoutMatch_playerInput, matchUncheckedUpdateWithoutMatch_playerInput>
  }

  export type matchUpdateWithoutMatch_playerInput = {
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    turn?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneWithoutMatchNestedInput
    match_move?: match_moveUpdateManyWithoutMatchNestedInput
    match_piece?: match_pieceUpdateManyWithoutMatchNestedInput
  }

  export type matchUncheckedUpdateWithoutMatch_playerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    turn?: IntFieldUpdateOperationsInput | number
    match_move?: match_moveUncheckedUpdateManyWithoutMatchNestedInput
    match_piece?: match_pieceUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type userCreateWithoutRefresh_tokenInput = {
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceCreateNestedManyWithoutUserInput
    match?: matchCreateNestedManyWithoutUserInput
    match_move?: match_moveCreateNestedManyWithoutUserInput
    match_piece?: match_pieceCreateNestedManyWithoutUserInput
    match_player?: match_playerCreateNestedManyWithoutUserInput
    match_queue?: match_queueCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutRefresh_tokenInput = {
    id?: number
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceUncheckedCreateNestedManyWithoutUserInput
    match?: matchUncheckedCreateNestedManyWithoutUserInput
    match_move?: match_moveUncheckedCreateNestedManyWithoutUserInput
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutUserInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutUserInput
    match_queue?: match_queueUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutRefresh_tokenInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRefresh_tokenInput, userUncheckedCreateWithoutRefresh_tokenInput>
  }

  export type deviceCreateWithoutRefresh_tokenInput = {
    userAgent: string
    deviceType?: $Enums.device_deviceType | null
    firstSeenAt?: Date | string | null
    lastSeenAt?: Date | string | null
    user: userCreateNestedOneWithoutDeviceInput
  }

  export type deviceUncheckedCreateWithoutRefresh_tokenInput = {
    id?: number
    userId: number
    userAgent: string
    deviceType?: $Enums.device_deviceType | null
    firstSeenAt?: Date | string | null
    lastSeenAt?: Date | string | null
  }

  export type deviceCreateOrConnectWithoutRefresh_tokenInput = {
    where: deviceWhereUniqueInput
    create: XOR<deviceCreateWithoutRefresh_tokenInput, deviceUncheckedCreateWithoutRefresh_tokenInput>
  }

  export type userUpsertWithoutRefresh_tokenInput = {
    update: XOR<userUpdateWithoutRefresh_tokenInput, userUncheckedUpdateWithoutRefresh_tokenInput>
    create: XOR<userCreateWithoutRefresh_tokenInput, userUncheckedCreateWithoutRefresh_tokenInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRefresh_tokenInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRefresh_tokenInput, userUncheckedUpdateWithoutRefresh_tokenInput>
  }

  export type userUpdateWithoutRefresh_tokenInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUpdateManyWithoutUserNestedInput
    match?: matchUpdateManyWithoutUserNestedInput
    match_move?: match_moveUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUpdateManyWithoutUserNestedInput
    match_player?: match_playerUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRefresh_tokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUncheckedUpdateManyWithoutUserNestedInput
    match?: matchUncheckedUpdateManyWithoutUserNestedInput
    match_move?: match_moveUncheckedUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUncheckedUpdateManyWithoutUserNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutUserNestedInput
    match_queue?: match_queueUncheckedUpdateOneWithoutUserNestedInput
  }

  export type deviceUpsertWithoutRefresh_tokenInput = {
    update: XOR<deviceUpdateWithoutRefresh_tokenInput, deviceUncheckedUpdateWithoutRefresh_tokenInput>
    create: XOR<deviceCreateWithoutRefresh_tokenInput, deviceUncheckedCreateWithoutRefresh_tokenInput>
    where?: deviceWhereInput
  }

  export type deviceUpdateToOneWithWhereWithoutRefresh_tokenInput = {
    where?: deviceWhereInput
    data: XOR<deviceUpdateWithoutRefresh_tokenInput, deviceUncheckedUpdateWithoutRefresh_tokenInput>
  }

  export type deviceUpdateWithoutRefresh_tokenInput = {
    userAgent?: StringFieldUpdateOperationsInput | string
    deviceType?: NullableEnumdevice_deviceTypeFieldUpdateOperationsInput | $Enums.device_deviceType | null
    firstSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateWithoutRefresh_tokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    deviceType?: NullableEnumdevice_deviceTypeFieldUpdateOperationsInput | $Enums.device_deviceType | null
    firstSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deviceCreateWithoutUserInput = {
    userAgent: string
    deviceType?: $Enums.device_deviceType | null
    firstSeenAt?: Date | string | null
    lastSeenAt?: Date | string | null
    refresh_token?: refresh_tokenCreateNestedManyWithoutDeviceInput
  }

  export type deviceUncheckedCreateWithoutUserInput = {
    id?: number
    userAgent: string
    deviceType?: $Enums.device_deviceType | null
    firstSeenAt?: Date | string | null
    lastSeenAt?: Date | string | null
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type deviceCreateOrConnectWithoutUserInput = {
    where: deviceWhereUniqueInput
    create: XOR<deviceCreateWithoutUserInput, deviceUncheckedCreateWithoutUserInput>
  }

  export type deviceCreateManyUserInputEnvelope = {
    data: deviceCreateManyUserInput | deviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type matchCreateWithoutUserInput = {
    status: $Enums.match_status
    createdAt?: Date | string | null
    turn?: number
    match_move?: match_moveCreateNestedManyWithoutMatchInput
    match_piece?: match_pieceCreateNestedManyWithoutMatchInput
    match_player?: match_playerCreateNestedManyWithoutMatchInput
  }

  export type matchUncheckedCreateWithoutUserInput = {
    id?: number
    status: $Enums.match_status
    createdAt?: Date | string | null
    turn?: number
    match_move?: match_moveUncheckedCreateNestedManyWithoutMatchInput
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutMatchInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutMatchInput
  }

  export type matchCreateOrConnectWithoutUserInput = {
    where: matchWhereUniqueInput
    create: XOR<matchCreateWithoutUserInput, matchUncheckedCreateWithoutUserInput>
  }

  export type matchCreateManyUserInputEnvelope = {
    data: matchCreateManyUserInput | matchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type match_moveCreateWithoutUserInput = {
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: string
    capturedPieceType?: string | null
    specialAbilityUsed?: number | null
    createdAt?: Date | string | null
    match: matchCreateNestedOneWithoutMatch_moveInput
  }

  export type match_moveUncheckedCreateWithoutUserInput = {
    id?: number
    matchId: number
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: string
    capturedPieceType?: string | null
    specialAbilityUsed?: number | null
    createdAt?: Date | string | null
  }

  export type match_moveCreateOrConnectWithoutUserInput = {
    where: match_moveWhereUniqueInput
    create: XOR<match_moveCreateWithoutUserInput, match_moveUncheckedCreateWithoutUserInput>
  }

  export type match_moveCreateManyUserInputEnvelope = {
    data: match_moveCreateManyUserInput | match_moveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type match_pieceCreateWithoutUserInput = {
    type: $Enums.match_piece_type
    posX?: number | null
    posY?: number | null
    usedAbility?: number | null
    captured?: number | null
    status?: NullableJsonNullValueInput | InputJsonValue
    match: matchCreateNestedOneWithoutMatch_pieceInput
  }

  export type match_pieceUncheckedCreateWithoutUserInput = {
    id?: number
    matchId: number
    type: $Enums.match_piece_type
    posX?: number | null
    posY?: number | null
    usedAbility?: number | null
    captured?: number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_pieceCreateOrConnectWithoutUserInput = {
    where: match_pieceWhereUniqueInput
    create: XOR<match_pieceCreateWithoutUserInput, match_pieceUncheckedCreateWithoutUserInput>
  }

  export type match_pieceCreateManyUserInputEnvelope = {
    data: match_pieceCreateManyUserInput | match_pieceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type match_playerCreateWithoutUserInput = {
    color: $Enums.match_player_color
    dreamEnergy?: number
    match: matchCreateNestedOneWithoutMatch_playerInput
  }

  export type match_playerUncheckedCreateWithoutUserInput = {
    id?: number
    matchId: number
    color: $Enums.match_player_color
    dreamEnergy?: number
  }

  export type match_playerCreateOrConnectWithoutUserInput = {
    where: match_playerWhereUniqueInput
    create: XOR<match_playerCreateWithoutUserInput, match_playerUncheckedCreateWithoutUserInput>
  }

  export type match_playerCreateManyUserInputEnvelope = {
    data: match_playerCreateManyUserInput | match_playerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type match_queueCreateWithoutUserInput = {
    status?: $Enums.match_queue_status
    joinedAt?: Date | string | null
  }

  export type match_queueUncheckedCreateWithoutUserInput = {
    id?: number
    status?: $Enums.match_queue_status
    joinedAt?: Date | string | null
  }

  export type match_queueCreateOrConnectWithoutUserInput = {
    where: match_queueWhereUniqueInput
    create: XOR<match_queueCreateWithoutUserInput, match_queueUncheckedCreateWithoutUserInput>
  }

  export type refresh_tokenCreateWithoutUserInput = {
    token?: string | null
    ipAddress?: string | null
    country?: string | null
    region?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
    device: deviceCreateNestedOneWithoutRefresh_tokenInput
  }

  export type refresh_tokenUncheckedCreateWithoutUserInput = {
    id?: number
    deviceId: number
    token?: string | null
    ipAddress?: string | null
    country?: string | null
    region?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type refresh_tokenCreateOrConnectWithoutUserInput = {
    where: refresh_tokenWhereUniqueInput
    create: XOR<refresh_tokenCreateWithoutUserInput, refresh_tokenUncheckedCreateWithoutUserInput>
  }

  export type refresh_tokenCreateManyUserInputEnvelope = {
    data: refresh_tokenCreateManyUserInput | refresh_tokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type deviceUpsertWithWhereUniqueWithoutUserInput = {
    where: deviceWhereUniqueInput
    update: XOR<deviceUpdateWithoutUserInput, deviceUncheckedUpdateWithoutUserInput>
    create: XOR<deviceCreateWithoutUserInput, deviceUncheckedCreateWithoutUserInput>
  }

  export type deviceUpdateWithWhereUniqueWithoutUserInput = {
    where: deviceWhereUniqueInput
    data: XOR<deviceUpdateWithoutUserInput, deviceUncheckedUpdateWithoutUserInput>
  }

  export type deviceUpdateManyWithWhereWithoutUserInput = {
    where: deviceScalarWhereInput
    data: XOR<deviceUpdateManyMutationInput, deviceUncheckedUpdateManyWithoutUserInput>
  }

  export type deviceScalarWhereInput = {
    AND?: deviceScalarWhereInput | deviceScalarWhereInput[]
    OR?: deviceScalarWhereInput[]
    NOT?: deviceScalarWhereInput | deviceScalarWhereInput[]
    id?: IntFilter<"device"> | number
    userId?: IntFilter<"device"> | number
    userAgent?: StringFilter<"device"> | string
    deviceType?: Enumdevice_deviceTypeNullableFilter<"device"> | $Enums.device_deviceType | null
    firstSeenAt?: DateTimeNullableFilter<"device"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"device"> | Date | string | null
  }

  export type matchUpsertWithWhereUniqueWithoutUserInput = {
    where: matchWhereUniqueInput
    update: XOR<matchUpdateWithoutUserInput, matchUncheckedUpdateWithoutUserInput>
    create: XOR<matchCreateWithoutUserInput, matchUncheckedCreateWithoutUserInput>
  }

  export type matchUpdateWithWhereUniqueWithoutUserInput = {
    where: matchWhereUniqueInput
    data: XOR<matchUpdateWithoutUserInput, matchUncheckedUpdateWithoutUserInput>
  }

  export type matchUpdateManyWithWhereWithoutUserInput = {
    where: matchScalarWhereInput
    data: XOR<matchUpdateManyMutationInput, matchUncheckedUpdateManyWithoutUserInput>
  }

  export type matchScalarWhereInput = {
    AND?: matchScalarWhereInput | matchScalarWhereInput[]
    OR?: matchScalarWhereInput[]
    NOT?: matchScalarWhereInput | matchScalarWhereInput[]
    id?: IntFilter<"match"> | number
    status?: Enummatch_statusFilter<"match"> | $Enums.match_status
    createdAt?: DateTimeNullableFilter<"match"> | Date | string | null
    winnerId?: IntNullableFilter<"match"> | number | null
    turn?: IntFilter<"match"> | number
  }

  export type match_moveUpsertWithWhereUniqueWithoutUserInput = {
    where: match_moveWhereUniqueInput
    update: XOR<match_moveUpdateWithoutUserInput, match_moveUncheckedUpdateWithoutUserInput>
    create: XOR<match_moveCreateWithoutUserInput, match_moveUncheckedCreateWithoutUserInput>
  }

  export type match_moveUpdateWithWhereUniqueWithoutUserInput = {
    where: match_moveWhereUniqueInput
    data: XOR<match_moveUpdateWithoutUserInput, match_moveUncheckedUpdateWithoutUserInput>
  }

  export type match_moveUpdateManyWithWhereWithoutUserInput = {
    where: match_moveScalarWhereInput
    data: XOR<match_moveUpdateManyMutationInput, match_moveUncheckedUpdateManyWithoutUserInput>
  }

  export type match_pieceUpsertWithWhereUniqueWithoutUserInput = {
    where: match_pieceWhereUniqueInput
    update: XOR<match_pieceUpdateWithoutUserInput, match_pieceUncheckedUpdateWithoutUserInput>
    create: XOR<match_pieceCreateWithoutUserInput, match_pieceUncheckedCreateWithoutUserInput>
  }

  export type match_pieceUpdateWithWhereUniqueWithoutUserInput = {
    where: match_pieceWhereUniqueInput
    data: XOR<match_pieceUpdateWithoutUserInput, match_pieceUncheckedUpdateWithoutUserInput>
  }

  export type match_pieceUpdateManyWithWhereWithoutUserInput = {
    where: match_pieceScalarWhereInput
    data: XOR<match_pieceUpdateManyMutationInput, match_pieceUncheckedUpdateManyWithoutUserInput>
  }

  export type match_playerUpsertWithWhereUniqueWithoutUserInput = {
    where: match_playerWhereUniqueInput
    update: XOR<match_playerUpdateWithoutUserInput, match_playerUncheckedUpdateWithoutUserInput>
    create: XOR<match_playerCreateWithoutUserInput, match_playerUncheckedCreateWithoutUserInput>
  }

  export type match_playerUpdateWithWhereUniqueWithoutUserInput = {
    where: match_playerWhereUniqueInput
    data: XOR<match_playerUpdateWithoutUserInput, match_playerUncheckedUpdateWithoutUserInput>
  }

  export type match_playerUpdateManyWithWhereWithoutUserInput = {
    where: match_playerScalarWhereInput
    data: XOR<match_playerUpdateManyMutationInput, match_playerUncheckedUpdateManyWithoutUserInput>
  }

  export type match_queueUpsertWithoutUserInput = {
    update: XOR<match_queueUpdateWithoutUserInput, match_queueUncheckedUpdateWithoutUserInput>
    create: XOR<match_queueCreateWithoutUserInput, match_queueUncheckedCreateWithoutUserInput>
    where?: match_queueWhereInput
  }

  export type match_queueUpdateToOneWithWhereWithoutUserInput = {
    where?: match_queueWhereInput
    data: XOR<match_queueUpdateWithoutUserInput, match_queueUncheckedUpdateWithoutUserInput>
  }

  export type match_queueUpdateWithoutUserInput = {
    status?: Enummatch_queue_statusFieldUpdateOperationsInput | $Enums.match_queue_status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_queueUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enummatch_queue_statusFieldUpdateOperationsInput | $Enums.match_queue_status
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokenUpsertWithWhereUniqueWithoutUserInput = {
    where: refresh_tokenWhereUniqueInput
    update: XOR<refresh_tokenUpdateWithoutUserInput, refresh_tokenUncheckedUpdateWithoutUserInput>
    create: XOR<refresh_tokenCreateWithoutUserInput, refresh_tokenUncheckedCreateWithoutUserInput>
  }

  export type refresh_tokenUpdateWithWhereUniqueWithoutUserInput = {
    where: refresh_tokenWhereUniqueInput
    data: XOR<refresh_tokenUpdateWithoutUserInput, refresh_tokenUncheckedUpdateWithoutUserInput>
  }

  export type refresh_tokenUpdateManyWithWhereWithoutUserInput = {
    where: refresh_tokenScalarWhereInput
    data: XOR<refresh_tokenUpdateManyMutationInput, refresh_tokenUncheckedUpdateManyWithoutUserInput>
  }

  export type userCreateWithoutMatch_queueInput = {
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceCreateNestedManyWithoutUserInput
    match?: matchCreateNestedManyWithoutUserInput
    match_move?: match_moveCreateNestedManyWithoutUserInput
    match_piece?: match_pieceCreateNestedManyWithoutUserInput
    match_player?: match_playerCreateNestedManyWithoutUserInput
    refresh_token?: refresh_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutMatch_queueInput = {
    id?: number
    email?: string | null
    username: string
    passwordHash: string
    isEmailVerified?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    device?: deviceUncheckedCreateNestedManyWithoutUserInput
    match?: matchUncheckedCreateNestedManyWithoutUserInput
    match_move?: match_moveUncheckedCreateNestedManyWithoutUserInput
    match_piece?: match_pieceUncheckedCreateNestedManyWithoutUserInput
    match_player?: match_playerUncheckedCreateNestedManyWithoutUserInput
    refresh_token?: refresh_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutMatch_queueInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMatch_queueInput, userUncheckedCreateWithoutMatch_queueInput>
  }

  export type userUpsertWithoutMatch_queueInput = {
    update: XOR<userUpdateWithoutMatch_queueInput, userUncheckedUpdateWithoutMatch_queueInput>
    create: XOR<userCreateWithoutMatch_queueInput, userUncheckedCreateWithoutMatch_queueInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMatch_queueInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMatch_queueInput, userUncheckedUpdateWithoutMatch_queueInput>
  }

  export type userUpdateWithoutMatch_queueInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUpdateManyWithoutUserNestedInput
    match?: matchUpdateManyWithoutUserNestedInput
    match_move?: match_moveUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUpdateManyWithoutUserNestedInput
    match_player?: match_playerUpdateManyWithoutUserNestedInput
    refresh_token?: refresh_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMatch_queueInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUncheckedUpdateManyWithoutUserNestedInput
    match?: matchUncheckedUpdateManyWithoutUserNestedInput
    match_move?: match_moveUncheckedUpdateManyWithoutUserNestedInput
    match_piece?: match_pieceUncheckedUpdateManyWithoutUserNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutUserNestedInput
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type refresh_tokenCreateManyDeviceInput = {
    id?: number
    userId: number
    token?: string | null
    ipAddress?: string | null
    country?: string | null
    region?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type refresh_tokenUpdateWithoutDeviceInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutRefresh_tokenNestedInput
  }

  export type refresh_tokenUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokenUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_moveCreateManyMatchInput = {
    id?: number
    playerId?: number | null
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: string
    capturedPieceType?: string | null
    specialAbilityUsed?: number | null
    createdAt?: Date | string | null
  }

  export type match_pieceCreateManyMatchInput = {
    id?: number
    playerId?: number | null
    type: $Enums.match_piece_type
    posX?: number | null
    posY?: number | null
    usedAbility?: number | null
    captured?: number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_playerCreateManyMatchInput = {
    id?: number
    userId?: number | null
    color: $Enums.match_player_color
    dreamEnergy?: number
  }

  export type match_moveUpdateWithoutMatchInput = {
    moveNumber?: IntFieldUpdateOperationsInput | number
    fromX?: IntFieldUpdateOperationsInput | number
    fromY?: IntFieldUpdateOperationsInput | number
    toX?: IntFieldUpdateOperationsInput | number
    toY?: IntFieldUpdateOperationsInput | number
    pieceType?: StringFieldUpdateOperationsInput | string
    capturedPieceType?: NullableStringFieldUpdateOperationsInput | string | null
    specialAbilityUsed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutMatch_moveNestedInput
  }

  export type match_moveUncheckedUpdateWithoutMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: NullableIntFieldUpdateOperationsInput | number | null
    moveNumber?: IntFieldUpdateOperationsInput | number
    fromX?: IntFieldUpdateOperationsInput | number
    fromY?: IntFieldUpdateOperationsInput | number
    toX?: IntFieldUpdateOperationsInput | number
    toY?: IntFieldUpdateOperationsInput | number
    pieceType?: StringFieldUpdateOperationsInput | string
    capturedPieceType?: NullableStringFieldUpdateOperationsInput | string | null
    specialAbilityUsed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_moveUncheckedUpdateManyWithoutMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: NullableIntFieldUpdateOperationsInput | number | null
    moveNumber?: IntFieldUpdateOperationsInput | number
    fromX?: IntFieldUpdateOperationsInput | number
    fromY?: IntFieldUpdateOperationsInput | number
    toX?: IntFieldUpdateOperationsInput | number
    toY?: IntFieldUpdateOperationsInput | number
    pieceType?: StringFieldUpdateOperationsInput | string
    capturedPieceType?: NullableStringFieldUpdateOperationsInput | string | null
    specialAbilityUsed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_pieceUpdateWithoutMatchInput = {
    type?: Enummatch_piece_typeFieldUpdateOperationsInput | $Enums.match_piece_type
    posX?: NullableIntFieldUpdateOperationsInput | number | null
    posY?: NullableIntFieldUpdateOperationsInput | number | null
    usedAbility?: NullableIntFieldUpdateOperationsInput | number | null
    captured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableJsonNullValueInput | InputJsonValue
    user?: userUpdateOneWithoutMatch_pieceNestedInput
  }

  export type match_pieceUncheckedUpdateWithoutMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enummatch_piece_typeFieldUpdateOperationsInput | $Enums.match_piece_type
    posX?: NullableIntFieldUpdateOperationsInput | number | null
    posY?: NullableIntFieldUpdateOperationsInput | number | null
    usedAbility?: NullableIntFieldUpdateOperationsInput | number | null
    captured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_pieceUncheckedUpdateManyWithoutMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enummatch_piece_typeFieldUpdateOperationsInput | $Enums.match_piece_type
    posX?: NullableIntFieldUpdateOperationsInput | number | null
    posY?: NullableIntFieldUpdateOperationsInput | number | null
    usedAbility?: NullableIntFieldUpdateOperationsInput | number | null
    captured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_playerUpdateWithoutMatchInput = {
    color?: Enummatch_player_colorFieldUpdateOperationsInput | $Enums.match_player_color
    dreamEnergy?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneWithoutMatch_playerNestedInput
  }

  export type match_playerUncheckedUpdateWithoutMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: Enummatch_player_colorFieldUpdateOperationsInput | $Enums.match_player_color
    dreamEnergy?: IntFieldUpdateOperationsInput | number
  }

  export type match_playerUncheckedUpdateManyWithoutMatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    color?: Enummatch_player_colorFieldUpdateOperationsInput | $Enums.match_player_color
    dreamEnergy?: IntFieldUpdateOperationsInput | number
  }

  export type deviceCreateManyUserInput = {
    id?: number
    userAgent: string
    deviceType?: $Enums.device_deviceType | null
    firstSeenAt?: Date | string | null
    lastSeenAt?: Date | string | null
  }

  export type matchCreateManyUserInput = {
    id?: number
    status: $Enums.match_status
    createdAt?: Date | string | null
    turn?: number
  }

  export type match_moveCreateManyUserInput = {
    id?: number
    matchId: number
    moveNumber: number
    fromX: number
    fromY: number
    toX: number
    toY: number
    pieceType: string
    capturedPieceType?: string | null
    specialAbilityUsed?: number | null
    createdAt?: Date | string | null
  }

  export type match_pieceCreateManyUserInput = {
    id?: number
    matchId: number
    type: $Enums.match_piece_type
    posX?: number | null
    posY?: number | null
    usedAbility?: number | null
    captured?: number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_playerCreateManyUserInput = {
    id?: number
    matchId: number
    color: $Enums.match_player_color
    dreamEnergy?: number
  }

  export type refresh_tokenCreateManyUserInput = {
    id?: number
    deviceId: number
    token?: string | null
    ipAddress?: string | null
    country?: string | null
    region?: string | null
    createdAt?: Date | string | null
    expiresAt?: Date | string | null
  }

  export type deviceUpdateWithoutUserInput = {
    userAgent?: StringFieldUpdateOperationsInput | string
    deviceType?: NullableEnumdevice_deviceTypeFieldUpdateOperationsInput | $Enums.device_deviceType | null
    firstSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: refresh_tokenUpdateManyWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    deviceType?: NullableEnumdevice_deviceTypeFieldUpdateOperationsInput | $Enums.device_deviceType | null
    firstSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: refresh_tokenUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAgent?: StringFieldUpdateOperationsInput | string
    deviceType?: NullableEnumdevice_deviceTypeFieldUpdateOperationsInput | $Enums.device_deviceType | null
    firstSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type matchUpdateWithoutUserInput = {
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    turn?: IntFieldUpdateOperationsInput | number
    match_move?: match_moveUpdateManyWithoutMatchNestedInput
    match_piece?: match_pieceUpdateManyWithoutMatchNestedInput
    match_player?: match_playerUpdateManyWithoutMatchNestedInput
  }

  export type matchUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    turn?: IntFieldUpdateOperationsInput | number
    match_move?: match_moveUncheckedUpdateManyWithoutMatchNestedInput
    match_piece?: match_pieceUncheckedUpdateManyWithoutMatchNestedInput
    match_player?: match_playerUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type matchUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enummatch_statusFieldUpdateOperationsInput | $Enums.match_status
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    turn?: IntFieldUpdateOperationsInput | number
  }

  export type match_moveUpdateWithoutUserInput = {
    moveNumber?: IntFieldUpdateOperationsInput | number
    fromX?: IntFieldUpdateOperationsInput | number
    fromY?: IntFieldUpdateOperationsInput | number
    toX?: IntFieldUpdateOperationsInput | number
    toY?: IntFieldUpdateOperationsInput | number
    pieceType?: StringFieldUpdateOperationsInput | string
    capturedPieceType?: NullableStringFieldUpdateOperationsInput | string | null
    specialAbilityUsed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    match?: matchUpdateOneRequiredWithoutMatch_moveNestedInput
  }

  export type match_moveUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    moveNumber?: IntFieldUpdateOperationsInput | number
    fromX?: IntFieldUpdateOperationsInput | number
    fromY?: IntFieldUpdateOperationsInput | number
    toX?: IntFieldUpdateOperationsInput | number
    toY?: IntFieldUpdateOperationsInput | number
    pieceType?: StringFieldUpdateOperationsInput | string
    capturedPieceType?: NullableStringFieldUpdateOperationsInput | string | null
    specialAbilityUsed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_moveUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    moveNumber?: IntFieldUpdateOperationsInput | number
    fromX?: IntFieldUpdateOperationsInput | number
    fromY?: IntFieldUpdateOperationsInput | number
    toX?: IntFieldUpdateOperationsInput | number
    toY?: IntFieldUpdateOperationsInput | number
    pieceType?: StringFieldUpdateOperationsInput | string
    capturedPieceType?: NullableStringFieldUpdateOperationsInput | string | null
    specialAbilityUsed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type match_pieceUpdateWithoutUserInput = {
    type?: Enummatch_piece_typeFieldUpdateOperationsInput | $Enums.match_piece_type
    posX?: NullableIntFieldUpdateOperationsInput | number | null
    posY?: NullableIntFieldUpdateOperationsInput | number | null
    usedAbility?: NullableIntFieldUpdateOperationsInput | number | null
    captured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableJsonNullValueInput | InputJsonValue
    match?: matchUpdateOneRequiredWithoutMatch_pieceNestedInput
  }

  export type match_pieceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    type?: Enummatch_piece_typeFieldUpdateOperationsInput | $Enums.match_piece_type
    posX?: NullableIntFieldUpdateOperationsInput | number | null
    posY?: NullableIntFieldUpdateOperationsInput | number | null
    usedAbility?: NullableIntFieldUpdateOperationsInput | number | null
    captured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_pieceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    type?: Enummatch_piece_typeFieldUpdateOperationsInput | $Enums.match_piece_type
    posX?: NullableIntFieldUpdateOperationsInput | number | null
    posY?: NullableIntFieldUpdateOperationsInput | number | null
    usedAbility?: NullableIntFieldUpdateOperationsInput | number | null
    captured?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableJsonNullValueInput | InputJsonValue
  }

  export type match_playerUpdateWithoutUserInput = {
    color?: Enummatch_player_colorFieldUpdateOperationsInput | $Enums.match_player_color
    dreamEnergy?: IntFieldUpdateOperationsInput | number
    match?: matchUpdateOneRequiredWithoutMatch_playerNestedInput
  }

  export type match_playerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    color?: Enummatch_player_colorFieldUpdateOperationsInput | $Enums.match_player_color
    dreamEnergy?: IntFieldUpdateOperationsInput | number
  }

  export type match_playerUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: IntFieldUpdateOperationsInput | number
    color?: Enummatch_player_colorFieldUpdateOperationsInput | $Enums.match_player_color
    dreamEnergy?: IntFieldUpdateOperationsInput | number
  }

  export type refresh_tokenUpdateWithoutUserInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUpdateOneRequiredWithoutRefresh_tokenNestedInput
  }

  export type refresh_tokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}