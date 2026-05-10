// smithy-typescript generated code
import {
  CreateCommentInput,
  CreateCommentOutput,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from "../../models/models_0";
import { ChirpServiceService } from "../ChirpServiceService";
import {
  ServerSerdeContext,
  ServiceException as __BaseException,
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

export type CreateComment<Context> = __Operation<CreateCommentServerInput, CreateCommentServerOutput, Context>

export interface CreateCommentServerInput extends CreateCommentInput {}
export namespace CreateCommentServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof CreateCommentInput.validate>[0]) => __ValidationFailure[] = CreateCommentInput.validate;
}
export interface CreateCommentServerOutput extends CreateCommentOutput {}

export type CreateCommentErrors = ValidationError | NotFoundError | UnauthorizedError | InternalServerError

export class CreateCommentSerializer implements __OperationSerializer<ChirpServiceService<any>, "CreateComment", CreateCommentErrors> {
  serialize = (async (...args: any[]) => { throw new Error("No supported protocol was found"); }) as any;
  deserialize = (async (...args: any[]) => { throw new Error("No supported protocol was found"); }) as any;

  isOperationError(error: any): error is CreateCommentErrors {
    const names: CreateCommentErrors['name'][] = ["ValidationError", "NotFoundError", "UnauthorizedError", "InternalServerError"];
    return names.includes(error.name);
  };

  serializeError(error: CreateCommentErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    switch (error.name) {
      case "ValidationError": {
        return (async (...args: any[]) => { throw new Error("No supported protocol was found"); })(error, ctx);
      }
      case "NotFoundError": {
        return (async (...args: any[]) => { throw new Error("No supported protocol was found"); })(error, ctx);
      }
      case "UnauthorizedError": {
        return (async (...args: any[]) => { throw new Error("No supported protocol was found"); })(error, ctx);
      }
      case "InternalServerError": {
        return (async (...args: any[]) => { throw new Error("No supported protocol was found"); })(error, ctx);
      }
      default: {
        throw error;
      }
    }
  }

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
export class CreateCommentHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<CreateCommentServerInput, CreateCommentServerOutput, Context>;
  private readonly mux: __Mux<"ChirpService", "CreateComment">;
  private readonly serializer: __OperationSerializer<ChirpServiceService<Context>, "CreateComment", CreateCommentErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"CreateComment">;
  /**
   * Construct a CreateComment handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for CreateComment
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for CreateComment that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<CreateCommentServerInput, CreateCommentServerOutput, Context>,
    mux: __Mux<"ChirpService", "CreateComment">,
    serializer: __OperationSerializer<ChirpServiceService<Context>, "CreateComment", CreateCommentErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"CreateComment">
  ) {
    this.operation = operation;
    this.mux = mux;
    this.serializer = serializer;
    this.serializeFrameworkException = serializeFrameworkException;
    this.validationCustomizer = validationCustomizer;
  }
  async handle(request: __HttpRequest, context: Context): Promise<__HttpResponse> {
    const target = this.mux.match(request);
    if (target === undefined) {
      console.log('Received a request that did not match com.chirp.api#ChirpService.CreateComment. This indicates a misconfiguration.');
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(request, context, "CreateComment", this.serializer, this.operation, this.serializeFrameworkException, CreateCommentServerInput.validate, this.validationCustomizer);
  }
}
