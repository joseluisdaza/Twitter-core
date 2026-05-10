// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  HideChirpInput,
  HideChirpOutput,
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
 * The input for {@link HideChirpCommand}.
 */
export interface HideChirpCommandInput extends HideChirpInput {}
/**
 * @public
 *
 * The output of {@link HideChirpCommand}.
 */
export interface HideChirpCommandOutput extends HideChirpOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OCULTAR CHIRP
 * ============================================================================
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, HideChirpCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, HideChirpCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // HideChirpInput
 *   chirpId: "STRING_VALUE", // required
 * };
 * const command = new HideChirpCommand(input);
 * const response = await client.send(command);
 * // { // HideChirpOutput
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
 * @param HideChirpCommandInput - {@link HideChirpCommandInput}
 * @returns {@link HideChirpCommandOutput}
 * @see {@link HideChirpCommandInput} for command's `input` shape.
 * @see {@link HideChirpCommandOutput} for command's `response` shape.
 * @see {@link ChirpServiceClientResolvedConfig | config} for ChirpServiceClient's `config` shape.
 *
 * @throws {@link NotFoundError} (client fault)
 *  Error cuando el recurso no se encuentra
 *
 * @throws {@link UnauthorizedError} (client fault)
 *  Error de autenticación (no autenticado)
 *
 * @throws {@link ForbiddenError} (client fault)
 *  Error de autorización (autenticado pero sin permisos)
 *
 * @throws {@link InternalServerError} (server fault)
 *  Error interno del servidor
 *
 * @throws {@link ChirpServiceServiceException}
 * <p>Base exception class for all service exceptions from ChirpService service.</p>
 *
 * @public
 */
export class HideChirpCommand extends $Command.classBuilder<HideChirpCommandInput, HideChirpCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "HideChirp", {

  })
  .n("ChirpServiceClient", "HideChirpCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
