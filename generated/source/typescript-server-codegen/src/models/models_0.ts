// smithy-typescript generated code
import {
  ServiceException as __BaseException,
  CompositeCollectionValidator as __CompositeCollectionValidator,
  CompositeStructureValidator as __CompositeStructureValidator,
  CompositeValidator as __CompositeValidator,
  LengthValidator as __LengthValidator,
  MultiConstraintValidator as __MultiConstraintValidator,
  NoOpValidator as __NoOpValidator,
  PatternValidator as __PatternValidator,
  RangeValidator as __RangeValidator,
  RequiredValidator as __RequiredValidator,
  ValidationFailure as __ValidationFailure,
} from "@aws-smithy/server-common";
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

export namespace LoginInput {
  const memberValidators : {
    email?: __MultiConstraintValidator<string>,
    password?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: LoginInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "password": {
            memberValidators["password"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(8, 128),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("password").validate(obj.password, `${path}/password`),
    ];
  }
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

export namespace LoginOutput {
  const memberValidators : {
    accessToken?: __MultiConstraintValidator<string>,
    idToken?: __MultiConstraintValidator<string>,
    refreshToken?: __MultiConstraintValidator<string>,
    expiresIn?: __MultiConstraintValidator<number>,
    tokenType?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: LoginOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "accessToken": {
            memberValidators["accessToken"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "idToken": {
            memberValidators["idToken"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "refreshToken": {
            memberValidators["refreshToken"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "expiresIn": {
            memberValidators["expiresIn"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "tokenType": {
            memberValidators["tokenType"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("accessToken").validate(obj.accessToken, `${path}/accessToken`),
      ...getMemberValidator("idToken").validate(obj.idToken, `${path}/idToken`),
      ...getMemberValidator("refreshToken").validate(obj.refreshToken, `${path}/refreshToken`),
      ...getMemberValidator("expiresIn").validate(obj.expiresIn, `${path}/expiresIn`),
      ...getMemberValidator("tokenType").validate(obj.tokenType, `${path}/tokenType`),
    ];
  }
}

/**
 * Error interno del servidor
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
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

export namespace LogoutInput {
  const memberValidators : {
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: LogoutInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
        }
      }
      return memberValidators[member]!!;
    }
    return [
    ];
  }
}

/**
 * Output de logout
 * @public
 */
export interface LogoutOutput {
  message: string | undefined;
}

export namespace LogoutOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: LogoutOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
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

export namespace RegisterInput {
  const memberValidators : {
    email?: __MultiConstraintValidator<string>,
    password?: __MultiConstraintValidator<string>,
    username?: __MultiConstraintValidator<string>,
    displayName?: __MultiConstraintValidator<string>,
    bio?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RegisterInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "password": {
            memberValidators["password"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(8, 128),
            ]);
            break;
          }
          case "username": {
            memberValidators["username"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9_-]{3,30}$"),
            ]);
            break;
          }
          case "displayName": {
            memberValidators["displayName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(1, 100),
            ]);
            break;
          }
          case "bio": {
            memberValidators["bio"] = new __CompositeValidator<string>([
              new __LengthValidator(0, 160),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("password").validate(obj.password, `${path}/password`),
      ...getMemberValidator("username").validate(obj.username, `${path}/username`),
      ...getMemberValidator("displayName").validate(obj.displayName, `${path}/displayName`),
      ...getMemberValidator("bio").validate(obj.bio, `${path}/bio`),
    ];
  }
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

export namespace RegisterOutput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    username?: __MultiConstraintValidator<string>,
    email?: __MultiConstraintValidator<string>,
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: RegisterOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "username": {
            memberValidators["username"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9_-]{3,30}$"),
            ]);
            break;
          }
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("username").validate(obj.username, `${path}/username`),
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Error de conflicto (recurso ya existe)
 * @public
 */
export class ConflictError extends __BaseException {
  readonly name: "ConflictError" = "ConflictError";
  readonly $fault: "client" = "client";
  resourceType: string | undefined;
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

export namespace CreateChirpInput {
  const memberValidators : {
    content?: __MultiConstraintValidator<string>,
    mediaUrls?: __MultiConstraintValidator<Iterable<string>>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: CreateChirpInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "content": {
            memberValidators["content"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(1, 280),
            ]);
            break;
          }
          case "mediaUrls": {
            memberValidators["mediaUrls"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("content").validate(obj.content, `${path}/content`),
      ...getMemberValidator("mediaUrls").validate(obj.mediaUrls, `${path}/mediaUrls`),
    ];
  }
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

export namespace Chirp {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
    userId?: __MultiConstraintValidator<string>,
    username?: __MultiConstraintValidator<string>,
    content?: __MultiConstraintValidator<string>,
    mediaUrls?: __MultiConstraintValidator<Iterable<string>>,
    createdAt?: __MultiConstraintValidator<Date>,
    likesCount?: __MultiConstraintValidator<number>,
    commentsCount?: __MultiConstraintValidator<number>,
    repostsCount?: __MultiConstraintValidator<number>,
    hidden?: __MultiConstraintValidator<boolean>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: Chirp, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "username": {
            memberValidators["username"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9_-]{3,30}$"),
            ]);
            break;
          }
          case "content": {
            memberValidators["content"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(1, 280),
            ]);
            break;
          }
          case "mediaUrls": {
            memberValidators["mediaUrls"] = new __CompositeCollectionValidator<string>(
              new __NoOpValidator(),
              new __NoOpValidator()
            );
            break;
          }
          case "createdAt": {
            memberValidators["createdAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "likesCount": {
            memberValidators["likesCount"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "commentsCount": {
            memberValidators["commentsCount"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "repostsCount": {
            memberValidators["repostsCount"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "hidden": {
            memberValidators["hidden"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("username").validate(obj.username, `${path}/username`),
      ...getMemberValidator("content").validate(obj.content, `${path}/content`),
      ...getMemberValidator("mediaUrls").validate(obj.mediaUrls, `${path}/mediaUrls`),
      ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
      ...getMemberValidator("likesCount").validate(obj.likesCount, `${path}/likesCount`),
      ...getMemberValidator("commentsCount").validate(obj.commentsCount, `${path}/commentsCount`),
      ...getMemberValidator("repostsCount").validate(obj.repostsCount, `${path}/repostsCount`),
      ...getMemberValidator("hidden").validate(obj.hidden, `${path}/hidden`),
    ];
  }
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

export namespace CreateChirpOutput {
  const memberValidators : {
    chirp?: __MultiConstraintValidator<Chirp>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: CreateChirpOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirp": {
            memberValidators["chirp"] = new __CompositeStructureValidator<Chirp>(
              new __CompositeValidator<Chirp>([
                new __RequiredValidator(),
              ]),
              Chirp.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirp").validate(obj.chirp, `${path}/chirp`),
    ];
  }
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

export namespace DeleteChirpInput {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: DeleteChirpInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
    ];
  }
}

/**
 * @public
 */
export interface DeleteChirpOutput {
  message: string | undefined;
}

export namespace DeleteChirpOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: DeleteChirpOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
}

/**
 * Error de autorización (autenticado pero sin permisos)
 * @public
 */
export class ForbiddenError extends __BaseException {
  readonly name: "ForbiddenError" = "ForbiddenError";
  readonly $fault: "client" = "client";
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

export namespace GetChirpInput {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetChirpInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
    ];
  }
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

export namespace GetChirpOutput {
  const memberValidators : {
    chirp?: __MultiConstraintValidator<Chirp>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetChirpOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirp": {
            memberValidators["chirp"] = new __CompositeStructureValidator<Chirp>(
              new __CompositeValidator<Chirp>([
                new __RequiredValidator(),
              ]),
              Chirp.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirp").validate(obj.chirp, `${path}/chirp`),
    ];
  }
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

export namespace GetChirpLikesInput {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetChirpLikesInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace LikeRecord {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
    userId?: __MultiConstraintValidator<string>,
    username?: __MultiConstraintValidator<string>,
    createdAt?: __MultiConstraintValidator<Date>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: LikeRecord, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "username": {
            memberValidators["username"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9_-]{3,30}$"),
            ]);
            break;
          }
          case "createdAt": {
            memberValidators["createdAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("username").validate(obj.username, `${path}/username`),
      ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
    ];
  }
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

export namespace GetChirpLikesOutput {
  const memberValidators : {
    likes?: __MultiConstraintValidator<Iterable<LikeRecord>>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetChirpLikesOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "likes": {
            memberValidators["likes"] = new __CompositeCollectionValidator<LikeRecord>(
              new __CompositeValidator<(LikeRecord)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<LikeRecord>(
                new __NoOpValidator(),
                LikeRecord.validate
              )
            );
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("likes").validate(obj.likes, `${path}/likes`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace GetTimelineInput {
  const memberValidators : {
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetTimelineInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace GetTimelineOutput {
  const memberValidators : {
    chirps?: __MultiConstraintValidator<Iterable<Chirp>>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetTimelineOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirps": {
            memberValidators["chirps"] = new __CompositeCollectionValidator<Chirp>(
              new __CompositeValidator<(Chirp)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<Chirp>(
                new __NoOpValidator(),
                Chirp.validate
              )
            );
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirps").validate(obj.chirps, `${path}/chirps`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace GetUserChirpsInput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetUserChirpsInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace GetUserChirpsOutput {
  const memberValidators : {
    chirps?: __MultiConstraintValidator<Iterable<Chirp>>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetUserChirpsOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirps": {
            memberValidators["chirps"] = new __CompositeCollectionValidator<Chirp>(
              new __CompositeValidator<(Chirp)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<Chirp>(
                new __NoOpValidator(),
                Chirp.validate
              )
            );
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirps").validate(obj.chirps, `${path}/chirps`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace GetUserLikesInput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetUserLikesInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace GetUserLikesOutput {
  const memberValidators : {
    likes?: __MultiConstraintValidator<Iterable<LikeRecord>>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetUserLikesOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "likes": {
            memberValidators["likes"] = new __CompositeCollectionValidator<LikeRecord>(
              new __CompositeValidator<(LikeRecord)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<LikeRecord>(
                new __NoOpValidator(),
                LikeRecord.validate
              )
            );
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("likes").validate(obj.likes, `${path}/likes`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace HideChirpInput {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HideChirpInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
    ];
  }
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

export namespace HideChirpOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
    chirp?: __MultiConstraintValidator<Chirp>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: HideChirpOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "chirp": {
            memberValidators["chirp"] = new __CompositeStructureValidator<Chirp>(
              new __CompositeValidator<Chirp>([
                new __RequiredValidator(),
              ]),
              Chirp.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
      ...getMemberValidator("chirp").validate(obj.chirp, `${path}/chirp`),
    ];
  }
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

export namespace LikeChirpInput {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: LikeChirpInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
    ];
  }
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

export namespace LikeChirpOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
    chirp?: __MultiConstraintValidator<Chirp>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: LikeChirpOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "chirp": {
            memberValidators["chirp"] = new __CompositeStructureValidator<Chirp>(
              new __CompositeValidator<Chirp>([
                new __RequiredValidator(),
              ]),
              Chirp.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
      ...getMemberValidator("chirp").validate(obj.chirp, `${path}/chirp`),
    ];
  }
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

export namespace UnlikeChirpInput {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UnlikeChirpInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
    ];
  }
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

export namespace UnlikeChirpOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
    chirp?: __MultiConstraintValidator<Chirp>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UnlikeChirpOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "chirp": {
            memberValidators["chirp"] = new __CompositeStructureValidator<Chirp>(
              new __CompositeValidator<Chirp>([
                new __RequiredValidator(),
              ]),
              Chirp.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
      ...getMemberValidator("chirp").validate(obj.chirp, `${path}/chirp`),
    ];
  }
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

export namespace CreateCommentInput {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
    content?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: CreateCommentInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "content": {
            memberValidators["content"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(1, 280),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
      ...getMemberValidator("content").validate(obj.content, `${path}/content`),
    ];
  }
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

export namespace Comment {
  const memberValidators : {
    commentId?: __MultiConstraintValidator<string>,
    chirpId?: __MultiConstraintValidator<string>,
    userId?: __MultiConstraintValidator<string>,
    username?: __MultiConstraintValidator<string>,
    content?: __MultiConstraintValidator<string>,
    createdAt?: __MultiConstraintValidator<Date>,
    likesCount?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: Comment, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "commentId": {
            memberValidators["commentId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "username": {
            memberValidators["username"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9_-]{3,30}$"),
            ]);
            break;
          }
          case "content": {
            memberValidators["content"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(1, 280),
            ]);
            break;
          }
          case "createdAt": {
            memberValidators["createdAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "likesCount": {
            memberValidators["likesCount"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("commentId").validate(obj.commentId, `${path}/commentId`),
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("username").validate(obj.username, `${path}/username`),
      ...getMemberValidator("content").validate(obj.content, `${path}/content`),
      ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
      ...getMemberValidator("likesCount").validate(obj.likesCount, `${path}/likesCount`),
    ];
  }
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

export namespace CreateCommentOutput {
  const memberValidators : {
    comment?: __MultiConstraintValidator<Comment>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: CreateCommentOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "comment": {
            memberValidators["comment"] = new __CompositeStructureValidator<Comment>(
              new __CompositeValidator<Comment>([
                new __RequiredValidator(),
              ]),
              Comment.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("comment").validate(obj.comment, `${path}/comment`),
    ];
  }
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

export namespace DeleteCommentInput {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
    commentId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: DeleteCommentInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "commentId": {
            memberValidators["commentId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
      ...getMemberValidator("commentId").validate(obj.commentId, `${path}/commentId`),
    ];
  }
}

/**
 * @public
 */
export interface DeleteCommentOutput {
  message: string | undefined;
}

export namespace DeleteCommentOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: DeleteCommentOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
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

export namespace GetChirpCommentsInput {
  const memberValidators : {
    chirpId?: __MultiConstraintValidator<string>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetChirpCommentsInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "chirpId": {
            memberValidators["chirpId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("chirpId").validate(obj.chirpId, `${path}/chirpId`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace GetChirpCommentsOutput {
  const memberValidators : {
    comments?: __MultiConstraintValidator<Iterable<Comment>>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetChirpCommentsOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "comments": {
            memberValidators["comments"] = new __CompositeCollectionValidator<Comment>(
              new __CompositeValidator<(Comment)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<Comment>(
                new __NoOpValidator(),
                Comment.validate
              )
            );
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("comments").validate(obj.comments, `${path}/comments`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace FollowUserInput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: FollowUserInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
    ];
  }
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

export namespace Follow {
  const memberValidators : {
    followerId?: __MultiConstraintValidator<string>,
    followedId?: __MultiConstraintValidator<string>,
    followedUsername?: __MultiConstraintValidator<string>,
    followerUsername?: __MultiConstraintValidator<string>,
    createdAt?: __MultiConstraintValidator<Date>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: Follow, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "followerId": {
            memberValidators["followerId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "followedId": {
            memberValidators["followedId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "followedUsername": {
            memberValidators["followedUsername"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9_-]{3,30}$"),
            ]);
            break;
          }
          case "followerUsername": {
            memberValidators["followerUsername"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9_-]{3,30}$"),
            ]);
            break;
          }
          case "createdAt": {
            memberValidators["createdAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("followerId").validate(obj.followerId, `${path}/followerId`),
      ...getMemberValidator("followedId").validate(obj.followedId, `${path}/followedId`),
      ...getMemberValidator("followedUsername").validate(obj.followedUsername, `${path}/followedUsername`),
      ...getMemberValidator("followerUsername").validate(obj.followerUsername, `${path}/followerUsername`),
      ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
    ];
  }
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

export namespace FollowUserOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
    follow?: __MultiConstraintValidator<Follow>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: FollowUserOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "follow": {
            memberValidators["follow"] = new __CompositeStructureValidator<Follow>(
              new __CompositeValidator<Follow>([
                new __RequiredValidator(),
              ]),
              Follow.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
      ...getMemberValidator("follow").validate(obj.follow, `${path}/follow`),
    ];
  }
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

export namespace GetFollowersInput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetFollowersInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace GetFollowersOutput {
  const memberValidators : {
    followers?: __MultiConstraintValidator<Iterable<Follow>>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetFollowersOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "followers": {
            memberValidators["followers"] = new __CompositeCollectionValidator<Follow>(
              new __CompositeValidator<(Follow)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<Follow>(
                new __NoOpValidator(),
                Follow.validate
              )
            );
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("followers").validate(obj.followers, `${path}/followers`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace GetFollowingInput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    limit?: __MultiConstraintValidator<number>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetFollowingInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "limit": {
            memberValidators["limit"] = new __CompositeValidator<number>([
              new __RangeValidator(1, 100),
            ]);
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("limit").validate(obj.limit, `${path}/limit`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace GetFollowingOutput {
  const memberValidators : {
    following?: __MultiConstraintValidator<Iterable<Follow>>,
    nextToken?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetFollowingOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "following": {
            memberValidators["following"] = new __CompositeCollectionValidator<Follow>(
              new __CompositeValidator<(Follow)[]>([
                new __RequiredValidator(),
              ]),
              new __CompositeStructureValidator<Follow>(
                new __NoOpValidator(),
                Follow.validate
              )
            );
            break;
          }
          case "nextToken": {
            memberValidators["nextToken"] = new __NoOpValidator();
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("following").validate(obj.following, `${path}/following`),
      ...getMemberValidator("nextToken").validate(obj.nextToken, `${path}/nextToken`),
    ];
  }
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

export namespace UnfollowUserInput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UnfollowUserInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
    ];
  }
}

/**
 * @public
 */
export interface UnfollowUserOutput {
  message: string | undefined;
}

export namespace UnfollowUserOutput {
  const memberValidators : {
    message?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UnfollowUserOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "message": {
            memberValidators["message"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("message").validate(obj.message, `${path}/message`),
    ];
  }
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

export namespace GetUserInput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetUserInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
    ];
  }
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

export namespace User {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    username?: __MultiConstraintValidator<string>,
    email?: __MultiConstraintValidator<string>,
    displayName?: __MultiConstraintValidator<string>,
    bio?: __MultiConstraintValidator<string>,
    avatarUrl?: __MultiConstraintValidator<string>,
    createdAt?: __MultiConstraintValidator<Date>,
    verified?: __MultiConstraintValidator<boolean>,
    followersCount?: __MultiConstraintValidator<number>,
    followingCount?: __MultiConstraintValidator<number>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: User, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "username": {
            memberValidators["username"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9_-]{3,30}$"),
            ]);
            break;
          }
          case "email": {
            memberValidators["email"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
            ]);
            break;
          }
          case "displayName": {
            memberValidators["displayName"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __LengthValidator(1, 100),
            ]);
            break;
          }
          case "bio": {
            memberValidators["bio"] = new __CompositeValidator<string>([
              new __LengthValidator(0, 160),
            ]);
            break;
          }
          case "avatarUrl": {
            memberValidators["avatarUrl"] = new __CompositeValidator<string>([
              new __PatternValidator("^https?://.+$"),
            ]);
            break;
          }
          case "createdAt": {
            memberValidators["createdAt"] = new __CompositeValidator<Date>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "verified": {
            memberValidators["verified"] = new __CompositeValidator<boolean>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "followersCount": {
            memberValidators["followersCount"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
            ]);
            break;
          }
          case "followingCount": {
            memberValidators["followingCount"] = new __CompositeValidator<number>([
              new __RequiredValidator(),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("username").validate(obj.username, `${path}/username`),
      ...getMemberValidator("email").validate(obj.email, `${path}/email`),
      ...getMemberValidator("displayName").validate(obj.displayName, `${path}/displayName`),
      ...getMemberValidator("bio").validate(obj.bio, `${path}/bio`),
      ...getMemberValidator("avatarUrl").validate(obj.avatarUrl, `${path}/avatarUrl`),
      ...getMemberValidator("createdAt").validate(obj.createdAt, `${path}/createdAt`),
      ...getMemberValidator("verified").validate(obj.verified, `${path}/verified`),
      ...getMemberValidator("followersCount").validate(obj.followersCount, `${path}/followersCount`),
      ...getMemberValidator("followingCount").validate(obj.followingCount, `${path}/followingCount`),
    ];
  }
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

export namespace GetUserOutput {
  const memberValidators : {
    user?: __MultiConstraintValidator<User>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetUserOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "user": {
            memberValidators["user"] = new __CompositeStructureValidator<User>(
              new __CompositeValidator<User>([
                new __RequiredValidator(),
              ]),
              User.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("user").validate(obj.user, `${path}/user`),
    ];
  }
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

export namespace GetUserByUsernameInput {
  const memberValidators : {
    username?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetUserByUsernameInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "username": {
            memberValidators["username"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[a-zA-Z0-9_-]{3,30}$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("username").validate(obj.username, `${path}/username`),
    ];
  }
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

export namespace GetUserByUsernameOutput {
  const memberValidators : {
    user?: __MultiConstraintValidator<User>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: GetUserByUsernameOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "user": {
            memberValidators["user"] = new __CompositeStructureValidator<User>(
              new __CompositeValidator<User>([
                new __RequiredValidator(),
              ]),
              User.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("user").validate(obj.user, `${path}/user`),
    ];
  }
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

export namespace UpdateUserProfileInput {
  const memberValidators : {
    userId?: __MultiConstraintValidator<string>,
    displayName?: __MultiConstraintValidator<string>,
    bio?: __MultiConstraintValidator<string>,
    avatarUrl?: __MultiConstraintValidator<string>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UpdateUserProfileInput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "userId": {
            memberValidators["userId"] = new __CompositeValidator<string>([
              new __RequiredValidator(),
              new __PatternValidator("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"),
            ]);
            break;
          }
          case "displayName": {
            memberValidators["displayName"] = new __CompositeValidator<string>([
              new __LengthValidator(1, 100),
            ]);
            break;
          }
          case "bio": {
            memberValidators["bio"] = new __CompositeValidator<string>([
              new __LengthValidator(0, 160),
            ]);
            break;
          }
          case "avatarUrl": {
            memberValidators["avatarUrl"] = new __CompositeValidator<string>([
              new __PatternValidator("^https?://.+$"),
            ]);
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("userId").validate(obj.userId, `${path}/userId`),
      ...getMemberValidator("displayName").validate(obj.displayName, `${path}/displayName`),
      ...getMemberValidator("bio").validate(obj.bio, `${path}/bio`),
      ...getMemberValidator("avatarUrl").validate(obj.avatarUrl, `${path}/avatarUrl`),
    ];
  }
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

export namespace UpdateUserProfileOutput {
  const memberValidators : {
    user?: __MultiConstraintValidator<User>,
  } = {};
  /**
   * @internal
   */
  export const validate = (obj: UpdateUserProfileOutput, path: string = ""): __ValidationFailure[] => {
    function getMemberValidator<T extends keyof typeof memberValidators>(member: T): NonNullable<typeof memberValidators[T]> {
      if (memberValidators[member] === undefined) {
        switch (member) {
          case "user": {
            memberValidators["user"] = new __CompositeStructureValidator<User>(
              new __CompositeValidator<User>([
                new __RequiredValidator(),
              ]),
              User.validate
            );
            break;
          }
        }
      }
      return memberValidators[member]!!;
    }
    return [
      ...getMemberValidator("user").validate(obj.user, `${path}/user`),
    ];
  }
}
