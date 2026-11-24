let lenisInstance = null;

export const setLenis = (l) => {
  lenisInstance = l;
};

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) lenisInstance.scrollTo(el, { offset: -80, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const selectPlan = (plan, intent = "project") => {
  window.dispatchEvent(new CustomEvent("ef:select-plan", { detail: { plan, intent } }));
  scrollToId("contact");
};
