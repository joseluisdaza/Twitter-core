// smithy-typescript generated code
import { ChirpServiceServiceException as __BaseException } from "./ChirpServiceServiceException";
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

/**
 * Input para login
 * @public
 */
export interface LoginInput {
  /**
   * Email válido
   * @public
   */
  email: string | undefined;

  password: string | undefined;
}

/**
 * Output de login exitoso
 * @public
 */
export interface LoginOutput {
  accessToken: string | undefined;
  idToken: string | undefined;
  refreshToken: string | undefined;
  expiresIn: number | undefined;
  tokenType: string | undefined;
}

/**
 * Error interno del servidor
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

/**
 * Error de autenticación (no autenticado)
 * @public
 */
export class UnauthorizedError extends __BaseException {
  readonly name: "UnauthorizedError" = "UnauthorizedError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedError, __BaseException>) {
    super({
      name: "UnauthorizedError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}

/**
 * Estructura base para errores de validación
 * @public
 */
export class ValidationError extends __BaseException {
  readonly name: "ValidationError" = "ValidationError";
  readonly $fault: "client" = "client";
  /**
   * Campo que falló la validación
   * @public
   */
  field?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationError, __BaseException>) {
    super({
      name: "ValidationError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.field = opts.field;
  }
}

/**
 * Input para logout
 * @public
 */
export interface LogoutInput {
}

/**
 * Output de logout
 * @public
 */
export interface LogoutOutput {
  message: string | undefined;
}

/**
 * Input para registro de nuevo usuario
 * @public
 */
export interface RegisterInput {
  /**
   * Email válido
   * @public
   */
  email: string | undefined;

  password: string | undefined;
  /**
   * Username (3-30 caracteres alfanuméricos, guiones y underscore)
   * @public
   */
  username: string | undefined;

  /**
   * Nombre de visualización del perfil (1-100 caracteres)
   * @public
   */
  displayName: string | undefined;

  /**
   * Biografía opcional del perfil
   * @public
   */
  bio?: string;
}

/**
 * Output de registro exitoso
 * @public
 */
export interface RegisterOutput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  userId: string | undefined;

  /**
   * Username (3-30 caracteres alfanuméricos, guiones y underscore)
   * @public
   */
  username: string | undefined;

  /**
   * Email válido
   * @public
   */
  email: string | undefined;

  message: string | undefined;
}

/**
 * Error de conflicto (recurso ya existe)
 * @public
 */
export class ConflictError extends __BaseException {
  readonly name: "ConflictError" = "ConflictError";
  readonly $fault: "client" = "client";
  resourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictError, __BaseException>) {
    super({
      name: "ConflictError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ConflictError.prototype);
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 */
export interface CreateChirpInput {
  /**
   * Contenido de un chirp (1-280 caracteres)
   * @public
   */
  content: string | undefined;

  /**
   * URLs de imágenes/videos (opcional)
   * @public
   */
  mediaUrls?: (string)[];
}

/**
 * ============================================================================
 * ESTRUCTURAS DE DATOS
 * ============================================================================
 * Estructura principal de un Chirp
 * @public
 */
export interface Chirp {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  chirpId: string | undefined;

  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  userId: string | undefined;

  /**
   * Username (3-30 caracteres alfanuméricos, guiones y underscore)
   * @public
   */
  username: string | undefined;

  /**
   * Contenido de un chirp (1-280 caracteres)
   * @public
   */
  content: string | undefined;

  mediaUrls?: (string)[];
  /**
   * Timestamp en formato ISO 8601
   * @public
   */
  createdAt: Date | undefined;

  likesCount: number | undefined;
  commentsCount: number | undefined;
  repostsCount: number | undefined;
  hidden: boolean | undefined;
}

/**
 * @public
 */
export interface CreateChirpOutput {
  /**
   * ============================================================================
   * ESTRUCTURAS DE DATOS
   * ============================================================================
   * Estructura principal de un Chirp
   * @public
   */
  chirp: Chirp | undefined;
}

/**
 * @public
 */
export interface DeleteChirpInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  chirpId: string | undefined;
}

/**
 * @public
 */
export interface DeleteChirpOutput {
  message: string | undefined;
}

/**
 * Error de autorización (autenticado pero sin permisos)
 * @public
 */
export class ForbiddenError extends __BaseException {
  readonly name: "ForbiddenError" = "ForbiddenError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenError, __BaseException>) {
    super({
      name: "ForbiddenError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}

/**
 * Error cuando el recurso no se encuentra
 * @public
 */
export class NotFoundError extends __BaseException {
  readonly name: "NotFoundError" = "NotFoundError";
  readonly $fault: "client" = "client";
  resourceType: string | undefined;
  resourceId: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundError, __BaseException>) {
    super({
      name: "NotFoundError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, NotFoundError.prototype);
    this.resourceType = opts.resourceType;
    this.resourceId = opts.resourceId;
  }
}

/**
 * @public
 */
export interface GetChirpInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  chirpId: string | undefined;
}

/**
 * @public
 */
export interface GetChirpOutput {
  /**
   * ============================================================================
   * ESTRUCTURAS DE DATOS
   * ============================================================================
   * Estructura principal de un Chirp
   * @public
   */
  chirp: Chirp | undefined;
}

/**
 * @public
 */
export interface GetChirpLikesInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  chirpId: string | undefined;

  /**
   * Número de elementos por página (1-100)
   * @public
   */
  limit?: number;

  /**
   * Token opaco de paginación (cursor)
   * @public
   */
  nextToken?: string;
}

/**
 * ============================================================================
 * ESTRUCTURA: LikeRecord
 * ============================================================================
 * Registro de un like en chirp-likes (chirpId + userId como clave compuesta)
 * @public
 */
export interface LikeRecord {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  chirpId: string | undefined;

  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  userId: string | undefined;

  /**
   * Username (3-30 caracteres alfanuméricos, guiones y underscore)
   * @public
   */
  username: string | undefined;

  /**
   * Timestamp en formato ISO 8601
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface GetChirpLikesOutput {
  likes: (LikeRecord)[] | undefined;
  /**
   * Token opaco de paginación (cursor)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetTimelineInput {
  /**
   * Número máximo de resultados a retornar
   * @public
   */
  limit?: number;

  /**
   * Token de paginación
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetTimelineOutput {
  chirps: (Chirp)[] | undefined;
  /**
   * Token opaco de paginación (cursor)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetUserChirpsInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  userId: string | undefined;

  /**
   * Número máximo de resultados a retornar
   * @public
   */
  limit?: number;

  /**
   * Token de paginación (LastEvaluatedKey de DynamoDB codificado en base64)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetUserChirpsOutput {
  chirps: (Chirp)[] | undefined;
  /**
   * Token para obtener la siguiente página (null si no hay más resultados)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetUserLikesInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  userId: string | undefined;

  /**
   * Número de elementos por página (1-100)
   * @public
   */
  limit?: number;

  /**
   * Token opaco de paginación (cursor)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetUserLikesOutput {
  likes: (LikeRecord)[] | undefined;
  /**
   * Token opaco de paginación (cursor)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface HideChirpInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  chirpId: string | undefined;
}

/**
 * @public
 */
export interface HideChirpOutput {
  message: string | undefined;
  /**
   * ============================================================================
   * ESTRUCTURAS DE DATOS
   * ============================================================================
   * Estructura principal de un Chirp
   * @public
   */
  chirp: Chirp | undefined;
}

/**
 * @public
 */
export interface LikeChirpInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  chirpId: string | undefined;
}

/**
 * @public
 */
export interface LikeChirpOutput {
  message: string | undefined;
  /**
   * ============================================================================
   * ESTRUCTURAS DE DATOS
   * ============================================================================
   * Estructura principal de un Chirp
   * @public
   */
  chirp: Chirp | undefined;
}

/**
 * @public
 */
export interface UnlikeChirpInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  chirpId: string | undefined;
}

/**
 * @public
 */
export interface UnlikeChirpOutput {
  message: string | undefined;
  /**
   * ============================================================================
   * ESTRUCTURAS DE DATOS
   * ============================================================================
   * Estructura principal de un Chirp
   * @public
   */
  chirp: Chirp | undefined;
}

/**
 * @public
 */
export interface CreateCommentInput {
  /**
   * ID del chirp al que se comenta (FK → chirp-chirps)
   * @public
   */
  chirpId: string | undefined;

  /**
   * Contenido de un comentario (1-280 caracteres)
   * @public
   */
  content: string | undefined;
}

/**
 * ============================================================================
 * ESTRUCTURA: Comment
 * ============================================================================
 * Representa un comentario en chirp-comments
 * PK: commentId | GSI: chirpId-createdAt-index, userId-createdAt-index
 * @public
 */
export interface Comment {
  /**
   * Identificador único del comentario (PK de chirp-comments)
   * @public
   */
  commentId: string | undefined;

  /**
   * Chirp al que pertenece el comentario (FK → chirp-chirps)
   * @public
   */
  chirpId: string | undefined;

  /**
   * Usuario que comentó (FK → chirp-users)
   * @public
   */
  userId: string | undefined;

  /**
   * Username desnormalizado para performance
   * @public
   */
  username: string | undefined;

  /**
   * Contenido del comentario (1-280 caracteres)
   * @public
   */
  content: string | undefined;

  /**
   * Fecha de creación (Sort Key del GSI chirpId-createdAt-index)
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Contador de likes del comentario
   * @public
   */
  likesCount: number | undefined;
}

/**
 * @public
 */
export interface CreateCommentOutput {
  /**
   * ============================================================================
   * ESTRUCTURA: Comment
   * ============================================================================
   * Representa un comentario en chirp-comments
   * PK: commentId | GSI: chirpId-createdAt-index, userId-createdAt-index
   * @public
   */
  comment: Comment | undefined;
}

/**
 * @public
 */
export interface DeleteCommentInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  chirpId: string | undefined;

  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  commentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCommentOutput {
  message: string | undefined;
}

/**
 * @public
 */
export interface GetChirpCommentsInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  chirpId: string | undefined;

  /**
   * Número de elementos por página (1-100)
   * @public
   */
  limit?: number;

  /**
   * Token de paginación (LastEvaluatedKey de DynamoDB codificado en base64)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetChirpCommentsOutput {
  comments: (Comment)[] | undefined;
  /**
   * Token opaco de paginación (cursor)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface FollowUserInput {
  /**
   * ID del usuario a seguir (followedId en chirp-follows)
   * @public
   */
  userId: string | undefined;
}

/**
 * ============================================================================
 * ESTRUCTURA: Follow
 * ============================================================================
 * Representa una relación de seguimiento en chirp-follows
 * PK: followerId, SK: followedId
 * @public
 */
export interface Follow {
  /**
   * ID del usuario que sigue (PK de chirp-follows)
   * @public
   */
  followerId: string | undefined;

  /**
   * ID del usuario seguido (SK de chirp-follows)
   * @public
   */
  followedId: string | undefined;

  /**
   * Username del usuario seguido (desnormalizado para performance)
   * @public
   */
  followedUsername: string | undefined;

  /**
   * Username del seguidor (desnormalizado para performance)
   * @public
   */
  followerUsername: string | undefined;

  /**
   * Fecha en que se inició el seguimiento
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface FollowUserOutput {
  message: string | undefined;
  /**
   * ============================================================================
   * ESTRUCTURA: Follow
   * ============================================================================
   * Representa una relación de seguimiento en chirp-follows
   * PK: followerId, SK: followedId
   * @public
   */
  follow: Follow | undefined;
}

/**
 * @public
 */
export interface GetFollowersInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  userId: string | undefined;

  /**
   * Número de elementos por página (1-100)
   * @public
   */
  limit?: number;

  /**
   * Token opaco de paginación (cursor)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetFollowersOutput {
  followers: (Follow)[] | undefined;
  /**
   * Token opaco de paginación (cursor)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetFollowingInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  userId: string | undefined;

  /**
   * Número de elementos por página (1-100)
   * @public
   */
  limit?: number;

  /**
   * Token opaco de paginación (cursor)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetFollowingOutput {
  following: (Follow)[] | undefined;
  /**
   * Token opaco de paginación (cursor)
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UnfollowUserInput {
  /**
   * ID del usuario a dejar de seguir (followedId en chirp-follows)
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface UnfollowUserOutput {
  message: string | undefined;
}

/**
 * @public
 */
export interface GetUserInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  userId: string | undefined;
}

/**
 * ============================================================================
 * ESTRUCTURA PRINCIPAL: USER
 * ============================================================================
 * Representa un usuario de la plataforma (corresponde a chirp-users en DynamoDB)
 * @public
 */
export interface User {
  /**
   * Identificador único del usuario (PK de chirp-users)
   * @public
   */
  userId: string | undefined;

  /**
   * Nombre de usuario único (@handle)
   * @public
   */
  username: string | undefined;

  /**
   * Email del usuario
   * @public
   */
  email: string | undefined;

  /**
   * Nombre de visualización en el perfil
   * @public
   */
  displayName: string | undefined;

  /**
   * Biografía del perfil
   * @public
   */
  bio?: string;

  /**
   * URL de la foto de perfil
   * @public
   */
  avatarUrl?: string;

  /**
   * Fecha de creación de la cuenta
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Cuenta verificada (badge azul)
   * @public
   */
  verified: boolean | undefined;

  /**
   * Número de seguidores
   * @public
   */
  followersCount: number | undefined;

  /**
   * Número de usuarios seguidos
   * @public
   */
  followingCount: number | undefined;
}

/**
 * @public
 */
export interface GetUserOutput {
  /**
   * ============================================================================
   * ESTRUCTURA PRINCIPAL: USER
   * ============================================================================
   * Representa un usuario de la plataforma (corresponde a chirp-users en DynamoDB)
   * @public
   */
  user: User | undefined;
}

/**
 * @public
 */
export interface GetUserByUsernameInput {
  /**
   * Username (3-30 caracteres alfanuméricos, guiones y underscore)
   * @public
   */
  username: string | undefined;
}

/**
 * @public
 */
export interface GetUserByUsernameOutput {
  /**
   * ============================================================================
   * ESTRUCTURA PRINCIPAL: USER
   * ============================================================================
   * Representa un usuario de la plataforma (corresponde a chirp-users en DynamoDB)
   * @public
   */
  user: User | undefined;
}

/**
 * @public
 */
export interface UpdateUserProfileInput {
  /**
   * UUID (formato: 550e8400-e29b-41d4-a716-446655440000)
   * @public
   */
  userId: string | undefined;

  /**
   * Nombre de visualización (opcional — solo se actualiza si se envía)
   * @public
   */
  displayName?: string;

  /**
   * Biografía del perfil (opcional)
   * @public
   */
  bio?: string;

  /**
   * URL de la foto de perfil (opcional)
   * @public
   */
  avatarUrl?: string;
}

/**
 * @public
 */
export interface UpdateUserProfileOutput {
  /**
   * ============================================================================
   * ESTRUCTURA PRINCIPAL: USER
   * ============================================================================
   * Representa un usuario de la plataforma (corresponde a chirp-users en DynamoDB)
   * @public
   */
  user: User | undefined;
}
