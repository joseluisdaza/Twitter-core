// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  RegisterInput,
  RegisterOutput,
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
 * The input for {@link RegisterCommand}.
 */
export interface RegisterCommandInput extends RegisterInput {}
/**
 * @public
 *
 * The output of {@link RegisterCommand}.
 */
export interface RegisterCommandOutput extends RegisterOutput, __MetadataBearer {}

/**
 * ============================================================================
 * REGISTER
 * ============================================================================
 * Registrar un nuevo usuario (crea cuenta en Cognito + perfil en DynamoDB)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, RegisterCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, RegisterCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // RegisterInput
 *   email: "STRING_VALUE", // required
 *   password: "STRING_VALUE", // required
 *   username: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE", // required
 *   bio: "STRING_VALUE",
 * };
 * const command = new RegisterCommand(input);
 * const response = await client.send(command);
 * // { // RegisterOutput
 * //   userId: "STRING_VALUE", // required
 * //   username: "STRING_VALUE", // required
 * //   email: "STRING_VALUE", // required
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RegisterCommandInput - {@link RegisterCommandInput}
 * @returns {@link RegisterCommandOutput}
 * @see {@link RegisterCommandInput} for command's `input` shape.
 * @see {@link RegisterCommandOutput} for command's `response` shape.
 * @see {@link ChirpServiceClientResolvedConfig | config} for ChirpServiceClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Estructura base para errores de validación
 *
 * @throws {@link ConflictError} (client fault)
 *  Error de conflicto (recurso ya existe)
 *
 * @throws {@link InternalServerError} (server fault)
 *  Error interno del servidor
 *
 * @throws {@link ChirpServiceServiceException}
 * <p>Base exception class for all service exceptions from ChirpService service.</p>
 *
 * @public
 */
export class RegisterCommand extends $Command.classBuilder<RegisterCommandInput, RegisterCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "Register", {

  })
  .n("ChirpServiceClient", "RegisterCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
