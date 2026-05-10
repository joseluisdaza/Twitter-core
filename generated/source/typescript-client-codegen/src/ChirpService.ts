// smithy-typescript generated code
import {
  ChirpServiceClient,
  ChirpServiceClientConfig,
} from "./ChirpServiceClient";
import {
  CreateChirpCommand,
  CreateChirpCommandInput,
  CreateChirpCommandOutput,
} from "./commands/CreateChirpCommand";
import {
  CreateCommentCommand,
  CreateCommentCommandInput,
  CreateCommentCommandOutput,
} from "./commands/CreateCommentCommand";
import {
  DeleteChirpCommand,
  DeleteChirpCommandInput,
  DeleteChirpCommandOutput,
} from "./commands/DeleteChirpCommand";
import {
  DeleteCommentCommand,
  DeleteCommentCommandInput,
  DeleteCommentCommandOutput,
} from "./commands/DeleteCommentCommand";
import {
  FollowUserCommand,
  FollowUserCommandInput,
  FollowUserCommandOutput,
} from "./commands/FollowUserCommand";
import {
  GetChirpCommand,
  GetChirpCommandInput,
  GetChirpCommandOutput,
} from "./commands/GetChirpCommand";
import {
  GetChirpCommentsCommand,
  GetChirpCommentsCommandInput,
  GetChirpCommentsCommandOutput,
} from "./commands/GetChirpCommentsCommand";
import {
  GetChirpLikesCommand,
  GetChirpLikesCommandInput,
  GetChirpLikesCommandOutput,
} from "./commands/GetChirpLikesCommand";
import {
  GetFollowersCommand,
  GetFollowersCommandInput,
  GetFollowersCommandOutput,
} from "./commands/GetFollowersCommand";
import {
  GetFollowingCommand,
  GetFollowingCommandInput,
  GetFollowingCommandOutput,
} from "./commands/GetFollowingCommand";
import {
  GetTimelineCommand,
  GetTimelineCommandInput,
  GetTimelineCommandOutput,
} from "./commands/GetTimelineCommand";
import {
  GetUserByUsernameCommand,
  GetUserByUsernameCommandInput,
  GetUserByUsernameCommandOutput,
} from "./commands/GetUserByUsernameCommand";
import {
  GetUserChirpsCommand,
  GetUserChirpsCommandInput,
  GetUserChirpsCommandOutput,
} from "./commands/GetUserChirpsCommand";
import {
  GetUserCommand,
  GetUserCommandInput,
  GetUserCommandOutput,
} from "./commands/GetUserCommand";
import {
  GetUserLikesCommand,
  GetUserLikesCommandInput,
  GetUserLikesCommandOutput,
} from "./commands/GetUserLikesCommand";
import {
  HideChirpCommand,
  HideChirpCommandInput,
  HideChirpCommandOutput,
} from "./commands/HideChirpCommand";
import {
  LikeChirpCommand,
  LikeChirpCommandInput,
  LikeChirpCommandOutput,
} from "./commands/LikeChirpCommand";
import {
  LoginCommand,
  LoginCommandInput,
  LoginCommandOutput,
} from "./commands/LoginCommand";
import {
  LogoutCommand,
  LogoutCommandInput,
  LogoutCommandOutput,
} from "./commands/LogoutCommand";
import {
  RegisterCommand,
  RegisterCommandInput,
  RegisterCommandOutput,
} from "./commands/RegisterCommand";
import {
  UnfollowUserCommand,
  UnfollowUserCommandInput,
  UnfollowUserCommandOutput,
} from "./commands/UnfollowUserCommand";
import {
  UnlikeChirpCommand,
  UnlikeChirpCommandInput,
  UnlikeChirpCommandOutput,
} from "./commands/UnlikeChirpCommand";
import {
  UpdateUserProfileCommand,
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
} from "./commands/UpdateUserProfileCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  LoginCommand,
  LogoutCommand,
  RegisterCommand,
  CreateChirpCommand,
  DeleteChirpCommand,
  GetChirpCommand,
  GetChirpLikesCommand,
  GetTimelineCommand,
  GetUserChirpsCommand,
  GetUserLikesCommand,
  HideChirpCommand,
  LikeChirpCommand,
  UnlikeChirpCommand,
  CreateCommentCommand,
  DeleteCommentCommand,
  GetChirpCommentsCommand,
  FollowUserCommand,
  GetFollowersCommand,
  GetFollowingCommand,
  UnfollowUserCommand,
  GetUserCommand,
  GetUserByUsernameCommand,
  UpdateUserProfileCommand,
}

