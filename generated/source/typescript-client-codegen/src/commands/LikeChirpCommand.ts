// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  LikeChirpInput,
  LikeChirpOutput,
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
 * The input for {@link LikeChirpCommand}.
 */
export interface LikeChirpCommandInput extends LikeChirpInput {}
/**
 * @public
 *
 * The output of {@link LikeChirpCommand}.
 */
export interface LikeChirpCommandOutput extends LikeChirpOutput, __MetadataBearer {}

/**
 * ============================================================================
 * DAR LIKE
 * ============================================================================
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, LikeChirpCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, LikeChirpCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // LikeChirpInput
 *   chirpId: "STRING_VALUE", // required
 * };
 * const command = new LikeChirpCommand(input);
 * const response = await client.send(command);
 * // { // LikeChirpOutput
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
 * @param LikeChirpCommandInput - {@link LikeChirpCommandInput}
 * @returns {@link LikeChirpCommandOutput}
 * @see {@link LikeChirpCommandInput} for command's `input` shape.
 * @see {@link LikeChirpCommandOutput} for command's `response` shape.
 * @see {@link ChirpServiceClientResolvedConfig | config} for ChirpServiceClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Estructura base para errores de validación
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
export class LikeChirpCommand extends $Command.classBuilder<LikeChirpCommandInput, LikeChirpCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "LikeChirp", {

  })
  .n("ChirpServiceClient", "LikeChirpCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
