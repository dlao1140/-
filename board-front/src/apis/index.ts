
// import { getPedestrianRoute } from './tmap';

// import axios from 'axios';
// import { SignInRequestDto, SingUpRequestDto } from './request/auth';
// import { SignInResponseDto, SingUpResponseDto } from './response/auth';
// import { ResponseDto } from './response';
// import { GetSignInUserResponseDto, GetUserResponseDto, PatchNicknameResponseDto, PatchProfileImageResponseDto } from './response/user';
// import { PatchBoardRequestDto, PostBoardRequestDto, PostCommentRequestDto } from './request/board';
// // !FIX: 1. 중복 선언된 PostCommentRequestDto 제거 / 2. 누락된 PostCommentResponseDto 추가
// import { DeleteBoardResponseDto, DeleteCommentResponseDto, /* GetBoardListByPlaceResponseDto, */ GetBoardResponseDto, GetCommentListResponseDto, GetFavoriteListResponseDto, GetLatestBoardListResponseDto, GetSearchBoardListResponseDto, GetTop3BoardListResponseDto, GetUserBoardListResponseDto, IncreaseViewCountResponseDto, PatchBoardResponseDto, PostBoardResponseDto, PostCommentResponseDto, PutFavoriteResponseDto } from './response/board';
// import { GetPopularListResponseDto, GetRelationListResponseDto } from './response/search';
// import { PatchNicknameRequestDto, PatchProfileImageRequestDto } from './request/user';

// const DOMAIN = 'http://localhost:4000';
// // const DOMAIN = process.env.REACT_APP_API_URL;
// const API_DOMAIN = `${DOMAIN}/api/v1`;

// const authorization = (accessToken: string) => {
//     return { headers: { Authorization: `Bearer ${accessToken}` } }
// }

// const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
// const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;

// export const signInRequest = async (requestBody: SignInRequestDto) => {
//     const result = await axios.post(SIGN_IN_URL(), requestBody)
//         .then(response => {
//             const responseBody: SignInResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const signUpRequest = async (requestBody: SingUpRequestDto) => {
//     const result = await axios.post(SIGN_UP_URL(), requestBody)
//         .then(response => {
//             const responseBody: SingUpResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// const GET_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
// const GET_LATEST_BOARD_LIST_URL = () => `${API_DOMAIN}/board/latest-list`;
// const GET_TOP_3_BOARD_LIST_URL = () => `${API_DOMAIN}/board/top-3`;
// const GET_SEARCH_BOARD_LIST_URL = (searchWord: string, preSearchWord: string | null) => `${API_DOMAIN}/board/search-list/${searchWord}${preSearchWord ? '/' + preSearchWord : ''}`;
// const GET_USER_BOARD_LIST_URL = (email: string) => `${API_DOMAIN}/board/user-board-list/${email}`;
// const INCREASE_VIEW_COUNT_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/increase-view-count`;
// const GET_FAVORITE_LIST_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite-list`;
// const GET_COMMENT_LIST_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/comment-list`;
// const POST_BOARD_URL = () => `${API_DOMAIN}/board`;
// const POST_COMMENT_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/comment`;
// const PATCH_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
// const PUT_FAVORITE_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite`;
// const DELETE_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
// const DELETE_COMMENT_URL = (commentNumber: string | number) => `${API_DOMAIN}/board/comment/${commentNumber}`;
// const GET_BOARD_LIST_BY_PLACE_URL = (placeName: string) => `${API_DOMAIN}/board/by-place?placeName=${placeName}`;

