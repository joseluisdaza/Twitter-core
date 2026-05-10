// smithy-typescript generated code
import {
  InternalServerError,
  LoginInput,
  LoginOutput,
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

export type Login<Context> = __Operation<LoginServerInput, LoginServerOutput, Context>

export interface LoginServerInput extends LoginInput {}
export namespace LoginServerInput {
  /**
   * @internal
   */
  export const validate: (obj: Parameters<typeof LoginInput.validate>[0]) => __ValidationFailure[] = LoginInput.validate;
}
export interface LoginServerOutput extends LoginOutput {}

export type LoginErrors = ValidationError | UnauthorizedError | InternalServerError

export class LoginSerializer implements __OperationSerializer<ChirpServiceService<any>, "Login", LoginErrors> {
  serialize = (async (...args: any[]) => { throw new Error("No supported protocol was found"); }) as any;
  deserialize = (async (...args: any[]) => { throw new Error("No supported protocol was found"); }) as any;

  isOperationError(error: any): error is LoginErrors {
    const names: LoginErrors['name'][] = ["ValidationError", "UnauthorizedError", "InternalServerError"];
    return names.includes(error.name);
  };

  serializeError(error: LoginErrors, ctx: ServerSerdeContext): Promise<__HttpResponse> {
    switch (error.name) {
      case "ValidationError": {
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
export class LoginHandler<Context> implements __ServiceHandler<Context> {
  private readonly operation: __Operation<LoginServerInput, LoginServerOutput, Context>;
  private readonly mux: __Mux<"ChirpService", "Login">;
  private readonly serializer: __OperationSerializer<ChirpServiceService<Context>, "Login", LoginErrors>;
  private readonly serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>;
  private readonly validationCustomizer: __ValidationCustomizer<"Login">;
  /**
   * Construct a Login handler.
   * @param operation The {@link __Operation} implementation that supplies the business logic for Login
   * @param mux The {@link __Mux} that verifies which service and operation are being invoked by a given {@link __HttpRequest}
   * @param serializer An {@link __OperationSerializer} for Login that
   *                   handles deserialization of requests and serialization of responses
   * @param serializeFrameworkException A function that can serialize {@link __SmithyFrameworkException}s
   * @param validationCustomizer A {@link __ValidationCustomizer} for turning validation failures into {@link __SmithyFrameworkException}s
   */
  constructor(
    operation: __Operation<LoginServerInput, LoginServerOutput, Context>,
    mux: __Mux<"ChirpService", "Login">,
    serializer: __OperationSerializer<ChirpServiceService<Context>, "Login", LoginErrors>,
    serializeFrameworkException: (e: __SmithyFrameworkException, ctx: __ServerSerdeContext) => Promise<__HttpResponse>,
    validationCustomizer: __ValidationCustomizer<"Login">
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
      console.log('Received a request that did not match com.chirp.api#ChirpService.Login. This indicates a misconfiguration.');
      return this.serializeFrameworkException(new __InternalFailureException(), serdeContextBase);
    }
    return handle(request, context, "Login", this.serializer, this.operation, this.serializeFrameworkException, LoginServerInput.validate, this.validationCustomizer);
  }
}
