import express from "express";

export const home = (req, res) => {
  const popup = req.query.popup;
  return res.render("home", {
    pageTitle: "Home",
    popup,
  });
};

export const about = (req, res) => {
  return res.render("contents/about", { pageTitle: "About" });
};

export const youthkit = (req, res) => {
  return res.render("contents/youthkit");
};

export const community = (req, res) => {
  const popup = encodeURIComponent(
    "현재 커뮤니티 서비스 개발 중입니다. \n조금만 기다려주세요."
  );
  return res.redirect("/?popup=" + popup);
};

export const qna = (req, res) => {
  const popup = req.query.popup;
  // console.log(req.params);
  return res.render("contents/qna", { pageTitle: "QnA", popup });
};

export const detail = (req, res) => {
  return res.render("contents/detail", { pageTitle: "QR코드 렌더링" });
};

export const recommend = (req, res) => {
  const popup = encodeURIComponent(
    "현재 추천콘텐츠 서비스 개발 중입니다. \n조금만 기다려주세요."
  );
  return res.redirect("/contents/qna/1?popup=" + popup);
};
