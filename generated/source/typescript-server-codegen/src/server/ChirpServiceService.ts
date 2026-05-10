// smithy-typescript generated code
import {
  CreateChirp,
  CreateChirpServerInput,
} from "./operations/CreateChirp";
import {
  CreateComment,
  CreateCommentServerInput,
} from "./operations/CreateComment";
import {
  DeleteChirp,
  DeleteChirpServerInput,
} from "./operations/DeleteChirp";
import {
  DeleteComment,
  DeleteCommentServerInput,
} from "./operations/DeleteComment";
import {
  FollowUser,
  FollowUserServerInput,
} from "./operations/FollowUser";
import {
  GetChirp,
  GetChirpServerInput,
} from "./operations/GetChirp";
import {
  GetChirpComments,
  GetChirpCommentsServerInput,
} from "./operations/GetChirpComments";
import {
  GetChirpLikes,
  GetChirpLikesServerInput,
} from "./operations/GetChirpLikes";
import {
  GetFollowers,
  GetFollowersServerInput,
} from "./operations/GetFollowers";
import {
  GetFollowing,
  GetFollowingServerInput,
} from "./operations/GetFollowing";
import {
  GetTimeline,
  GetTimelineServerInput,
} from "./operations/GetTimeline";
import {
  GetUser,
  GetUserServerInput,
} from "./operations/GetUser";
import {
  GetUserByUsername,
  GetUserByUsernameServerInput,
} from "./operations/GetUserByUsername";
import {
  GetUserChirps,
  GetUserChirpsServerInput,
} from "./operations/GetUserChirps";
import {
  GetUserLikes,
  GetUserLikesServerInput,
} from "./operations/GetUserLikes";
import {
  HideChirp,
  HideChirpServerInput,
} from "./operations/HideChirp";
import {
  LikeChirp,
  LikeChirpServerInput,
} from "./operations/LikeChirp";
import {
  Login,
  LoginServerInput,
} from "./operations/Login";
import {
  Logout,
  LogoutServerInput,
} from "./operations/Logout";
import {
  Register,
  RegisterServerInput,
} from "./operations/Register";
import {
  UnfollowUser,
  UnfollowUserServerInput,
} from "./operations/UnfollowUser";
import {
  UnlikeChirp,
  UnlikeChirpServerInput,
} from "./operations/UnlikeChirp";
import {
  UpdateUserProfile,
  UpdateUserProfileServerInput,
} from "./operations/UpdateUserProfile";
import {
  InternalFailureException as __InternalFailureException,
  Mux as __Mux,
  Operation as __Operation,
  OperationInput as __OperationInput,
  OperationOutput as __OperationOutput,
  OperationSerializer as __OperationSerializer,
  SerializationException as __SerializationException,
  ServerSerdeContext as __ServerSerdeContext,
  ServiceException as __ServiceException,
  ServiceHandler as __ServiceHandler,
  SmithyFrameworkException as __SmithyFrameworkException,
  UnknownOperationException as __UnknownOperationException,
  ValidationCustomizer as __ValidationCustomizer,
  ValidationFailure as __ValidationFailure,
  isFrameworkException as __isFrameworkException,
} from "@aws-smithy/server-common";
import {
  NodeHttpHandler,
  streamCollector,
} from "@smithy/node-http-handler";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import {
  fromBase64,
  toBase64,
} from "@smithy/util-base64";
import {
  fromUtf8,
  toUtf8,
} from "@smithy/util-utf8";

