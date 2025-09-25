// import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
// import './style.css'
// import FavoriteItem from 'components/FavoriteItem';
// import { Board, CommentListItem, FavoriteListItem } from 'types/interface';
// import CommentItem from 'components/CommentItem';
// import Pagination from 'components/Pagination';
// import defaultProfileImage from 'assets/image/default-profile-image.png';
// import { useLoginUserStore } from 'stores';
// import { useNavigate, useParams } from 'react-router-dom';
// import { BOARD_PATH, BOARD_UPDATE_PATH, MAIN_PATH, USER_PATH } from 'constant';
// import { deleteBoardRequest, deleteCommentRequest, getBoardRequest, getCommentListRequest, getFavoriteListRequest, increaseViewCountRequest, postCommentRequest, putFavoriteRequest } from 'apis';
// import { DeleteBoardResponseDto, GetBoardResponseDto, GetCommentListResponseDto, GetFavoriteListResponseDto, IncreaseViewCountResponseDto, PostCommentResponseDto, PutFavoriteResponseDto } from 'apis/response/board';
// import { ResponseDto } from 'apis/response';

// import dayjs from 'dayjs';
// import { useCookies } from 'react-cookie';
// import { PostCommentRequestDto } from 'apis/request/board';
// import { usePagination } from 'hooks';
// import RollingNumber from 'components/Rolling/RollingNumber';
// import { toast } from 'react-toastify';
// import InitRollingNumber from 'components/Rolling/initRolling/InitRollingNumber';

// //         component: 게시물 상세 화면 컴포넌트      //
// export default function BoardDetail() {

//   //         state: 게시물 번호 path variable 상태      //
//   const {boardNumber} = useParams();
//   //         state: 로그인 유저 상태      //
//   const {loginUser} = useLoginUserStore();
//   //         state: 쿠키 상태      //
//   const [cookies, setCookies] = useCookies();
//   //         state: 쿠키 상태      //
//   const [viewCount, setViewCount] = useState<number>(0);

//   const [initialRenderDone, setInitialRenderDone] = useState(false);
  
//   //          function: 네비게이트 함수          //import { Cookies, useCookies } from 'react-cookie';
//   const navigate = useNavigate();
//   //          function: increase view count response 처리 함수          //
//   const increaseViewCountResponse = (responseBody: IncreaseViewCountResponseDto | ResponseDto | null) => {
//     if(!responseBody) return;
//     const {code} = responseBody;
//     if(code === 'NB') toast('존재하지 않는 게시물입니다.');
//     if(code === 'DBE') toast('데이터베이스 오류입니다.');
//   }
//   //         component: 게시물 상세 상단 화면 컴포넌트      //
//   const BoardDetailTop = () => {

//   //         state: 작성자 여부 사애    //
//   const [isWriter, setWriter] = useState<boolean>(false);
//   //         state: board 상태      //
//   const [board, setBoard] = useState<Board | null>(null);
//   //         state: more 버튼 상태      //
//   const [showMore, setShowMore] = useState<boolean>(false);
  
//   //          function: 작성일 포멧 변경 함수          //
//   const getWriteDatetimeFormat = () => {
//     if(!board) return '';
//     const date = dayjs(board.writeDatetime);
//     return date.format('YYYY. MM. DD.')
//   }
//   //          function: get board response 처리 함수          //
//   const getBoardResponse = (responseBody: GetBoardResponseDto | ResponseDto | null) => {
//     if(!responseBody) return;
//     const {code} = responseBody;
//     if(code === 'NB') toast('존재하지 않는 게시물입니다.');
//     if(code === 'DBE') toast('데이터베이스 오류입니다.');
//     if(code !== 'SU') {
//       navigate(BOARD_PATH());
//       return;
//     }
//     const board: Board = {...responseBody as GetBoardResponseDto}
//     setBoard(board);
//     setTimeout(() => {
//       setViewCount(board.viewCount);
//       setInitialRenderDone(true);
//     }, 200);

//     if(!loginUser){
//       setWriter(false);
//       return;
//     }
//     const isWriter = loginUser.email === board.writerEmail;
//     setWriter(isWriter);
//   }
//   //          function: delete board response 처리 함수          //
//   const deleteBoardResponse = (responseBody: DeleteBoardResponseDto | ResponseDto | null) => {
//     if(!responseBody) return;
//     const {code} = responseBody;
//     if(code ==='VF') toast('잘못된 접근입니다.');
//     if(code ==='NU') toast('존재하지 않는 유저입니다.');
//     if(code ==='NB') toast('존재하지 않는 게시물입니다.');
//     if(code ==='AF') toast('인증에 실패했습니다.');
//     if(code ==='NP') toast('권환이 없습니다.');
//     if(code ==='DBE') toast('데이터베이스 오류입니다.');
//     if(code !=='SU') return;
    
//     navigate(BOARD_PATH());
//   }

//   //         event handler: more 버튼 상태 클릭 이벤트 처리     //
//   const onMoreButtonClickHandler = () => {
//     setShowMore(!showMore);
//   }
//   //         event handler:  닉네임 클릭 클릭 이벤트 처리     //
//   const onNicknameClickHandler = () => {
//     if(!board) return;
//     navigate(USER_PATH(board.writerEmail));
//   }
//   //         event handler: 수정 버튼 상태 클릭 이벤트 처리     //
//   const onUpdateButtonClickHandler = () => {
//     if(!board || !loginUser) return;
//     if(loginUser.email !== board.writerEmail) return;
//     navigate(BOARD_PATH() + '/' + BOARD_UPDATE_PATH(board.boardNumber));
//   }
//   //         event handler: 삭제 버튼 상태 클릭 이벤트 처리     //
//   const onDeleteButtonClickHandler = () => {
//     if(!boardNumber || !board || !loginUser || !cookies.accessToken) return;
//     if(loginUser.email !== board.writerEmail) return;
    
