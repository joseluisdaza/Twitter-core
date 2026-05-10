// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  GetFollowersInput,
  GetFollowersOutput,
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
 * The input for {@link GetFollowersCommand}.
 */
export interface GetFollowersCommandInput extends GetFollowersInput {}
/**
 * @public
 *
 * The output of {@link GetFollowersCommand}.
 */
export interface GetFollowersCommandOutput extends GetFollowersOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OBTENER SEGUIDORES DE UN USUARIO
 * ============================================================================
 * Lista los seguidores de un usuario usando el GSI followedId-followerId-index
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, GetFollowersCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, GetFollowersCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // GetFollowersInput
 *   userId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetFollowersCommand(input);
 * const response = await client.send(command);
 * // { // GetFollowersOutput
 * //   followers: [ // FollowList // required
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
 * @param GetFollowersCommandInput - {@link GetFollowersCommandInput}
 * @returns {@link GetFollowersCommandOutput}
 * @see {@link GetFollowersCommandInput} for command's `input` shape.
 * @see {@link GetFollowersCommandOutput} for command's `response` shape.
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
export class GetFollowersCommand extends $Command.classBuilder<GetFollowersCommandInput, GetFollowersCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "GetFollowers", {

  })
  .n("ChirpServiceClient", "GetFollowersCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
