const burger = document.querySelector(".navicon");
const mobilmenu = document.querySelector(".mobile-menu");

const opdaterMenu = () => {
  const erAaben = !mobilmenu.classList.contains("hidden");
  burger.setAttribute("aria-expanded", erAaben);
};
burger.addEventListener("click", opdaterMenu);
mobilmenu.addEventListener("click", opdaterMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobilmenu.classList.contains("hidden")) {
    burger.click();
    burger.focus();
  }
});

const kopierKnap = document.querySelector(".kopier-knap");
const kopierBesked = document.querySelector(".kopier-besked");

kopierKnap.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("koebenhavnerbilleder");
    kopierBesked.textContent = "Kopieret!";
  } catch {
    kopierBesked.textContent = "Markér koden og kopiér den selv.";
  }
});

const formular = document.querySelector(".nyhedsbrev");
const takBesked = document.querySelector(".tak-besked");

formular.addEventListener("submit", (event) => {
  event.preventDefault();
  const fornavn = formular.fornavn.value.trim();
  takBesked.textContent = `Tak, ${fornavn}! Du er nu tilmeldt nyhedsbrevet.`;
  formular.reset();
});