//     deleteBoardRequest(boardNumber,cookies.accessToken).then(deleteBoardResponse)
//   }
  

//   //          effect 게시물 번호 path variable이 바뀔때 마다 게시물 불러오기          //
//   useEffect(() => {
//   if (!boardNumber) {
//     navigate(BOARD_PATH());  
//     return;
//   }

//   if (!initialRenderDone) {
//     increaseViewCountRequest(boardNumber).then(increaseViewCountResponse);
//   }

//   // ✅ 게시물 데이터는 항상 불러옴
//   getBoardRequest(boardNumber).then(getBoardResponse);
// }, [boardNumber]);

//     //         render: 게시물 상세 상단 화면 컴포넌트 렌더링      //
//     if(!board) return <></>
//     return(
//       <div id='board-detail-top'>
//         <div className='board-detail-top-header'>
//           <div className='board-detail-title'>{board.title}</div>
//           <div className='board-detail-top-sub-box'>
//             <div className='board-detail-write-info-box'>
//               <div className='board-detail-writer-profile-image' style={{backgroundImage: `url(${board.writerProfileImage ? board.writerProfileImage : defaultProfileImage})`}}></div>
//               <div className='board-detail-writer-nickname' onClick={onNicknameClickHandler}>{board.writerNickname}</div>
//               <div className='board-detail-info-divider'>{'\|'}</div>
//               <div className='board-detail-write-date'>{getWriteDatetimeFormat()}</div>
//             </div>
//             {isWriter &&
//             <div className='icon-button'onClick={onMoreButtonClickHandler}>
//               <div className='icon more-icon'></div>
//             </div>
//             }
//             {showMore &&
//             <div className='board-detail-more-box'>
//               <div className='board-detail-update-button' onClick={onUpdateButtonClickHandler}>{'수정'}</div>
//               <div className='divider'></div>
//               <div className='board-detail-delete-button' onClick={onDeleteButtonClickHandler}>{'삭제'}</div>
//             </div>
//             }
//           </div>
//         </div>
//         <div className='divider'></div>
//         <div className='board-detail-top-main'>
//           <div className='board-detail-main-text'>{board.content}</div>
//           {board.boardImageList.map(image => <img className='board-detail-main-image' src={image}></img>)}
//         </div>
//       </div>
//     )
//   }

//   //         component: 게시물 하단 화면 컴포넌트      //
//   const BoardDetailBottom = ({ viewCount }: { viewCount: number }) => {
//     //          state: 댓글 testarea 참조 상태          //
//     const commentRef = useRef<HTMLTextAreaElement | null>(null);
//     //          state: 좋아요 리스트 상태          //
//     const [favoriteList, setFavoriteList] = useState<FavoriteListItem[]>([]);
//     //          state: 페이지네이션 관련 상태          //
//     const {
//       currentPage,
//         setCurrentPage,
//         currentSection,
//         setCurrentSection,
//         viewList,
//         viewPageList,
//         totalSection,
//         setTotalList
//     } = usePagination<CommentListItem>(3);
    
//     //          state: 좋아요 상태          //
//     const [isFavorite, setFavorite] = useState<boolean>(false);
//     //          state: 좋아요 상자 보기 상태          //
//     const [showFavorite, setShowFavorite] = useState<boolean>(false);
//     //          state: 댓글 상자 보기 상태          //
//     const [showComment, setShowComment] = useState<boolean>(false);
//     //          state: 전체 댓글 개수 상태          //
//     const [totalCommentCount, setTotalCommentCount] = useState<number>(0);
//     //          state: 댓글 상태          //
//     const [comment, setComment] = useState<string>('');
//     //          state: 애니메이트 상태          //
//     const [animate, setAnimate] = useState(false);
//     //          state: 하트 플로팅 상태          //
//     const [showFloatingHeart, setShowFloatingHeart] = useState(false);
    
//     const [globalHearts, setGlobalHearts] = useState<number[]>([]);

//     const [heartActive, setHeartActive] = useState(false);

//     // ✨ 댓글 삭제 처리 함수 추가
//     const handleDeleteComment = (commentNumber: number) => {
//         // boardNumber는 BoardDetail 스코프의 useParams()로 가져온 값을 사용합니다.
//         if (!boardNumber) {
//             toast('게시물 번호가 유효하지 않습니다.');
//             return;
//         }
//         if (!cookies.accessToken) {
//             toast('로그인이 필요합니다.');
//             return;
//         }

//         const isConfirm = window.confirm("댓글을 정말 삭제하시겠습니까?");
//         if (!isConfirm) return;

//         deleteCommentRequest(commentNumber, cookies.accessToken).then(deleteCommentResponseCallback);
//     };

//     // ✨ 댓글 삭제 API 응답 콜백 함수 추가
//     const deleteCommentResponseCallback = (responseBody: ResponseDto | null) => { // 타입은 DeleteCommentResponseDto | ResponseDto | null
//         if (!responseBody) {
//             toast('네트워크 응답이 없거나 요청에 실패했습니다.');
//             return;
//         }
//         const { code } = responseBody;

