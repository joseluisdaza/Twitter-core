// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  UnfollowUserInput,
  UnfollowUserOutput,
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
 * The input for {@link UnfollowUserCommand}.
 */
export interface UnfollowUserCommandInput extends UnfollowUserInput {}
/**
 * @public
 *
 * The output of {@link UnfollowUserCommand}.
 */
export interface UnfollowUserCommandOutput extends UnfollowUserOutput, __MetadataBearer {}

/**
 * ============================================================================
 * DEJAR DE SEGUIR A UN USUARIO
 * ============================================================================
 * Elimina la relación de seguimiento de chirp-follows
 * También decrementa followingCount del seguidor y followersCount del seguido
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, UnfollowUserCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, UnfollowUserCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // UnfollowUserInput
 *   userId: "STRING_VALUE", // required
 * };
 * const command = new UnfollowUserCommand(input);
 * const response = await client.send(command);
 * // { // UnfollowUserOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UnfollowUserCommandInput - {@link UnfollowUserCommandInput}
 * @returns {@link UnfollowUserCommandOutput}
 * @see {@link UnfollowUserCommandInput} for command's `input` shape.
 * @see {@link UnfollowUserCommandOutput} for command's `response` shape.
 * @see {@link ChirpServiceClientResolvedConfig | config} for ChirpServiceClient's `config` shape.
 *
 * @throws {@link NotFoundError} (client fault)
 *  Error cuando el recurso no se encuentra
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
export class UnfollowUserCommand extends $Command.classBuilder<UnfollowUserCommandInput, UnfollowUserCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "UnfollowUser", {

  })
  .n("ChirpServiceClient", "UnfollowUserCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
