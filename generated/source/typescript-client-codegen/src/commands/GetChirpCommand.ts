// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  GetChirpInput,
  GetChirpOutput,
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
 * The input for {@link GetChirpCommand}.
 */
export interface GetChirpCommandInput extends GetChirpInput {}
/**
 * @public
 *
 * The output of {@link GetChirpCommand}.
 */
export interface GetChirpCommandOutput extends GetChirpOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OBTENER CHIRP POR ID
 * ============================================================================
 * Obtiene un chirp específico por su chirpId (PK de chirp-chirps)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, GetChirpCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, GetChirpCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // GetChirpInput
 *   chirpId: "STRING_VALUE", // required
 * };
 * const command = new GetChirpCommand(input);
 * const response = await client.send(command);
 * // { // GetChirpOutput
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
 * @param GetChirpCommandInput - {@link GetChirpCommandInput}
 * @returns {@link GetChirpCommandOutput}
 * @see {@link GetChirpCommandInput} for command's `input` shape.
 * @see {@link GetChirpCommandOutput} for command's `response` shape.
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
export class GetChirpCommand extends $Command.classBuilder<GetChirpCommandInput, GetChirpCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "GetChirp", {

  })
  .n("ChirpServiceClient", "GetChirpCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