//         if (code === 'VF') toast('잘못된 접근입니다.');
//         else if (code === 'NU') toast('존재하지 않는 유저입니다.'); // 이 오류는 보통 토큰의 사용자가 유효하지 않을 때
//         else if (code === 'NB') toast('존재하지 않는 게시물입니다.');
//         else if (code === 'NC') toast('존재하지 않는 댓글입니다.'); // 백엔드에서 정의한 응답 코드
//         else if (code === 'AF') toast('인증에 실패했습니다.');
//         else if (code === 'NP') toast('권한이 없습니다.');
//         else if (code === 'DBE') toast('데이터베이스 오류입니다.');
//         else if (code === 'SU') {
//             toast('댓글이 삭제되었습니다.');
//             // 댓글 목록을 다시 불러와서 UI를 갱신합니다.
//             // 기존에 댓글 작성 후 목록을 다시 불러오는 로직과 동일합니다.
//             if (boardNumber) {
//                 getCommentListRequest(boardNumber).then(getCommentListResponse);
//             }
//         } else {
//             toast('알 수 없는 오류가 발생했습니다: ' + code);
//         }
//     };
//     //          function: get favorite list response 처리 함수          //
//     const getFavoriteListResponse = (responseBody: GetFavoriteListResponseDto | ResponseDto | null) => {
//       if(!responseBody) return;
//       const {code} = responseBody;
//       if(code ==='NB') toast('존재하지 않는 게시물입니다.');
//       if(code ==='DBE') toast('데이터베이스 오류입니다.');
//       if(code !== 'SU') return;

//       const {favoriteList} = responseBody as GetFavoriteListResponseDto;
//       setFavoriteList(favoriteList);
//       if(!loginUser) {
//         setFavorite(false);
//         return;
//       } 
//       const isFavorite = favoriteList.findIndex(favorite => favorite.email === loginUser.email) !== -1;
//       setFavorite(isFavorite);
//       setShowFavorite(isFavorite);
//     }
//     //          function: get comment list response 처리 함수          //
//     const getCommentListResponse = (responseBody: GetCommentListResponseDto | ResponseDto | null) => {
//         if(!responseBody) return;
//         const {code} = responseBody;
//         if(code ==='NB') toast('존재하지 않는 게시물입니다.');
//         if(code ==='DBE') toast('데이터베이스 오류입니다.');
//         if(code !== 'SU') return;

//         const {commentList} = responseBody as GetCommentListResponseDto;
//         setTotalList(commentList);
//         setTotalCommentCount(commentList.length)
//         if (commentList.length > 0) setShowComment(true);
//     }
//     //          function: put favorite response 처리 함수          //
//     const putFavoriteResponse = (responseBody: PutFavoriteResponseDto | ResponseDto | null) => {
//       if(!responseBody) return;
//       const {code} = responseBody;
//       if(code ==='VF') toast('잘못된 접근입니다.');
//       if(code ==='NU') toast('존재하지 않는 유저입니다.');
//       if(code ==='NB') toast('존재하지 않는 게시물입니다.');
//       if(code ==='AF') toast('인증에 실패했습니다.');
//       if(code ==='DBE') toast('데이터베이스 오류입니다.');
//       if(code !== 'SU') return;

//       if(!boardNumber) return;
//       getFavoriteListRequest(boardNumber).then(getFavoriteListResponse);
//     }
//     //          function: post comment response 처리 함수          //
//     const postCommentResponse = (responseBody: PostCommentResponseDto | ResponseDto | null) => {
//       if(!responseBody) return;
//       const {code} = responseBody;
//       if(code ==='VF') toast('잘못된 접근입니다.');
//       if(code ==='NU') toast('존재하지 않는 유저입니다.');
//       if(code ==='NB') toast('존재하지 않는 게시물입니다.');
//       if(code ==='AF') toast('인증에 실패했습니다.');
//       if(code ==='DBE') toast('데이터베이스 오류입니다.');
//       if(code !== 'SU') return;

//       if(!boardNumber) return;
//       getCommentListRequest(boardNumber).then(getCommentListResponse);
//     }

//     //          event handler: 좋아요 클릭 이벤트 처리          //
//     const onFavoriteClickHandler = () => {
//       if (!loginUser || !boardNumber || !cookies.accessToken) return;

//       // 💥 하트 이펙트 애니메이션 실행
//       setAnimate(true);
//       setShowFloatingHeart(true);

//       // pop 애니메이션 300ms, 하트 이모지 제거는 600ms 뒤
//       setTimeout(() => setAnimate(false), 300);
//       setTimeout(() => setShowFloatingHeart(false), 1500);

//       // 이미 하트 이펙트 중이면 무시
//       if (heartActive) return;

//       setHeartActive(true);
//       const newHearts = Array.from({ length: 30 }, (_, i) => Date.now() + i);
//       setGlobalHearts(newHearts);

//       setTimeout(() => {
//         setGlobalHearts([]);
//         setHeartActive(false);
//       }, 600); // 1.5초 후 초기화

//       // ❤️ 서버에 좋아요 요청 전송
//       putFavoriteRequest(boardNumber, cookies.accessToken)
//         .then(putFavoriteResponse);
//     };
//     //          event handler: 좋아요 상자 보기 이벤트 처리          //
//     const onShowFavoriteClickHandler = () => {
//       setShowFavorite(!showFavorite);
//     }
//     //          event handler: 댓글 상자 보기 클릭 이벤트 처리          //
//     const onShowCommentClickHandler = () => {
//       setShowComment(!showComment);
//     }
//     //          event handler: 댓글 작성 클릭 이벤트 처리          //
//     const onCommentSubmitButtonClickHandler = () => {
//     // comment, boardNumber, loginUser가 모두 존재하고, cookies.accessToken이 존재할 때만 실행
//     if (!comment || !boardNumber || !loginUser || !cookies.accessToken) return; 

