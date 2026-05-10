// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  GetUserByUsernameInput,
  GetUserByUsernameOutput,
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
 * The input for {@link GetUserByUsernameCommand}.
 */
export interface GetUserByUsernameCommandInput extends GetUserByUsernameInput {}
/**
 * @public
 *
 * The output of {@link GetUserByUsernameCommand}.
 */
export interface GetUserByUsernameCommandOutput extends GetUserByUsernameOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OBTENER USUARIO POR USERNAME
 * ============================================================================
 * Busca un usuario por su username usando el GSI username-index de chirp-users
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, GetUserByUsernameCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, GetUserByUsernameCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // GetUserByUsernameInput
 *   username: "STRING_VALUE", // required
 * };
 * const command = new GetUserByUsernameCommand(input);
 * const response = await client.send(command);
 * // { // GetUserByUsernameOutput
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
 * @param GetUserByUsernameCommandInput - {@link GetUserByUsernameCommandInput}
 * @returns {@link GetUserByUsernameCommandOutput}
 * @see {@link GetUserByUsernameCommandInput} for command's `input` shape.
 * @see {@link GetUserByUsernameCommandOutput} for command's `response` shape.
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
export class GetUserByUsernameCommand extends $Command.classBuilder<GetUserByUsernameCommandInput, GetUserByUsernameCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "GetUserByUsername", {

  })
  .n("ChirpServiceClient", "GetUserByUsernameCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
