// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  UpdateUserProfileInput,
  UpdateUserProfileOutput,
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
 * The input for {@link UpdateUserProfileCommand}.
 */
export interface UpdateUserProfileCommandInput extends UpdateUserProfileInput {}
/**
 * @public
 *
 * The output of {@link UpdateUserProfileCommand}.
 */
export interface UpdateUserProfileCommandOutput extends UpdateUserProfileOutput, __MetadataBearer {}

/**
 * ============================================================================
 * ACTUALIZAR PERFIL DE USUARIO
 * ============================================================================
 * Actualiza los campos editables del perfil (displayName, bio, avatarUrl)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, UpdateUserProfileCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, UpdateUserProfileCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // UpdateUserProfileInput
 *   userId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   bio: "STRING_VALUE",
 *   avatarUrl: "STRING_VALUE",
 * };
 * const command = new UpdateUserProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserProfileOutput
 * //   user: { // User
 * //     userId: "STRING_VALUE", // required
 * //     username: "STRING_VALUE", // required
 * //     email: "STRING_VALUE", // required
 * //     displayName: "STRING_VALUE", // required
 * //     bio: "STRING_VALUE",
 * //     avatarUrl: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     verified: true || false, // required
 * //     followersCount: Number("int"), // required
 * //     followingCount: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateUserProfileCommandInput - {@link UpdateUserProfileCommandInput}
 * @returns {@link UpdateUserProfileCommandOutput}
 * @see {@link UpdateUserProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUserProfileCommandOutput} for command's `response` shape.
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
export class UpdateUserProfileCommand extends $Command.classBuilder<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "UpdateUserProfile", {

  })
  .n("ChirpServiceClient", "UpdateUserProfileCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