//     const requestBody: PostCommentRequestDto = { content: comment };
//     postCommentRequest(boardNumber, requestBody, cookies.accessToken).then(postCommentResponse);
//     setComment(''); // 댓글 전송 후 입력 필드 초기화
//     if (commentRef.current) { // textarea 높이도 초기화
//         commentRef.current.style.height = 'auto';
//     }
// }
//     //          event handler: 댓글 변경 이벤트 처리          //
//     const onCommentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
//       const {value} = event.target;
//       setComment(value);
//       if(!commentRef.current) return;
//       commentRef.current.style.height = 'auto';
//       commentRef.current.style.height = `${commentRef.current.scrollHeight}px`;
      
//     }

// const getRandomGlobalHeartStyle = (): React.CSSProperties => {
//   return {
//     position: 'fixed',
//     top: `${Math.random() * 80 + 10}vh`,
//     left: `${Math.random() * 90 + 5}vw`,
//     fontSize: `${Math.random() * 30 + 10}px`,
//     transform: `rotate(${Math.random() * 360}deg)`,
//     animation: 'heartRain 0.6s ease-out forwards',
//     zIndex: 9999,
//     pointerEvents: 'none'
//   };
// };

//     //          effect: 게시물 번호 path variable 바뀔때마다 좋아요 및 댓글 리스트 불러오기          //
//     useEffect(() => {
//       if (!boardNumber || !initialRenderDone) return;
//       getFavoriteListRequest(boardNumber).then(getFavoriteListResponse);
//       getCommentListRequest(boardNumber).then(getCommentListResponse);
//     }, [boardNumber, initialRenderDone]);
//     //         render: 게시물 상세 하단 화면 컴포넌트 렌더링      //
//     return (
//     <div id='board-detail-bottom'>
//         <div className='board-detail-bottom-button-box'>
//             {/* --- 좋아요 관련 버튼 그룹 --- */}
//             <div className='board-detail-bottom-button-group'>
//                 <div className='icon-button icon-relative' onClick={onFavoriteClickHandler}>
//                     {isFavorite ? 
//                       (
//                         <>
//                           <div className={`icon favorite-fill-icon ${animate ? 'pop' : ''}`} onClick={onShowFavoriteClickHandler}></div>
//                           {showFloatingHeart && <div className="floating-heart">{`❤️`}</div>}
//                           {/* {globalHearts.map((id) => (
//   <div key={id} className="global-heart" style={getRandomGlobalHeartStyle()}>
//     ❤️
//   </div>
// ))} */}
//                         </>
//                       ) :
//                       <div className={`icon favorite-light-icon ${animate ? 'pop' : ''}`} onClick={onShowFavoriteClickHandler}></div>
//                     }
//                 </div>
//                 <div className='board-detail-bottom-button-text'>{`좋아요`}</div>
//                 <RollingNumber
//                   value={favoriteList.length}
//                   type='slide'
//                   className='board-detail-bottom-button-rolling'></RollingNumber>
                
//                 <div className='icon-button' onClick={onShowFavoriteClickHandler}>
//                     {showFavorite ?
//                         <div className='icon up-light-icon'></div> :
//                         <div className='icon down-light-icon'></div>
//                     }
//                 </div>
//             </div>

//             {/* --- 댓글 관련 버튼 그룹 --- */}
//             <div className='board-detail-bottom-button-group'>
//                 <div className='icon-button' onClick={onShowCommentClickHandler}>
//                     <div className='icon comment-fill-icon'></div>
//                 </div>
//                 <div className='board-detail-bottom-button-text'>{`댓글`}</div>
//                 <RollingNumber
//                   value={totalCommentCount}
//                   type='slide'
//                   className='board-detail-bottom-button-rolling'
//                 />
//                 {/* 댓글 펼치기/접기 아이콘 버튼 */}
//                 <div className='icon-button' onClick={onShowCommentClickHandler}>
//                     {showComment ? 
//                         <div className='icon up-light-icon'></div> : 
//                         <div className='icon down-light-icon'></div>
//                     }
//                 </div>
//             </div>
//             <div className='board-detail-bottom-button-group'>
//                 <div className='board-detail-bottom-button-text'>{`조회수`}</div>
//                 <InitRollingNumber
//                   initVal={viewCount-1}
//                   value={viewCount}
//                   type='slide'
//                   speed={400}
//                   delay={500}
//                   className='board-detail-bottom-button-rolling'
//                 />
//             </div>
//         </div>

//         {/* --- 좋아요 목록 표시 영역 --- */}
//         {showFavorite && (
//             <div className='board-detail-bottom-favorite-box'>
//                 <div className='board-detail-bottom-favorite-container'>
//                     <div className='board-detail-bottom-favorite-title'>{'좋아요 '}<span className='emphasis'>{favoriteList.length}</span></div>
//                     <div className='board-detail-bottom-favorite-contents'>
//                         {favoriteList.map(item => <FavoriteItem key={item.email} favoriteListItem={item} />)} {/* 좋아요 아이템에도 key 추가 권장 */}
//                     </div>
//                 </div>
//             </div>
//         )}

