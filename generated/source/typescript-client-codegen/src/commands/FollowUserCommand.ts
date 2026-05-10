// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  FollowUserInput,
  FollowUserOutput,
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
 * The input for {@link FollowUserCommand}.
 */
export interface FollowUserCommandInput extends FollowUserInput {}
/**
 * @public
 *
 * The output of {@link FollowUserCommand}.
 */
export interface FollowUserCommandOutput extends FollowUserOutput, __MetadataBearer {}

/**
 * ============================================================================
 * SEGUIR A UN USUARIO
 * ============================================================================
 * Crea una relación de seguimiento en chirp-follows (followerId + followedId)
 * También incrementa followingCount del seguidor y followersCount del seguido
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, FollowUserCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, FollowUserCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // FollowUserInput
 *   userId: "STRING_VALUE", // required
 * };
 * const command = new FollowUserCommand(input);
 * const response = await client.send(command);
 * // { // FollowUserOutput
 * //   message: "STRING_VALUE", // required
 * //   follow: { // Follow
 * //     followerId: "STRING_VALUE", // required
 * //     followedId: "STRING_VALUE", // required
 * //     followedUsername: "STRING_VALUE", // required
 * //     followerUsername: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param FollowUserCommandInput - {@link FollowUserCommandInput}
 * @returns {@link FollowUserCommandOutput}
 * @see {@link FollowUserCommandInput} for command's `input` shape.
 * @see {@link FollowUserCommandOutput} for command's `response` shape.
 * @see {@link ChirpServiceClientResolvedConfig | config} for ChirpServiceClient's `config` shape.
 *
 * @throws {@link NotFoundError} (client fault)
 *  Error cuando el recurso no se encuentra
 *
 * @throws {@link ConflictError} (client fault)
 *  Error de conflicto (recurso ya existe)
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
export class FollowUserCommand extends $Command.classBuilder<FollowUserCommandInput, FollowUserCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "FollowUser", {

  })
  .n("ChirpServiceClient", "FollowUserCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
