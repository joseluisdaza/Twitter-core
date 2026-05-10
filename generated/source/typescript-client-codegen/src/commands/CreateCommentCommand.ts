// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  CreateCommentInput,
  CreateCommentOutput,
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
 * The input for {@link CreateCommentCommand}.
 */
export interface CreateCommentCommandInput extends CreateCommentInput {}
/**
 * @public
 *
 * The output of {@link CreateCommentCommand}.
 */
export interface CreateCommentCommandOutput extends CreateCommentOutput, __MetadataBearer {}

/**
 * ============================================================================
 * CREAR COMENTARIO
 * ============================================================================
 * Agrega un comentario a un chirp en chirp-comments
 * También incrementa commentsCount en el chirp correspondiente (chirp-chirps)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, CreateCommentCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, CreateCommentCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // CreateCommentInput
 *   chirpId: "STRING_VALUE", // required
 *   content: "STRING_VALUE", // required
 * };
 * const command = new CreateCommentCommand(input);
 * const response = await client.send(command);
 * // { // CreateCommentOutput
 * //   comment: { // Comment
 * //     commentId: "STRING_VALUE", // required
 * //     chirpId: "STRING_VALUE", // required
 * //     userId: "STRING_VALUE", // required
 * //     username: "STRING_VALUE", // required
 * //     content: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     likesCount: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCommentCommandInput - {@link CreateCommentCommandInput}
 * @returns {@link CreateCommentCommandOutput}
 * @see {@link CreateCommentCommandInput} for command's `input` shape.
 * @see {@link CreateCommentCommandOutput} for command's `response` shape.
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
export class CreateCommentCommand extends $Command.classBuilder<CreateCommentCommandInput, CreateCommentCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "CreateComment", {

  })
  .n("ChirpServiceClient", "CreateCommentCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
