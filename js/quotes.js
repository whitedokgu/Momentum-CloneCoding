const quotes = [
  {
    quote: "And yet it moves.",
    quote_kr: "그래도 지구는 돈다.",
    author: "Galileo Galilei (갈릴레오 갈릴레이)",
  },
  {
    quote: "I think, therefore I am",
    quote_kr: "나는 생각한다 고로 나는 존재한다",
    author: "René Descartes (르네 데카르트)",
  },
  {
    quote: "Boys, be ambitious!",
    quote_kr: "소년이여, 야망을 가져라!",
    author: "William Smith Clark (윌리엄 스미스 클라크)",
  },
  {
    quote:
      "Your beginnings will seem humble, so prosperous will your future be.",
    quote_kr: "시작은 미약하였으나 끝은 창대하리라",
    author: "욥기 8장 7절",
  },
  {
    quote: "",
    quote_kr: "잘 모르고 무식한 사람이 신념을 가지면 무섭습니다.",
    author: "방송인 이경규",
  },
  {
    quote: "Life is either a daring adventure or nothing.",
    quote_kr: "인생은 과감한 모험이던가, 아니면 아무 것도 아니다.",
    author: "Helen Keller (헬렌 켈러)",
  },
  {
    quote:
      "Think not those faithful who praise all your words and actions, but those who kindly reprove your faults",
    quote_kr:
      "모든 언행을 칭찬하는 자보다 결점을 친절하게 말해주는 친구를 가까이하라.",
    author: "Socrates (소크라테스)",
  },
  {
    quote: "Float like a butterfly, sting like a bee.",
    quote_kr: "나비처럼 날아서 벌처럼 쏜다.",
    author: "Muhammad Ali (무하마드 알리)",
  },
  {
    quote: "Thug Life",
    quote_kr: "",
    author: "Tupac Amaru Shakur (투팍 아마루 샤커)",
  },
  {
    quote: "有錢無罪 無錢有罪",
    quote_kr: "유전무죄 무전유죄",
    author: "지강헌 탈주 사건 中",
  },
];

const quote = document.querySelector("#quote span:first-child");
const quote_kr = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
quote_kr.innerText = todaysQuote.quote_kr;
author.innerText = todaysQuote.author;
