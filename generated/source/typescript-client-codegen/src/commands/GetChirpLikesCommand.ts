// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  GetChirpLikesInput,
  GetChirpLikesOutput,
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
 * The input for {@link GetChirpLikesCommand}.
 */
export interface GetChirpLikesCommandInput extends GetChirpLikesInput {}
/**
 * @public
 *
 * The output of {@link GetChirpLikesCommand}.
 */
export interface GetChirpLikesCommandOutput extends GetChirpLikesOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OBTENER LIKES DE UN CHIRP
 * ============================================================================
 * Lista los usuarios que dieron like a un chirp (PK de chirp-likes)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, GetChirpLikesCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, GetChirpLikesCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // GetChirpLikesInput
 *   chirpId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetChirpLikesCommand(input);
 * const response = await client.send(command);
 * // { // GetChirpLikesOutput
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
 * @param GetChirpLikesCommandInput - {@link GetChirpLikesCommandInput}
 * @returns {@link GetChirpLikesCommandOutput}
 * @see {@link GetChirpLikesCommandInput} for command's `input` shape.
 * @see {@link GetChirpLikesCommandOutput} for command's `response` shape.
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
export class GetChirpLikesCommand extends $Command.classBuilder<GetChirpLikesCommandInput, GetChirpLikesCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "GetChirpLikes", {

  })
  .n("ChirpServiceClient", "GetChirpLikesCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