export type ChirpServiceServiceOperations = "Login" | "Logout" | "Register" | "CreateChirp" | "DeleteChirp" | "GetChirp" | "GetChirpLikes" | "GetTimeline" | "GetUserChirps" | "GetUserLikes" | "HideChirp" | "LikeChirp" | "UnlikeChirp" | "CreateComment" | "DeleteComment" | "GetChirpComments" | "FollowUser" | "GetFollowers" | "GetFollowing" | "UnfollowUser" | "GetUser" | "GetUserByUsername" | "UpdateUserProfile";
export interface ChirpServiceService<Context> {
  Login: Login<Context>
  Logout: Logout<Context>
  Register: Register<Context>
  CreateChirp: CreateChirp<Context>
  DeleteChirp: DeleteChirp<Context>
  GetChirp: GetChirp<Context>
  GetChirpLikes: GetChirpLikes<Context>
  GetTimeline: GetTimeline<Context>
  GetUserChirps: GetUserChirps<Context>
  GetUserLikes: GetUserLikes<Context>
  HideChirp: HideChirp<Context>
  LikeChirp: LikeChirp<Context>
  UnlikeChirp: UnlikeChirp<Context>
  CreateComment: CreateComment<Context>
  DeleteComment: DeleteComment<Context>
  GetChirpComments: GetChirpComments<Context>
  FollowUser: FollowUser<Context>
  GetFollowers: GetFollowers<Context>
  GetFollowing: GetFollowing<Context>
  UnfollowUser: UnfollowUser<Context>
  GetUser: GetUser<Context>
  GetUserByUsername: GetUserByUsername<Context>
  UpdateUserProfile: UpdateUserProfile<Context>
}
const serdeContextBase = {
  base64Encoder: toBase64,
  base64Decoder: fromBase64,
  utf8Encoder: toUtf8,
  utf8Decoder: fromUtf8,
  streamCollector: streamCollector,
  requestHandler: new NodeHttpHandler(),
  disableHostPrefix: true
};
async function handle<S, O extends keyof S & string, Context>(
  request: __HttpRequest,
  context: Context,
  operationName: O,
  serializer: __OperationSerializer<S, O, __ServiceException>,
  operation: __Operation<__OperationInput<S[O]>, __OperationOutput<S[O]>, Context>,
  serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
  validationFn: (input: __OperationInput<S[O]>) => __ValidationFailure[],
  validationCustomizer: __ValidationCustomizer<O>
): Promise<__HttpResponse> {
  let input;
  try {
    input = await serializer.deserialize(request, {
      endpoint: () => Promise.resolve(request), ...serdeContextBase
    });
  } catch (error: unknown) {
    if (__isFrameworkException(error)) {
      return serializeFrameworkException(error, serdeContextBase);
    };
    return serializeFrameworkException(new __SerializationException(), serdeContextBase);
  }
  try {
    let validationFailures = validationFn(input);
    if (validationFailures && validationFailures.length > 0) {
      let validationException = validationCustomizer({ operation: operationName }, validationFailures);
      if (validationException) {
        return serializer.serializeError(validationException, serdeContextBase);
      }
    }
    let output = await operation(input, context);
    return serializer.serialize(output, serdeContextBase);
  } catch(error: unknown) {
    if (serializer.isOperationError(error)) {
      return serializer.serializeError(error, serdeContextBase);
    }
    console.log('Received an unexpected error', error);
    return serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
  }
}
export class ChirpServiceServiceHandler<Context> implements __ServiceHandler<Context> {
  private readonly service: ChirpServiceService<Context>;
  private readonly mux: __Mux<"ChirpService", ChirpServiceServiceOperations>;
  private readonly serializerFactory: <T extends ChirpServiceServiceOperations>(operation: T) => __OperationSerializer<ChirpServiceService<Context>, T, __ServiceException>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<ChirpServiceServiceOperations>;
  /**
   * Construct a ChirpServiceService handler.
   * @param service The {@link ChirpServiceService} implementation that supplies the business logic for ChirpServiceService
   * @param mux The {@link __Mux} that determines which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializerFactory A factory for an {@link __OperationSerializer} for each operation in ChirpServiceService that
   *                          handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    service: ChirpServiceService<Context>,
    mux: __Mux<"ChirpService", ChirpServiceServiceOperations>,
    serializerFactory:<T extends ChirpServiceServiceOperations>(op: T) => __OperationSerializer<ChirpServiceService<Context>, T, __ServiceException>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<ChirpServiceServiceOperations>
  ) {
    this.service = service;
    this.mux = mux;
    this.serializerFactory = serializerFactory;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const target = this.mux.match(request);
    if (target === undefined) {
      return this.serializeFrameworkException(new __UnknownOperationException(), serdeContextBase);
    }
    switch (target.operation) {
      case "Login" : {
        return handle(request, context, "Login", this.serializerFactory("Login"), this.service.Login, this.serializeFrameworkException, LoginServerInput.validate, this.validationCustomizer);
      }
      case "Logout" : {
        return handle(request, context, "Logout", this.serializerFactory("Logout"), this.service.Logout, this.serializeFrameworkException, LogoutServerInput.validate, this.validationCustomizer);
      }
      case "Register" : {
        return handle(request, context, "Register", this.serializerFactory("Register"), this.service.Register, this.serializeFrameworkException, RegisterServerInput.validate, this.validationCustomizer);
      }
      case "CreateChirp" : {
        return handle(request, context, "CreateChirp", this.serializerFactory("CreateChirp"), this.service.CreateChirp, this.serializeFrameworkException, CreateChirpServerInput.validate, this.validationCustomizer);
      }
      case "DeleteChirp" : {
        return handle(request, context, "DeleteChirp", this.serializerFactory("DeleteChirp"), this.service.DeleteChirp, this.serializeFrameworkException, DeleteChirpServerInput.validate, this.validationCustomizer);
      }
      case "GetChirp" : {
        return handle(request, context, "GetChirp", this.serializerFactory("GetChirp"), this.service.GetChirp, this.serializeFrameworkException, GetChirpServerInput.validate, this.validationCustomizer);
      }
      case "GetChirpLikes" : {
        return handle(request, context, "GetChirpLikes", this.serializerFactory("GetChirpLikes"), this.service.GetChirpLikes, this.serializeFrameworkException, GetChirpLikesServerInput.validate, this.validationCustomizer);
      }
      case "GetTimeline" : {
        return handle(request, context, "GetTimeline", this.serializerFactory("GetTimeline"), this.service.GetTimeline, this.serializeFrameworkException, GetTimelineServerInput.validate, this.validationCustomizer);
      }
      case "GetUserChirps" : {
        return handle(request, context, "GetUserChirps", this.serializerFactory("GetUserChirps"), this.service.GetUserChirps, this.serializeFrameworkException, GetUserChirpsServerInput.validate, this.validationCustomizer);
      }
      case "GetUserLikes" : {
        return handle(request, context, "GetUserLikes", this.serializerFactory("GetUserLikes"), this.service.GetUserLikes, this.serializeFrameworkException, GetUserLikesServerInput.validate, this.validationCustomizer);
      }
      case "HideChirp" : {
        return handle(request, context, "HideChirp", this.serializerFactory("HideChirp"), this.service.HideChirp, this.serializeFrameworkException, HideChirpServerInput.validate, this.validationCustomizer);
      }
      case "LikeChirp" : {
        return handle(request, context, "LikeChirp", this.serializerFactory("LikeChirp"), this.service.LikeChirp, this.serializeFrameworkException, LikeChirpServerInput.validate, this.validationCustomizer);
      }
      case "UnlikeChirp" : {
        return handle(request, context, "UnlikeChirp", this.serializerFactory("UnlikeChirp"), this.service.UnlikeChirp, this.serializeFrameworkException, UnlikeChirpServerInput.validate, this.validationCustomizer);
      }
      case "CreateComment" : {
        return handle(request, context, "CreateComment", this.serializerFactory("CreateComment"), this.service.CreateComment, this.serializeFrameworkException, CreateCommentServerInput.validate, this.validationCustomizer);
      }
      case "DeleteComment" : {
        return handle(request, context, "DeleteComment", this.serializerFactory("DeleteComment"), this.service.DeleteComment, this.serializeFrameworkException, DeleteCommentServerInput.validate, this.validationCustomizer);
      }
      case "GetChirpComments" : {
        return handle(request, context, "GetChirpComments", this.serializerFactory("GetChirpComments"), this.service.GetChirpComments, this.serializeFrameworkException, GetChirpCommentsServerInput.validate, this.validationCustomizer);
      }
      case "FollowUser" : {
        return handle(request, context, "FollowUser", this.serializerFactory("FollowUser"), this.service.FollowUser, this.serializeFrameworkException, FollowUserServerInput.validate, this.validationCustomizer);
      }
      case "GetFollowers" : {
        return handle(request, context, "GetFollowers", this.serializerFactory("GetFollowers"), this.service.GetFollowers, this.serializeFrameworkException, GetFollowersServerInput.validate, this.validationCustomizer);
      }
      case "GetFollowing" : {
        return handle(request, context, "GetFollowing", this.serializerFactory("GetFollowing"), this.service.GetFollowing, this.serializeFrameworkException, GetFollowingServerInput.validate, this.validationCustomizer);
      }
      case "UnfollowUser" : {
        return handle(request, context, "UnfollowUser", this.serializerFactory("UnfollowUser"), this.service.UnfollowUser, this.serializeFrameworkException, UnfollowUserServerInput.validate, this.validationCustomizer);
      }
      case "GetUser" : {
        return handle(request, context, "GetUser", this.serializerFactory("GetUser"), this.service.GetUser, this.serializeFrameworkException, GetUserServerInput.validate, this.validationCustomizer);
      }
      case "GetUserByUsername" : {
        return handle(request, context, "GetUserByUsername", this.serializerFactory("GetUserByUsername"), this.service.GetUserByUsername, this.serializeFrameworkException, GetUserByUsernameServerInput.validate, this.validationCustomizer);
      }
      case "UpdateUserProfile" : {
        return handle(request, context, "UpdateUserProfile", this.serializerFactory("UpdateUserProfile"), this.service.UpdateUserProfile, this.serializeFrameworkException, UpdateUserProfileServerInput.validate, this.validationCustomizer);
      }
    }
  }
}
