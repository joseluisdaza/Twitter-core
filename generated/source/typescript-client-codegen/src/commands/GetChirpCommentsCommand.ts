// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  GetChirpCommentsInput,
  GetChirpCommentsOutput,
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
 * The input for {@link GetChirpCommentsCommand}.
 */
export interface GetChirpCommentsCommandInput extends GetChirpCommentsInput {}
/**
 * @public
 *
 * The output of {@link GetChirpCommentsCommand}.
 */
export interface GetChirpCommentsCommandOutput extends GetChirpCommentsOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OBTENER COMENTARIOS DE UN CHIRP
 * ============================================================================
 * Lista los comentarios de un chirp usando el GSI chirpId-createdAt-index
 * Los resultados se ordenan por fecha (más antiguos primero por defecto)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, GetChirpCommentsCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, GetChirpCommentsCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // GetChirpCommentsInput
 *   chirpId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetChirpCommentsCommand(input);
 * const response = await client.send(command);
 * // { // GetChirpCommentsOutput
 * //   comments: [ // CommentList // required
 * //     { // Comment
 * //       commentId: "STRING_VALUE", // required
 * //       chirpId: "STRING_VALUE", // required
 * //       userId: "STRING_VALUE", // required
 * //       username: "STRING_VALUE", // required
 * //       content: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       likesCount: Number("int"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChirpCommentsCommandInput - {@link GetChirpCommentsCommandInput}
 * @returns {@link GetChirpCommentsCommandOutput}
 * @see {@link GetChirpCommentsCommandInput} for command's `input` shape.
 * @see {@link GetChirpCommentsCommandOutput} for command's `response` shape.
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
export class GetChirpCommentsCommand extends $Command.classBuilder<GetChirpCommentsCommandInput, GetChirpCommentsCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "GetChirpComments", {

  })
  .n("ChirpServiceClient", "GetChirpCommentsCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
