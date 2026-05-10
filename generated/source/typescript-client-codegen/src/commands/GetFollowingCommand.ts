// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  GetFollowingInput,
  GetFollowingOutput,
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
 * The input for {@link GetFollowingCommand}.
 */
export interface GetFollowingCommandInput extends GetFollowingInput {}
/**
 * @public
 *
 * The output of {@link GetFollowingCommand}.
 */
export interface GetFollowingCommandOutput extends GetFollowingOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OBTENER USUARIOS QUE SIGUE UN USUARIO
 * ============================================================================
 * Lista los usuarios que sigue un usuario (PK = followerId en chirp-follows)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, GetFollowingCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, GetFollowingCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // GetFollowingInput
 *   userId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetFollowingCommand(input);
 * const response = await client.send(command);
 * // { // GetFollowingOutput
 * //   following: [ // FollowList // required
 * //     { // Follow
 * //       followerId: "STRING_VALUE", // required
 * //       followedId: "STRING_VALUE", // required
 * //       followedUsername: "STRING_VALUE", // required
 * //       followerUsername: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFollowingCommandInput - {@link GetFollowingCommandInput}
 * @returns {@link GetFollowingCommandOutput}
 * @see {@link GetFollowingCommandInput} for command's `input` shape.
 * @see {@link GetFollowingCommandOutput} for command's `response` shape.
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
export class GetFollowingCommand extends $Command.classBuilder<GetFollowingCommandInput, GetFollowingCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "GetFollowing", {

  })
  .n("ChirpServiceClient", "GetFollowingCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
