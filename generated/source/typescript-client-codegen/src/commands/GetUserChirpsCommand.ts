// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  GetUserChirpsInput,
  GetUserChirpsOutput,
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
 * The input for {@link GetUserChirpsCommand}.
 */
export interface GetUserChirpsCommandInput extends GetUserChirpsInput {}
/**
 * @public
 *
 * The output of {@link GetUserChirpsCommand}.
 */
export interface GetUserChirpsCommandOutput extends GetUserChirpsOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OBTENER CHIRPS DE UN USUARIO
 * ============================================================================
 * Lista los chirps de un usuario usando el GSI userId-createdAt-index de chirp-chirps
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, GetUserChirpsCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, GetUserChirpsCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // GetUserChirpsInput
 *   userId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetUserChirpsCommand(input);
 * const response = await client.send(command);
 * // { // GetUserChirpsOutput
 * //   chirps: [ // ChirpList // required
 * //     { // Chirp
 * //       chirpId: "STRING_VALUE", // required
 * //       userId: "STRING_VALUE", // required
 * //       username: "STRING_VALUE", // required
 * //       content: "STRING_VALUE", // required
 * //       mediaUrls: [ // MediaUrlList
 * //         "STRING_VALUE",
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       likesCount: Number("int"), // required
 * //       commentsCount: Number("int"), // required
 * //       repostsCount: Number("int"), // required
 * //       hidden: true || false, // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUserChirpsCommandInput - {@link GetUserChirpsCommandInput}
 * @returns {@link GetUserChirpsCommandOutput}
 * @see {@link GetUserChirpsCommandInput} for command's `input` shape.
 * @see {@link GetUserChirpsCommandOutput} for command's `response` shape.
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
export class GetUserChirpsCommand extends $Command.classBuilder<GetUserChirpsCommandInput, GetUserChirpsCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "GetUserChirps", {

  })
  .n("ChirpServiceClient", "GetUserChirpsCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
