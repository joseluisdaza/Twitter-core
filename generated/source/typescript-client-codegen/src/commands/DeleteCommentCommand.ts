// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  DeleteCommentInput,
  DeleteCommentOutput,
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
 * The input for {@link DeleteCommentCommand}.
 */
export interface DeleteCommentCommandInput extends DeleteCommentInput {}
/**
 * @public
 *
 * The output of {@link DeleteCommentCommand}.
 */
export interface DeleteCommentCommandOutput extends DeleteCommentOutput, __MetadataBearer {}

/**
 * ============================================================================
 * ELIMINAR COMENTARIO
 * ============================================================================
 * Elimina un comentario (solo el autor puede eliminarlo)
 * También decrementa commentsCount en el chirp correspondiente
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, DeleteCommentCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, DeleteCommentCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // DeleteCommentInput
 *   chirpId: "STRING_VALUE", // required
 *   commentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCommentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCommentOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteCommentCommandInput - {@link DeleteCommentCommandInput}
 * @returns {@link DeleteCommentCommandOutput}
 * @see {@link DeleteCommentCommandInput} for command's `input` shape.
 * @see {@link DeleteCommentCommandOutput} for command's `response` shape.
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
export class DeleteCommentCommand extends $Command.classBuilder<DeleteCommentCommandInput, DeleteCommentCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "DeleteComment", {

  })
  .n("ChirpServiceClient", "DeleteCommentCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
