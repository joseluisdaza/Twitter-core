// smithy-typescript generated code
import {
  ChirpServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChirpServiceClient";
import {
  GetTimelineInput,
  GetTimelineOutput,
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
 * The input for {@link GetTimelineCommand}.
 */
export interface GetTimelineCommandInput extends GetTimelineInput {}
/**
 * @public
 *
 * The output of {@link GetTimelineCommand}.
 */
export interface GetTimelineCommandOutput extends GetTimelineOutput, __MetadataBearer {}

/**
 * ============================================================================
 * OBTENER TIMELINE
 * ============================================================================
 * Retorna los chirps de los usuarios que sigue el usuario autenticado
 * Usa el GSI userId-createdAt-index y la tabla chirp-follows (fan-out on read)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChirpServiceClient, GetTimelineCommand } from "@chirp/client"; // ES Modules import
 * // const { ChirpServiceClient, GetTimelineCommand } = require("@chirp/client"); // CommonJS import
 * const client = new ChirpServiceClient(config);
 * const input = { // GetTimelineInput
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetTimelineCommand(input);
 * const response = await client.send(command);
 * // { // GetTimelineOutput
 * //   chirps: [ // ChirpList // required
 * //     { // Chirp
 * //       chirpId: "STRING_VALUE", // required
 * //       userId: "STRING_VALUE", // required
 * //       username: "STRING_VALUE", // required
 * //       content: "STRING_VALUE", // required
 * //       mediaUrls: [ // MediaUrlList
 * //         "STRING_VALUE",
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       likesCount: Number("int"), // required
 * //       commentsCount: Number("int"), // required
 * //       repostsCount: Number("int"), // required
 * //       hidden: true || false, // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTimelineCommandInput - {@link GetTimelineCommandInput}
 * @returns {@link GetTimelineCommandOutput}
 * @see {@link GetTimelineCommandInput} for command's `input` shape.
 * @see {@link GetTimelineCommandOutput} for command's `response` shape.
 * @see {@link ChirpServiceClientResolvedConfig | config} for ChirpServiceClient's `config` shape.
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
export class GetTimelineCommand extends $Command.classBuilder<GetTimelineCommandInput, GetTimelineCommandOutput, ChirpServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ChirpServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ChirpService", "GetTimeline", {

  })
  .n("ChirpServiceClient", "GetTimelineCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