//         {/* --- 댓글 전체 박스 (목록, 페이지네이션, 입력창 포함) --- */}
//         {/* ✨ 이 부분이 댓글 관련 UI를 전체적으로 감싸고 조건부 렌더링합니다. */}
//         {showComment && (
//             <div className='board-detail-bottom-comment-box'>
//                 <div className='board-detail-bottom-comment-container'>
//                     <div className='board-detail-bottom-comment-title'>
//                         {'댓글 '}<span className='emphasis'>{totalCommentCount}</span>
//                     </div>
//                     <div className='board-detail-bottom-comment-list-container'>
//                         {/* ✨ 이 부분에서 CommentItem에 key와 onDeleteComment prop을 정확히 전달합니다. */}
//                         {viewList.map(commentItemData => (
//                             <CommentItem
//                                 key={commentItemData.commentNumber} // 👈 고유한 key prop 필수!
//                                 commentListItem={commentItemData}
//                                 onDeleteComment={handleDeleteComment} // 👈 삭제 함수 전달!
//                             />
//                         ))}
//                     </div>
//                 </div>
//                 <div className='divider'></div>
//                 <div className='board-detail-bottom-comment-pagination-box'>
//                     <Pagination 
//                         currentPage={currentPage}
//                         currentSection={currentSection}
//                         setCurrentPage={setCurrentPage}
//                         setCurrentSection={setCurrentSection}
//                         viewPageList={viewPageList}
//                         totalSection={totalSection}
//                     />
//                 </div>
//                 {loginUser !== null && (
//                     <div className='board-detail-bottom-comment-input-box'>
//                         <div className='board-detail-bottom-comment-input-container'>
//                             <textarea ref={commentRef} className='board-detail-bottom-comment-textarea' placeholder='댓글을 작성해주세요.' value={comment} onChange={onCommentChangeHandler}/>
//                             <div className='board-detail-bottom-comment-button-box'>
//                                 <div className={comment === '' ? 'disable-button' : 'black-button'} onClick={onCommentSubmitButtonClickHandler}>{'댓글달기'}</div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         )}
//     </div>
//   );
//   }
//   //          effect: 게시물 번호 path variable이 바뀔때 마다 게시물 조회수 증가          //
//   let effectFlag = true;
//   useEffect(() => {
//     if(!boardNumber) return;
//     if(effectFlag){
//       effectFlag = false;
//       return;
//     }
//     increaseViewCountRequest(boardNumber).then(increaseViewCountResponse);

//   },[boardNumber])
//   //         render: 게시물 상세 화면 컴포넌트 렌더링      //
//   return (
//     <div id='board-datail-wrapper'> 
//       <div className='board-datail-container'>
//         <BoardDetailTop />
//         <BoardDetailBottom viewCount={viewCount}/>
//       </div>
//     </div>
//   )
// }

import { ChangeEvent, useEffect, useMemo, useRef, useState, memo } from 'react';
import './style.css';
import FavoriteItem from 'components/FavoriteItem';
import { Board, CommentListItem, FavoriteListItem } from 'types/interface';
import CommentItem from 'components/CommentItem';
import Pagination from 'components/Pagination';
import defaultProfileImage from 'assets/image/default-profile-image.png';
import { useLoginUserStore } from 'stores';
import { useNavigate, useParams } from 'react-router-dom';
import { BOARD_PATH, BOARD_UPDATE_PATH, USER_PATH } from 'constant';
import {
  deleteBoardRequest,
  deleteCommentRequest,
  getBoardRequest,
  getCommentListRequest,
  getFavoriteListRequest,
  increaseViewCountRequest,
  postCommentRequest,
  putFavoriteRequest,
} from 'apis';
import {
  DeleteBoardResponseDto,
  GetBoardResponseDto,
  GetCommentListResponseDto,
  GetFavoriteListResponseDto,
  IncreaseViewCountResponseDto,
  PostCommentResponseDto,
  PutFavoriteResponseDto,
} from 'apis/response/board';
import { ResponseDto } from 'apis/response';

import dayjs from 'dayjs';
import { useCookies } from 'react-cookie';
import { PostCommentRequestDto } from 'apis/request/board';
import { usePagination } from 'hooks';
import RollingNumber from 'components/Rolling/RollingNumber';
import { toast } from 'react-toastify';
import InitRollingNumber from 'components/Rolling/initRolling/InitRollingNumber';

// ============================================================
// BoardDetailTop (memoized, independent component)
// ============================================================
interface BoardDetailTopProps {
  boardNumber: string;
  setViewCount: (n: number) => void;
  increasedOnce: boolean; // ✅ 현재 세션에서 이 게시글에 대해 조회수 증가 API를 이미 보냈는지
}

