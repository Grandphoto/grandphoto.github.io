/* ==========================================================
   ★ 사진관 기본 정보 — 여기만 고치면 모든 페이지에 반영됩니다 ★
   ========================================================== */
const SHOP = {
  name: "그랜드사진관",
  phone: "041-581-2483",            // 대표 전화번호
  mobile: "010-3657-2483",         // 문자 받을 휴대폰 번호 (예약 문의 양식이 이 번호로 문자를 보냅니다)
  kakao: "http://pf.kakao.com/_GAhixj/chat",   // 카카오톡 채널 주소
  booking: "https://booking.naver.com/", // 네이버 예약 주소 (없으면 "" 로 비워두세요)
  instagram: "https://instagram.com/",
  address: "충청남도 천안시 서북구 성환읍 성환중앙로 36",
  addressShort: "천안시 서북구 성환읍 성환중앙로 36",
  hours: "평일 09:00 – 19:00 · 토요일 09:00 – 18:00",
  closed: "매주 일요일 휴무",
  parking: "건물 내 주차 가능 (1시간 무료)",
  mapQuery: "충남 천안시 서북구 성환읍 성환중앙로 36", // 지도에 표시할 위치
  bizInfo: "대표 ○○○ · 사업자등록번호 000-00-00000",
};

/* ---------------- 아이콘 ---------------- */
const ICON = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.7 6.7l-1 3.6c-.1.4.3.7.6.5l4.2-2.8c.5.1 1 .1 1.5.1 5.5 0 10-3.6 10-8S17.5 3 12 3z"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  family: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><circle cx="15" cy="14" r="5"/><circle cx="33" cy="14" r="5"/><circle cx="24" cy="26" r="4"/><path d="M6 40c0-6 4-11 9-11s7 2 7 2M42 40c0-6-4-11-9-11s-7 2-7 2M17 42c0-4 3-7 7-7s7 3 7 7"/></svg>',
  camera: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 16h8l3-5h14l3 5h8v22H6z"/><circle cx="24" cy="26" r="7"/></svg>',
};

/* ---------------- 상단 메뉴 ---------------- */
const MENU = [
  ["index.html", "홈"],
  ["family.html", "가족사진", "nav-family"],
  ["id-photo.html", "증명·여권사진"],
  ["profile.html", "프로필사진"],
  ["special.html", "장수·복원"],
  ["gallery.html", "갤러리"],
  ["price.html", "가격안내"],
  ["location.html", "오시는 길"],
];

function renderHeader() {
  const el = document.getElementById("header");
  if (!el) return;
  const here = location.pathname.split("/").pop() || "index.html";
  el.className = "header";
  el.innerHTML = `
    <div class="wrap">
      <a href="index.html" class="logo"><b>${SHOP.name}</b><small>GRAND PHOTO STUDIO</small></a>
      <button class="menu-btn" aria-label="메뉴 열기"><span></span><span></span><span></span></button>
      <nav class="nav">
        ${MENU.map(([h, t, c]) => `<a href="${h}" class="${c || ""} ${h === here ? "active" : ""}">${t}</a>`).join("")}
        <a href="location.html#reserve" class="btn btn-primary">예약 문의</a>
      </nav>
    </div>`;
  const btn = el.querySelector(".menu-btn"), nav = el.querySelector(".nav");
  btn.addEventListener("click", () => { btn.classList.toggle("open"); nav.classList.toggle("open"); });
}

function renderFooter() {
  const el = document.getElementById("footer");
  if (!el) return;
  el.className = "footer";
  el.innerHTML = `
    <div class="wrap">
      <div>
        <a href="index.html" class="logo"><b>${SHOP.name}</b><small>GRAND PHOTO STUDIO</small></a>
        <p style="margin-top:16px">천안에서 가족의 소중한 오늘을 담습니다.<br>가족사진 · 증명·여권사진 · 프로필사진 · 장수사진 · 사진복원</p>
      </div>
      <div>
        <h4>촬영 안내</h4>
        <ul>${MENU.slice(1, 7).map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>문의 · 예약</h4>
        <ul>
          <li>전화 <a href="tel:${SHOP.phone}">${SHOP.phone}</a></li>
          <li><a href="${SHOP.kakao}" target="_blank" rel="noopener">카카오톡 채널 상담</a></li>
          <li>${SHOP.addressShort}</li>
          <li>${SHOP.hours}</li>
        </ul>
      </div>
      <div class="copy">${SHOP.bizInfo}<br>© ${new Date().getFullYear()} ${SHOP.name}. All rights reserved.</div>
    </div>`;

  // 휴대폰 화면 하단 고정 버튼
  const bar = document.createElement("div");
  bar.className = "mbar";
  bar.innerHTML = `
    <a href="tel:${SHOP.phone}">${ICON.phone}전화</a>
    <a href="${SHOP.kakao}" target="_blank" rel="noopener">${ICON.chat}카카오톡</a>
    <a href="location.html#reserve" class="main">${ICON.cal}예약 문의</a>`;
  document.body.appendChild(bar);
}

