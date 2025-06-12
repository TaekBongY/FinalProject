import React from 'react';
import './WorkationList.css';

const workationData = [
  {
    id: 1,
    image: '', // 이미지 경로 또는 url
    address: '서울특별시 영등포구 포천동',
    title: '포포인츠 알파이 워케이션',
    review: 15,
    theme: '모던스타일 / 도심',
  },
  {
    id: 2,
    image: '',
    address: '서울특별시 영등포구 포천동',
    title: '포포인츠 알파이 워케이션',
    review: 15,
    theme: '모던스타일 / 도심',
  },
  {
    id: 3,
    image: '',
    address: '서울특별시 영등포구 포천동',
    title: '포포인츠 알파이 워케이션',
    review: 15,
    theme: '모던스타일 / 도심',
  },
  {
    id: 4,
    image: '',
    address: '서울특별시 영등포구 포천동',
    title: '포포인츠 알파이 워케이션',
    review: 15,
    theme: '모던스타일 / 도심',
  },
  {
    id: 5,
    image: '',
    address: '서울특별시 영등포구 포천동',
    title: '포포인츠 알파이 워케이션',
    review: 15,
    theme: '모던스타일 / 도심',
  },
];

const WorkationList = () => {
  return (
    <div className="workation-list-wrapper">
      <h1 className="workation-list-title">전체 리스트 보기</h1>
      <div className="workation-list-btns">
        <button className="workation-btn partner">제휴 업체 보기</button>
        <button className="workation-btn ai">ai 추천</button>
      </div>
      <div className="workation-card-list">
        {workationData.map((item) => (
          <div className="workation-card" key={item.id}>
            <div className="workation-card-img" />
            <div className="workation-card-info">
              <div className="workation-card-address">{item.address}</div>
              <div className="workation-card-title">{item.title}</div>
              <div className="workation-card-review">리뷰 ({item.review})</div>
              <div className="workation-card-theme-label">테마</div>
              <div className="workation-card-theme">{item.theme}</div>
              <button className="workation-card-detail">상세 보기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkationList; 