const BoardDetailTop = memo(function BoardDetailTop({ boardNumber, setViewCount, increasedOnce }: BoardDetailTopProps) {
  const navigate = useNavigate();
  const { loginUser } = useLoginUserStore();
  const [cookies] = useCookies();

  const [isWriter, setWriter] = useState<boolean>(false);
  const [board, setBoard] = useState<Board | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

  const getWriteDatetimeFormat = () => {
    if (!board) return '';
    const date = dayjs(board.writeDatetime);
    return date.format('YYYY. MM. DD.');
  };

  // API: 게시글 조회 응답 처리
  const getBoardResponse = (responseBody: GetBoardResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const { code } = responseBody as ResponseDto;
    if (code === 'NB') toast('존재하지 않는 게시물입니다.');
    if (code === 'DBE') toast('데이터베이스 오류입니다.');
    if (code !== 'SU') {
      navigate(BOARD_PATH());
      return;
    }

    const board: Board = { ...(responseBody as GetBoardResponseDto) };
    setBoard(board);

    // ✅ 최초 접속/새로고침 시 서버의 비동기 타이밍 때문에 표시가 1 낮게 보일 수 있어
    //    현재 세션에서 increase API를 이미 보냈다면 낙관적으로 +1 하여 표시
    setViewCount(board.viewCount + (increasedOnce ? 1 : 0));

    if (!loginUser) {
      setWriter(false);
      return;
    }
    setWriter(loginUser.email === board.writerEmail);
  };

  // API: 게시글 삭제 응답 처리
  const deleteBoardResponse = (responseBody: DeleteBoardResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const { code } = responseBody as ResponseDto;
    if (code === 'VF') toast('잘못된 접근입니다.');
    if (code === 'NU') toast('존재하지 않는 유저입니다.');
    if (code === 'NB') toast('존재하지 않는 게시물입니다.');
    if (code === 'AF') toast('인증에 실패했습니다.');
    if (code === 'NP') toast('권환이 없습니다.');
    if (code === 'DBE') toast('데이터베이스 오류입니다.');
    if (code !== 'SU') return;
    navigate(BOARD_PATH());
  };

  const onMoreButtonClickHandler = () => setShowMore((p) => !p);
  const onNicknameClickHandler = () => {
    if (!board) return;
    navigate(USER_PATH(board.writerEmail));
  };
  const onUpdateButtonClickHandler = () => {
    if (!board || !loginUser) return;
    if (loginUser.email !== board.writerEmail) return;
    navigate(BOARD_PATH() + '/' + BOARD_UPDATE_PATH(board.boardNumber));
  };
  const onDeleteButtonClickHandler = () => {
    if (!board || !loginUser || !cookies.accessToken) return;
    if (loginUser.email !== board.writerEmail) return;
    deleteBoardRequest(String(board.boardNumber), cookies.accessToken).then(deleteBoardResponse);
  };

  // effect: boardNumber 변경 시 게시글 조회만 수행 (조회수 증가는 부모에서 1회 보장)
  useEffect(() => {
    if (!boardNumber) return;
    getBoardRequest(boardNumber).then(getBoardResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardNumber]);

  if (!board) return <></>;
  return (
    <div id="board-detail-top">
      <div className="board-detail-top-header">
        <div className="board-detail-title">{board.title}</div>
        <div className="board-detail-top-sub-box">
          <div className="board-detail-write-info-box">
            <div
              className="board-detail-writer-profile-image"
              style={{ backgroundImage: `url(${board.writerProfileImage ? board.writerProfileImage : defaultProfileImage})` }}
            ></div>
            <div className="board-detail-writer-nickname" onClick={onNicknameClickHandler}>
              {board.writerNickname}
            </div>
            <div className="board-detail-info-divider">{'|'}</div>
            <div className="board-detail-write-date">{getWriteDatetimeFormat()}</div>
          </div>
          {isWriter && (
            <div className="icon-button" onClick={onMoreButtonClickHandler}>
              <div className="icon more-icon"></div>
            </div>
          )}
          {showMore && (
            <div className="board-detail-more-box">
              <div className="board-detail-update-button" onClick={onUpdateButtonClickHandler}>
                {'수정'}
              </div>
              <div className="divider"></div>
              <div className="board-detail-delete-button" onClick={onDeleteButtonClickHandler}>
                {'삭제'}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="divider"></div>
      <div className="board-detail-top-main">
        <div className="board-detail-main-text">{board.content}</div>
        {board.boardImageList.map((image) => (
          <img key={image} className="board-detail-main-image" src={image} />
        ))}
      </div>
    </div>
  );
});

// ============================================================
// BoardDetailBottom (memoized, independent component)
// ============================================================
interface BoardDetailBottomProps {
  boardNumber: string;
  viewCount: number;
}

const BoardDetailBottom = memo(function BoardDetailBottom({ boardNumber, viewCount }: BoardDetailBottomProps) {
  const { loginUser } = useLoginUserStore();
  const [cookies] = useCookies();

  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const [favoriteList, setFavoriteList] = useState<FavoriteListItem[]>([]);
  const { currentPage, setCurrentPage, currentSection, setCurrentSection, viewList, viewPageList, totalSection, setTotalList } =
    usePagination<CommentListItem>(3);

  const [isFavorite, setFavorite] = useState<boolean>(false);
  const [showFavorite, setShowFavorite] = useState<boolean>(false);
  const [showComment, setShowComment] = useState<boolean>(false);
  const [totalCommentCount, setTotalCommentCount] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [animate, setAnimate] = useState(false);
  const [showFloatingHeart, setShowFloatingHeart] = useState(false);
  const [heartActive, setHeartActive] = useState(false);

  // 댓글 삭제
  const handleDeleteComment = (commentNumber: number) => {
    if (!boardNumber) {
      toast('게시물 번호가 유효하지 않습니다.');
      return;
    }
    if (!cookies.accessToken) {
      toast('로그인이 필요합니다.');
      return;
    }
    const isConfirm = window.confirm('댓글을 정말 삭제하시겠습니까?');
    if (!isConfirm) return;
    deleteCommentRequest(commentNumber, cookies.accessToken).then(deleteCommentResponseCallback);
  };

  const deleteCommentResponseCallback = (responseBody: ResponseDto | null) => {
    if (!responseBody) {
      toast('네트워크 응답이 없거나 요청에 실패했습니다.');
      return;
    }
    const { code } = responseBody;
    if (code === 'VF') toast('잘못된 접근입니다.');
    else if (code === 'NU') toast('존재하지 않는 유저입니다.');
    else if (code === 'NB') toast('존재하지 않는 게시물입니다.');
    else if (code === 'NC') toast('존재하지 않는 댓글입니다.');
    else if (code === 'AF') toast('인증에 실패했습니다.');
    else if (code === 'NP') toast('권한이 없습니다.');
    else if (code === 'DBE') toast('데이터베이스 오류입니다.');
    else if (code === 'SU') {
      toast('댓글이 삭제되었습니다.');
      getCommentListRequest(boardNumber).then(getCommentListResponse);
    } else {
      toast('알 수 없는 오류가 발생했습니다: ' + code);
    }
  };

  // 좋아요 리스트 응답 처리
  const getFavoriteListResponse = (responseBody: GetFavoriteListResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const { code } = responseBody as ResponseDto;
    if (code === 'NB') toast('존재하지 않는 게시물입니다.');
    if (code === 'DBE') toast('데이터베이스 오류입니다.');
    if (code !== 'SU') return;

    const { favoriteList } = responseBody as GetFavoriteListResponseDto;
    setFavoriteList(favoriteList);
    if (!loginUser) {
      setFavorite(false);
      return;
    }
    const isFav = favoriteList.findIndex((favorite) => favorite.email === loginUser.email) !== -1;
    setFavorite(isFav);
    setShowFavorite(isFav);
  };

  // 댓글 리스트 응답 처리
  const getCommentListResponse = (responseBody: GetCommentListResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const { code } = responseBody as ResponseDto;
    if (code === 'NB') toast('존재하지 않는 게시물입니다.');
    if (code === 'DBE') toast('데이터베이스 오류입니다.');
    if (code !== 'SU') return;

    const { commentList } = responseBody as GetCommentListResponseDto;
    setTotalList(commentList);
    setTotalCommentCount(commentList.length);
    if (commentList.length > 0) setShowComment(true);
  };

  // 좋아요 토글 응답 처리
  const putFavoriteResponse = (responseBody: PutFavoriteResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const { code } = responseBody as ResponseDto;
    if (code === 'VF') toast('잘못된 접근입니다.');
    if (code === 'NU') toast('존재하지 않는 유저입니다.');
    if (code === 'NB') toast('존재하지 않는 게시물입니다.');
    if (code === 'AF') toast('인증에 실패했습니다.');
    if (code === 'DBE') toast('데이터베이스 오류입니다.');
    if (code !== 'SU') return;
    getFavoriteListRequest(boardNumber).then(getFavoriteListResponse);
  };

  // 댓글 작성 응답 처리
  const postCommentResponse = (responseBody: PostCommentResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const { code } = responseBody as ResponseDto;
    if (code === 'VF') toast('잘못된 접근입니다.');
    if (code === 'NU') toast('존재하지 않는 유저입니다.');
    if (code === 'NB') toast('존재하지 않는 게시물입니다.');
    if (code === 'AF') toast('인증에 실패했습니다.');
    if (code === 'DBE') toast('데이터베이스 오류입니다.');
    if (code !== 'SU') return;
    getCommentListRequest(boardNumber).then(getCommentListResponse);
  };

  // 좋아요 클릭
  const onFavoriteClickHandler = () => {
    if (!loginUser || !cookies.accessToken) return;

    setAnimate(true);
    setShowFloatingHeart(true);
    setTimeout(() => setAnimate(false), 300);
    setTimeout(() => setShowFloatingHeart(false), 1500);

    if (heartActive) return;
    setHeartActive(true);
    setTimeout(() => setHeartActive(false), 600);

    putFavoriteRequest(boardNumber, cookies.accessToken).then(putFavoriteResponse);
  };

  const onShowFavoriteClickHandler = () => setShowFavorite((p) => !p);
  const onShowCommentClickHandler = () => setShowComment((p) => !p);

  const onCommentSubmitButtonClickHandler = () => {
    if (!comment || !loginUser || !cookies.accessToken) return;
    const requestBody: PostCommentRequestDto = { content: comment };
    postCommentRequest(boardNumber, requestBody, cookies.accessToken).then(postCommentResponse);
    setComment('');
    if (commentRef.current) commentRef.current.style.height = 'auto';
  };

  const onCommentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setComment(value);
    if (!commentRef.current) return;
    commentRef.current.style.height = 'auto';
    commentRef.current.style.height = `${commentRef.current.scrollHeight}px`;
  };

  // 좋아요/댓글 데이터 로드 (boardNumber 바뀔 때마다)
  useEffect(() => {
    if (!boardNumber) return;
    getFavoriteListRequest(boardNumber).then(getFavoriteListResponse);
    getCommentListRequest(boardNumber).then(getCommentListResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardNumber]);

  return (
    <div id="board-detail-bottom">
      <div className="board-detail-bottom-button-box">
        {/* 좋아요 */}
        <div className="board-detail-bottom-button-group">
          <div className="icon-button icon-relative" onClick={onFavoriteClickHandler}>
            {isFavorite ? (
              <>
                <div className={`icon favorite-fill-icon ${animate ? 'pop' : ''}`} onClick={onShowFavoriteClickHandler}></div>
                {showFloatingHeart && <div className="floating-heart">❤️</div>}
              </>
            ) : (
              <div className={`icon favorite-light-icon ${animate ? 'pop' : ''}`} onClick={onShowFavoriteClickHandler}></div>
            )}
          </div>
          <div className="board-detail-bottom-button-text">{'좋아요'}</div>
          <RollingNumber value={favoriteList.length} type="slide" className="board-detail-bottom-button-rolling" />
          <div className="icon-button" onClick={onShowFavoriteClickHandler}>
            {showFavorite ? <div className="icon up-light-icon"></div> : <div className="icon down-light-icon"></div>}
          </div>
        </div>

        {/* 댓글 */}
        <div className="board-detail-bottom-button-group">
          <div className="icon-button" onClick={onShowCommentClickHandler}>
            <div className="icon comment-fill-icon"></div>
          </div>
          <div className="board-detail-bottom-button-text">{'댓글'}</div>
          <RollingNumber value={totalCommentCount} type="slide" className="board-detail-bottom-button-rolling" />
          <div className="icon-button" onClick={onShowCommentClickHandler}>
            {showComment ? <div className="icon up-light-icon"></div> : <div className="icon down-light-icon"></div>}
          </div>
        </div>

        {/* 조회수 */}
        <div className="board-detail-bottom-button-group">
          <div className="board-detail-bottom-button-text">{'조회수'}</div>
          <InitRollingNumber initVal={Math.max(0, viewCount - 1)} value={viewCount} type="slide" speed={400} delay={500} className="board-detail-bottom-button-rolling" />
        </div>
      </div>

      {/* 좋아요 목록 */}
      {showFavorite && (
        <div className="board-detail-bottom-favorite-box">
          <div className="board-detail-bottom-favorite-container">
            <div className="board-detail-bottom-favorite-title">
              {'좋아요 '}<span className="emphasis">{favoriteList.length}</span>
            </div>
            <div className="board-detail-bottom-favorite-contents">
              {favoriteList.map((item) => (
                <FavoriteItem key={item.email} favoriteListItem={item} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 댓글 전체 박스 */}
      {showComment && (
        <div className="board-detail-bottom-comment-box">
          <div className="board-detail-bottom-comment-container">
            <div className="board-detail-bottom-comment-title">
              {'댓글 '}<span className="emphasis">{totalCommentCount}</span>
            </div>
            <div className="board-detail-bottom-comment-list-container">
              {viewList.map((commentItemData) => (
                <CommentItem key={commentItemData.commentNumber} commentListItem={commentItemData} onDeleteComment={handleDeleteComment} />
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="board-detail-bottom-comment-pagination-box">
            <Pagination
              currentPage={currentPage}
              currentSection={currentSection}
              setCurrentPage={setCurrentPage}
              setCurrentSection={setCurrentSection}
              viewPageList={viewPageList}
              totalSection={totalSection}
            />
          </div>
          {loginUser !== null && (
            <div className="board-detail-bottom-comment-input-box">
              <div className="board-detail-bottom-comment-input-container">
                <textarea
                  ref={commentRef}
                  className="board-detail-bottom-comment-textarea"
                  placeholder="댓글을 작성해주세요."
                  value={comment}
                  onChange={onCommentChangeHandler}
                />
                <div className="board-detail-bottom-comment-button-box">
                  <div className={comment === '' ? 'disable-button' : 'black-button'} onClick={onCommentSubmitButtonClickHandler}>
                    {'댓글달기'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

// ============================================================
// BoardDetail (parent)
//  - 조회수 증가를 게시물당 1회만 보장 (StrictMode 2회 실행 대응)
//  - 초기 렌더 타이머/플래그 제거
//  - 최초 진입 시 표기가 1 낮아지는 경우를 낙관적 +1로 보정
// ============================================================
export default function BoardDetail() {
  const { boardNumber: rawBoardNumber } = useParams();
  const boardNumber = useMemo(() => (rawBoardNumber ? String(rawBoardNumber) : ''), [rawBoardNumber]);
  const { loginUser } = useLoginUserStore();
  const [cookies] = useCookies();

  const [viewCount, setViewCount] = useState<number>(0);

  const lastIncreasedFor = useRef<string | null>(null);
  const [increasedMarker, setIncreasedMarker] = useState<string>(''); // ✅ 상태로도 보관하여 child에 즉시 반영

  const increaseViewCountResponse = (responseBody: IncreaseViewCountResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const { code } = responseBody as ResponseDto;
    if (code === 'NB') toast('존재하지 않는 게시물입니다.');
    if (code === 'DBE') toast('데이터베이스 오류입니다.');
  };

  // 게시물 번호 변화 시 딱 1회만 조회수 증가
  useEffect(() => {
    if (!boardNumber) return;
    if (lastIncreasedFor.current === boardNumber) return;
    lastIncreasedFor.current = boardNumber;
    setIncreasedMarker(boardNumber); // ✅ 자식이 즉시 낙관적 업데이트를 하도록 신호
    increaseViewCountRequest(boardNumber).then(increaseViewCountResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardNumber]);

  if (!boardNumber) {
    return (
      <div id="board-datail-wrapper">
        <div className="board-datail-container">잘못된 접근입니다.</div>
      </div>
    );
  }

  return (
    <div id="board-datail-wrapper">
      <div className="board-datail-container">
        <BoardDetailTop
          boardNumber={boardNumber}
          setViewCount={setViewCount}
          increasedOnce={increasedMarker === boardNumber}
        />
        <BoardDetailBottom boardNumber={boardNumber} viewCount={viewCount} />
      </div>
    </div>
  );
}