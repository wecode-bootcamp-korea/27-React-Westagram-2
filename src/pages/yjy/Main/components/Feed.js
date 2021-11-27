import React from 'react';

const Feed = props => {
  const { Comment, comments, input, getValue, addComment, feeds } = props;
  return (
    <div className="feedWrap">
      {props.feeds.map(function (feed) {
        return (
          <div className="feeds" key={feed.id}>
            <div className="feedsBox">
              <div className="feedsHead">
                <div className="feedsHeadLeft">
                  <div className="userHead"></div>
                  <div className="userHeadId">{feed.userName}</div>
                </div>
                <div className="feedsHeadRight"></div>
              </div>
              <div className="feedsImg">
                <img src={feed.src} alt="feedImg" />
              </div>
              <div className="feedContent">
                <div className="img">
                  <div className="feedIcon">
                    <img src="/images/yjy/likes.png" alt="like" />
                    <img src="/images/yjy/heart33.png" alt="comment" />
                    <img src="/images/yjy/share.png" alt="share" />
                  </div>
                  <div>
                    <img src="/images/yjy/bookmark.png" alt="bookmark" />
                  </div>
                </div>
                <div className="feedLikes">좋아요 {feed.liked}개</div>
                <ul className="feedText">
                  <li className="idName">{feed.userName}</li>
                  <li>{feed.comment}</li>
                </ul>
                <form className="feedForm">
                  <Comment comments={comments} input={input} />
                  <div className="commentBox">
                    <input
                      className="comment"
                      type="text"
                      placeholder="댓글달기..."
                      onChange={getValue}
                    />
                    <button
                      id="commentBtn"
                      className={
                        false ? 'commentActivated' : 'commentDeactivated'
                      }
                      type="submit"
                      onClick={addComment}
                    >
                      게시
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
