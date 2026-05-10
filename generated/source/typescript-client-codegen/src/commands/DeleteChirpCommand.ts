// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  DeleteChirpInput,
  DeleteChirpOutput,
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
 * The input for {@link DeleteChirpCommand}.
 */
export interface DeleteChirpCommandInput extends DeleteChirpInput {}
/**
 * @public
 *
 * The output of {@link DeleteChirpCommand}.
 */
export interface DeleteChirpCommandOutput extends DeleteChirpOutput, __MetadataBearer {}

/**
 * ============================================================================
 * ELIMINAR CHIRP
 * ============================================================================
 * Elimina un chirp (solo el autor puede eliminar el suyo)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, DeleteChirpCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, DeleteChirpCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // DeleteChirpInput
 *   chirpId: "STRING_VALUE", // required
 * };
 * const command = new DeleteChirpCommand(input);
 * const response = await client.send(command);
 * // { // DeleteChirpOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteChirpCommandInput - {@link DeleteChirpCommandInput}
 * @returns {@link DeleteChirpCommandOutput}
 * @see {@link DeleteChirpCommandInput} for command's `input` shape.
 * @see {@link DeleteChirpCommandOutput} for command's `response` shape.
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
export class DeleteChirpCommand extends $Command.classBuilder<DeleteChirpCommandInput, DeleteChirpCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "DeleteChirp", {

  })
  .n("ChirpServiceClient", "DeleteChirpCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
