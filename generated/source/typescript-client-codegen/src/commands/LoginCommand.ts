// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  LoginInput,
  LoginOutput,
} from "../models/models_0";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link LoginCommand}.
 */
export interface LoginCommandInput extends LoginInput {}
/**
 * @public
 *
 * The output of {@link LoginCommand}.
 */
export interface LoginCommandOutput extends LoginOutput, __MetadataBearer {}

/**
 * ============================================================================
 * LOGIN
 * ============================================================================
 * Operación de login
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, LoginCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, LoginCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // LoginInput
 *   email: "STRING_VALUE", // required
 *   password: "STRING_VALUE", // required
 * };
 * const command = new LoginCommand(input);
 * const response = await client.send(command);
 * // { // LoginOutput
 * //   accessToken: "STRING_VALUE", // required
 * //   idToken: "STRING_VALUE", // required
 * //   refreshToken: "STRING_VALUE", // required
 * //   expiresIn: Number("int"), // required
 * //   tokenType: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param LoginCommandInput - {@link LoginCommandInput}
 * @returns {@link LoginCommandOutput}
 * @see {@link LoginCommandInput} for command's `input` shape.
 * @see {@link LoginCommandOutput} for command's `response` shape.
 * @see {@link ChirpServiceClientResolvedConfig | config} for ChirpServiceClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Estructura base para errores de validación
 *
 * @throws {@link UnauthorizedError} (client fault)
 *  Error de autenticación (no autenticado)
 *
 * @throws {@link InternalServerError} (server fault)
 *  Error interno del servidor
 *
 * @throws {@link ChirpServiceServiceException}
 * <p>Base exception class for all service exceptions from ChirpService service.</p>
 *
 * @public
 */
export class LoginCommand extends $Command.classBuilder<LoginCommandInput, LoginCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "Login", {

  })
  .n("ChirpServiceClient", "LoginCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