export interface ChirpService {
  /**
   * @see {@link LoginCommand}
   */
  login(
    args: LoginCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<LoginCommandOutput>;
  login(
    args: LoginCommandInput,
    cb: (err: any, data?: LoginCommandOutput) => void
  ): void;
  login(
    args: LoginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LoginCommandOutput) => void
  ): void;

  /**
   * @see {@link LogoutCommand}
   */
  logout(): Promise<LogoutCommandOutput>;
  logout(
    args: LogoutCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<LogoutCommandOutput>;
  logout(
    args: LogoutCommandInput,
    cb: (err: any, data?: LogoutCommandOutput) => void
  ): void;
  logout(
    args: LogoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LogoutCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterCommand}
   */
  register(
    args: RegisterCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RegisterCommandOutput>;
  register(
    args: RegisterCommandInput,
    cb: (err: any, data?: RegisterCommandOutput) => void
  ): void;
  register(
    args: RegisterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChirpCommand}
   */
  createChirp(
    args: CreateChirpCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateChirpCommandOutput>;
  createChirp(
    args: CreateChirpCommandInput,
    cb: (err: any, data?: CreateChirpCommandOutput) => void
  ): void;
  createChirp(
    args: CreateChirpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChirpCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChirpCommand}
   */
  deleteChirp(
    args: DeleteChirpCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteChirpCommandOutput>;
  deleteChirp(
    args: DeleteChirpCommandInput,
    cb: (err: any, data?: DeleteChirpCommandOutput) => void
  ): void;
  deleteChirp(
    args: DeleteChirpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChirpCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChirpCommand}
   */
  getChirp(
    args: GetChirpCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetChirpCommandOutput>;
  getChirp(
    args: GetChirpCommandInput,
    cb: (err: any, data?: GetChirpCommandOutput) => void
  ): void;
  getChirp(
    args: GetChirpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChirpCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChirpLikesCommand}
   */
  getChirpLikes(
    args: GetChirpLikesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetChirpLikesCommandOutput>;
  getChirpLikes(
    args: GetChirpLikesCommandInput,
    cb: (err: any, data?: GetChirpLikesCommandOutput) => void
  ): void;
  getChirpLikes(
    args: GetChirpLikesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChirpLikesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTimelineCommand}
   */
  getTimeline(): Promise<GetTimelineCommandOutput>;
  getTimeline(
    args: GetTimelineCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetTimelineCommandOutput>;
  getTimeline(
    args: GetTimelineCommandInput,
    cb: (err: any, data?: GetTimelineCommandOutput) => void
  ): void;
  getTimeline(
    args: GetTimelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTimelineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserChirpsCommand}
   */
  getUserChirps(
    args: GetUserChirpsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetUserChirpsCommandOutput>;
  getUserChirps(
    args: GetUserChirpsCommandInput,
    cb: (err: any, data?: GetUserChirpsCommandOutput) => void
  ): void;
  getUserChirps(
    args: GetUserChirpsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserChirpsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserLikesCommand}
   */
  getUserLikes(
    args: GetUserLikesCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetUserLikesCommandOutput>;
  getUserLikes(
    args: GetUserLikesCommandInput,
    cb: (err: any, data?: GetUserLikesCommandOutput) => void
  ): void;
  getUserLikes(
    args: GetUserLikesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserLikesCommandOutput) => void
  ): void;

  /**
   * @see {@link HideChirpCommand}
   */
  hideChirp(
    args: HideChirpCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<HideChirpCommandOutput>;
  hideChirp(
    args: HideChirpCommandInput,
    cb: (err: any, data?: HideChirpCommandOutput) => void
  ): void;
  hideChirp(
    args: HideChirpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HideChirpCommandOutput) => void
  ): void;

  /**
   * @see {@link LikeChirpCommand}
   */
  likeChirp(
    args: LikeChirpCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<LikeChirpCommandOutput>;
  likeChirp(
    args: LikeChirpCommandInput,
    cb: (err: any, data?: LikeChirpCommandOutput) => void
  ): void;
  likeChirp(
    args: LikeChirpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LikeChirpCommandOutput) => void
  ): void;

  /**
   * @see {@link UnlikeChirpCommand}
   */
  unlikeChirp(
    args: UnlikeChirpCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UnlikeChirpCommandOutput>;
  unlikeChirp(
    args: UnlikeChirpCommandInput,
    cb: (err: any, data?: UnlikeChirpCommandOutput) => void
  ): void;
  unlikeChirp(
    args: UnlikeChirpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnlikeChirpCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCommentCommand}
   */
  createComment(
    args: CreateCommentCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateCommentCommandOutput>;
  createComment(
    args: CreateCommentCommandInput,
    cb: (err: any, data?: CreateCommentCommandOutput) => void
  ): void;
  createComment(
    args: CreateCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCommentCommand}
   */
  deleteComment(
    args: DeleteCommentCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteCommentCommandOutput>;
  deleteComment(
    args: DeleteCommentCommandInput,
    cb: (err: any, data?: DeleteCommentCommandOutput) => void
  ): void;
  deleteComment(
    args: DeleteCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChirpCommentsCommand}
   */
  getChirpComments(
    args: GetChirpCommentsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetChirpCommentsCommandOutput>;
  getChirpComments(
    args: GetChirpCommentsCommandInput,
    cb: (err: any, data?: GetChirpCommentsCommandOutput) => void
  ): void;
  getChirpComments(
    args: GetChirpCommentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChirpCommentsCommandOutput) => void
  ): void;

  /**
   * @see {@link FollowUserCommand}
   */
  followUser(
    args: FollowUserCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<FollowUserCommandOutput>;
  followUser(
    args: FollowUserCommandInput,
    cb: (err: any, data?: FollowUserCommandOutput) => void
  ): void;
  followUser(
    args: FollowUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FollowUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFollowersCommand}
   */
  getFollowers(
    args: GetFollowersCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetFollowersCommandOutput>;
  getFollowers(
    args: GetFollowersCommandInput,
    cb: (err: any, data?: GetFollowersCommandOutput) => void
  ): void;
  getFollowers(
    args: GetFollowersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFollowersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFollowingCommand}
   */
  getFollowing(
    args: GetFollowingCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetFollowingCommandOutput>;
  getFollowing(
    args: GetFollowingCommandInput,
    cb: (err: any, data?: GetFollowingCommandOutput) => void
  ): void;
  getFollowing(
    args: GetFollowingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFollowingCommandOutput) => void
  ): void;

  /**
   * @see {@link UnfollowUserCommand}
   */
  unfollowUser(
    args: UnfollowUserCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UnfollowUserCommandOutput>;
  unfollowUser(
    args: UnfollowUserCommandInput,
    cb: (err: any, data?: UnfollowUserCommandOutput) => void
  ): void;
  unfollowUser(
    args: UnfollowUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnfollowUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(
    args: GetUserCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetUserCommandOutput>;
  getUser(
    args: GetUserCommandInput,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserByUsernameCommand}
   */
  getUserByUsername(
    args: GetUserByUsernameCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetUserByUsernameCommandOutput>;
  getUserByUsername(
    args: GetUserByUsernameCommandInput,
    cb: (err: any, data?: GetUserByUsernameCommandOutput) => void
  ): void;
  getUserByUsername(
    args: GetUserByUsernameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserByUsernameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserProfileCommand}
   */
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<UpdateUserProfileCommandOutput>;
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;

}

/**
 * Servicio principal de la API de Chirp
 * @public
 */
export class ChirpService extends ChirpServiceClient implements ChirpService {}
createAggregatedClient(commands, ChirpService);
