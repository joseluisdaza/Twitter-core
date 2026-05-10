// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  CreateChirpInput,
  CreateChirpOutput,
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
 * The input for {@link CreateChirpCommand}.
 */
export interface CreateChirpCommandInput extends CreateChirpInput {}
/**
 * @public
 *
 * The output of {@link CreateChirpCommand}.
 */
export interface CreateChirpCommandOutput extends CreateChirpOutput, __MetadataBearer {}

/**
 * ============================================================================
 * CREAR CHIRP
 * ============================================================================
 * Operación para crear un chirp
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, CreateChirpCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, CreateChirpCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // CreateChirpInput
 *   content: "STRING_VALUE", // required
 *   mediaUrls: [ // MediaUrlList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateChirpCommand(input);
 * const response = await client.send(command);
 * // { // CreateChirpOutput
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
 * @param CreateChirpCommandInput - {@link CreateChirpCommandInput}
 * @returns {@link CreateChirpCommandOutput}
 * @see {@link CreateChirpCommandInput} for command's `input` shape.
 * @see {@link CreateChirpCommandOutput} for command's `response` shape.
 * @see {@link ChirpServiceClientResolvedConfig | config} for ChirpServiceClient's `config` shape.
 *
 * @throws {@link ValidationError} (client fault)
 *  Estructura base para errores de validación
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
export class CreateChirpCommand extends $Command.classBuilder<CreateChirpCommandInput, CreateChirpCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "CreateChirp", {

  })
  .n("ChirpServiceClient", "CreateChirpCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
