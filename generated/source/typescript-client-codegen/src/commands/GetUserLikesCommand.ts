// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  GetUserLikesInput,
  GetUserLikesOutput,
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
 * The input for {@link GetUserLikesCommand}.
 */
export interface GetUserLikesCommandInput extends GetUserLikesInput {}
/**
 * @public
 *
 * The output of {@link GetUserLikesCommand}.
 */
export interface GetUserLikesCommandOutput extends GetUserLikesOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OBTENER CHIRPS QUE LE GUSTARON A UN USUARIO
 * ============================================================================
 * Lista los chirps que le gustaron a un usuario usando el GSI userId-chirpId-index
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, GetUserLikesCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, GetUserLikesCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // GetUserLikesInput
 *   userId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetUserLikesCommand(input);
 * const response = await client.send(command);
 * // { // GetUserLikesOutput
 * //   likes: [ // LikeRecordList // required
 * //     { // LikeRecord
 * //       chirpId: "STRING_VALUE", // required
 * //       userId: "STRING_VALUE", // required
 * //       username: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUserLikesCommandInput - {@link GetUserLikesCommandInput}
 * @returns {@link GetUserLikesCommandOutput}
 * @see {@link GetUserLikesCommandInput} for command's `input` shape.
 * @see {@link GetUserLikesCommandOutput} for command's `response` shape.
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
export class GetUserLikesCommand extends $Command.classBuilder<GetUserLikesCommandInput, GetUserLikesCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "GetUserLikes", {

  })
  .n("ChirpServiceClient", "GetUserLikesCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
