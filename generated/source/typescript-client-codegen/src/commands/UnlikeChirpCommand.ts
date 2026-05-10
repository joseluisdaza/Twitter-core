// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  UnlikeChirpInput,
  UnlikeChirpOutput,
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
 * The input for {@link UnlikeChirpCommand}.
 */
export interface UnlikeChirpCommandInput extends UnlikeChirpInput {}
/**
 * @public
 *
 * The output of {@link UnlikeChirpCommand}.
 */
export interface UnlikeChirpCommandOutput extends UnlikeChirpOutput, __MetadataBearer {}

/**
 * ============================================================================
 * QUITAR LIKE
 * ============================================================================
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, UnlikeChirpCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, UnlikeChirpCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // UnlikeChirpInput
 *   chirpId: "STRING_VALUE", // required
 * };
 * const command = new UnlikeChirpCommand(input);
 * const response = await client.send(command);
 * // { // UnlikeChirpOutput
 * //   message: "STRING_VALUE", // required
 * //   chirp: { // Chirp
 * //     chirpId: "STRING_VALUE", // required
 * //     userId: "STRING_VALUE", // required
 * //     username: "STRING_VALUE", // required
 * //     content: "STRING_VALUE", // required
 * //     mediaUrls: [ // MediaUrlList
 * //       "STRING_VALUE",
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     likesCount: Number("int"), // required
 * //     commentsCount: Number("int"), // required
 * //     repostsCount: Number("int"), // required
 * //     hidden: true || false, // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UnlikeChirpCommandInput - {@link UnlikeChirpCommandInput}
 * @returns {@link UnlikeChirpCommandOutput}
 * @see {@link UnlikeChirpCommandInput} for command's `input` shape.
 * @see {@link UnlikeChirpCommandOutput} for command's `response` shape.
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
export class UnlikeChirpCommand extends $Command.classBuilder<UnlikeChirpCommandInput, UnlikeChirpCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "UnlikeChirp", {

  })
  .n("ChirpServiceClient", "UnlikeChirpCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
