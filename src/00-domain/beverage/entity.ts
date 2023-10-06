// 카테고리 별로 음료를 생각해보자
export const 음료의분류 = ['에스프레소', '차', '병음료'] as const;
export type 음료의분류 = (typeof 음료의분류)[number];

export type 음료의아이디 = string;
export type 음료의이름 = string;

export const 음료의크기 = ['톨', '그란데', '벤티'] as const;
export type 음료의크기 = (typeof 음료의크기)[number];

export const 음료의온도 = ['핫', '아이스'] as const;
export type 음료의온도 = (typeof 음료의온도)[number];

export const 기본샷수 = [1, 2, 3] as const;
export type 기본샷수 = (typeof 기본샷수)[number];

export const 추가샷수 = [0, 1, 2] as const;
export type 추가샷수 = (typeof 추가샷수)[number];

export const 시럽종류 = ['카라멜', '바닐라', '헤이즐넛'] as const;
export type 시럽종류 = (typeof 시럽종류)[number];

export const 우유종류 = ['통', '저지방', '무지방'] as const;
export type 우유종류 = (typeof 우유종류)[number];

export const 크림종류 = ['에스프레소휘핑', '생크림', '모카크림'] as const;
export type 크림종류 = (typeof 크림종류)[number];

export const 토핑종류 = ['자바칩', '라벤더잎', '민트잎'] as const;
export type 토핑종류 = (typeof 토핑종류)[number];

export type 음료의기본 = {
  분류: 음료의분류;
  아이디: 음료의아이디;
};

export interface 에스프레소 extends 음료의기본 {
  분류: '에스프레소';
  이름: 음료의이름;
  크기: 음료의크기;
  온도: 음료의온도;
  샷: 기본샷수;
  우유?: 우유종류;
  크림?: 크림종류;
  시럽: 시럽종류[];
  토핑: 토핑종류[];
}
// | '아이스 아메리카노'| '아이스 카라멜 마키아또'| '카라멜 마키아또'| '카페 라떼';
type 차 = string;
type 병음료 = string;

export type 음료 = 에스프레소; //| 차 | 병음료;
