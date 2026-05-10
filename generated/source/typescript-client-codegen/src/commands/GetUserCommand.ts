// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  GetUserInput,
  GetUserOutput,
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
 * The input for {@link GetUserCommand}.
 */
export interface GetUserCommandInput extends GetUserInput {}
/**
 * @public
 *
 * The output of {@link GetUserCommand}.
 */
export interface GetUserCommandOutput extends GetUserOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OBTENER USUARIO POR ID
 * ============================================================================
 * Obtiene el perfil de un usuario por su ID (Partition Key de chirp-users)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, GetUserCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, GetUserCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // GetUserInput
 *   userId: "STRING_VALUE", // required
 * };
 * const command = new GetUserCommand(input);
 * const response = await client.send(command);
 * // { // GetUserOutput
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
 * @param GetUserCommandInput - {@link GetUserCommandInput}
 * @returns {@link GetUserCommandOutput}
 * @see {@link GetUserCommandInput} for command's `input` shape.
 * @see {@link GetUserCommandOutput} for command's `response` shape.
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
export class GetUserCommand extends $Command.classBuilder<GetUserCommandInput, GetUserCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "GetUser", {

  })
  .n("ChirpServiceClient", "GetUserCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
