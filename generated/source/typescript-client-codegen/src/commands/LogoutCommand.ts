// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  LogoutInput,
  LogoutOutput,
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
 * The input for {@link LogoutCommand}.
 */
export interface LogoutCommandInput extends LogoutInput {}
/**
 * @public
 *
 * The output of {@link LogoutCommand}.
 */
export interface LogoutCommandOutput extends LogoutOutput, __MetadataBearer {}

/**
 * ============================================================================
 * LOGOUT
 * ============================================================================
 * Operación de logout
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, LogoutCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, LogoutCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = {};
 * const command = new LogoutCommand(input);
 * const response = await client.send(command);
 * // { // LogoutOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param LogoutCommandInput - {@link LogoutCommandInput}
 * @returns {@link LogoutCommandOutput}
 * @see {@link LogoutCommandInput} for command's `input` shape.
 * @see {@link LogoutCommandOutput} for command's `response` shape.
 * @see {@link ChirpServiceClientResolvedConfig | config} for ChirpServiceClient's `config` shape.
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
export class LogoutCommand extends $Command.classBuilder<LogoutCommandInput, LogoutCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "Logout", {

  })
  .n("ChirpServiceClient", "LogoutCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