// export const getBoardRequest = async (boardNumber: number | string) => {
//     const result = await axios.get(GET_BOARD_URL(boardNumber))
//         .then(response => {
//             const responseBody: GetBoardResponseDto = response.data;
//             return responseBody
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const getLatestBoardListRequest = async () => {
//     const result = await axios.get(GET_LATEST_BOARD_LIST_URL())
//         .then(response => {
//             const responseBody: GetLatestBoardListResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const getTop3BoardListRequest = async () => {
//     const result = await axios.get(GET_TOP_3_BOARD_LIST_URL())
//         .then(response => {
//             const responseBody: GetTop3BoardListResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const getSearchBoardListRequest = async (searchWord: string, preSearchWord: string | null) => {
//     const result = await axios.get(GET_SEARCH_BOARD_LIST_URL(searchWord, preSearchWord))
//         .then(response => {
//             const responseBody: GetSearchBoardListResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const getUserBoardListRequest = async (email: string) => {
// const result = await axios.get(GET_USER_BOARD_LIST_URL(email))
//         .then(response => {
//             const responseBody: GetUserBoardListResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const increaseViewCountRequest = async (boardNumber: number | string) => {
//     const result = await axios.get(INCREASE_VIEW_COUNT_URL(boardNumber))
//         .then(response => {
//             const responseBody: IncreaseViewCountResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const getFavoriteListRequest = async (boardNumber: number | string) => {
//     const result = await axios.get(GET_FAVORITE_LIST_URL(boardNumber))
//         .then(response => {
//             const responseBody: GetFavoriteListResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const getCommentListRequest = async (boardNumber: number | string) => {
//     const result = await axios.get(GET_COMMENT_LIST_URL(boardNumber))
//         .then(response => {
//             const responseBody: GetCommentListResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const postBoardRequest = async (requestBody: PostBoardRequestDto, accessToken: string) => {
//     const result = await axios.post(POST_BOARD_URL(), requestBody, authorization(accessToken))
//         .then(response => {
//             const responseBody: PostBoardResponseDto = response.data;
//             return responseBody
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const postCommentRequest = async (boardNumber: number | string, requestBody: PostCommentRequestDto, accessToken: string) => {
//     const result = await axios.post(POST_COMMENT_URL(boardNumber), requestBody, authorization(accessToken))
//         .then(response => {
//             const responseBody: PostCommentResponseDto = response.data;
//             return responseBody
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const patchBoardRequest = async (boardNumber: number | string, requestBody: PatchBoardRequestDto, accessToken: string) => {
//     const result = await axios.patch(PATCH_BOARD_URL(boardNumber), requestBody, authorization(accessToken))
//         .then(response => {
//             const responseBody: PatchBoardResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const putFavoriteRequest = async (boardNumber: number | string, accessToken: string) => {
//     const result = await axios.put(PUT_FAVORITE_URL(boardNumber), {}, authorization(accessToken))
//         .then(response => {
//             const responseBody: PutFavoriteResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         })
//     return result;
// }

// export const deleteBoardRequest = async (boardNumber: number | string, accessToken: string) => {
//     const result = await axios.delete(DELETE_BOARD_URL(boardNumber), authorization(accessToken))
//         .then(response => {
//             const responseBody: DeleteBoardResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         });
//         return result;
// }

// // 댓글 삭제 요청 함수
// export const deleteCommentRequest = async (commentNumber: string | number, accessToken: string) => {
//     const result = await axios.delete(DELETE_COMMENT_URL(commentNumber), authorization(accessToken))
//         .then(response => {
//             const responseBody: DeleteCommentResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         });
//     return result;
// };

// // !FIX: GetBoardListByPlaceResponseDto 타입이 없으므로, 이 함수도 임시로 주석 처리합니다.
// // export const getBoardListByPlaceRequest = async (placeName: string) => {
// //     const result = await axios.get(GET_BOARD_LIST_BY_PLACE_URL(placeName))
// //         .then(response => {
// //             const responseBody: GetBoardListByPlaceResponseDto = response.data;
// //             return responseBody;
// //         })
// //         .catch(error => {
// //             if (!error.response?.data) return null;
// //             const responseBody: ResponseDto = error.response.data;
// //             return responseBody;
// //         });
// //     return result;
// // }

// const GET_POPULAR_LIST_URL = () => `${API_DOMAIN}/search/popular-list`;
// const GET_RELATION_LIST_URL = (searchWord: string) => `${API_DOMAIN}/search/${searchWord}/relation-list`;

// export const getPopularListRequest = async () => {
//     const result = await axios.get(GET_POPULAR_LIST_URL())
//         .then(response => {
//             const responseBody: GetPopularListResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         });
//     return result;
// }

// export const GetRelationListRequest = async (searchWord: string) => {
//     const result = await axios.get(GET_RELATION_LIST_URL(searchWord))
//         .then(response => {
//             const responseBody: GetRelationListResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         });
//     return result;
// }

// const GET_USER_URL = (email:string) => `${API_DOMAIN}/user/${email}`;
// const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;
// const PATCH_NICKNAME_URL = () => `${API_DOMAIN}/user/nickname`; 
// const PATCH_PROFILE_IMAGE_URL = () => `${API_DOMAIN}/user/profile-image`;

// export const getUserRequest = async (email:string) => {
//     const result = await axios.get(GET_USER_URL(email))
//         .then(response => {
//             const responseBody: GetUserResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         });
//         return result;
// }

// export const getSignInUserRequest = async (accessToken: string) => {
//     const result = await axios.get(GET_SIGN_IN_USER_URL(), authorization(accessToken))
//         .then(response => {
//             const responseBody: GetSignInUserResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         });
//         return result;
// }

// export const patchNicknameRequest = async (requestBody: PatchNicknameRequestDto, accessToken: string) => {
//     const result = await axios.patch(PATCH_NICKNAME_URL(), requestBody, authorization(accessToken))
//         .then(response => {
//             const responseBody: PatchNicknameResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         });
//         return result;
// }

// export const patchProfileImageRequest = async (requestBody: PatchProfileImageRequestDto, accessToken: string) => {
//     const result = await axios.patch(PATCH_PROFILE_IMAGE_URL(), requestBody, authorization(accessToken))
//         .then(response => {
//             const responseBody: PatchProfileImageResponseDto = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             if (!error.response.data) return null;
//             const responseBody: ResponseDto = error.response.data;
//             return responseBody;
//         });
//         return result;
// }

// const FILE_DOMAIN = `${DOMAIN}/file`;

// const FILE_UPLOAD_URL = () => `${FILE_DOMAIN}/upload`;

// const multipartFormData = { headers: { 'Content-Type': 'multipart/form-data'} }

// export const fileUploadRequest = async (data: FormData) => {
//     const result = await axios.post(FILE_UPLOAD_URL(), data, multipartFormData)
//         .then(response => {
//             const responseBody: string = response.data;
//             return responseBody;
//         })
//         .catch(error => {
//             return null;
//         }) 
//     return result;
// }

// export { getPedestrianRoute };

// apis/index.ts
import axios from 'axios';
import { getPedestrianRoute } from './tmap';

import { SignInRequestDto, SingUpRequestDto } from './request/auth';
import { SignInResponseDto, SingUpResponseDto } from './response/auth';
import { ResponseDto } from './response';

import {
  GetSignInUserResponseDto,
  GetUserResponseDto,
  PatchNicknameResponseDto,
  PatchProfileImageResponseDto,
} from './response/user';

import {
  PatchBoardRequestDto,
  PostBoardRequestDto,
  PostCommentRequestDto,
} from './request/board';

import {
  DeleteBoardResponseDto,
  DeleteCommentResponseDto,
  GetBoardResponseDto,
  GetCommentListResponseDto,
  GetFavoriteListResponseDto,
  GetLatestBoardListResponseDto,
  GetSearchBoardListResponseDto,
  GetTop3BoardListResponseDto,
  GetUserBoardListResponseDto,
  IncreaseViewCountResponseDto,
  PatchBoardResponseDto,
  PostBoardResponseDto,
  PostCommentResponseDto,
  PutFavoriteResponseDto,
} from './response/board';

import { GetPopularListResponseDto, GetRelationListResponseDto } from './response/search';
import { PatchNicknameRequestDto, PatchProfileImageRequestDto } from './request/user';

// ======================
// 환경설정
// ======================
// 배포/개발 전환은 필요시 아래 한 줄로 대체:
// const DOMAIN = process.env.REACT_APP_API_URL ?? 'http://localhost:4000';
const DOMAIN = 'http://localhost:4000';
const API_DOMAIN = `${DOMAIN}/api/v1`;

const authorization = (accessToken: string) => ({
  headers: { Authorization: `Bearer ${accessToken}` },
});

// ======================
// Auth
// ======================
const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;

export const signInRequest = async (requestBody: SignInRequestDto) => {
  const result = await axios
    .post(SIGN_IN_URL(), requestBody)
    .then((response) => {
      const responseBody: SignInResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const signUpRequest = async (requestBody: SingUpRequestDto) => {
  const result = await axios
    .post(SIGN_UP_URL(), requestBody)
    .then((response) => {
      const responseBody: SingUpResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

// ======================
// Board
// ======================
const GET_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
const GET_LATEST_BOARD_LIST_URL = () => `${API_DOMAIN}/board/latest-list`;
const GET_TOP_3_BOARD_LIST_URL = () => `${API_DOMAIN}/board/top-3`;

// ⚠️ 검색어/이전검색어 안전 인코딩
// const GET_SEARCH_BOARD_LIST_URL = (searchWord: string, preSearchWord: string | null) =>
//   `${API_DOMAIN}/board/search-list/${encodeURIComponent(searchWord)}${
//     preSearchWord ? '/' + encodeURIComponent(preSearchWord) : ''
//   }`;

// 교체
const esc = (s?: string | null) => (s ? encodeURIComponent(s) : '');
const GET_SEARCH_BOARD_LIST_URL = (searchWord: string, preSearchWord: string | null) =>
  `${API_DOMAIN}/board/search-list/${esc(searchWord)}${preSearchWord ? '/' + esc(preSearchWord) : ''}`;

const GET_USER_BOARD_LIST_URL = (email: string) => `${API_DOMAIN}/board/user-board-list/${email}`;
const INCREASE_VIEW_COUNT_URL = (boardNumber: number | string) =>
  `${API_DOMAIN}/board/${boardNumber}/increase-view-count`;
const GET_FAVORITE_LIST_URL = (boardNumber: number | string) =>
  `${API_DOMAIN}/board/${boardNumber}/favorite-list`;
const GET_COMMENT_LIST_URL = (boardNumber: number | string) =>
  `${API_DOMAIN}/board/${boardNumber}/comment-list`;
const POST_BOARD_URL = () => `${API_DOMAIN}/board`;
const POST_COMMENT_URL = (boardNumber: number | string) =>
  `${API_DOMAIN}/board/${boardNumber}/comment`;
const PATCH_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
const PUT_FAVORITE_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite`;
const DELETE_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
const DELETE_COMMENT_URL = (commentNumber: string | number) =>
  `${API_DOMAIN}/board/comment/${commentNumber}`;

// (미사용) 장소별 게시글 API가 준비되면 타입 추가 후 활성화
// const GET_BOARD_LIST_BY_PLACE_URL = (placeName: string) =>
//   `${API_DOMAIN}/board/by-place?placeName=${encodeURIComponent(placeName)}`;

export const getBoardRequest = async (boardNumber: number | string) => {
  const result = await axios
    .get(GET_BOARD_URL(boardNumber))
    .then((response) => {
      const responseBody: GetBoardResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const getLatestBoardListRequest = async () => {
  const result = await axios
    .get(GET_LATEST_BOARD_LIST_URL())
    .then((response) => {
      const responseBody: GetLatestBoardListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const getTop3BoardListRequest = async () => {
  const result = await axios
    .get(GET_TOP_3_BOARD_LIST_URL())
    .then((response) => {
      const responseBody: GetTop3BoardListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const getSearchBoardListRequest = async (searchWord: string, preSearchWord: string | null) => {
  const result = await axios
    .get(GET_SEARCH_BOARD_LIST_URL(searchWord, preSearchWord))
    .then((response) => {
      const responseBody: GetSearchBoardListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const getUserBoardListRequest = async (email: string) => {
  const result = await axios
    .get(GET_USER_BOARD_LIST_URL(email))
    .then((response) => {
      const responseBody: GetUserBoardListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const increaseViewCountRequest = async (boardNumber: number | string) => {
  const result = await axios
    .get(INCREASE_VIEW_COUNT_URL(boardNumber))
    .then((response) => {
      const responseBody: IncreaseViewCountResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const getFavoriteListRequest = async (boardNumber: number | string) => {
  const result = await axios
    .get(GET_FAVORITE_LIST_URL(boardNumber))
    .then((response) => {
      const responseBody: GetFavoriteListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const getCommentListRequest = async (boardNumber: number | string) => {
  const result = await axios
    .get(GET_COMMENT_LIST_URL(boardNumber))
    .then((response) => {
      const responseBody: GetCommentListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const postBoardRequest = async (requestBody: PostBoardRequestDto, accessToken: string) => {
  const result = await axios
    .post(POST_BOARD_URL(), requestBody, authorization(accessToken))
    .then((response) => {
      const responseBody: PostBoardResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const postCommentRequest = async (
  boardNumber: number | string,
  requestBody: PostCommentRequestDto,
  accessToken: string
) => {
  const result = await axios
    .post(POST_COMMENT_URL(boardNumber), requestBody, authorization(accessToken))
    .then((response) => {
      const responseBody: PostCommentResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const patchBoardRequest = async (
  boardNumber: number | string,
  requestBody: PatchBoardRequestDto,
  accessToken: string
) => {
  const result = await axios
    .patch(PATCH_BOARD_URL(boardNumber), requestBody, authorization(accessToken))
    .then((response) => {
      const responseBody: PatchBoardResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const putFavoriteRequest = async (boardNumber: number | string, accessToken: string) => {
  const result = await axios
    .put(PUT_FAVORITE_URL(boardNumber), {}, authorization(accessToken))
    .then((response) => {
      const responseBody: PutFavoriteResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const deleteBoardRequest = async (boardNumber: number | string, accessToken: string) => {
  const result = await axios
    .delete(DELETE_BOARD_URL(boardNumber), authorization(accessToken))
    .then((response) => {
      const responseBody: DeleteBoardResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const deleteCommentRequest = async (commentNumber: string | number, accessToken: string) => {
  const result = await axios
    .delete(DELETE_COMMENT_URL(commentNumber), authorization(accessToken))
    .then((response) => {
      const responseBody: DeleteCommentResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

// (옵션) 장소별 게시글 API — 서버 준비되면 타입 정의 후 활성화
// export const getBoardListByPlaceRequest = async (placeName: string) => {
//   const result = await axios
//     .get(GET_BOARD_LIST_BY_PLACE_URL(placeName))
//     .then((response) => {
//       const responseBody: GetBoardListByPlaceResponseDto = response.data;
//       return responseBody;
//     })
//     .catch((error) => {
//       if (!error.response?.data) return null;
//       const responseBody: ResponseDto = error.response.data;
//       return responseBody;
//     });
//   return result;
// };

// ======================
// Search
// ======================
const GET_POPULAR_LIST_URL = () => `${API_DOMAIN}/search/popular-list`;
const GET_RELATION_LIST_URL = (searchWord: string) =>
  `${API_DOMAIN}/search/${encodeURIComponent(searchWord)}/relation-list`;

export const getPopularListRequest = async () => {
  const result = await axios
    .get(GET_POPULAR_LIST_URL())
    .then((response) => {
      const responseBody: GetPopularListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const GetRelationListRequest = async (searchWord: string) => {
  const result = await axios
    .get(GET_RELATION_LIST_URL(searchWord))
    .then((response) => {
      const responseBody: GetRelationListResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

// ======================
// User
// ======================
const GET_USER_URL = (email: string) => `${API_DOMAIN}/user/${email}`;
const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;
const PATCH_NICKNAME_URL = () => `${API_DOMAIN}/user/nickname`;
const PATCH_PROFILE_IMAGE_URL = () => `${API_DOMAIN}/user/profile-image`;

export const getUserRequest = async (email: string) => {
  const result = await axios
    .get(GET_USER_URL(email))
    .then((response) => {
      const responseBody: GetUserResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const getSignInUserRequest = async (accessToken: string) => {
  const result = await axios
    .get(GET_SIGN_IN_USER_URL(), authorization(accessToken))
    .then((response) => {
      const responseBody: GetSignInUserResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const patchNicknameRequest = async (
  requestBody: PatchNicknameRequestDto,
  accessToken: string
) => {
  const result = await axios
    .patch(PATCH_NICKNAME_URL(), requestBody, authorization(accessToken))
    .then((response) => {
      const responseBody: PatchNicknameResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

export const patchProfileImageRequest = async (
  requestBody: PatchProfileImageRequestDto,
  accessToken: string
) => {
  const result = await axios
    .patch(PATCH_PROFILE_IMAGE_URL(), requestBody, authorization(accessToken))
    .then((response) => {
      const responseBody: PatchProfileImageResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      if (!error.response?.data) return null;
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
};

// ======================
// File
// ======================
const FILE_DOMAIN = `${DOMAIN}/file`;
const FILE_UPLOAD_URL = () => `${FILE_DOMAIN}/upload`;

const multipartFormData = { headers: { 'Content-Type': 'multipart/form-data' } };

export const fileUploadRequest = async (data: FormData) => {
  const result = await axios
    .post(FILE_UPLOAD_URL(), data, multipartFormData)
    .then((response) => {
      const responseBody: string = response.data;
      return responseBody;
    })
    .catch(() => {
      return null;
    });
  return result;
};

// ======================
// Tmap re-export
// ======================
export { getPedestrianRoute };