/* data-shop="phone" 처럼 표시된 곳에 정보 자동 입력 */
function fillShopInfo() {
  document.querySelectorAll("[data-shop]").forEach(el => {
    const key = el.dataset.shop;
    if (SHOP[key] !== undefined) el.textContent = SHOP[key];
  });
  document.querySelectorAll("[data-link]").forEach(el => {
    const key = el.dataset.link;
    if (key === "phone") el.href = "tel:" + SHOP.phone;
    else if (SHOP[key]) { el.href = SHOP[key]; el.target = "_blank"; el.rel = "noopener"; }
  });
  document.querySelectorAll("[data-icon]").forEach(el => {
    el.insertAdjacentHTML("afterbegin", ICON[el.dataset.icon] || "");
  });
}

/* 샘플 사진이 없는 자리: <div class="ph" data-ph="가족사진"></div> */
function renderPlaceholders() {
  document.querySelectorAll(".ph[data-ph]").forEach(el => {
    const icon = el.dataset.icon === "camera" ? ICON.camera : ICON.family;
    el.innerHTML = `${icon}<b>${el.dataset.ph}</b><span>대표 사진이 들어갈 자리입니다</span>`;
  });
}

/* ---------------- 사진 크게 보기 ---------------- */
function setupLightbox() {
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `<button class="lb-close" aria-label="닫기">×</button><img alt=""><div class="lb-cap"></div>`;
  document.body.appendChild(lb);
  const img = lb.querySelector("img"), cap = lb.querySelector(".lb-cap");
  const close = () => lb.classList.remove("open");
  lb.addEventListener("click", e => { if (e.target !== img) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-zoom]");
    if (!t) return;
    const src = t.querySelector("img")?.src;
    if (!src) return;
    img.src = src;
    cap.textContent = t.dataset.zoom || "";
    lb.classList.add("open");
  });
}

/* ---------------- 갤러리 분류 버튼 ---------------- */
function setupFilters() {
  const bar = document.querySelector(".filters");
  if (!bar) return;
  const items = document.querySelectorAll(".gallery .g-item");
  const apply = cat => {
    bar.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.f === cat));
    items.forEach(it => { it.style.display = (cat === "all" || it.dataset.cat === cat) ? "" : "none"; });
  };
  bar.addEventListener("click", e => { const b = e.target.closest("button"); if (b) apply(b.dataset.f); });
  const hash = location.hash.replace("#", "");
  apply(bar.querySelector(`[data-f="${hash}"]`) ? hash : "all");
}

/* ---------------- 예약 문의 양식 → 문자 보내기 ---------------- */
function setupReserveForm() {
  const form = document.getElementById("reserveForm");
  if (!form) return;
  const params = new URLSearchParams(location.search);
  if (params.get("type")) form.type.value = params.get("type");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const f = form;
    const msg = `[${SHOP.name} 예약문의]\n이름: ${f.name.value}\n연락처: ${f.tel.value}\n촬영: ${f.type.value}\n희망일: ${f.date.value || "미정"} ${f.time.value}\n인원: ${f.people.value || "-"}\n요청사항: ${f.memo.value || "-"}`;
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    if (isMobile) {
      const sep = /iPhone|iPad/i.test(navigator.userAgent) ? "&" : "?";
      location.href = `sms:${SHOP.mobile}${sep}body=${encodeURIComponent(msg)}`;
    } else {
      navigator.clipboard?.writeText(msg);
      alert("문의 내용이 복사되었습니다.\n카카오톡 채널에 붙여넣기 하시거나 " + SHOP.phone + " 으로 전화 주세요.\n\n" + msg);
    }
  });
}

/* 지도 */
function setupMap() {
  const m = document.getElementById("map");
  if (m) m.innerHTML = `<iframe loading="lazy" title="오시는 길 지도" src="https://maps.google.com/maps?q=${encodeURIComponent(SHOP.mapQuery)}&z=16&output=embed"></iframe>`;
  const q = encodeURIComponent(SHOP.address);
  document.querySelectorAll("[data-map]").forEach(a => {
    a.href = a.dataset.map === "naver" ? `https://map.naver.com/p/search/${q}` : `https://map.kakao.com/?q=${q}`;
    a.target = "_blank"; a.rel = "noopener";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  fillShopInfo();
  renderPlaceholders();
  setupLightbox();
  setupFilters();
  setupReserveForm();
  setupMap();
});
